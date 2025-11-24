-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop existing tables (in reverse order of dependencies)
DROP TABLE IF EXISTS user_stats CASCADE;
DROP TABLE IF EXISTS user_answers CASCADE;
DROP TABLE IF EXISTS exam_attempts CASCADE;
DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS exams CASCADE;
DROP TABLE IF EXISTS courses CASCADE;

-- Courses table
CREATE TABLE IF NOT EXISTS courses (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  code TEXT NOT NULL,
  description TEXT,
  thumbnail_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Exams table (one per chapter + comprehensive)
CREATE TABLE IF NOT EXISTS exams (
  id TEXT PRIMARY KEY,
  course_id TEXT REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  chapter_number INT, -- NULL for comprehensive exam
  duration_minutes INT DEFAULT 60,
  passing_score INT DEFAULT 70,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Questions table
CREATE TABLE IF NOT EXISTS questions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  exam_id TEXT REFERENCES exams(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  image_url TEXT,
  question_type TEXT NOT NULL CHECK (question_type IN ('MCQ', 'FILL_BLANK', 'SHORT_ANSWER')),
  options JSONB, -- For MCQ: ["Option A", "Option B", ...]
  correct_answer TEXT NOT NULL,
  hint TEXT,
  explanation TEXT,
  points INT DEFAULT 1,
  order_index INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Exam attempts table
CREATE TABLE IF NOT EXISTS exam_attempts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID, -- For future auth integration
  exam_id TEXT REFERENCES exams(id) ON DELETE CASCADE,
  mode TEXT NOT NULL CHECK (mode IN ('PRACTICE', 'EXAM')),
  score DECIMAL,
  total_points INT,
  time_spent_seconds INT,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- User answers table
CREATE TABLE IF NOT EXISTS user_answers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  attempt_id UUID REFERENCES exam_attempts(id) ON DELETE CASCADE,
  question_id UUID REFERENCES questions(id) ON DELETE CASCADE,
  user_answer TEXT,
  is_correct BOOLEAN,
  points_earned INT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- User stats table
CREATE TABLE IF NOT EXISTS user_stats (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  course_id TEXT REFERENCES courses(id) ON DELETE CASCADE,
  total_attempts INT DEFAULT 0,
  avg_score DECIMAL,
  total_time_minutes INT DEFAULT 0,
  last_activity TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security Policies (public read access for now)
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE exams ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE exam_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_stats ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Public courses read" ON courses FOR SELECT USING (true);
CREATE POLICY "Public exams read" ON exams FOR SELECT USING (true);
CREATE POLICY "Public questions read" ON questions FOR SELECT USING (true);

-- Allow inserts for attempts and answers (for now, will add auth later)
CREATE POLICY "Public attempts insert" ON exam_attempts FOR INSERT WITH CHECK (true);
CREATE POLICY "Public answers insert" ON user_answers FOR INSERT WITH CHECK (true);
CREATE POLICY "Public stats insert" ON user_stats FOR INSERT WITH CHECK (true);
CREATE POLICY "Public stats update" ON user_stats FOR UPDATE USING (true);

-- Indexes for performance
CREATE INDEX idx_exams_course_id ON exams(course_id);
CREATE INDEX idx_questions_exam_id ON questions(exam_id);
CREATE INDEX idx_exam_attempts_exam_id ON exam_attempts(exam_id);
CREATE INDEX idx_user_answers_attempt_id ON user_answers(attempt_id);
CREATE INDEX idx_user_stats_course_id ON user_stats(course_id);
