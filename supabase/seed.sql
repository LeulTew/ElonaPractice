BEGIN;

-- Course: Chemistry_of_Natural_Product(CNP)
INSERT INTO courses (id, title, code, description, settings) VALUES
  ('chemistry-of-natural-product-cnp-', 'Chemistry_of_Natural_Product(CNP)', 'CNP-101', 'Chemistry of Natural Product course', '{"theme": "chemistry"}'::jsonb)
  ON CONFLICT (id) DO NOTHING;

-- Exam 1: Chapter 1 - Stereochemistry
INSERT INTO exams (id, course_id, title, description, chapter_number, duration_minutes, passing_score, difficulty, status) VALUES
  ('exam-cnp-ch1', 'chemistry-of-natural-product-cnp-', 'Chapter 1: Stereochemistry', 'Focus on chirality, enantiomers, diastereomers, and optical activity.', 1, 45, 70, 'MEDIUM', 'PUBLISHED')
  ON CONFLICT (id) DO UPDATE SET 
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    duration_minutes = EXCLUDED.duration_minutes;

-- Exam 2: Chapter 2 - Carbohydrates
INSERT INTO exams (id, course_id, title, description, chapter_number, duration_minutes, passing_score, difficulty, status) VALUES
  ('exam-cnp-ch2', 'chemistry-of-natural-product-cnp-', 'Chapter 2: Carbohydrates', 'Monosaccharides, disaccharides, glycosidic bonds, and reactions.', 2, 45, 70, 'MEDIUM', 'PUBLISHED')
  ON CONFLICT (id) DO UPDATE SET 
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    duration_minutes = EXCLUDED.duration_minutes;

-- Exam 3: Chapter 3 - Chirality and Drug Approvals
INSERT INTO exams (id, course_id, title, description, chapter_number, duration_minutes, passing_score, difficulty, status) VALUES
  ('exam-cnp-ch3', 'chemistry-of-natural-product-cnp-', 'Chapter 3: Chirality and Drug Approvals', 'Regulatory aspects, enantiomeric purity, and pharmacological differences.', 3, 45, 70, 'HARD', 'PUBLISHED')
  ON CONFLICT (id) DO UPDATE SET 
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    duration_minutes = EXCLUDED.duration_minutes;

-- Exam 4: Final Exam (Comprehensive)
INSERT INTO exams (id, course_id, title, description, chapter_number, duration_minutes, passing_score, difficulty, status) VALUES
  ('exam-cnp-final', 'chemistry-of-natural-product-cnp-', 'Final Exam: Comprehensive', 'Comprehensive assessment covering all chapters.', NULL, 90, 75, 'HARD', 'PUBLISHED')
  ON CONFLICT (id) DO UPDATE SET 
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    duration_minutes = EXCLUDED.duration_minutes;

COMMIT;