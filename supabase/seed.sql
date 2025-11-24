BEGIN;

-- Course: Chemistry_of_Natural_Product(CNP)
INSERT INTO courses (id, title, code, description) VALUES
  ('chemistry-of-natural-product-cnp-', 'Chemistry_of_Natural_Product(CNP)', 'CNP-101', 'Chemistry of Natural Product course')
  ON CONFLICT (id) DO NOTHING;

-- Exam: Chapter 1 - Chapter 1-Stereochemistry
INSERT INTO exams (id, course_id, title, description, chapter_number, duration_minutes, passing_score) VALUES
  ('chemistry-of-natural-product-cnp--ch1', 'chemistry-of-natural-product-cnp-', 'Chapter 1 - Chapter 1-Stereochemistry', 'Practice exam for chapter 1', 1, 30, 70)
  ON CONFLICT (id) DO NOTHING;

-- Exam: Chapter 2 - Chapter 2-Carbohydrates
INSERT INTO exams (id, course_id, title, description, chapter_number, duration_minutes, passing_score) VALUES
  ('chemistry-of-natural-product-cnp--ch2', 'chemistry-of-natural-product-cnp-', 'Chapter 2 - Chapter 2-Carbohydrates', 'Practice exam for chapter 2', 2, 30, 70)
  ON CONFLICT (id) DO NOTHING;

-- Exam: Chapter 3 - Chirality and Drug Approvals
INSERT INTO exams (id, course_id, title, description, chapter_number, duration_minutes, passing_score) VALUES
  ('chemistry-of-natural-product-cnp--ch3', 'chemistry-of-natural-product-cnp-', 'Chapter 3 - Chirality and Drug Approvals', 'Practice exam for chapter 3', 3, 30, 70)
  ON CONFLICT (id) DO NOTHING;

-- Exam: Comprehensive Exam - All Chapters
INSERT INTO exams (id, course_id, title, description, chapter_number, duration_minutes, passing_score) VALUES
  ('chemistry-of-natural-product-cnp--comprehensive', 'chemistry-of-natural-product-cnp-', 'Comprehensive Exam - All Chapters', 'Final exam covering all chapters', NULL, 90, 75)
  ON CONFLICT (id) DO NOTHING;

INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--ch2', 'Exercise Predict the degradation products of fructose', '/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide63.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 7);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--ch2', 'Ketoses   Two  alditols . Why?', '/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide49.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 4);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--ch1', '1.3. Chirality … Exercise : Among the natural products shown below, which are chiral and which are achiral?  Give the number of  stereocenters  in each case.', '/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide34.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 0);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--ch2', 'Only oxidize only those containing aldehyde functional group.  Why, then, ketoses give positive test?', '/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide56.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 6);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--ch2', 'Exercise : What monosaccharides would be formed in a  Kiliani –Fischer synthesis starting with D- xylose ?', '/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide79.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 9);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--ch1', '1.6. Optical activity … Example: A solution of (+)- alanine  from a fossil exhibits a value of [α] = 4.25.  What is its  ee  and optical purity?  What is the actual enantiomer composition of the sample, and how is the measured optical rotation derived from it?  The specific rotation of pure (+)- alanine  is + 8.5', NULL, 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 3);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--ch1', '1.5. Naming enantiomers… Groups tied? Example:', '/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide44.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 1);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--ch1', '1.7.2. Isomers with… For a molecule with n  sterocenters           2 n   stereoisomers  (not always. Why?) Example: 2-Bromo-3-chlorobutane 2  stereocenters 2 2  = 4  stereoisomers', '/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide82.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 6);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--ch2', 'Exercise   Classify the following monosaccharides:', '/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide13.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 0);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--ch1', '1.7. Resolution… Resolution The separation of a racemic mixture into its  enantiomeric  components How?  Reaction with pure enantiomer Enzymes  Chiral chromatography', NULL, 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 4);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--ch1', '1.8. Meso… But the 2R,3S and 2S, 3R really enantiomers?  No!!!!', '/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide89.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 9);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--ch1', '1.10. Biological… Why do enantiomers have different biological properties?  Most of the molecules that make up living organisms are chiral', '/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide96.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 10);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--ch2', 'Disaccharides   glycosides formed from two  monosacharides   Connected by  glycosidic  linkages So, what are glycosides?', '/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide83.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 10);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--ch1', '1.7.2. Isomers with… Molecules with many  stereocenters How many  stereocenters  cholesterol has?', '/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide81.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 5);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--ch1', '1.6. Optical activity … Observed rotation ( α ) Is the angle through which a sample of a compound (usually a solution) rotates plane-polarized light Depends on: path length   concentration ,  temperature ,  solvent , and  wavelength', NULL, 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 2);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--ch1', '1.8. Meso… Why only three?', '/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide88.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 8);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--ch2', 'Deoxy sugars Deoxy sugar is sugar in which a hydroxyl group is replaced by a hydrogen Methylene  group or a methyl group', '/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide40.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 3);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--ch2', 'Exercise: Calculating specific rotations of  diastereomeric  sugar mixtures Question: Calculate how much of the α ([α] = + 112.2°)  anomer  and how much of the β ([α] = + 18.7°)  anomer  are present in an equilibrium mixture with a specific rotation of + 52.7°.', NULL, 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 2);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--ch2', 'Why is the  β   anomer  of  glucopyranose  in higher amount than α  anomer ?', '/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide33.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 1);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--ch2', 'Exercise What products are obtained from the reduction of', '/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide50.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 5);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--ch3', 'Marketing authorization applications for new racemic active substances requires that the choice of the  racemate   over a single enantiomer be justified.  In preclinical studies, pharmacodynamics of the  racemate  and each enantiomer must be studied and the effective exposure to each enantiomer must be established.  Toxicological studies are only required for the  racemate  unless unpredicted effects are observed at low doses, in which case the individual enantiomers must also be studied.  During clinical testing,  pharmacodynamic  studies are required only on the  racemate  unless there is a safety requirement to study both enantiomers.  Clinical pharmacokinetic studies must employ  enantioselective  methods unless it has been demonstrated that there is no difference in the fate of the two molecules.  Clinical  pharmacotherapeutic  studies are carried out on the  racemate .', NULL, 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 0);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--ch2', 'Exercise What monosaccharides form the same  osazone  as D- sorbose ?', '/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide74.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 8);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--ch1', '1.8. Meso… Meso compounds  Compounds that are achiral, yet contain chirality centers How to check? Plane of symmetry? Best example: tartaric acid two  stereocenters ; 4  stereoisomers  ????', '/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide87.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 7);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--comprehensive', 'Exercise Predict the degradation products of fructose', '/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide63.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 0);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--comprehensive', 'Ketoses   Two  alditols . Why?', '/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide49.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 1);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--comprehensive', '1.3. Chirality … Exercise : Among the natural products shown below, which are chiral and which are achiral?  Give the number of  stereocenters  in each case.', '/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide34.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 2);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--comprehensive', 'Only oxidize only those containing aldehyde functional group.  Why, then, ketoses give positive test?', '/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide56.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 3);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--comprehensive', 'Exercise : What monosaccharides would be formed in a  Kiliani –Fischer synthesis starting with D- xylose ?', '/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide79.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 4);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--comprehensive', '1.6. Optical activity … Example: A solution of (+)- alanine  from a fossil exhibits a value of [α] = 4.25.  What is its  ee  and optical purity?  What is the actual enantiomer composition of the sample, and how is the measured optical rotation derived from it?  The specific rotation of pure (+)- alanine  is + 8.5', NULL, 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 5);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--comprehensive', '1.5. Naming enantiomers… Groups tied? Example:', '/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide44.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 6);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--comprehensive', '1.7.2. Isomers with… For a molecule with n  sterocenters           2 n   stereoisomers  (not always. Why?) Example: 2-Bromo-3-chlorobutane 2  stereocenters 2 2  = 4  stereoisomers', '/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide82.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 7);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--comprehensive', 'Exercise   Classify the following monosaccharides:', '/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide13.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 8);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--comprehensive', '1.7. Resolution… Resolution The separation of a racemic mixture into its  enantiomeric  components How?  Reaction with pure enantiomer Enzymes  Chiral chromatography', NULL, 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 9);
INSERT INTO questions (exam_id, content, image_url, question_type, options, correct_answer, hint, points, order_index) VALUES
  ('chemistry-of-natural-product-cnp--comprehensive', '1.8. Meso… But the 2R,3S and 2S, 3R really enantiomers?  No!!!!', '/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide89.png', 'SHORT_ANSWER', '[]'::jsonb, '', NULL, 1, 10);

COMMIT;