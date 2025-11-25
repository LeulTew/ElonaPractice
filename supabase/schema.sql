-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop existing tables (in reverse order of dependencies)
DROP TABLE IF EXISTS question_assets CASCADE;
DROP TABLE IF EXISTS user_answers CASCADE;
DROP TABLE IF EXISTS exam_attempts CASCADE;
DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS exams CASCADE;
DROP TABLE IF EXISTS courses CASCADE;
DROP TABLE IF EXISTS user_stats CASCADE;
DROP TABLE IF EXISTS user_profiles CASCADE;

-- User Profiles (for future auth and personalization)
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  preferences JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Courses table
CREATE TABLE IF NOT EXISTS courses (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  code TEXT NOT NULL,
  description TEXT,
  thumbnail_url TEXT,
  settings JSONB DEFAULT '{}'::jsonb, -- Course specific settings
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
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
  difficulty TEXT CHECK (difficulty IN ('EASY', 'MEDIUM', 'HARD', 'ADAPTIVE')),
  status TEXT DEFAULT 'DRAFT' CHECK (status IN ('DRAFT', 'PUBLISHED', 'ARCHIVED')),
  settings JSONB DEFAULT '{"shuffle_questions": true, "show_hints": true, "allow_review": true}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Questions table
CREATE TABLE IF NOT EXISTS questions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  exam_id TEXT REFERENCES exams(id) ON DELETE CASCADE,
  content TEXT NOT NULL, -- Markdown supported
  question_type TEXT NOT NULL CHECK (question_type IN (
    'MCQ', 
    'MULTI_SELECT', 
    'FILL_BLANK', 
    'SHORT_ANSWER', 
    'TRUE_FALSE', 
    'MATCHING', 
    'ORDERING', 
    'HOTSPOT', 
    'DRAG_DROP',
    'LABEL_DIAGRAM',
    'CALCULATION',
    'CASE_STUDY',
    'IDENTIFY_ERROR',
    'SPECTROSCOPY'
  )),
  category TEXT, -- e.g., "Stereochemistry", "Carbohydrates"
  subcategory TEXT, -- e.g., "Enantiomers", "Monosaccharides"
  options JSONB, -- For MCQ, Multi-select: ["Option A", "Option B"]
  correct_answer JSONB NOT NULL, -- Flexible format: string, array of strings, object for matching
  metadata JSONB DEFAULT '{}'::jsonb, -- Stores coordinates for hotspots, pairs for matching, 3D model config, spectroscopy data
  hint TEXT,
  explanation TEXT,
  explanation_image_url TEXT,
  points INT DEFAULT 1,
  difficulty TEXT DEFAULT 'MEDIUM' CHECK (difficulty IN ('EASY', 'MEDIUM', 'HARD')),
  tags TEXT[],
  order_index INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Question Assets (Images, 3D models, etc.)
CREATE TABLE IF NOT EXISTS question_assets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  question_id UUID REFERENCES questions(id) ON DELETE CASCADE,
  asset_type TEXT NOT NULL CHECK (asset_type IN ('IMAGE', 'MODEL_3D', 'VIDEO', 'AUDIO')),
  url TEXT NOT NULL,
  alt_text TEXT,
  metadata JSONB DEFAULT '{}'::jsonb, -- Position, rotation, scale for 3D models
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Exam attempts table
CREATE TABLE IF NOT EXISTS exam_attempts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL, -- Nullable for guest mode if needed
  exam_id TEXT REFERENCES exams(id) ON DELETE CASCADE,
  mode TEXT NOT NULL CHECK (mode IN ('PRACTICE', 'EXAM')),
  status TEXT DEFAULT 'IN_PROGRESS' CHECK (status IN ('IN_PROGRESS', 'COMPLETED', 'ABANDONED')),
  score DECIMAL,
  total_points INT,
  time_spent_seconds INT DEFAULT 0,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  metadata JSONB DEFAULT '{}'::jsonb -- Store snapshot of exam settings used
);

-- User answers table
CREATE TABLE IF NOT EXISTS user_answers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  attempt_id UUID REFERENCES exam_attempts(id) ON DELETE CASCADE,
  question_id UUID REFERENCES questions(id) ON DELETE CASCADE,
  user_answer JSONB, -- Flexible to match question correct_answer format
  is_correct BOOLEAN,
  points_earned DECIMAL,
  time_spent_seconds INT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- User stats table (Aggregated data)
CREATE TABLE IF NOT EXISTS user_stats (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id TEXT REFERENCES courses(id) ON DELETE CASCADE,
  total_attempts INT DEFAULT 0,
  avg_score DECIMAL,
  total_time_minutes INT DEFAULT 0,
  questions_answered INT DEFAULT 0,
  correct_answers INT DEFAULT 0,
  last_activity TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, course_id)
);

-- User question marks table (for flagging/marking questions during exam)
CREATE TABLE IF NOT EXISTS user_question_marks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  attempt_id UUID REFERENCES exam_attempts(id) ON DELETE CASCADE,
  question_id UUID REFERENCES questions(id) ON DELETE CASCADE,
  is_marked BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(attempt_id, question_id)
);

-- Row Level Security Policies
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE exams ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE question_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE exam_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_question_marks ENABLE ROW LEVEL SECURITY;

-- Public read policies (for now, can be tightened later)
CREATE POLICY "Public courses read" ON courses FOR SELECT USING (true);
CREATE POLICY "Public exams read" ON exams FOR SELECT USING (true);
CREATE POLICY "Public questions read" ON questions FOR SELECT USING (true);
CREATE POLICY "Public assets read" ON question_assets FOR SELECT USING (true);

-- Authenticated user policies (or public for dev if auth not fully set)
CREATE POLICY "Users can insert attempts" ON exam_attempts FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can view own attempts" ON exam_attempts FOR SELECT USING (true); -- Broad for now
CREATE POLICY "Users can update own attempts" ON exam_attempts FOR UPDATE USING (true);

CREATE POLICY "Users can insert answers" ON user_answers FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can view own answers" ON user_answers FOR SELECT USING (true);

CREATE POLICY "Users can manage stats" ON user_stats FOR ALL USING (true);

CREATE POLICY "Users can manage marks" ON user_question_marks FOR ALL USING (true);

-- Indexes for performance
CREATE INDEX idx_exams_course_id ON exams(course_id);
CREATE INDEX idx_questions_exam_id ON questions(exam_id);
CREATE INDEX idx_questions_category ON questions(category);
CREATE INDEX idx_questions_question_type ON questions(question_type);
CREATE INDEX idx_question_assets_question_id ON question_assets(question_id);
CREATE INDEX idx_exam_attempts_user_id ON exam_attempts(user_id);
CREATE INDEX idx_exam_attempts_exam_id ON exam_attempts(exam_id);
CREATE INDEX idx_user_answers_attempt_id ON user_answers(attempt_id);
CREATE INDEX idx_user_answers_question_id ON user_answers(question_id);
CREATE INDEX idx_user_question_marks_attempt_id ON user_question_marks(attempt_id);
