
-- Seed questions
TRUNCATE TABLE questions CASCADE;

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('4df18ddf-ffcc-4e97-9fb0-66cb823559d4', 'exam-cnp-ch1', 'Which of the following statements best describes a **chiral** molecule?', 'MCQ', '["It is superimposable on its mirror image.","It has a plane of symmetry.","It is non-superimposable on its mirror image.","It always contains a double bond."]'::jsonb, '"It is non-superimposable on its mirror image."'::jsonb, 'Chirality is defined by the property of being non-superimposable on the mirror image, like left and right hands.', 1, 'MEDIUM', 1, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('c8653c13-6511-4b4d-bf15-479a8ce576a0', 'exam-cnp-ch1', 'Identify the relationship between the two structures shown in the diagram (Enantiomers vs Diastereomers).', 'MCQ', '["Enantiomers","Diastereomers","Identical","Constitutional Isomers"]'::jsonb, '"Enantiomers"'::jsonb, 'The structures are non-superimposable mirror images of each other.', 1, 'HARD', 2, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide34.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('74c897cb-84d6-4c93-aa78-9dea161fd73a', 'exam-cnp-ch1', 'What is the maximum number of stereoisomers for a compound with **n** chiral centers?', 'MCQ', '["2n","2^n","n^2","2n + 2"]'::jsonb, '"2^n"'::jsonb, 'The maximum number of stereoisomers is calculated as 2^n, where n is the number of chiral centers.', 1, 'EASY', 3, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('3b261884-6f57-4d2e-8baf-7fd2ee0f2df3', 'exam-cnp-ch1', 'Which of the following compounds is **optically inactive** despite having chiral centers?', 'MCQ', '["(R)-2-chlorobutane","(S)-2-chlorobutane","Meso-tartaric acid","(+)-Tartaric acid"]'::jsonb, '"Meso-tartaric acid"'::jsonb, 'Meso compounds are achiral due to an internal plane of symmetry, making them optically inactive.', 1, 'MEDIUM', 4, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('4b5e7232-2f0d-4205-ac97-cd67c3418dce', 'exam-cnp-ch1', 'Assign the Cahn-Ingold-Prelog priority for the group -OH, -CH3, -H, -Cl.', 'MCQ', '["Cl > OH > CH3 > H","OH > Cl > CH3 > H","Cl > CH3 > OH > H","H > CH3 > OH > Cl"]'::jsonb, '"Cl > OH > CH3 > H"'::jsonb, 'Priority is based on atomic number: Cl(17) > O(8) > C(6) > H(1).', 1, 'HARD', 5, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('666be902-8cf4-4bb8-94ae-ad9864fcde40', 'exam-cnp-ch1', 'Which projection formula is most commonly used to represent carbohydrates?', 'MCQ', '["Newman Projection","Fischer Projection","Sawhorse Projection","Wedge-Dash Projection"]'::jsonb, '"Fischer Projection"'::jsonb, 'Fischer projections are standard for depicting sugars.', 1, 'EASY', 6, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('4d81c2ce-76d8-4160-9afe-beb807a3635a', 'exam-cnp-ch1', 'Enantiomers have identical physical properties EXCEPT for:', 'MCQ', '["Boiling point","Melting point","Interaction with plane-polarized light","Density"]'::jsonb, '"Interaction with plane-polarized light"'::jsonb, 'They rotate light in opposite directions.', 1, 'MEDIUM', 7, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('6166b22b-3dd4-4a6a-82ec-a225b71efce1', 'exam-cnp-ch1', 'A mixture containing equal amounts of a pair of enantiomers is called:', 'MCQ', '["Optically pure","Racemic mixture","Meso compound","Diastereomeric mixture"]'::jsonb, '"Racemic mixture"'::jsonb, 'A 1:1 mixture of enantiomers is a racemate.', 1, 'HARD', 8, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('04b23f56-b729-4fda-af8c-4a5855f826f9', 'exam-cnp-ch1', 'Which of the following is NOT a requirement for a molecule to be chiral?', 'MCQ', '["Lack of a plane of symmetry","Lack of a center of inversion","Presence of a chiral carbon","Non-superimposable mirror image"]'::jsonb, '"Presence of a chiral carbon"'::jsonb, 'Molecules can be chiral without chiral carbons (e.g., allenes, binaphthyls).', 1, 'EASY', 9, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('e9c83301-c4fb-478a-8265-5621662e1f61', 'exam-cnp-ch1', 'If a sample rotates plane-polarized light clockwise, it is designated as:', 'MCQ', '["Levorotatory (-)","Dextrorotatory (+)","Racemic (+/-)","Meso"]'::jsonb, '"Dextrorotatory (+)"'::jsonb, 'Clockwise rotation is dextrorotatory (+).', 1, 'MEDIUM', 10, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('f1974e9b-dae4-441b-8bd0-7ecbc3cf188d', 'exam-cnp-ch1', 'Diastereomers are stereoisomers that are:', 'MCQ', '["Mirror images","Not mirror images","Superimposable","Identical"]'::jsonb, '"Not mirror images"'::jsonb, 'Diastereomers are stereoisomers that are not enantiomers (not mirror images).', 1, 'HARD', 11, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('557972e8-634d-4e1d-8757-171ede64aaf3', 'exam-cnp-ch1', 'Which method is used to separate enantiomers?', 'MCQ', '["Simple distillation","Fractional crystallization","Chiral chromatography","Filtration"]'::jsonb, '"Chiral chromatography"'::jsonb, 'Standard separation methods fail; chiral environments are needed.', 1, 'EASY', 12, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('4b3b3e99-269e-4e8c-83fa-8568f0e65ea3', 'exam-cnp-ch1', 'What is the configuration of the chiral center if the priorities 1->2->3 are clockwise and the lowest priority group is in the back?', 'MCQ', '["R","S","E","Z"]'::jsonb, '"R"'::jsonb, 'Clockwise with H in back = R (Rectus).', 1, 'MEDIUM', 13, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('489427eb-a256-4497-88d5-30487185f507', 'exam-cnp-ch1', 'What is the configuration of the chiral center if the priorities 1->2->3 are counter-clockwise and the lowest priority group is in the back?', 'MCQ', '["R","S","E","Z"]'::jsonb, '"S"'::jsonb, 'Counter-clockwise with H in back = S (Sinister).', 1, 'HARD', 14, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('5b5778fd-8ddb-4011-ba81-b357c6399a4f', 'exam-cnp-ch1', 'Which molecule has a C2 axis of symmetry but no plane of symmetry?', 'MCQ', '["Meso-tartaric acid","(2R,3R)-tartaric acid","Water","Methane"]'::jsonb, '"(2R,3R)-tartaric acid"'::jsonb, 'Chiral molecules can have axes of rotation, just not planes or centers of inversion.', 1, 'EASY', 15, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('9f34980b-8173-41ac-9a36-b7587115833c', 'exam-cnp-ch1', 'How many stereoisomers does 2,3-dichlorobutane have?', 'MCQ', '["2","3","4","5"]'::jsonb, '"3"'::jsonb, 'It has 2 chiral centers but is symmetric. (2R,3R), (2S,3S), and Meso (2R,3S). Total = 3.', 1, 'MEDIUM', 16, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('3f67a368-6bf0-4f9f-96e8-568a1aaf763a', 'exam-cnp-ch1', 'Specific rotation depends on all of the following EXCEPT:', 'MCQ', '["Temperature","Wavelength of light","Concentration","Volume of sample"]'::jsonb, '"Volume of sample"'::jsonb, 'Specific rotation is an intensive property; it depends on path length, not total volume.', 1, 'HARD', 17, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('3298b80c-ed53-4710-baed-1925ed81ff1a', 'exam-cnp-ch1', 'Which term describes isomers that differ only in the spatial arrangement of atoms?', 'MCQ', '["Constitutional isomers","Stereoisomers","Conformers","Rotamers"]'::jsonb, '"Stereoisomers"'::jsonb, 'Definition of stereoisomerism.', 1, 'EASY', 18, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b4e6bc51-04c0-4965-a2b8-67f5fa8bfc20', 'exam-cnp-ch1', 'Which of the following is true for a meso compound?', 'MCQ', '["It rotates plane-polarized light.","It has no chiral centers.","It is achiral.","It exists as a pair of enantiomers."]'::jsonb, '"It is achiral."'::jsonb, 'Meso compounds are achiral despite having chiral centers.', 1, 'MEDIUM', 19, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('696bd56d-7299-4fa2-82fc-4b08509b1dd3', 'exam-cnp-ch1', 'The process of separating a racemic mixture into its enantiomers is called:', 'MCQ', '["Racemization","Resolution","Inversion","Mutarotation"]'::jsonb, '"Resolution"'::jsonb, 'Resolution is the separation of enantiomers.', 1, 'HARD', 20, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('229906b7-62de-4450-82d6-e094f9f2627e', 'exam-cnp-ch1', 'Which of the following groups has the highest CIP priority?', 'MCQ', '["-CH2OH","-CHO","-COOH","-CH3"]'::jsonb, '"-COOH"'::jsonb, 'C bonded to (O,O,O) vs (O,O,H) vs (O,H,H).', 1, 'EASY', 21, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b4ca1ceb-82ad-4bfa-abb6-5fb12ce5bd0c', 'exam-cnp-ch1', 'What is the relationship between (2R,3R)-2,3-dibromopentane and (2S,3S)-2,3-dibromopentane?', 'MCQ', '["Enantiomers","Diastereomers","Identical","Meso"]'::jsonb, '"Enantiomers"'::jsonb, 'Invert all centers -> Enantiomers.', 1, 'MEDIUM', 22, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('cb22d5f7-d5d9-4597-aa23-b84b8e9513cb', 'exam-cnp-ch1', 'What is the relationship between (2R,3R)-2,3-dibromopentane and (2R,3S)-2,3-dibromopentane?', 'MCQ', '["Enantiomers","Diastereomers","Identical","Meso"]'::jsonb, '"Diastereomers"'::jsonb, 'Invert some but not all centers -> Diastereomers.', 1, 'HARD', 23, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('1a28f669-a19d-4081-83f4-ed958cf662c9', 'exam-cnp-ch1', 'Which instrument is used to measure optical activity?', 'MCQ', '["Spectrophotometer","Polarimeter","Refractometer","Viscometer"]'::jsonb, '"Polarimeter"'::jsonb, 'A polarimeter measures the rotation of plane-polarized light.', 1, 'EASY', 24, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('8c4d2185-e1ad-40c1-ae12-6e32843a2163', 'exam-cnp-ch1', 'The observed rotation of a sample is +10 degrees. If the path length is 1 dm and concentration is 1 g/mL, what is the specific rotation?', 'MCQ', '["+10","+100","+1","+0.1"]'::jsonb, '"+10"'::jsonb, '[alpha] = alpha / (l * c) = 10 / (1 * 1) = 10.', 1, 'MEDIUM', 25, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('ed545f33-7c2c-4993-a5b4-8393e333ea40', 'exam-cnp-ch1', 'Which of the following is an example of a chiral drug?', 'MCQ', '["Ibuprofen","Aspirin","Paracetamol","Ethanol"]'::jsonb, '"Ibuprofen"'::jsonb, 'Ibuprofen has a chiral center; Aspirin and Paracetamol do not.', 1, 'HARD', 26, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('cf37e475-35d6-434c-874e-cfe921b9da1c', 'exam-cnp-ch1', 'Thalidomide is a classic example of why stereochemistry is important because:', 'MCQ', '["One enantiomer is active, the other is inactive.","One enantiomer cures morning sickness, the other causes birth defects.","It is a meso compound.","It cannot be resolved."]'::jsonb, '"One enantiomer cures morning sickness, the other causes birth defects."'::jsonb, 'The R-isomer is a sedative, the S-isomer is a teratogen.', 1, 'EASY', 27, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('ad0d7d0c-f432-40cc-8dd0-784192c7d0a5', 'exam-cnp-ch1', 'Which of the following is NOT a type of isomer?', 'MCQ', '["Constitutional","Stereoisomer","Isotope","Conformational"]'::jsonb, '"Isotope"'::jsonb, 'Isotopes are atoms with different neutron counts, not molecular isomers.', 1, 'MEDIUM', 28, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('c86472d2-7763-4457-857c-332dc4aafeb3', 'exam-cnp-ch1', 'In a Fischer projection, horizontal lines represent bonds coming:', 'MCQ', '["Out of the page (towards you)","Into the page (away from you)","In the plane","Vertical"]'::jsonb, '"Out of the page (towards you)"'::jsonb, 'Horizontal = Hug (towards you).', 1, 'HARD', 29, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('f1a34bf8-4646-474c-af16-8ac48662baa8', 'exam-cnp-ch1', 'In a Fischer projection, vertical lines represent bonds coming:', 'MCQ', '["Out of the page","Into the page","In the plane","Horizontal"]'::jsonb, '"Into the page"'::jsonb, 'Vertical = Away.', 1, 'EASY', 30, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('cee52118-3f63-43b6-996a-6a1a66171a10', 'exam-cnp-ch1', 'Identify the configuration (R or S) for the chiral center indicated in the image.', 'MCQ', '["R","S"]'::jsonb, '"R"'::jsonb, 'Priorities are 1->2->3 clockwise with H in back -> R.', 1, 'MEDIUM', 31, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide44.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('42d23f5c-0b7f-4fec-b484-1bf237556dce', 'exam-cnp-ch1', 'Is the molecule shown in the diagram Chiral or Achiral?', 'MCQ', '["Chiral","Achiral"]'::jsonb, '"Chiral"'::jsonb, 'Lack of symmetry plane.', 1, 'HARD', 32, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide34.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('1218ac97-16ef-4e4e-831e-98c9827b31eb', 'exam-cnp-ch1', 'Identify the relationship between the two Newman projections shown.', 'MCQ', '["Identical","Enantiomers","Diastereomers","Conformers"]'::jsonb, '"Conformers"'::jsonb, 'Rotation around single bond.', 1, 'EASY', 33, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide20.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('c5e0b8a2-8533-4f7f-bbd7-c5fc437ca3a0', 'exam-cnp-ch1', 'Determine the configuration of the alkene shown.', 'MCQ', '["E","Z"]'::jsonb, '"E"'::jsonb, 'High priority groups on opposite sides.', 1, 'MEDIUM', 34, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide15.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('6051c580-118a-4a72-9d6b-05447fce90ff', 'exam-cnp-ch1', 'Which projection is shown in the image?', 'MCQ', '["Fischer","Newman","Sawhorse"]'::jsonb, '"Fischer"'::jsonb, 'Cross representation.', 1, 'HARD', 35, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide10.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('3502bd19-eac2-4030-bb9e-9a121ec5a001', 'exam-cnp-ch1', 'Identify the chiral center in the molecule.', 'MCQ', '["C1","C2","C3","C4"]'::jsonb, '"C2"'::jsonb, 'C2 is bonded to 4 different groups.', 1, 'EASY', 36, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide5.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('dd02b737-3f69-46d0-82ad-5e1825f127b5', 'exam-cnp-ch1', 'Select **all** conditions required for a molecule to be considered **Meso**.', 'MULTI_SELECT', '["Must have chiral centers","Must be optically active","Must have an internal plane of symmetry","Must be superimposable on its mirror image"]'::jsonb, '["Must have chiral centers","Must have an internal plane of symmetry","Must be superimposable on its mirror image"]'::jsonb, 'Meso compounds have chiral centers but are achiral overall due to symmetry.', 2, 'MEDIUM', 37, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('95237061-c86d-4ac4-9e8e-d7fa02ade950', 'exam-cnp-ch1', 'Which of the following physical properties differ between **Enantiomers**?', 'MULTI_SELECT', '["Boiling Point","Melting Point","Direction of rotation of plane-polarized light","Interaction with other chiral molecules"]'::jsonb, '["Direction of rotation of plane-polarized light","Interaction with other chiral molecules"]'::jsonb, 'Enantiomers have identical physical properties in an achiral environment.', 2, 'HARD', 38, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('57f8c5e5-ec0c-49a9-9f18-e2446dec31eb', 'exam-cnp-ch1', 'Select the molecules that are **chiral**.', 'MULTI_SELECT', '["2-butanol","2-propanol","3-methylhexane","Ethanol"]'::jsonb, '["2-butanol","3-methylhexane"]'::jsonb, '2-butanol and 3-methylhexane have chiral centers with 4 different groups.', 2, 'EASY', 39, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('1743869c-e463-4092-b3f4-5876ee1d2485', 'exam-cnp-ch1', 'Which of the following statements about **Diastereomers** are true?', 'MULTI_SELECT', '["They are mirror images.","They have different physical properties.","They can be separated by distillation.","They must have at least two chiral centers."]'::jsonb, '["They have different physical properties.","They can be separated by distillation.","They must have at least two chiral centers."]'::jsonb, 'Diastereomers differ in physical properties, allowing separation.', 2, 'MEDIUM', 40, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('19b56003-a17d-49b8-bccf-417077649537', 'exam-cnp-ch1', 'Select the correct Cahn-Ingold-Prelog priorities for the groups attached to a chiral center.', 'MULTI_SELECT', '["-Br > -Cl","-OH > -NH2","-CH3 > -H","-CH2CH3 > -CH3"]'::jsonb, '["-Br > -Cl","-OH > -NH2","-CH3 > -H","-CH2CH3 > -CH3"]'::jsonb, 'All are correct based on atomic number and chain rules.', 2, 'HARD', 41, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b700f62a-d2e1-47f1-a6e3-1f5406c6ffa1', 'exam-cnp-ch1', 'Which of the following are types of **Stereoisomers**?', 'MULTI_SELECT', '["Enantiomers","Diastereomers","Constitutional Isomers","Meso compounds"]'::jsonb, '["Enantiomers","Diastereomers","Meso compounds"]'::jsonb, 'Constitutional isomers are not stereoisomers.', 2, 'EASY', 42, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('884fcffb-ef8e-4b53-a2c0-2f2cbc12caf6', 'exam-cnp-ch1', 'Select the achiral objects.', 'MULTI_SELECT', '["A perfect sphere","A screw","A fork","A left hand"]'::jsonb, '["A perfect sphere","A fork"]'::jsonb, 'Symmetric objects are achiral.', 2, 'MEDIUM', 43, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('4f343117-e936-4793-9e76-b323693734b6', 'exam-cnp-ch1', 'Which of the following are true about **Racemic Mixtures**?', 'MULTI_SELECT', '["Optically inactive","50:50 mixture of enantiomers","Rotates light","Separable by simple filtration"]'::jsonb, '["Optically inactive","50:50 mixture of enantiomers"]'::jsonb, 'Racemates do not rotate light.', 2, 'HARD', 44, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('ef99abd0-0a27-4a09-aed4-7faea60bda40', 'exam-cnp-ch1', 'Select the compounds that contain a chiral center.', 'MULTI_SELECT', '["Lactic acid","Alanine","Glycine","Propane"]'::jsonb, '["Lactic acid","Alanine"]'::jsonb, 'Glycine is the only achiral amino acid.', 2, 'EASY', 45, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('710460c4-1791-46c3-b382-3b593bf49afb', 'exam-cnp-ch1', 'Which terms describe the configuration of a double bond?', 'MULTI_SELECT', '["E","Z","R","S","Cis","Trans"]'::jsonb, '["E","Z","Cis","Trans"]'::jsonb, 'E/Z and Cis/Trans describe alkene geometry. R/S describe chiral centers.', 2, 'MEDIUM', 46, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('ff54fb00-dba9-40b1-ba87-fe986527da3e', 'exam-cnp-ch1', 'Select the correct statements about **Optical Activity**.', 'MULTI_SELECT', '["Measured by a polarimeter","Property of chiral molecules","Depends on path length","Always positive"]'::jsonb, '["Measured by a polarimeter","Property of chiral molecules","Depends on path length"]'::jsonb, 'Rotation can be positive or negative.', 2, 'HARD', 47, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('6cd69bda-0707-4ed0-aa50-b8e8dcf5db3e', 'exam-cnp-ch1', 'Which of the following can be used to resolve enantiomers?', 'MULTI_SELECT', '["Chiral HPLC","Enzymatic resolution","Formation of diastereomeric salts","Simple distillation"]'::jsonb, '["Chiral HPLC","Enzymatic resolution","Formation of diastereomeric salts"]'::jsonb, 'Distillation fails for enantiomers.', 2, 'EASY', 48, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('6b1246c8-600a-47a1-b57e-4f8230de5514', 'exam-cnp-ch1', 'True or False: All molecules with chiral centers are chiral.', 'TRUE_FALSE', '["True","False"]'::jsonb, '"False"'::jsonb, 'Meso compounds have chiral centers but are achiral.', 1, 'MEDIUM', 49, '{"real_type":"TRUE_FALSE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('955524f9-72f5-4b07-840c-f16c03264f37', 'exam-cnp-ch1', 'True or False: Enantiomers have the same melting point.', 'TRUE_FALSE', '["True","False"]'::jsonb, '"True"'::jsonb, 'Physical properties are identical.', 1, 'HARD', 50, '{"real_type":"TRUE_FALSE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('2da870de-7f88-4ad0-a478-326dc0767484', 'exam-cnp-ch1', 'True or False: R configuration always corresponds to (+) rotation.', 'TRUE_FALSE', '["True","False"]'::jsonb, '"False"'::jsonb, 'There is no direct correlation between R/S and +/-.', 1, 'EASY', 51, '{"real_type":"TRUE_FALSE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('c7e0a948-d3bd-4375-94b0-9b28fdbd0d31', 'exam-cnp-ch1', 'A 50:50 mixture of two enantiomers is called a ______ mixture.', 'FILL_BLANK', NULL, '"racemic"'::jsonb, 'A racemic mixture (or racemate) contains equal amounts of both enantiomers.', 1, 'MEDIUM', 52, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('4c8add40-0f84-42b6-a9e5-df13dbfdd039', 'exam-cnp-ch1', 'The specific rotation of pure (S)-carvone is +61°. The specific rotation of pure (R)-carvone is ______°.', 'FILL_BLANK', NULL, '"-61"'::jsonb, 'Enantiomers rotate light by the same magnitude but in opposite directions.', 1, 'HARD', 53, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('ce370b1d-912e-4780-a82e-e106105f493e', 'exam-cnp-ch1', 'Stereoisomers that are not mirror images of each other are called ______.', 'FILL_BLANK', NULL, '"diastereomers"'::jsonb, 'Definition of diastereomers.', 1, 'EASY', 54, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('ce60b9ba-598a-4d5e-8da7-d20d69d51124', 'exam-cnp-ch1', 'A molecule that is superimposable on its mirror image is ______.', 'FILL_BLANK', NULL, '"achiral"'::jsonb, 'Achiral molecules are symmetric.', 1, 'MEDIUM', 55, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('7b8b3bec-5868-468f-a5cb-239c12d6d6f3', 'exam-cnp-ch1', 'The Cahn-Ingold-Prelog priority of -OH is ______ than -CH3.', 'FILL_BLANK', NULL, '"higher"'::jsonb, 'Oxygen (8) > Carbon (6).', 1, 'HARD', 56, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('71a4bc73-f8aa-4500-a78e-b2b15ecd95a1', 'exam-cnp-ch1', 'Meso compounds are optically ______.', 'FILL_BLANK', NULL, '"inactive"'::jsonb, 'Internal symmetry cancels rotation.', 1, 'EASY', 57, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('d81d1739-fa2f-4236-9998-f861f6ca05e7', 'exam-cnp-ch1', 'The maximum number of stereoisomers for a compound with 3 chiral centers is ______.', 'FILL_BLANK', NULL, '"8"'::jsonb, '2^3 = 8.', 1, 'MEDIUM', 58, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('d0bd15ec-7b22-4906-917a-1f5abf49c496', 'exam-cnp-ch1', 'If the lowest priority group is on a wedge, the apparent R configuration is actually ______.', 'FILL_BLANK', NULL, '"S"'::jsonb, 'Reversing the rule for wedge.', 1, 'HARD', 59, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('c730087d-ebe4-40ee-ac02-1f7b9ebee0a0', 'exam-cnp-ch1', 'Clockwise rotation of plane-polarized light is denoted by the symbol ______.', 'FILL_BLANK', NULL, '"+"'::jsonb, 'Plus (+) or d-.', 1, 'EASY', 60, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('07624d15-c09f-4aad-8285-a2574c470ba0', 'exam-cnp-ch1', 'Counter-clockwise rotation is denoted by the symbol ______.', 'FILL_BLANK', NULL, '"-"'::jsonb, 'Minus (-) or l-.', 1, 'MEDIUM', 61, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('1f46dad7-e2f9-476b-916c-35ac729e912d', 'exam-cnp-ch1', 'Separating enantiomers by converting them into diastereomers is called ______.', 'FILL_BLANK', NULL, '"resolution"'::jsonb, 'Resolution via diastereomeric salt formation.', 1, 'HARD', 62, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('515d301a-f05b-453a-a9f8-da0d75a28ec7', 'exam-cnp-ch1', 'Isomers that differ in the order of bonding of atoms are called ______ isomers.', 'FILL_BLANK', NULL, '"constitutional"'::jsonb, 'Also known as structural isomers.', 1, 'EASY', 63, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('1e0ae994-4d13-4a12-a42b-9caffd843cb7', 'exam-cnp-ch1', 'A carbon atom bonded to four different groups is called a ______ center.', 'FILL_BLANK', NULL, '"chiral"'::jsonb, 'Or stereocenter.', 1, 'MEDIUM', 64, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('ea1b9d44-9679-4eff-a8b0-3e16be892e1b', 'exam-cnp-ch1', 'In a Fischer projection, the carbon chain is usually drawn ______.', 'FILL_BLANK', NULL, '"vertically"'::jsonb, 'With the most oxidized group at the top.', 1, 'HARD', 65, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('eb2b7484-8ee0-454f-a92b-e470063aeacf', 'exam-cnp-ch1', 'Enantiomers react at different rates only with ______ reagents.', 'FILL_BLANK', NULL, '"chiral"'::jsonb, 'Chiral recognition requires a chiral partner.', 1, 'EASY', 66, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('f8453cee-1360-469d-a15a-14d2cbe6eaab', 'exam-cnp-ch1', 'Match the term with its definition.', 'MATCHING', '[{"left":"Enantiomers","right":"Non-superimposable mirror images"},{"left":"Diastereomers","right":"Stereoisomers that are not mirror images"},{"left":"Constitutional Isomers","right":"Same formula, different connectivity"}]'::jsonb, '{"Enantiomers":"Non-superimposable mirror images","Diastereomers":"Stereoisomers that are not mirror images","Constitutional Isomers":"Same formula, different connectivity"}'::jsonb, 'Standard definitions.', 2, 'MEDIUM', 67, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b1209ef5-948b-4a62-a79d-e231cb89eac1', 'exam-cnp-ch1', 'Match the priority (High to Low) for Cahn-Ingold-Prelog.', 'MATCHING', '[{"left":"-I","right":"1 (Highest)"},{"left":"-Br","right":"2"},{"left":"-Cl","right":"3"},{"left":"-F","right":"4 (Lowest)"}]'::jsonb, '{"-I":"1 (Highest)","-Br":"2","-Cl":"3","-F":"4 (Lowest)"}'::jsonb, 'Atomic number: I > Br > Cl > F.', 2, 'HARD', 68, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('d380d232-75c1-4b28-94f7-bbd6f3950903', 'exam-cnp-ch1', 'Match the molecule to its chirality.', 'MATCHING', '[{"left":"Meso-tartaric acid","right":"Achiral"},{"left":"(R)-Lactic acid","right":"Chiral"},{"left":"Methane","right":"Achiral"}]'::jsonb, '{"Meso-tartaric acid":"Achiral","(R)-Lactic acid":"Chiral","Methane":"Achiral"}'::jsonb, 'Meso and symmetric molecules are achiral.', 2, 'EASY', 69, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('c91dfc24-170b-4f6a-8c87-ecec1732ae0b', 'exam-cnp-ch1', 'Match the projection type to its description.', 'MATCHING', '[{"left":"Fischer","right":"Cross/Plus shape"},{"left":"Newman","right":"Circle with spokes"},{"left":"Sawhorse","right":"Angled view of bond"}]'::jsonb, '{"Fischer":"Cross/Plus shape","Newman":"Circle with spokes","Sawhorse":"Angled view of bond"}'::jsonb, 'Visual representations.', 2, 'MEDIUM', 70, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('4694a5aa-a64a-4f27-b887-876c657424b5', 'exam-cnp-ch1', 'Match the isomer count to the chiral centers (n).', 'MATCHING', '[{"left":"n=1","right":"2 isomers"},{"left":"n=2","right":"Max 4 isomers"},{"left":"n=3","right":"Max 8 isomers"}]'::jsonb, '{"n=1":"2 isomers","n=2":"Max 4 isomers","n=3":"Max 8 isomers"}'::jsonb, '2^n rule.', 2, 'HARD', 71, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('6dd11e4f-b992-4f1b-8998-ffe775c8eb32', 'exam-cnp-ch1', 'Match the symbol to the meaning.', 'MATCHING', '[{"left":"R","right":"Rectus (Right)"},{"left":"S","right":"Sinister (Left)"},{"left":"d","right":"Dextrorotatory"},{"left":"l","right":"Levorotatory"}]'::jsonb, '{"R":"Rectus (Right)","S":"Sinister (Left)","d":"Dextrorotatory","l":"Levorotatory"}'::jsonb, 'Latin roots.', 2, 'EASY', 72, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('2a497077-6670-40b0-b495-00b8c176eb09', 'exam-cnp-ch1', 'Match the separation technique to the target.', 'MATCHING', '[{"left":"Distillation","right":"Liquids with different BP"},{"left":"Resolution","right":"Enantiomers"},{"left":"Filtration","right":"Solid from Liquid"}]'::jsonb, '{"Distillation":"Liquids with different BP","Resolution":"Enantiomers","Filtration":"Solid from Liquid"}'::jsonb, 'Separation methods.', 2, 'MEDIUM', 73, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('0dc4b705-81c0-4e6e-b51b-d3a0e5bcdb2e', 'exam-cnp-ch1', 'Match the functional group to CIP priority (vs H).', 'MATCHING', '[{"left":"-OH","right":"High Priority"},{"left":"-H","right":"Low Priority"},{"left":"-CH3","right":"Medium Priority"}]'::jsonb, '{"-OH":"High Priority","-H":"Low Priority","-CH3":"Medium Priority"}'::jsonb, 'O > C > H.', 2, 'HARD', 74, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('c08725c3-e23d-4d86-a520-b2eaf14883a7', 'exam-cnp-ch1', 'Match the term to the example.', 'MATCHING', '[{"left":"Chiral Object","right":"Screw"},{"left":"Achiral Object","right":"Ball"},{"left":"Plane of Symmetry","right":"Mirror Plane"}]'::jsonb, '{"Chiral Object":"Screw","Achiral Object":"Ball","Plane of Symmetry":"Mirror Plane"}'::jsonb, 'Macroscopic examples.', 2, 'EASY', 75, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('1def79f8-7082-4a0e-a13f-545ae9928ef3', 'exam-cnp-ch1', 'Match the rotation to the sign.', 'MATCHING', '[{"left":"Clockwise","right":"(+)"},{"left":"Counter-clockwise","right":"(-)"},{"left":"No rotation","right":"0"}]'::jsonb, '{"Clockwise":"(+)","Counter-clockwise":"(-)","No rotation":"0"}'::jsonb, 'Sign conventions.', 2, 'MEDIUM', 76, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('9c7668b1-5764-4cdc-bc4e-79afe72ae6cd', 'exam-cnp-ch1', 'Order the following groups by Cahn-Ingold-Prelog priority (Highest to Lowest).', 'MATCHING', '["-SH","-OH","-NH2","-CH3"]'::jsonb, '["-SH","-OH","-NH2","-CH3"]'::jsonb, 'Atomic numbers: S(16) > O(8) > N(7) > C(6).', 2, 'HARD', 77, '{"real_type":"ORDER_SEQUENCE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('50598a76-9e93-4cf7-9c8b-240e06fa37fd', 'exam-cnp-ch1', 'Order the steps to assign R/S configuration.', 'MATCHING', '["Assign priorities","Orient lowest priority back","Trace 1->2->3","Determine R/S"]'::jsonb, '["Assign priorities","Orient lowest priority back","Trace 1->2->3","Determine R/S"]'::jsonb, 'Logical flow.', 2, 'EASY', 78, '{"real_type":"ORDER_SEQUENCE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('9ea76fad-70f6-41be-acd4-fb720b10cf3b', 'exam-cnp-ch1', 'Order the following by number of stereoisomers (Lowest to Highest).', 'MATCHING', '["Methane (0 centers)","2-butanol (1 center)","2,3-dibromopentane (2 centers)","Glucose (4 centers)"]'::jsonb, '["Methane (0 centers)","2-butanol (1 center)","2,3-dibromopentane (2 centers)","Glucose (4 centers)"]'::jsonb, '0 < 2 < 4 < 16.', 2, 'MEDIUM', 79, '{"real_type":"ORDER_SEQUENCE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('1bb078ba-68d7-4cd6-9665-e4f9c378f7f4', 'exam-cnp-ch1', 'Order the atoms by CIP priority (High to Low).', 'MATCHING', '["Br","Cl","O","H"]'::jsonb, '["Br","Cl","O","H"]'::jsonb, 'Atomic number.', 2, 'HARD', 80, '{"real_type":"ORDER_SEQUENCE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('23a0b539-c0a6-4cb4-a972-8c2da7dcee00', 'exam-cnp-ch1', 'Order the following from most specific to least specific.', 'MATCHING', '["(2R,3R)-2,3-butanediol","2,3-butanediol","Butanediol","Diol"]'::jsonb, '["(2R,3R)-2,3-butanediol","2,3-butanediol","Butanediol","Diol"]'::jsonb, 'Specificity hierarchy.', 2, 'EASY', 81, '{"real_type":"ORDER_SEQUENCE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('89086b43-7244-4692-b56c-4e3d1c0ef226', 'exam-cnp-ch1', 'Explain why **trans-1,2-dimethylcyclohexane** can exist as a pair of enantiomers, while **cis-1,2-dimethylcyclohexane** is a meso compound.', 'SHORT_ANSWER', NULL, '"The trans isomer lacks a plane of symmetry and is chiral. The cis isomer has a plane of symmetry bisecting the ring, making it achiral (meso) despite having chiral centers."'::jsonb, 'Symmetry elements dictate chirality.', 1, 'MEDIUM', 82, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('0b07be63-0f72-49a7-ae00-a4b3c48ba1de', 'exam-cnp-ch1', 'Define **Racemic Mixture** and explain its optical activity.', 'SHORT_ANSWER', NULL, '"A racemic mixture is a 1:1 mixture of enantiomers. It is optically inactive because the rotation of one enantiomer exactly cancels the rotation of the other."'::jsonb, 'Net rotation is zero.', 1, 'HARD', 83, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('f03732b8-f29d-4551-b8d7-bf5ba2e0be80', 'exam-cnp-ch1', 'What is a **Meso Compound**?', 'SHORT_ANSWER', NULL, '"A meso compound is a molecule that has chiral centers but is achiral overall because it possesses an internal plane of symmetry."'::jsonb, 'Superimposable on mirror image.', 1, 'EASY', 84, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('3cfa951e-916c-4487-ad85-a10f87320c67', 'exam-cnp-ch1', 'Explain the difference between **Configuration** and **Conformation**.', 'SHORT_ANSWER', NULL, '"Configuration refers to the permanent arrangement of atoms (R/S, cis/trans) that can only be changed by breaking bonds. Conformation refers to temporary shapes arising from bond rotation (eclipsed/staggered)."'::jsonb, 'Breaking bonds vs rotating bonds.', 1, 'MEDIUM', 85, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b301beee-fb64-424b-ba33-d86c59babdbd', 'exam-cnp-ch1', 'Why do enantiomers have different biological activities?', 'SHORT_ANSWER', NULL, '"Biological receptors and enzymes are chiral proteins. Enantiomers interact differently with these chiral binding sites, like a right hand trying to fit into a left glove."'::jsonb, 'Chiral recognition.', 1, 'HARD', 86, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('62873806-7fb4-4405-b7e7-a9a609465b01', 'exam-cnp-ch1', 'Describe how to determine R/S configuration.', 'SHORT_ANSWER', NULL, '"1. Assign priorities (CIP) to the 4 groups. 2. Orient the lowest priority group to the back. 3. Trace the path 1->2->3. Clockwise = R, Counter-clockwise = S."'::jsonb, 'Standard procedure.', 1, 'EASY', 87, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('2eed0b68-dee4-41d7-8e89-3d32ca71284c', 'exam-cnp-ch1', 'What is **Resolution** in stereochemistry?', 'SHORT_ANSWER', NULL, '"Resolution is the process of separating a racemic mixture into its pure enantiomers, often by converting them into diastereomers using a chiral resolving agent."'::jsonb, 'Separation technique.', 1, 'MEDIUM', 88, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('f14fadbc-d70b-41b2-a304-534be9cb957d', 'exam-cnp-ch1', 'Why is **Thalidomide** significant in the history of stereochemistry?', 'SHORT_ANSWER', NULL, '"It showed that enantiomers can have drastically different effects (sedative vs teratogen), leading to stricter regulations on chiral drugs."'::jsonb, 'Tragic consequence of ignoring chirality.', 1, 'HARD', 89, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('9e16c12e-866a-4c0f-ab44-a3dfa5b334a5', 'exam-cnp-ch1', 'Calculate the **enantiomeric excess (ee)** of a mixture containing 80% (R)-isomer and 20% (S)-isomer.', 'SHORT_ANSWER', NULL, '"60%"'::jsonb, 'ee = %Major - %Minor = 80% - 20% = 60%.', 1, 'EASY', 90, '{"real_type":"CALCULATION","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('dd91cbf9-1851-4bb4-9443-d93853d4df86', 'exam-cnp-ch1', 'A sample has an observed rotation of +10°. If the pure enantiomer has a specific rotation of +20°, what is the **optical purity** of the sample?', 'SHORT_ANSWER', NULL, '"50%"'::jsonb, 'Optical Purity = (Observed / Pure) * 100 = (10 / 20) * 100 = 50%.', 1, 'MEDIUM', 91, '{"real_type":"CALCULATION","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('7411bd5d-8b1d-4c2d-923f-12371b6d1de7', 'exam-cnp-ch1', 'A mixture has an ee of 50%. What is the percentage of the major enantiomer?', 'SHORT_ANSWER', NULL, '"75%"'::jsonb, '%Major = 50 + (ee/2) = 50 + 25 = 75%.', 1, 'HARD', 92, '{"real_type":"CALCULATION","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('d3d5a80e-06b7-4f01-9cb5-c771b020d8e5', 'exam-cnp-ch1', 'If the specific rotation of (S)-2-butanol is +13.5°, what is the observed rotation of a sample with 100% (R)-2-butanol?', 'SHORT_ANSWER', NULL, '"-13.5°"'::jsonb, 'Enantiomers have equal but opposite rotation.', 1, 'EASY', 93, '{"real_type":"CALCULATION","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('a99bfcd1-45b8-49bf-b3cc-9d584aeb687c', 'exam-cnp-ch1', 'Thalidomide was prescribed as a sedative but caused birth defects. One enantiomer was therapeutic, the other teratogenic. Explain why separating them didn''t solve the problem.', 'SHORT_ANSWER', NULL, '"Thalidomide undergoes rapid racemization in vivo (in the body) at physiological pH. Even if pure enantiomer is administered, it converts to the mixture."'::jsonb, 'In vivo racemization makes separation ineffective.', 2, 'MEDIUM', 94, '{"real_type":"CASE_STUDY","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('ebaa5095-9438-4f74-8b89-5dbe384353c4', 'exam-cnp-ch1', 'A chemist synthesizes a new drug with 3 chiral centers. They isolate one fraction that is optically inactive. What could this fraction be?', 'SHORT_ANSWER', NULL, '"It could be a racemic mixture (50:50 enantiomers) or a meso compound (if symmetry permits)."'::jsonb, 'Both are optically inactive.', 2, 'HARD', 95, '{"real_type":"CASE_STUDY","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('e9a7a16d-4783-4a32-afdf-1103c8d636e2', 'exam-cnp-ch1', 'The student assigned the configuration of the molecule shown as ''S''. Identify the error in their reasoning if priorities are 1->2->3 clockwise and the lowest priority group is on a wedge (coming out).', 'SHORT_ANSWER', NULL, '"If the lowest priority group is on a wedge (forward), the apparent configuration must be reversed. Clockwise normally means R, but here it implies S. Wait, if they assigned S, they might be correct? The error is likely ignoring the wedge rule."'::jsonb, 'Rule: If lowest priority is forward, R becomes S and S becomes R.', 1, 'EASY', 96, '{"real_type":"IDENTIFY_ERROR","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b4e8c6ec-f725-4fb7-8a1b-4ff5456967a8', 'exam-cnp-ch1', 'A student claims that since a molecule has no chiral carbons, it must be achiral. Identify the error.', 'SHORT_ANSWER', NULL, '"Molecules can be chiral without chiral carbons, such as allenes or biphenyls (axial chirality)."'::jsonb, 'Chirality is a property of the whole molecule.', 1, 'MEDIUM', 97, '{"real_type":"IDENTIFY_ERROR","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('26d2be6a-4043-4e96-8eba-04ec6afddd25', 'exam-cnp-ch2', 'Which of the following is a **ketose** sugar?', 'MCQ', '["Glucose","Fructose","Galactose","Mannose"]'::jsonb, '"Fructose"'::jsonb, 'Fructose is a ketohexose, while the others are aldohexoses.', 1, 'MEDIUM', 1, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('906f36de-5f95-4a16-9397-d2c84b17aca3', 'exam-cnp-ch2', 'What is the relationship between $\alpha$-D-glucose and $\beta$-D-glucose?', 'MCQ', '["Enantiomers","Epimers","Anomers","Constitutional Isomers"]'::jsonb, '"Anomers"'::jsonb, 'They differ only in the configuration at the anomeric carbon (C1).', 1, 'HARD', 2, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('9dfdd147-4d73-4b17-a5c2-71219efc085f', 'exam-cnp-ch2', 'Which bond links two monosaccharides to form a disaccharide?', 'MCQ', '["Peptide bond","Glycosidic bond","Phosphodiester bond","Ester bond"]'::jsonb, '"Glycosidic bond"'::jsonb, 'A glycosidic bond is formed between the anomeric carbon of one sugar and a hydroxyl group of another.', 1, 'EASY', 3, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('4cb7ea19-2a48-4803-a3f2-b020d094355d', 'exam-cnp-ch2', 'Which of the following is a **non-reducing** sugar?', 'MCQ', '["Maltose","Lactose","Sucrose","Cellobiose"]'::jsonb, '"Sucrose"'::jsonb, 'Sucrose has a glycosidic bond between the two anomeric carbons, preventing ring opening.', 1, 'MEDIUM', 4, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('80c1f09a-5ab3-40a8-bed8-3a29f8df8de8', 'exam-cnp-ch2', 'Which monosaccharide is the C-4 epimer of Glucose?', 'MCQ', '["Mannose","Galactose","Fructose","Ribose"]'::jsonb, '"Galactose"'::jsonb, 'Galactose differs from glucose only at C4.', 1, 'HARD', 5, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('78a77448-d9a8-4b23-93b9-0c1312bbf318', 'exam-cnp-ch2', 'Which monosaccharide is the C-2 epimer of Glucose?', 'MCQ', '["Mannose","Galactose","Fructose","Ribose"]'::jsonb, '"Mannose"'::jsonb, 'Mannose differs from glucose only at C2.', 1, 'EASY', 6, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('8a056ce8-d74e-4f92-999e-43366e9c393e', 'exam-cnp-ch2', 'Starch is composed of which two polysaccharides?', 'MCQ', '["Amylose and Amylopectin","Glycogen and Cellulose","Amylose and Cellulose","Amylopectin and Glycogen"]'::jsonb, '"Amylose and Amylopectin"'::jsonb, 'Starch consists of linear amylose and branched amylopectin.', 1, 'MEDIUM', 7, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('af08c81d-af7f-4119-a569-3b1ffe01f12e', 'exam-cnp-ch2', 'What is the major structural difference between starch and cellulose?', 'MCQ', '["Starch has beta-linkages; cellulose has alpha-linkages.","Starch has alpha-linkages; cellulose has beta-linkages.","Starch is branched; cellulose is linear.","Starch is a protein; cellulose is a carbohydrate."]'::jsonb, '"Starch has alpha-linkages; cellulose has beta-linkages."'::jsonb, 'The alpha vs beta linkage leads to helical vs sheet structures.', 1, 'HARD', 8, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('cb8efb53-a8f9-4ab0-a50e-6a32184a7308', 'exam-cnp-ch2', 'Which reagent is used to distinguish between reducing and non-reducing sugars?', 'MCQ', '["Benedict's Reagent","Biuret Reagent","Ninhydrin","Sudan III"]'::jsonb, '"Benedict's Reagent"'::jsonb, 'Benedict''s reagent reduces Cu2+ to Cu+ in the presence of reducing sugars.', 1, 'EASY', 9, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b93b137a-a819-4cc9-85eb-8a3ada7d4e8c', 'exam-cnp-ch2', 'The breakdown of glycogen to glucose is called:', 'MCQ', '["Glycolysis","Glycogenesis","Glycogenolysis","Gluconeogenesis"]'::jsonb, '"Glycogenolysis"'::jsonb, 'Lysis (breakdown) of glycogen.', 1, 'MEDIUM', 10, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('83b7f8ec-9c92-4bd6-adbe-ac3fff2825e9', 'exam-cnp-ch2', 'Which sugar is known as ''blood sugar''?', 'MCQ', '["Fructose","Sucrose","Glucose","Lactose"]'::jsonb, '"Glucose"'::jsonb, 'Glucose is the primary sugar circulating in blood.', 1, 'HARD', 11, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b76356ab-4bcd-4664-b6d6-6d451190d040', 'exam-cnp-ch2', 'Lactose is composed of:', 'MCQ', '["Glucose + Fructose","Glucose + Galactose","Glucose + Glucose","Galactose + Fructose"]'::jsonb, '"Glucose + Galactose"'::jsonb, 'Milk sugar is a disaccharide of glucose and galactose.', 1, 'EASY', 12, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('9a874c39-959c-433f-9e7d-e079146696ea', 'exam-cnp-ch2', 'Which of the following is an aldohexose?', 'MCQ', '["Ribose","Glucose","Fructose","Glyceraldehyde"]'::jsonb, '"Glucose"'::jsonb, 'Glucose has an aldehyde group and 6 carbons.', 1, 'MEDIUM', 13, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('49610305-9146-4ba0-82c6-7b236205a3e0', 'exam-cnp-ch2', 'In the D-family of sugars, the OH group on the chiral center furthest from the carbonyl is on the:', 'MCQ', '["Right","Left","Top","Bottom"]'::jsonb, '"Right"'::jsonb, 'D = Dextro (Right) in Fischer projection.', 1, 'HARD', 14, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('c176602b-2b8a-4d36-b451-f32091468a21', 'exam-cnp-ch2', 'The cyclic form of glucose is a:', 'MCQ', '["Hemiacetal","Hemiketal","Acetal","Ketal"]'::jsonb, '"Hemiacetal"'::jsonb, 'Formed by reaction of aldehyde and alcohol.', 1, 'EASY', 15, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('1bc145d2-1a23-401a-a6e4-f0b9a82c5462', 'exam-cnp-ch2', 'Which polysaccharide is the main storage form of glucose in animals?', 'MCQ', '["Starch","Cellulose","Glycogen","Chitin"]'::jsonb, '"Glycogen"'::jsonb, 'Glycogen is stored in liver and muscles.', 1, 'MEDIUM', 16, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('36598995-a811-46ab-aada-1eaf93421a38', 'exam-cnp-ch2', 'Which of the following is NOT a reducing sugar?', 'MCQ', '["Glucose","Fructose","Maltose","Sucrose"]'::jsonb, '"Sucrose"'::jsonb, 'Sucrose has no free anomeric carbon.', 1, 'HARD', 17, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b814d39b-6834-40bf-9ddd-4c948a5303a0', 'exam-cnp-ch2', 'The reaction of a sugar with an alcohol forms a:', 'MCQ', '["Glycoside","Peptide","Lipid","Nucleotide"]'::jsonb, '"Glycoside"'::jsonb, 'Glycosides are acetals of sugars.', 1, 'EASY', 18, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('35d6517e-f327-46e2-b517-960ec9676fda', 'exam-cnp-ch2', 'Which sugar is found in DNA?', 'MCQ', '["Ribose","Deoxyribose","Glucose","Fructose"]'::jsonb, '"Deoxyribose"'::jsonb, '2-deoxyribose is the sugar component of DNA.', 1, 'MEDIUM', 19, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('d920b818-1beb-4f0a-bc79-d2ce9057cc93', 'exam-cnp-ch2', 'Oxidation of the aldehyde group of glucose yields:', 'MCQ', '["Glucuronic acid","Gluconic acid","Glucaric acid","Sorbitol"]'::jsonb, '"Gluconic acid"'::jsonb, 'Mild oxidation of CHO -> COOH gives aldonic acid (gluconic).', 1, 'HARD', 20, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('5cd1c471-a298-4918-aac8-2b9039897f7e', 'exam-cnp-ch2', 'Oxidation of both the aldehyde and primary alcohol groups of glucose yields:', 'MCQ', '["Glucuronic acid","Gluconic acid","Glucaric acid","Sorbitol"]'::jsonb, '"Glucaric acid"'::jsonb, 'Strong oxidation gives aldaric acid (glucaric).', 1, 'EASY', 21, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('d68d4e32-504b-4679-a3ad-1c7bc567c42c', 'exam-cnp-ch2', 'Reduction of glucose yields:', 'MCQ', '["Mannitol","Sorbitol","Galactitol","Inositol"]'::jsonb, '"Sorbitol"'::jsonb, 'Reduction of the aldehyde to alcohol gives the alditol (sorbitol).', 1, 'MEDIUM', 22, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b510c19d-5966-47ea-9567-d9b9fd9676a2', 'exam-cnp-ch2', 'Which of the following is a pentose?', 'MCQ', '["Glucose","Fructose","Ribose","Erythrose"]'::jsonb, '"Ribose"'::jsonb, 'Ribose has 5 carbons.', 1, 'HARD', 23, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('8fd014e4-248e-4277-84c6-d3b6a05ad0cd', 'exam-cnp-ch2', 'Chitin is a polymer of:', 'MCQ', '["Glucose","N-acetylglucosamine","Galactose","Fructose"]'::jsonb, '"N-acetylglucosamine"'::jsonb, 'Found in exoskeletons of insects.', 1, 'EASY', 24, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('86746411-7b38-4fdb-b993-84dce6836555', 'exam-cnp-ch2', 'Which enzyme hydrolyzes starch?', 'MCQ', '["Protease","Lipase","Amylase","Cellulase"]'::jsonb, '"Amylase"'::jsonb, 'Amylase breaks down starch.', 1, 'MEDIUM', 25, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b7c08385-e005-4657-abef-abe397231a36', 'exam-cnp-ch2', 'The number of stereoisomers of an aldohexose is:', 'MCQ', '["4","8","16","32"]'::jsonb, '"16"'::jsonb, '2^4 = 16.', 1, 'HARD', 26, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('53aa2f95-eef0-4e31-a4bd-f4d53c405506', 'exam-cnp-ch2', 'Which carbon is the anomeric carbon in a ketohexose like fructose?', 'MCQ', '["C1","C2","C3","C4"]'::jsonb, '"C2"'::jsonb, 'The carbonyl group is at C2 in ketoses.', 1, 'EASY', 27, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('0fbe6c75-d453-453b-9ad3-b3cd33316a98', 'exam-cnp-ch2', 'Mutarotation involves the interconversion of:', 'MCQ', '["D and L isomers","Alpha and Beta anomers","Aldose and Ketose","Pyranose and Furanose"]'::jsonb, '"Alpha and Beta anomers"'::jsonb, 'Via the open chain form.', 1, 'MEDIUM', 28, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('ffe8cecf-9e9a-4997-ab4e-07e88efbe8b9', 'exam-cnp-ch2', 'Which of the following is a structural polysaccharide in plants?', 'MCQ', '["Starch","Glycogen","Cellulose","Chitin"]'::jsonb, '"Cellulose"'::jsonb, 'Cell wall component.', 1, 'HARD', 29, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('79c95003-6170-4c5c-ac0e-3399572c9b20', 'exam-cnp-ch2', 'A sugar with a 5-membered ring is called a:', 'MCQ', '["Pyranose","Furanose","Pentose","Hexose"]'::jsonb, '"Furanose"'::jsonb, 'Resembles furan.', 1, 'EASY', 30, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('2de6c1d7-90e4-450f-ab84-2e21a1eaa85c', 'exam-cnp-ch2', 'Identify the anomeric carbon in the structure shown.', 'MCQ', '["C1","C2","C5","C6"]'::jsonb, '"C1"'::jsonb, 'In aldoses like glucose, C1 is the anomeric carbon.', 1, 'MEDIUM', 31, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide33.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('3141b486-8346-4559-93e9-c209562a8185', 'exam-cnp-ch2', 'Is the glycosidic bond shown Alpha or Beta?', 'MCQ', '["Alpha","Beta"]'::jsonb, '"Alpha"'::jsonb, 'Oxygen points down (trans to CH2OH).', 1, 'HARD', 32, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide83.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('5ca72035-25e4-4f99-9556-5b6e24453788', 'exam-cnp-ch2', 'Identify the sugar shown in the Fischer projection.', 'MCQ', '["D-Glucose","L-Glucose","D-Galactose","D-Mannose"]'::jsonb, '"D-Glucose"'::jsonb, 'Right-Left-Right-Right pattern.', 1, 'EASY', 33, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide10.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('7b3513f1-0bcc-43a7-8db8-8c40f1d30c6f', 'exam-cnp-ch2', 'Identify the polymer shown.', 'MCQ', '["Amylose","Cellulose","Chitin"]'::jsonb, '"Cellulose"'::jsonb, 'Linear beta-1,4 linked glucose.', 1, 'MEDIUM', 34, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide90.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('c719a915-aac4-4f92-bcc1-d3ed0306a261', 'exam-cnp-ch2', 'Which carbon determines the D/L configuration?', 'MCQ', '["C1","C2","C5","C6"]'::jsonb, '"C5"'::jsonb, 'Penultimate carbon.', 1, 'HARD', 35, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide5.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('0784ab51-863e-45ca-a57f-ff04e0fa44fd', 'exam-cnp-ch2', 'Identify the functional group at C1.', 'MCQ', '["Aldehyde","Ketone","Alcohol","Acid"]'::jsonb, '"Aldehyde"'::jsonb, 'CHO group.', 1, 'EASY', 36, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide2.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('e9077e6b-e5e8-497a-9e77-e2f6e605df45', 'exam-cnp-ch2', 'Select **all** polysaccharides that are composed of glucose units.', 'MULTI_SELECT', '["Starch","Cellulose","Glycogen","Chitin"]'::jsonb, '["Starch","Cellulose","Glycogen"]'::jsonb, 'Chitin is a polymer of N-acetylglucosamine, not pure glucose.', 2, 'MEDIUM', 37, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('13857f1c-f663-40db-b6f3-d0e56ba7c0de', 'exam-cnp-ch2', 'Which of the following tests can be used to identify **reducing sugars**?', 'MULTI_SELECT', '["Benedict's Test","Fehling's Test","Tollens' Test","Biuret Test"]'::jsonb, '["Benedict's Test","Fehling's Test","Tollens' Test"]'::jsonb, 'Biuret test is for proteins. The others detect reducing sugars.', 2, 'HARD', 38, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('e44c54fd-23fb-45bd-a781-012695711c05', 'exam-cnp-ch2', 'Select the **disaccharides**.', 'MULTI_SELECT', '["Glucose","Sucrose","Lactose","Maltose"]'::jsonb, '["Sucrose","Lactose","Maltose"]'::jsonb, 'Glucose is a monosaccharide.', 2, 'EASY', 39, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('053bb653-7a4e-4ede-aa5f-0010cde2ee02', 'exam-cnp-ch2', 'Which of the following are **Aldohexoses**?', 'MULTI_SELECT', '["Glucose","Mannose","Galactose","Fructose"]'::jsonb, '["Glucose","Mannose","Galactose"]'::jsonb, 'Fructose is a ketohexose.', 2, 'MEDIUM', 40, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('3a57ca26-d434-4a46-af95-c54077fd858c', 'exam-cnp-ch2', 'Select the sugars that undergo **Mutarotation**.', 'MULTI_SELECT', '["Glucose","Maltose","Lactose","Sucrose"]'::jsonb, '["Glucose","Maltose","Lactose"]'::jsonb, 'Sucrose is non-reducing and locked in acetal form.', 2, 'HARD', 41, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b2cbfd32-79c3-4619-9fdb-0a7483094f52', 'exam-cnp-ch2', 'Which of the following are functions of carbohydrates?', 'MULTI_SELECT', '["Energy storage","Structural support","Cell recognition","Catalysis"]'::jsonb, '["Energy storage","Structural support","Cell recognition"]'::jsonb, 'Catalysis is primarily a protein (enzyme) function.', 2, 'EASY', 42, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('51f15932-4e1d-445c-8fde-019e0670b87c', 'exam-cnp-ch2', 'Select the components of **Sucrose**.', 'MULTI_SELECT', '["Glucose","Fructose","Galactose","Ribose"]'::jsonb, '["Glucose","Fructose"]'::jsonb, 'Table sugar.', 2, 'MEDIUM', 43, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('7ec2c679-d1bb-468c-902a-2b3814d058ff', 'exam-cnp-ch2', 'Which of the following yield **Glucose** upon complete hydrolysis?', 'MULTI_SELECT', '["Starch","Cellulose","Maltose","Lactose"]'::jsonb, '["Starch","Cellulose","Maltose"]'::jsonb, 'Lactose yields Glucose + Galactose.', 2, 'HARD', 44, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b83a1cfd-91a4-43df-b209-fd2b0028dec9', 'exam-cnp-ch2', 'Select the correct statements about **Cellulose**.', 'MULTI_SELECT', '["It contains beta-1,4-glycosidic bonds.","It is digestible by humans.","It is a linear polymer.","It forms hydrogen bonds between chains."]'::jsonb, '["It contains beta-1,4-glycosidic bonds.","It is a linear polymer.","It forms hydrogen bonds between chains."]'::jsonb, 'Humans lack cellulase.', 2, 'EASY', 45, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b2be3c50-1890-481e-a279-af726032e5a8', 'exam-cnp-ch2', 'Which of the following are **Epimers** of Glucose?', 'MULTI_SELECT', '["Mannose","Galactose","Fructose","Ribose"]'::jsonb, '["Mannose","Galactose"]'::jsonb, 'C2 and C4 epimers respectively.', 2, 'MEDIUM', 46, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('4413f5f2-46dd-4e55-815f-37686d805e1a', 'exam-cnp-ch2', 'Select the sugars that give a positive **Tollens'' Test** (Silver Mirror).', 'MULTI_SELECT', '["Glucose","Lactose","Sucrose","Maltose"]'::jsonb, '["Glucose","Lactose","Maltose"]'::jsonb, 'Reducing sugars reduce Ag+ to Ag.', 2, 'HARD', 47, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('534b3935-7b7d-46ad-853f-889513fb9de8', 'exam-cnp-ch2', 'Which of the following are **Ketoses**?', 'MULTI_SELECT', '["Fructose","Ribulose","Glucose","Glyceraldehyde"]'::jsonb, '["Fructose","Ribulose"]'::jsonb, 'Contain ketone group.', 2, 'EASY', 48, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('91f6a070-c276-4874-8d85-7008467ca165', 'exam-cnp-ch2', 'True or False: D-Glucose and L-Glucose are epimers.', 'TRUE_FALSE', '["True","False"]'::jsonb, '"False"'::jsonb, 'They are enantiomers.', 1, 'MEDIUM', 49, '{"real_type":"TRUE_FALSE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('07c5516f-5b56-4fee-b20c-b1b9cc103075', 'exam-cnp-ch2', 'True or False: Sucrose is a reducing sugar.', 'TRUE_FALSE', '["True","False"]'::jsonb, '"False"'::jsonb, 'No free anomeric carbon.', 1, 'HARD', 50, '{"real_type":"TRUE_FALSE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('c9c97c65-4f28-4ca8-bf89-4b9033ad7ba2', 'exam-cnp-ch2', 'True or False: Humans can digest cellulose.', 'TRUE_FALSE', '["True","False"]'::jsonb, '"False"'::jsonb, 'Lack cellulase.', 1, 'EASY', 51, '{"real_type":"TRUE_FALSE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('31ccbe20-4ff6-4ced-beb8-cdacb0c2619d', 'exam-cnp-ch2', 'The phenomenon where the optical rotation of a freshly prepared sugar solution changes over time is called ______.', 'FILL_BLANK', NULL, '"mutarotation"'::jsonb, 'Mutarotation is the equilibration between alpha and beta anomers.', 1, 'MEDIUM', 52, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('c5d282db-11d6-4090-b595-d3ead08894ae', 'exam-cnp-ch2', 'Starch is a mixture of two polymers: amylose and ______.', 'FILL_BLANK', NULL, '"amylopectin"'::jsonb, 'Amylose is linear, amylopectin is branched.', 1, 'HARD', 53, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('aba5734a-b4c0-4188-a3b4-1d6bb88c9615', 'exam-cnp-ch2', 'The bond connecting two monosaccharides is called a ______ bond.', 'FILL_BLANK', NULL, '"glycosidic"'::jsonb, 'Ether linkage between sugars.', 1, 'EASY', 54, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('5aa827aa-7edd-4999-92e2-cd69b43111db', 'exam-cnp-ch2', 'Glucose is stored in the liver as ______.', 'FILL_BLANK', NULL, '"glycogen"'::jsonb, 'Animal starch.', 1, 'MEDIUM', 55, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('a6487a6f-f529-46fa-b6a9-cbdf10d2eaca', 'exam-cnp-ch2', 'Sucrose is a disaccharide of glucose and ______.', 'FILL_BLANK', NULL, '"fructose"'::jsonb, 'Table sugar components.', 1, 'HARD', 56, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('966b1d74-a96c-41dc-8858-0641ab3e9369', 'exam-cnp-ch2', 'The C-2 epimer of glucose is ______.', 'FILL_BLANK', NULL, '"mannose"'::jsonb, 'Differ at C2.', 1, 'EASY', 57, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('900886bc-df15-4c2a-be16-e87cbe3a032f', 'exam-cnp-ch2', 'The C-4 epimer of glucose is ______.', 'FILL_BLANK', NULL, '"galactose"'::jsonb, 'Differ at C4.', 1, 'MEDIUM', 58, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('a473da70-1d78-4046-ae7b-103c9b762b03', 'exam-cnp-ch2', 'A six-membered sugar ring is called a ______.', 'FILL_BLANK', NULL, '"pyranose"'::jsonb, 'Resembles pyran.', 1, 'HARD', 59, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('dc5fc4f8-3d49-4896-938c-6df18d913526', 'exam-cnp-ch2', 'A five-membered sugar ring is called a ______.', 'FILL_BLANK', NULL, '"furanose"'::jsonb, 'Resembles furan.', 1, 'EASY', 60, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('e1f3f6a9-3758-48ba-b5ce-7c72581273fa', 'exam-cnp-ch2', 'Reduction of glucose yields the sugar alcohol ______.', 'FILL_BLANK', NULL, '"sorbitol"'::jsonb, 'Also called glucitol.', 1, 'MEDIUM', 61, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('a0047fa2-e7e7-4344-9cf3-ba80f00cf5a9', 'exam-cnp-ch2', 'The test used to detect starch is the ______ test.', 'FILL_BLANK', NULL, '"iodine"'::jsonb, 'Turns blue-black.', 1, 'HARD', 62, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('ab73adc8-d297-4b21-9d87-eac50d997aca', 'exam-cnp-ch2', 'Cellulose is a polymer of glucose linked by ______ bonds.', 'FILL_BLANK', NULL, '"beta-1,4"'::jsonb, 'Beta linkage makes it indigestible.', 1, 'EASY', 63, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b58e5488-2222-4366-8525-bdd0afbb819c', 'exam-cnp-ch2', 'The anomeric carbon in glucose is carbon number ______.', 'FILL_BLANK', NULL, '"1"'::jsonb, 'C1 is the carbonyl carbon.', 1, 'MEDIUM', 64, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('0c0a64d6-b3e9-4c32-a584-d3ceb63e99da', 'exam-cnp-ch2', 'Sugars that can reduce Cu2+ to Cu+ are called ______ sugars.', 'FILL_BLANK', NULL, '"reducing"'::jsonb, 'Have free aldehyde/ketone.', 1, 'HARD', 65, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('93904793-e833-42d3-b2b7-b8e1a651e473', 'exam-cnp-ch2', 'The general formula for carbohydrates is ______.', 'FILL_BLANK', NULL, '"Cn(H2O)n"'::jsonb, 'Hydrate of carbon.', 1, 'EASY', 66, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b3c562b2-4a4c-4133-a8a2-f32c805dd2c5', 'exam-cnp-ch2', 'Match the disaccharide to its monosaccharide components.', 'MATCHING', '[{"left":"Sucrose","right":"Glucose + Fructose"},{"left":"Lactose","right":"Glucose + Galactose"},{"left":"Maltose","right":"Glucose + Glucose"}]'::jsonb, '{"Sucrose":"Glucose + Fructose","Lactose":"Glucose + Galactose","Maltose":"Glucose + Glucose"}'::jsonb, 'Standard composition.', 2, 'MEDIUM', 67, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('e1a7dda1-f40a-41e5-8a64-38045181a525', 'exam-cnp-ch2', 'Match the polysaccharide to its function/structure.', 'MATCHING', '[{"left":"Starch","right":"Plant energy storage"},{"left":"Glycogen","right":"Animal energy storage"},{"left":"Cellulose","right":"Plant cell wall"}]'::jsonb, '{"Starch":"Plant energy storage","Glycogen":"Animal energy storage","Cellulose":"Plant cell wall"}'::jsonb, 'Biological roles.', 2, 'HARD', 68, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('3be82ff7-00e1-4a5c-937f-511728143c60', 'exam-cnp-ch2', 'Match the sugar to its classification.', 'MATCHING', '[{"left":"Glucose","right":"Aldohexose"},{"left":"Fructose","right":"Ketohexose"},{"left":"Ribose","right":"Aldopentose"}]'::jsonb, '{"Glucose":"Aldohexose","Fructose":"Ketohexose","Ribose":"Aldopentose"}'::jsonb, 'Structure based.', 2, 'EASY', 69, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('be6093f8-6c1e-4e2a-bcb6-3f0a4ecbeaa6', 'exam-cnp-ch2', 'Match the test to the positive result.', 'MATCHING', '[{"left":"Benedict's","right":"Brick red precipitate"},{"left":"Tollens'","right":"Silver mirror"},{"left":"Iodine","right":"Blue-black color"}]'::jsonb, '{"Benedict's":"Brick red precipitate","Tollens'":"Silver mirror","Iodine":"Blue-black color"}'::jsonb, 'Chemical tests.', 2, 'MEDIUM', 70, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('787e0cb5-2454-417b-9eb3-c0b64ea0027d', 'exam-cnp-ch2', 'Match the linkage to the molecule.', 'MATCHING', '[{"left":"Alpha-1,4","right":"Maltose"},{"left":"Beta-1,4","right":"Cellobiose"},{"left":"Alpha-1,2","right":"Sucrose"}]'::jsonb, '{"Alpha-1,4":"Maltose","Beta-1,4":"Cellobiose","Alpha-1,2":"Sucrose"}'::jsonb, 'Glycosidic bonds.', 2, 'HARD', 71, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('cbfdb5c3-7bc6-4acf-8adf-0ccbced2f235', 'exam-cnp-ch2', 'Match the epimer to the carbon position.', 'MATCHING', '[{"left":"Mannose","right":"C2"},{"left":"Galactose","right":"C4"},{"left":"Allose","right":"C3"}]'::jsonb, '{"Mannose":"C2","Galactose":"C4","Allose":"C3"}'::jsonb, 'Relative to Glucose.', 2, 'EASY', 72, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('bb3f391f-b418-4bd9-b7d4-f4226985396c', 'exam-cnp-ch2', 'Match the ring size to the name.', 'MATCHING', '[{"left":"5-membered","right":"Furanose"},{"left":"6-membered","right":"Pyranose"},{"left":"Open chain","right":"Acyclic"}]'::jsonb, '{"5-membered":"Furanose","6-membered":"Pyranose","Open chain":"Acyclic"}'::jsonb, 'Ring nomenclature.', 2, 'MEDIUM', 73, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('aec22f9d-eb1d-4756-b5ab-d4a6e1f2447e', 'exam-cnp-ch2', 'Match the oxidation product to the reagent.', 'MATCHING', '[{"left":"Aldonic acid","right":"Bromine water (mild)"},{"left":"Aldaric acid","right":"Nitric acid (strong)"},{"left":"Uronic acid","right":"Enzymatic"}]'::jsonb, '{"Aldonic acid":"Bromine water (mild)","Aldaric acid":"Nitric acid (strong)","Uronic acid":"Enzymatic"}'::jsonb, 'Oxidation levels.', 2, 'HARD', 74, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('36e6510a-9f91-4508-b22d-3481c5df728d', 'exam-cnp-ch2', 'Match the sugar to its source.', 'MATCHING', '[{"left":"Lactose","right":"Milk"},{"left":"Sucrose","right":"Cane/Beet"},{"left":"Fructose","right":"Fruit/Honey"}]'::jsonb, '{"Lactose":"Milk","Sucrose":"Cane/Beet","Fructose":"Fruit/Honey"}'::jsonb, 'Natural sources.', 2, 'EASY', 75, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('911b2702-14de-4baf-8b8b-06aeaf95ac26', 'exam-cnp-ch2', 'Match the term to the definition.', 'MATCHING', '[{"left":"Anomers","right":"Differ at C1"},{"left":"Epimers","right":"Differ at one C other than C1"},{"left":"Enantiomers","right":"Mirror images"}]'::jsonb, '{"Anomers":"Differ at C1","Epimers":"Differ at one C other than C1","Enantiomers":"Mirror images"}'::jsonb, 'Isomer types.', 2, 'MEDIUM', 76, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('e54ce987-b68e-4bb6-8d5c-ca234ab57242', 'exam-cnp-ch2', 'Order the steps in the Kiliani-Fischer synthesis.', 'MATCHING', '["Nucleophilic addition of HCN","Hydrolysis of cyanohydrin to acid","Lactonization","Reduction to aldehyde"]'::jsonb, '["Nucleophilic addition of HCN","Hydrolysis of cyanohydrin to acid","Lactonization","Reduction to aldehyde"]'::jsonb, 'Chain extension.', 2, 'HARD', 77, '{"real_type":"ORDER_SEQUENCE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('f7358419-495e-4caf-abc7-2e7ad1071336', 'exam-cnp-ch2', 'Order the following by sweetness (High to Low).', 'MATCHING', '["Fructose","Sucrose","Glucose","Lactose"]'::jsonb, '["Fructose","Sucrose","Glucose","Lactose"]'::jsonb, 'Fructose is the sweetest natural sugar.', 2, 'EASY', 78, '{"real_type":"ORDER_SEQUENCE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('d64033ff-3fab-407c-b2eb-085851c946cd', 'exam-cnp-ch2', 'Order the steps in the digestion of starch.', 'MATCHING', '["Salivary Amylase","Pancreatic Amylase","Maltase","Absorption of Glucose"]'::jsonb, '["Salivary Amylase","Pancreatic Amylase","Maltase","Absorption of Glucose"]'::jsonb, 'Digestion pathway.', 2, 'MEDIUM', 79, '{"real_type":"ORDER_SEQUENCE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('0cf5a292-0f05-470a-9b9f-57a61a79619a', 'exam-cnp-ch2', 'Order by number of carbons (Low to High).', 'MATCHING', '["Triose","Tetrose","Pentose","Hexose"]'::jsonb, '["Triose","Tetrose","Pentose","Hexose"]'::jsonb, '3, 4, 5, 6.', 2, 'HARD', 80, '{"real_type":"ORDER_SEQUENCE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('e9497338-4163-40e7-aea1-8cd65370be1f', 'exam-cnp-ch2', 'Order the following by solubility in water (High to Low).', 'MATCHING', '["Glucose","Starch","Cellulose"]'::jsonb, '["Glucose","Starch","Cellulose"]'::jsonb, 'Monosaccharides > Polysaccharides.', 2, 'EASY', 81, '{"real_type":"ORDER_SEQUENCE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('a8c5a31e-c22c-473b-9cd4-946e7752f9d1', 'exam-cnp-ch2', 'Explain why cellulose is indigestible by humans while starch is a major energy source, despite both being glucose polymers.', 'SHORT_ANSWER', NULL, '"Cellulose contains beta-1,4-glycosidic bonds, which humans lack the enzyme (cellulase) to break. Starch contains alpha-1,4-bonds, which human amylases can hydrolyze."'::jsonb, 'Enzyme specificity.', 1, 'MEDIUM', 82, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b7a5e455-e559-4d78-9c7c-8fbe8c1a17ce', 'exam-cnp-ch2', 'Why is Sucrose a non-reducing sugar?', 'SHORT_ANSWER', NULL, '"In sucrose, the glycosidic bond is formed between the anomeric carbon of glucose (C1) and the anomeric carbon of fructose (C2). This locks both rings, leaving no free anomeric carbon to open and reduce reagents."'::jsonb, 'No free hemiacetal.', 1, 'HARD', 83, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('8dc3c1e4-9c0f-4f8d-bb03-b65aba09ab7c', 'exam-cnp-ch2', 'Describe the process of **Mutarotation**.', 'SHORT_ANSWER', NULL, '"Mutarotation is the change in optical rotation observed when a pure anomer (alpha or beta) is dissolved in water. It occurs because the ring opens to the aldehyde form and re-closes to form an equilibrium mixture of alpha and beta anomers."'::jsonb, 'Equilibration.', 1, 'EASY', 84, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('764fa445-5de8-4492-aec3-6fe7de4f01a6', 'exam-cnp-ch2', 'What is the difference between **Amylose** and **Amylopectin**?', 'SHORT_ANSWER', NULL, '"Amylose is a linear polymer of glucose with alpha-1,4 bonds. Amylopectin is a branched polymer with alpha-1,4 bonds and alpha-1,6 branch points."'::jsonb, 'Branching.', 1, 'MEDIUM', 85, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('c7673318-78b2-4c1e-9f57-92d7052800fa', 'exam-cnp-ch2', 'Explain the structural difference between **DNA** and **RNA** sugars.', 'SHORT_ANSWER', NULL, '"RNA contains Ribose, which has an -OH group at C2. DNA contains 2-Deoxyribose, which has an -H atom at C2 (lacking the oxygen)."'::jsonb, 'Deoxy = minus oxygen.', 1, 'HARD', 86, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('061f8a0b-f18a-4d60-90e9-3bd70baf9ffb', 'exam-cnp-ch2', 'What happens when a monosaccharide reacts with an alcohol in the presence of acid?', 'SHORT_ANSWER', NULL, '"It forms a glycoside (an acetal). The anomeric -OH is replaced by an -OR group."'::jsonb, 'Glycoside formation.', 1, 'EASY', 87, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('0480f74a-1a59-4e07-8070-4777b1202e41', 'exam-cnp-ch2', 'Why are monosaccharides soluble in water?', 'SHORT_ANSWER', NULL, '"They have multiple hydroxyl (-OH) groups that can form hydrogen bonds with water molecules."'::jsonb, 'Hydrogen bonding.', 1, 'MEDIUM', 88, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('597554b2-866f-4ec1-b8b9-410569c3dff8', 'exam-cnp-ch2', 'What is the biological function of **Glycogen**?', 'SHORT_ANSWER', NULL, '"Glycogen serves as the primary short-term energy storage form of glucose in animals, primarily stored in the liver and muscles."'::jsonb, 'Energy reserve.', 1, 'HARD', 89, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('aec12797-06a6-44af-a153-228ea184c133', 'exam-cnp-ch2', 'A sample of glucose contains 36% $\alpha$-anomer and 64% $\beta$-anomer. If the specific rotation of pure $\alpha$ is +112° and pure $\beta$ is +19°, calculate the specific rotation of the equilibrium mixture.', 'SHORT_ANSWER', NULL, '"+52.5°"'::jsonb, 'Rotation = (0.36 * 112) + (0.64 * 19) = 40.32 + 12.16 = 52.48 ≈ 52.5°.', 1, 'EASY', 90, '{"real_type":"CALCULATION","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('581cb64a-8cf8-452f-bceb-08302820de98', 'exam-cnp-ch2', 'How many stereoisomers are possible for a ketohexose like fructose (3 chiral centers)?', 'SHORT_ANSWER', NULL, '"8"'::jsonb, '2^3 = 8.', 1, 'MEDIUM', 91, '{"real_type":"CALCULATION","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('334ff38b-ce13-4de8-b370-349b187542b9', 'exam-cnp-ch2', 'If a disaccharide has a molecular formula of C12H22O11, what is its molecular weight? (C=12, H=1, O=16)', 'SHORT_ANSWER', NULL, '"342"'::jsonb, '(12*12) + (22*1) + (11*16) = 144 + 22 + 176 = 342.', 1, 'HARD', 92, '{"real_type":"CALCULATION","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('f1c19b51-5810-4ead-b00b-6cac0bb99db0', 'exam-cnp-ch2', 'Calculate the percentage of carbon in Glucose (C6H12O6). MW = 180.', 'SHORT_ANSWER', NULL, '"40%"'::jsonb, 'Mass of C = 6*12 = 72. %C = (72/180)*100 = 40%.', 1, 'EASY', 93, '{"real_type":"CALCULATION","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('2b6a6fa0-316e-4f7a-9ee8-2a1c20539f11', 'exam-cnp-ch2', 'A patient with lactose intolerance experiences bloating and diarrhea after consuming milk. Explain the biochemical basis for these symptoms.', 'SHORT_ANSWER', NULL, '"The patient lacks lactase, the enzyme required to hydrolyze lactose into glucose and galactose. Undigested lactose ferments in the colon, producing gas and drawing water into the intestine."'::jsonb, 'Deficiency of lactase.', 2, 'MEDIUM', 94, '{"real_type":"CASE_STUDY","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('56adeddd-4ae1-4195-8864-bc1ce384d186', 'exam-cnp-ch2', 'Galactosemia is a genetic disorder where infants cannot metabolize galactose. Why must they avoid milk?', 'SHORT_ANSWER', NULL, '"Milk contains lactose, which breaks down into glucose and galactose. Accumulation of galactose (or its metabolites) is toxic."'::jsonb, 'Metabolic block.', 2, 'HARD', 95, '{"real_type":"CASE_STUDY","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('ada6c042-93ac-4774-9223-1c8af5cb5cf5', 'exam-cnp-ch2', 'A student drew the Haworth projection of $\beta$-D-glucose with the -OH group at C1 pointing **down**. Identify the error.', 'SHORT_ANSWER', NULL, '"In the D-series, the beta anomer has the anomeric -OH group pointing **up** (equatorial). Pointing down (axial) corresponds to the alpha anomer."'::jsonb, 'Beta = Up (Butterfly).', 1, 'EASY', 96, '{"real_type":"IDENTIFY_ERROR","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('83f7ee0f-a84e-4d7b-ada2-469e7c824555', 'exam-cnp-ch2', 'A student claims that starch and cellulose are identical because they are both glucose polymers. Identify the error.', 'SHORT_ANSWER', NULL, '"They differ in the stereochemistry of the glycosidic bond (alpha vs beta), which leads to completely different 3D structures and properties (digestible vs indigestible)."'::jsonb, 'Linkage matters.', 1, 'MEDIUM', 97, '{"real_type":"IDENTIFY_ERROR","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('10ca192f-6bad-4f34-997e-56c18d711702', 'exam-cnp-ch3', 'Why did the FDA issuing a policy statement in 1992 regarding stereoisomeric drugs?', 'MCQ', '["To ban all racemic drugs.","To require development of racemates only.","To ensure that the stereochemical composition is known and the choice of racemate vs enantiomer is justified.","To simplify the approval process for generic drugs."]'::jsonb, '"To ensure that the stereochemical composition is known and the choice of racemate vs enantiomer is justified."'::jsonb, 'The policy requires justification for developing a racemate.', 1, 'MEDIUM', 1, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('ee663083-1944-4ecf-9957-d40396995231', 'exam-cnp-ch3', 'Which term describes the phenomenon where one enantiomer is converted to the other in the body?', 'MCQ', '["Bioinversion","Bioconversion","Chiral Inversion","Racemization"]'::jsonb, '"Chiral Inversion"'::jsonb, 'Chiral inversion (e.g., Ibuprofen R to S) is a metabolic process.', 1, 'HARD', 2, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('12bfa00f-9950-4996-8ba1-fb57240bc88a', 'exam-cnp-ch3', 'In the context of chiral drugs, what is a **eutomer**?', 'MCQ', '["The enantiomer with the desired pharmacological activity.","The enantiomer with lower toxicity.","The inactive enantiomer.","The racemic mixture."]'::jsonb, '"The enantiomer with the desired pharmacological activity."'::jsonb, 'Eutomer = Good/Active isomer.', 1, 'EASY', 3, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('9ac30103-c994-4a69-a1e2-f761c1f2adf6', 'exam-cnp-ch3', 'Which of the following is a potential advantage of a **Chiral Switch**?', 'MCQ', '["Increased dosage required.","Reduced side effects.","Shorter patent life.","Lower manufacturing costs."]'::jsonb, '"Reduced side effects."'::jsonb, 'Eliminating the distomer can improve safety.', 1, 'MEDIUM', 4, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('120a9d8d-d541-4f5f-bb48-f19cfbb718a2', 'exam-cnp-ch3', 'The inactive or less active enantiomer is called the:', 'MCQ', '["Eutomer","Distomer","Isomer","Polymer"]'::jsonb, '"Distomer"'::jsonb, 'Distomer = Bad/Inactive isomer.', 1, 'HARD', 5, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('560af947-c33f-47af-8e47-1569bb34b922', 'exam-cnp-ch3', 'The ratio of the potency of the eutomer to the distomer is called the:', 'MCQ', '["Therapeutic Index","Eudismic Ratio","Enantiomeric Excess","Bioavailability"]'::jsonb, '"Eudismic Ratio"'::jsonb, 'Measure of stereoselectivity.', 1, 'EASY', 6, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('0b9cf189-dccc-4e53-88e9-e5094d90159e', 'exam-cnp-ch3', 'Which drug undergoes unidirectional chiral inversion from R to S in vivo?', 'MCQ', '["Thalidomide","Ibuprofen","Warfarin","Propranolol"]'::jsonb, '"Ibuprofen"'::jsonb, 'Inactive R converts to active S.', 1, 'MEDIUM', 7, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('22d287de-7311-467c-a9b5-a374cd968b9f', 'exam-cnp-ch3', 'Esomeprazole (Nexium) is the S-enantiomer of which drug?', 'MCQ', '["Omeprazole","Lansoprazole","Pantoprazole","Rabeprazole"]'::jsonb, '"Omeprazole"'::jsonb, 'Classic chiral switch example.', 1, 'HARD', 8, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('aa9b28d3-cc2a-49dd-966a-98069cad0250', 'exam-cnp-ch3', 'Which of the following is NOT a valid reason to develop a racemate?', 'MCQ', '["Rapid in vivo racemization","Both enantiomers have similar activity","Separation is too expensive (with no safety benefit)","The distomer is highly toxic"]'::jsonb, '"The distomer is highly toxic"'::jsonb, 'If the distomer is toxic, the racemate should NOT be developed.', 1, 'EASY', 9, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('a0b88298-24ee-4444-8376-3c4005c37c7d', 'exam-cnp-ch3', 'Levofloxacin is the active enantiomer of:', 'MCQ', '["Ciprofloxacin","Ofloxacin","Norfloxacin","Moxifloxacin"]'::jsonb, '"Ofloxacin"'::jsonb, 'Levo- isomer of Ofloxacin.', 1, 'MEDIUM', 10, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('de77beef-62b0-4798-886f-ecad67c9bbcb', 'exam-cnp-ch3', 'Which pharmacokinetic process can be stereoselective?', 'MCQ', '["Absorption","Distribution","Metabolism","All of the above"]'::jsonb, '"All of the above"'::jsonb, 'Chiral environments affect all PK stages.', 1, 'HARD', 11, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('3e007b3d-dfcb-4283-a638-c8640e265d4e', 'exam-cnp-ch3', 'The FDA 1992 policy requires that for a racemate:', 'MCQ', '["Only the eutomer be tested.","Only the distomer be tested.","The pharmacokinetic profile of each enantiomer be determined.","No testing is needed."]'::jsonb, '"The pharmacokinetic profile of each enantiomer be determined."'::jsonb, 'Must understand both components.', 1, 'EASY', 12, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('10e40f89-8701-40ef-baad-674bc2bb7cac', 'exam-cnp-ch3', 'Which drug caused blindness due to one of its enantiomers?', 'MCQ', '["Ethambutol","Thalidomide","Penicillamine","Naproxen"]'::jsonb, '"Ethambutol"'::jsonb, '(S,S)-Ethambutol is tuberculostatic; (R,R) causes optic neuritis.', 1, 'MEDIUM', 13, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('72ca8446-6a48-4a2b-99a8-980cc86d0898', 'exam-cnp-ch3', 'Escitalopram is the S-enantiomer of:', 'MCQ', '["Citalopram","Fluoxetine","Sertraline","Paroxetine"]'::jsonb, '"Citalopram"'::jsonb, 'SSRI antidepressant.', 1, 'HARD', 14, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('3c1a6b22-7f53-4bf2-b10f-8ceb965212b3', 'exam-cnp-ch3', 'Stereoselectivity in drug metabolism is primarily due to:', 'MCQ', '["Chiral enzymes (e.g., CYP450)","Chiral lipids","Chiral water","Achiral cofactors"]'::jsonb, '"Chiral enzymes (e.g., CYP450)"'::jsonb, 'Enzymes are proteins (chiral).', 1, 'EASY', 15, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('d4b6d8e8-45e5-48c9-9bc7-9214e3e8d769', 'exam-cnp-ch3', 'Which of the following describes a ''Chiral Switch''?', 'MCQ', '["Switching from a generic to a brand name.","Developing a single enantiomer from a previously marketed racemate.","Changing the route of administration.","Switching from a chiral to an achiral drug."]'::jsonb, '"Developing a single enantiomer from a previously marketed racemate."'::jsonb, 'Strategy to extend patent/improve safety.', 1, 'MEDIUM', 16, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b6fa4741-67e7-426a-a6b2-363692c50a75', 'exam-cnp-ch3', 'For a drug with a high eudismic ratio, the distomer is essentially:', 'MCQ', '["Highly active","Inactive (impurity)","Toxic","Mutagenic"]'::jsonb, '"Inactive (impurity)"'::jsonb, 'Large difference in potency.', 1, 'HARD', 17, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('377b01bf-458f-4991-8ea9-64377797b94d', 'exam-cnp-ch3', 'Which enantiomer of Warfarin is more potent?', 'MCQ', '["S-Warfarin","R-Warfarin","Both are equal","Neither is active"]'::jsonb, '"S-Warfarin"'::jsonb, 'S is 2-5 times more potent than R.', 1, 'EASY', 18, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('225b24ad-1a8c-47b9-b767-9ae43bb690b3', 'exam-cnp-ch3', 'The interaction of a chiral drug with a receptor is often described by which model?', 'MCQ', '["Lock and Key","Three-Point Attachment","Induced Fit","All of the above"]'::jsonb, '"Three-Point Attachment"'::jsonb, 'Explains stereospecificity.', 1, 'MEDIUM', 19, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('9e7d626f-9e16-498c-b289-e60f7d8e3805', 'exam-cnp-ch3', 'Which of the following is true about (S)-Naproxen?', 'MCQ', '["It is an NSAID.","It is a liver toxin.","It is a sedative.","It is inactive."]'::jsonb, '"It is an NSAID."'::jsonb, 'The S-isomer is the active anti-inflammatory; R is a liver toxin.', 1, 'HARD', 20, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('878014a4-6393-4751-b264-05baa0baadb6', 'exam-cnp-ch3', 'If a racemate is developed, the manufacturer must prove:', 'MCQ', '["That separation is impossible.","That the distomer is beneficial or inert.","That the drug is cheap.","That the drug is water soluble."]'::jsonb, '"That the distomer is beneficial or inert."'::jsonb, 'Safety justification.', 1, 'EASY', 21, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('9e29f255-86c8-47f6-aced-93f97e88f00a', 'exam-cnp-ch3', 'Which protein is primarily responsible for binding acidic drugs in plasma?', 'MCQ', '["Albumin","Alpha-1-acid glycoprotein","Hemoglobin","Collagen"]'::jsonb, '"Albumin"'::jsonb, 'Albumin (HSA) binds acidic drugs stereoselectively.', 1, 'MEDIUM', 22, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('7ef39bd1-d04d-48fe-bc72-527606a51cbc', 'exam-cnp-ch3', 'Which protein binds basic drugs?', 'MCQ', '["Albumin","Alpha-1-acid glycoprotein","Globulin","Fibrinogen"]'::jsonb, '"Alpha-1-acid glycoprotein"'::jsonb, 'AAG binds basic drugs.', 1, 'HARD', 23, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('a63d3281-1600-424c-9be2-58f14665ed39', 'exam-cnp-ch3', 'The term ''racemic switch'' is synonymous with:', 'MCQ', '["Chiral switch","Bioinversion","Resolution","Deracemization"]'::jsonb, '"Chiral switch"'::jsonb, 'Industry term.', 1, 'EASY', 24, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('bc1d64c0-d5d2-44e5-b7ce-507822ee4349', 'exam-cnp-ch3', 'Which of the following is a consequence of stereoselective metabolism?', 'MCQ', '["Different half-lives for enantiomers.","Identical clearance rates.","No change in ratio.","Equal toxicity."]'::jsonb, '"Different half-lives for enantiomers."'::jsonb, 'One isomer is metabolized faster.', 1, 'MEDIUM', 25, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('9b512c7b-f446-4e6b-a0df-aa06e139f380', 'exam-cnp-ch3', 'D-Penicillamine is used for rheumatoid arthritis. Why is L-Penicillamine avoided?', 'MCQ', '["It is inactive.","It is highly toxic (mutagenic).","It is too expensive.","It is unstable."]'::jsonb, '"It is highly toxic (mutagenic)."'::jsonb, 'Severe toxicity of L-isomer.', 1, 'HARD', 26, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('7a1699b7-1003-48fa-9055-2479b92d23ef', 'exam-cnp-ch3', 'Which technique is most commonly used to analyze the enantiomeric purity of drugs?', 'MCQ', '["NMR","Chiral HPLC","IR Spectroscopy","Mass Spectrometry"]'::jsonb, '"Chiral HPLC"'::jsonb, 'High Performance Liquid Chromatography with chiral columns.', 1, 'EASY', 27, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('1dcca0d3-67e7-482e-beb1-0d22fd3fa482', 'exam-cnp-ch3', 'The FDA considers enantiomers of a drug to be:', 'MCQ', '["The same active ingredient.","Different active ingredients.","Impurities.","Prodrugs."]'::jsonb, '"Different active ingredients."'::jsonb, 'They are distinct chemical entities.', 1, 'MEDIUM', 28, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('98f4ef0e-43ea-48ed-97e2-ee0c87931381', 'exam-cnp-ch3', 'Which of the following drugs is marketed as a racemate?', 'MCQ', '["Warfarin","Levofloxacin","Escitalopram","Naproxen"]'::jsonb, '"Warfarin"'::jsonb, 'Coumadin is racemic.', 1, 'HARD', 29, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('ca26377e-377f-4b96-b025-f5f2c04923f5', 'exam-cnp-ch3', 'Stereoisomers that differ in biological activity are often compared using:', 'MCQ', '["IC50 values","Molecular weights","Boiling points","Refractive indices"]'::jsonb, '"IC50 values"'::jsonb, 'Measure of potency.', 1, 'EASY', 30, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('628618df-e645-4b81-816d-61aca1304d7f', 'exam-cnp-ch3', 'Identify the chiral center in the Ibuprofen molecule.', 'MCQ', '["Alpha-carbon","Beta-carbon","Carboxyl carbon","Methyl carbon"]'::jsonb, '"Alpha-carbon"'::jsonb, 'The carbon adjacent to the carboxyl group.', 1, 'MEDIUM', 31, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch3_slide12.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('77f9a2fc-e31e-4985-be63-be5171e1e732', 'exam-cnp-ch3', 'Identify the functional group responsible for the acidity of Ibuprofen.', 'MCQ', '["Carboxylic acid","Alcohol","Ketone","Amine"]'::jsonb, '"Carboxylic acid"'::jsonb, 'COOH group.', 1, 'HARD', 32, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch3_slide12.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('e7753119-f4f9-4c4b-b695-53140f6667c7', 'exam-cnp-ch3', 'Which part of the Thalidomide molecule is the chiral center?', 'MCQ', '["Glutarimide ring carbon","Phthalimide ring","Amide nitrogen","Carbonyl oxygen"]'::jsonb, '"Glutarimide ring carbon"'::jsonb, 'C bonded to N and H.', 1, 'EASY', 33, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch3_slide5.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('287ee039-0b8c-4fe7-a358-af398eda925f', 'exam-cnp-ch3', 'Identify the structure of Esomeprazole.', 'MCQ', '["S-isomer","R-isomer","Racemate"]'::jsonb, '"S-isomer"'::jsonb, 'Single enantiomer.', 1, 'MEDIUM', 34, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch3_slide20.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('4e4ba488-787e-4c5a-ab74-bb98317a538a', 'exam-cnp-ch3', 'Identify the chiral center in Warfarin.', 'MCQ', '["Hemiketal carbon","Phenyl ring","Methyl group","Ketone"]'::jsonb, '"Hemiketal carbon"'::jsonb, 'C9.', 1, 'HARD', 35, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch3_slide15.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('db9d6d6b-bd43-416d-a065-13098e7bb8bd', 'exam-cnp-ch3', 'Which graph represents the plasma concentration of the Eutomer vs Distomer?', 'MCQ', '["Graph A (Higher curve)","Graph B (Lower curve)"]'::jsonb, '"Graph A (Higher curve)"'::jsonb, 'Depends on clearance, but usually different.', 1, 'EASY', 36, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch3_slide30.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('aeb1a87a-28b9-4504-b880-0838e6440789', 'exam-cnp-ch3', 'Select **all** reasons why pharmacokinetics might differ between enantiomers.', 'MULTI_SELECT', '["Different absorption rates via active transport.","Different plasma protein binding.","Different metabolic rates by chiral enzymes.","Different molecular weight."]'::jsonb, '["Different absorption rates via active transport.","Different plasma protein binding.","Different metabolic rates by chiral enzymes."]'::jsonb, 'Enantiomers have the same molecular weight.', 2, 'MEDIUM', 37, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('7603b8aa-2b35-4cda-9758-005bb4c177f0', 'exam-cnp-ch3', 'Which of the following drugs are marketed as **single enantiomers**?', 'MULTI_SELECT', '["Escitalopram","Levofloxacin","Ibuprofen (OTC)","Esomeprazole"]'::jsonb, '["Escitalopram","Levofloxacin","Esomeprazole"]'::jsonb, 'Ibuprofen is typically sold as a racemate.', 2, 'HARD', 38, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('9bc2cc06-3f5b-481b-a29a-a4ffd2a08989', 'exam-cnp-ch3', 'Select the drugs where the distomer contributes to toxicity.', 'MULTI_SELECT', '["Thalidomide","Ethambutol","Penicillamine","Ibuprofen"]'::jsonb, '["Thalidomide","Ethambutol","Penicillamine"]'::jsonb, 'Ibuprofen distomer is inverted to eutomer, not toxic.', 2, 'EASY', 39, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('bc37cdf7-4636-4c85-bb77-239d27062fb7', 'exam-cnp-ch3', 'Which of the following are regulatory requirements for a new chiral drug?', 'MULTI_SELECT', '["Development of a stereospecific assay.","Justification for developing a racemate.","Evaluation of PK/PD of both enantiomers.","Mandatory development of single enantiomer."]'::jsonb, '["Development of a stereospecific assay.","Justification for developing a racemate.","Evaluation of PK/PD of both enantiomers."]'::jsonb, 'Single enantiomer is not mandatory if racemate is justified.', 2, 'MEDIUM', 40, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('fb948722-dc1d-4e04-a8e6-f5cb138e46bf', 'exam-cnp-ch3', 'Select the factors that influence stereoselective protein binding.', 'MULTI_SELECT', '["Protein structure (chiral)","Drug configuration","pH","Temperature"]'::jsonb, '["Protein structure (chiral)","Drug configuration","pH","Temperature"]'::jsonb, 'All affect binding affinity.', 2, 'HARD', 41, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('57f9181d-a5b2-454f-8913-1edaf4722399', 'exam-cnp-ch3', 'Which enzymes are known to be stereoselective?', 'MULTI_SELECT', '["CYP2C9","CYP2D6","Esterases","Amylase"]'::jsonb, '["CYP2C9","CYP2D6","Esterases"]'::jsonb, 'Drug metabolizing enzymes.', 2, 'EASY', 42, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('5d3d1290-b04a-42f0-83d6-309aa7b85836', 'exam-cnp-ch3', 'Select the advantages of single-enantiomer drugs.', 'MULTI_SELECT', '["Lower dose","Reduced metabolic load","Simplified PK","Lower cost of synthesis"]'::jsonb, '["Lower dose","Reduced metabolic load","Simplified PK"]'::jsonb, 'Synthesis is often more expensive.', 2, 'MEDIUM', 43, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('0304ee5f-9677-4cb0-8e89-e467ec3ee3fa', 'exam-cnp-ch3', 'Which of the following undergo in vivo racemization?', 'MULTI_SELECT', '["Thalidomide","Ibuprofen","Oxazepam","Glucose"]'::jsonb, '["Thalidomide","Oxazepam"]'::jsonb, 'Ibuprofen is inversion (one way), not racemization (both ways). Oxazepam racemizes.', 2, 'HARD', 44, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('3ea84a8b-d30e-482f-a0ba-26b0c8558679', 'exam-cnp-ch3', 'Select the terms related to chiral pharmacology.', 'MULTI_SELECT', '["Eutomer","Distomer","Eudismic Ratio","Isomer"]'::jsonb, '["Eutomer","Distomer","Eudismic Ratio"]'::jsonb, 'Specific terms.', 2, 'EASY', 45, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('6fac34be-0e43-479a-b34e-913e11116b0c', 'exam-cnp-ch3', 'Which of the following are chiral NSAIDs?', 'MULTI_SELECT', '["Ibuprofen","Naproxen","Ketoprofen","Aspirin"]'::jsonb, '["Ibuprofen","Naproxen","Ketoprofen"]'::jsonb, 'Aspirin is achiral.', 2, 'MEDIUM', 46, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('e2ef59b7-489c-4bd4-b69e-fedc93a66540', 'exam-cnp-ch3', 'Select the methods to obtain single enantiomers.', 'MULTI_SELECT', '["Asymmetric synthesis","Resolution of racemate","Chiral pool synthesis","Mixing enantiomers"]'::jsonb, '["Asymmetric synthesis","Resolution of racemate","Chiral pool synthesis"]'::jsonb, 'Mixing creates a racemate.', 2, 'HARD', 47, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('8b189d83-bfff-4a7c-9050-3e1bbf00fd1d', 'exam-cnp-ch3', 'Which of the following are consequences of using a racemate?', 'MULTI_SELECT', '["Competition for binding sites","Complex PK","Possible toxicity from distomer","Always lower efficacy"]'::jsonb, '["Competition for binding sites","Complex PK","Possible toxicity from distomer"]'::jsonb, 'Efficacy depends on the drug.', 2, 'EASY', 48, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('44d63e8b-f4b9-4ae2-94f2-31ea2311b3b2', 'exam-cnp-ch3', 'True or False: The FDA requires all new chiral drugs to be developed as single enantiomers.', 'TRUE_FALSE', '["True","False"]'::jsonb, '"False"'::jsonb, 'Justification is required, not mandatory separation.', 1, 'MEDIUM', 49, '{"real_type":"TRUE_FALSE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('4b31ef50-6b0d-4fe5-af76-15734ca05172', 'exam-cnp-ch3', 'True or False: Enantiomers always have the same pharmacological activity.', 'TRUE_FALSE', '["True","False"]'::jsonb, '"False"'::jsonb, 'They usually differ.', 1, 'HARD', 50, '{"real_type":"TRUE_FALSE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('dba6c53d-75a8-486d-8a80-f1d378c031f7', 'exam-cnp-ch3', 'True or False: Chiral inversion occurs for all chiral drugs.', 'TRUE_FALSE', '["True","False"]'::jsonb, '"False"'::jsonb, 'Only specific drugs like profens.', 1, 'EASY', 51, '{"real_type":"TRUE_FALSE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('a3def785-fd94-43e6-b4b0-c89306616c8d', 'exam-cnp-ch3', 'The inactive or less active enantiomer in a racemic drug is referred to as the ______.', 'FILL_BLANK', NULL, '"distomer"'::jsonb, 'Distomer is the term for the enantiomer with lower or no desired activity.', 1, 'MEDIUM', 52, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('dec8baca-5736-4e02-8ff6-632eb019078c', 'exam-cnp-ch3', 'The ratio of the activity of the eutomer to the distomer is known as the ______ ratio.', 'FILL_BLANK', NULL, '"eudismic"'::jsonb, 'The eudismic ratio quantifies the difference in potency between enantiomers.', 1, 'HARD', 53, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('da94bd92-4f9e-48e9-9073-ffc6f75bbca0', 'exam-cnp-ch3', 'The active enantiomer is called the ______.', 'FILL_BLANK', NULL, '"eutomer"'::jsonb, 'Good isomer.', 1, 'EASY', 54, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('a291c828-6c0b-49d1-b1ee-d0ef791aab9d', 'exam-cnp-ch3', 'Developing a single enantiomer from a marketed racemate is called a chiral ______.', 'FILL_BLANK', NULL, '"switch"'::jsonb, 'Market strategy.', 1, 'MEDIUM', 55, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('32cd9b31-63ec-4138-be02-00c576da81b9', 'exam-cnp-ch3', 'Metabolic conversion of one enantiomer to its antipode is called chiral ______.', 'FILL_BLANK', NULL, '"inversion"'::jsonb, 'R to S.', 1, 'HARD', 56, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('af1b46dd-33e9-49b0-acbc-b33d9926889f', 'exam-cnp-ch3', 'Thalidomide causes birth defects, a property known as ______.', 'FILL_BLANK', NULL, '"teratogenicity"'::jsonb, 'Causing malformations.', 1, 'EASY', 57, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('84a3e447-d77f-4dab-989f-e77b059bb5cd', 'exam-cnp-ch3', 'The FDA policy on stereoisomers was issued in the year ______.', 'FILL_BLANK', NULL, '"1992"'::jsonb, 'Key regulatory date.', 1, 'MEDIUM', 58, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('9e3bd9f0-aa92-48ac-a3f5-f80aeb89024c', 'exam-cnp-ch3', 'Ibuprofen is sold as a racemate because the R-isomer converts to the ______-isomer in vivo.', 'FILL_BLANK', NULL, '"S"'::jsonb, 'Active form.', 1, 'HARD', 59, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('a4aea0bd-2c19-4665-94b1-80ec854c8784', 'exam-cnp-ch3', 'Separation of enantiomers using a chiral stationary phase is called chiral ______.', 'FILL_BLANK', NULL, '"chromatography"'::jsonb, 'HPLC/GC.', 1, 'EASY', 60, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('8e8781be-5f9c-4714-b2b7-1d74bb2e9dcb', 'exam-cnp-ch3', 'A mixture of equal parts of enantiomers is a ______.', 'FILL_BLANK', NULL, '"racemate"'::jsonb, 'Or racemic mixture.', 1, 'MEDIUM', 61, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b15d8f38-b736-4684-aa8e-03bbeb0fdb66', 'exam-cnp-ch3', 'The protein ______ binds acidic drugs in the blood.', 'FILL_BLANK', NULL, '"albumin"'::jsonb, 'HSA.', 1, 'HARD', 62, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('dff99baf-969a-47e2-aedb-1e17c09db942', 'exam-cnp-ch3', 'The protein ______ binds basic drugs in the blood.', 'FILL_BLANK', NULL, '"alpha-1-acid glycoprotein"'::jsonb, 'AAG.', 1, 'EASY', 63, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('1158a009-0b38-47f2-9d6b-ac55e4abcd50', 'exam-cnp-ch3', 'Stereoselectivity is due to the ______ nature of biological systems.', 'FILL_BLANK', NULL, '"chiral"'::jsonb, 'Proteins/DNA are chiral.', 1, 'MEDIUM', 64, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('21590d90-0bde-462f-a225-08b67e0df37c', 'exam-cnp-ch3', 'Esomeprazole is the S-enantiomer of ______.', 'FILL_BLANK', NULL, '"omeprazole"'::jsonb, 'Prilosec.', 1, 'HARD', 65, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('2aa5a60b-71be-48d0-9983-5b0d51e1d75f', 'exam-cnp-ch3', 'Levofloxacin is the L-isomer of ______.', 'FILL_BLANK', NULL, '"ofloxacin"'::jsonb, 'Antibiotic.', 1, 'EASY', 66, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('9dafd140-718e-4290-bb6e-7947c6089b99', 'exam-cnp-ch3', 'Match the drug to its chiral characteristic.', 'MATCHING', '[{"left":"Thalidomide","right":"Teratogenic distomer"},{"left":"Ibuprofen","right":"Unidirectional chiral inversion"},{"left":"Ethambutol","right":"One enantiomer causes blindness"}]'::jsonb, '{"Thalidomide":"Teratogenic distomer","Ibuprofen":"Unidirectional chiral inversion","Ethambutol":"One enantiomer causes blindness"}'::jsonb, 'Classic examples.', 2, 'MEDIUM', 67, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('a5ebfbfd-6419-4ede-993a-3fc0689f65e1', 'exam-cnp-ch3', 'Match the term to the definition.', 'MATCHING', '[{"left":"Eutomer","right":"Active enantiomer"},{"left":"Distomer","right":"Inactive/Toxic enantiomer"},{"left":"Racemate","right":"50:50 Mixture"}]'::jsonb, '{"Eutomer":"Active enantiomer","Distomer":"Inactive/Toxic enantiomer","Racemate":"50:50 Mixture"}'::jsonb, 'Terminology.', 2, 'HARD', 68, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('e9abb4ba-7b50-46e1-9a06-c14098382258', 'exam-cnp-ch3', 'Match the drug to its class.', 'MATCHING', '[{"left":"Escitalopram","right":"SSRI"},{"left":"Esomeprazole","right":"PPI"},{"left":"Levofloxacin","right":"Antibiotic"}]'::jsonb, '{"Escitalopram":"SSRI","Esomeprazole":"PPI","Levofloxacin":"Antibiotic"}'::jsonb, 'Pharmacological class.', 2, 'EASY', 69, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('46bff045-d384-4636-9fc8-d1d02ab5322a', 'exam-cnp-ch3', 'Match the protein to its binding preference.', 'MATCHING', '[{"left":"Albumin","right":"Acids"},{"left":"Alpha-1-acid glycoprotein","right":"Bases"},{"left":"Lipoprotein","right":"Neutrals"}]'::jsonb, '{"Albumin":"Acids","Alpha-1-acid glycoprotein":"Bases","Lipoprotein":"Neutrals"}'::jsonb, 'Plasma binding.', 2, 'MEDIUM', 70, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('47b747ad-a5c0-4d63-9a27-e558c370e1c9', 'exam-cnp-ch3', 'Match the process to the description.', 'MATCHING', '[{"left":"Racemization","right":"Conversion to 50:50 mix"},{"left":"Inversion","right":"Conversion to opposite enantiomer"},{"left":"Resolution","right":"Separation of enantiomers"}]'::jsonb, '{"Racemization":"Conversion to 50:50 mix","Inversion":"Conversion to opposite enantiomer","Resolution":"Separation of enantiomers"}'::jsonb, 'Chemical processes.', 2, 'HARD', 71, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('89719d1a-6869-4a98-859a-c21d99042751', 'exam-cnp-ch3', 'Match the drug pair (Racemate -> Single).', 'MATCHING', '[{"left":"Omeprazole","right":"Esomeprazole"},{"left":"Citalopram","right":"Escitalopram"},{"left":"Ofloxacin","right":"Levofloxacin"}]'::jsonb, '{"Omeprazole":"Esomeprazole","Citalopram":"Escitalopram","Ofloxacin":"Levofloxacin"}'::jsonb, 'Chiral switches.', 2, 'EASY', 72, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('8da10969-36c8-44c1-a703-f692b04e35ca', 'exam-cnp-ch3', 'Match the toxicity to the drug.', 'MATCHING', '[{"left":"Blindness","right":"Ethambutol"},{"left":"Phocomelia","right":"Thalidomide"},{"left":"Liver toxicity","right":"Naproxen (R-isomer)"}]'::jsonb, '{"Blindness":"Ethambutol","Phocomelia":"Thalidomide","Liver toxicity":"Naproxen (R-isomer)"}'::jsonb, 'Adverse effects.', 2, 'MEDIUM', 73, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('0302da3e-0e26-4f86-886c-26aefcf78654', 'exam-cnp-ch3', 'Match the year to the event.', 'MATCHING', '[{"left":"1960s","right":"Thalidomide Tragedy"},{"left":"1992","right":"FDA Policy Statement"},{"left":"2000s","right":"Rise of Chiral Switches"}]'::jsonb, '{"1992":"FDA Policy Statement","1960s":"Thalidomide Tragedy","2000s":"Rise of Chiral Switches"}'::jsonb, 'Timeline.', 2, 'HARD', 74, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('8cff224f-cece-403d-95f7-1a7db5e0ffc7', 'exam-cnp-ch3', 'Match the term to the symbol.', 'MATCHING', '[{"left":"Eudismic Ratio","right":"ER"},{"left":"Enantiomeric Excess","right":"ee"},{"left":"Specific Rotation","right":"[alpha]"}]'::jsonb, '{"Eudismic Ratio":"ER","Enantiomeric Excess":"ee","Specific Rotation":"[alpha]"}'::jsonb, 'Abbreviations.', 2, 'EASY', 75, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('50d37274-b6fd-49f8-95e9-cd1e46ba830e', 'exam-cnp-ch3', 'Match the interaction type to the model.', 'MATCHING', '[{"left":"Stereospecific","right":"3-Point Attachment"},{"left":"Non-specific","right":"2-Point Attachment"},{"left":"Induced","right":"Conformational Change"}]'::jsonb, '{"Stereospecific":"3-Point Attachment","Non-specific":"2-Point Attachment","Induced":"Conformational Change"}'::jsonb, 'Receptor theory.', 2, 'MEDIUM', 76, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b1d0d02e-b91e-4bdc-909f-63bea2d380b3', 'exam-cnp-ch3', 'Order the steps in the development of a chiral drug according to FDA guidelines.', 'MATCHING', '["Develop stereoselective assay","Determine pharmacokinetics of each enantiomer","Toxicology testing (if needed)","Clinical trials"]'::jsonb, '["Develop stereoselective assay","Determine pharmacokinetics of each enantiomer","Toxicology testing (if needed)","Clinical trials"]'::jsonb, 'Assay -> PK -> Tox -> Clinical.', 2, 'HARD', 77, '{"real_type":"ORDER_SEQUENCE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('4f6fff82-9b1d-415b-b650-eb685b5c0ec6', 'exam-cnp-ch3', 'Order the drugs by year of approval (Oldest to Newest).', 'MATCHING', '["Thalidomide","Omeprazole","Esomeprazole"]'::jsonb, '["Thalidomide","Omeprazole","Esomeprazole"]'::jsonb, '1950s -> 1989 -> 2001.', 2, 'EASY', 78, '{"real_type":"ORDER_SEQUENCE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('398e8433-67fa-435b-a846-c347837bdcdd', 'exam-cnp-ch3', 'Order the binding affinity (High to Low) for a typical stereoselective interaction.', 'MATCHING', '["Eutomer","Racemate","Distomer"]'::jsonb, '["Eutomer","Racemate","Distomer"]'::jsonb, 'Eutomer > Racemate (avg) > Distomer.', 2, 'MEDIUM', 79, '{"real_type":"ORDER_SEQUENCE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('bd1cb348-3d77-4b21-a480-97d5afa887c9', 'exam-cnp-ch3', 'Order the phases of drug action where chirality matters.', 'MATCHING', '["Absorption","Distribution","Metabolism","Receptor Binding"]'::jsonb, '["Absorption","Distribution","Metabolism","Receptor Binding"]'::jsonb, 'ADME -> PD.', 2, 'HARD', 80, '{"real_type":"ORDER_SEQUENCE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('c41c2fd7-7740-4a41-95b0-afb6452b3bfb', 'exam-cnp-ch3', 'Order the potency (High to Low).', 'MATCHING', '["S-Warfarin","Racemic Warfarin","R-Warfarin"]'::jsonb, '["S-Warfarin","Racemic Warfarin","R-Warfarin"]'::jsonb, 'S is most potent.', 2, 'EASY', 81, '{"real_type":"ORDER_SEQUENCE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('0c9b05c4-8645-447a-b793-e342649141d3', 'exam-cnp-ch3', 'Explain the concept of ''Chiral Switch'' and provide one commercial example.', 'SHORT_ANSWER', NULL, '"A chiral switch involves developing and marketing a single enantiomer of a drug that was previously approved and marketed as a racemate. Example: Esomeprazole (Nexium) developed from Omeprazole (Prilosec)."'::jsonb, 'Strategy.', 1, 'MEDIUM', 82, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('eda8777e-3ca9-4f32-9c73-6c06a1eb30d8', 'exam-cnp-ch3', 'Why is the **Three-Point Attachment** model important?', 'SHORT_ANSWER', NULL, '"It explains why enantiomers have different biological activities. A minimum of three points of interaction between the drug and the chiral receptor are required to distinguish between enantiomers."'::jsonb, 'Stereoselectivity basis.', 1, 'HARD', 83, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('4d91cc6b-5435-408b-a5b1-33c0b29b6583', 'exam-cnp-ch3', 'What is **Chiral Inversion**?', 'SHORT_ANSWER', NULL, '"It is the metabolic conversion of one enantiomer into its mirror image (antipode) within a biological system. For example, R-ibuprofen converts to S-ibuprofen."'::jsonb, 'Metabolic process.', 1, 'EASY', 84, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('e2169ff7-babb-472e-8d15-125123404a26', 'exam-cnp-ch3', 'Why did the FDA not ban racemic drugs?', 'SHORT_ANSWER', NULL, '"Because in some cases, both enantiomers are active, separation is too difficult/expensive, or they racemize in vivo, making a single enantiomer unnecessary or impossible to maintain."'::jsonb, 'Practicality.', 1, 'MEDIUM', 85, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('e083271d-276d-46e1-b9dc-66338d5f4cab', 'exam-cnp-ch3', 'What is the **Eudismic Ratio**?', 'SHORT_ANSWER', NULL, '"It is the ratio of the pharmacological activity (potency) of the eutomer to that of the distomer. A high ratio indicates high stereoselectivity."'::jsonb, 'Potency ratio.', 1, 'HARD', 86, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('a3ca1633-cd57-42ff-ba91-0b724f8f214d', 'exam-cnp-ch3', 'Discuss the significance of **Thalidomide**.', 'SHORT_ANSWER', NULL, '"Thalidomide revealed the catastrophic consequences of ignoring stereochemistry. The R-isomer was a safe sedative, but the S-isomer caused severe birth defects (phocomelia). This led to stricter drug regulations."'::jsonb, 'Historical impact.', 1, 'EASY', 87, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('3f7d3b48-e1be-46fc-b79a-136594823f34', 'exam-cnp-ch3', 'How does **Plasma Protein Binding** affect chiral drugs?', 'SHORT_ANSWER', NULL, '"Proteins like albumin are chiral. One enantiomer may bind more strongly than the other, leading to different concentrations of free (active) drug in the plasma."'::jsonb, 'Free drug fraction.', 1, 'MEDIUM', 88, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('249bb7b7-278c-4ff2-9cc3-7a3788a02c6b', 'exam-cnp-ch3', 'What is a **Distomer**?', 'SHORT_ANSWER', NULL, '"The distomer is the enantiomer of a chiral drug that has lower affinity for the receptor or is responsible for unwanted side effects/toxicity."'::jsonb, 'Bad isomer.', 1, 'HARD', 89, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('f60618ad-fc10-4f5a-9572-1a9384a0277d', 'exam-cnp-ch3', 'If the eudismic ratio of a drug is 100 and the IC50 of the eutomer is 5 nM, what is the IC50 of the distomer?', 'SHORT_ANSWER', NULL, '"500 nM"'::jsonb, 'Eudismic Ratio = Activity(Eutomer) / Activity(Distomer) = IC50(Distomer) / IC50(Eutomer). 100 = x / 5 => x = 500 nM.', 1, 'EASY', 90, '{"real_type":"CALCULATION","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('1368b8b3-f01e-46fc-85e5-a0b46bba780d', 'exam-cnp-ch3', 'A drug is administered as a racemate (500 mg). If the R-isomer is metabolized twice as fast as the S-isomer, which isomer will have a higher plasma concentration after 4 hours?', 'SHORT_ANSWER', NULL, '"S-isomer"'::jsonb, 'Slower metabolism = higher concentration.', 1, 'MEDIUM', 91, '{"real_type":"CALCULATION","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('98557ac4-4691-4848-9fcc-de7690ceca48', 'exam-cnp-ch3', 'Calculate the Enantiomeric Excess (ee) if a mixture contains 95% S-isomer and 5% R-isomer.', 'SHORT_ANSWER', NULL, '"90%"'::jsonb, '95 - 5 = 90%.', 1, 'HARD', 92, '{"real_type":"CALCULATION","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('57d4e876-da88-4d53-888d-e80c4f413568', 'exam-cnp-ch3', 'If the specific rotation of the pure eutomer is +100, what is the rotation of the racemate?', 'SHORT_ANSWER', NULL, '"0"'::jsonb, 'Racemates are optically inactive.', 1, 'EASY', 93, '{"real_type":"CALCULATION","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('4ff2a099-f1c8-43f6-ab6d-86befc29c2e6', 'exam-cnp-ch3', 'A pharmaceutical company is developing a new beta-blocker. The R-enantiomer is a potent beta-blocker, while the S-enantiomer causes toxicity. However, the synthesis produces a 50:50 mixture. What are the regulatory implications?', 'SHORT_ANSWER', NULL, '"The company must either develop a method to separate the enantiomers (resolution) or synthesize the R-enantiomer stereoselectively. Developing the racemate would likely be rejected due to the known toxicity of the distomer."'::jsonb, 'Safety first.', 2, 'MEDIUM', 94, '{"real_type":"CASE_STUDY","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('db8fc43d-09de-460c-9e0b-2adc02358940', 'exam-cnp-ch3', 'A generic company wants to market the racemate of a drug that is currently sold as a single enantiomer by the innovator. Is this allowed?', 'SHORT_ANSWER', NULL, '"Generally no, unless they prove the racemate is safe and effective as a *new* drug. It cannot be a generic equivalent of the single enantiomer because the active ingredient is different (mixture vs pure)."'::jsonb, 'Different active ingredient.', 2, 'HARD', 95, '{"real_type":"CASE_STUDY","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('c8a49354-e326-4b8c-97f4-010a7cecebcc', 'exam-cnp-ch3', 'A researcher claims that since the R-enantiomer converts to the S-enantiomer in vivo, they only need to test the toxicity of the R-enantiomer. Identify the error.', 'SHORT_ANSWER', NULL, '"This is incorrect. Since the S-enantiomer is formed in vivo, the organism is exposed to it. Therefore, the toxicity of the S-enantiomer (or the racemate) must also be evaluated to ensure safety."'::jsonb, 'Exposure to metabolite.', 1, 'EASY', 96, '{"real_type":"IDENTIFY_ERROR","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('ea5d92d8-e06a-496d-b5d3-65ad58ba8ee7', 'exam-cnp-ch3', 'A student states that ''Chiral Switch'' means changing the chirality of a molecule from R to S. Identify the error.', 'SHORT_ANSWER', NULL, '"A Chiral Switch refers to the commercial strategy of replacing a racemic drug with a single enantiomer product, not the chemical inversion of a molecule."'::jsonb, 'Business/Regulatory term vs Chemical term.', 1, 'MEDIUM', 97, '{"real_type":"IDENTIFY_ERROR","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('98712710-c771-4bd0-bd69-291c9ba03213', 'exam-cnp-final', 'Which of the following statements regarding the stereochemistry of glucose is **incorrect**?', 'MCQ', '["D-glucose is the enantiomer of L-glucose.","D-glucose has 4 chiral centers in its open-chain form.","Alpha-D-glucose and Beta-D-glucose are enantiomers.","Meso-tartaric acid can be formed by oxidation of galactose (not glucose)."]'::jsonb, '"Alpha-D-glucose and Beta-D-glucose are enantiomers."'::jsonb, 'Alpha and Beta anomers are diastereomers (specifically epimers at C1).', 1, 'MEDIUM', 1, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('6bd1ab0b-f69d-4eb6-b6b2-4bd93a1ee394', 'exam-cnp-final', 'In the context of drug approval, why is the ''chiral switch'' strategy economically attractive?', 'MCQ', '["It allows extending patent protection for a drug.","It eliminates the need for clinical trials.","It reduces the cost of synthesis.","It allows selling the racemate as a new drug."]'::jsonb, '"It allows extending patent protection for a drug."'::jsonb, 'Developing a single enantiomer can grant new patent exclusivity.', 1, 'HARD', 2, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('a80699b6-cf34-4849-a10d-df6336ebcf83', 'exam-cnp-final', 'Which of the following is an example of a **glycoside** used in medicine?', 'MCQ', '["Digoxin","Ibuprofen","Thalidomide","Cholesterol"]'::jsonb, '"Digoxin"'::jsonb, 'Digoxin is a cardiac glycoside.', 1, 'EASY', 3, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('f8b427f8-e9de-452f-9c68-647e33bbb9e6', 'exam-cnp-final', 'What is the relationship between D-Glucose and D-Mannose?', 'MCQ', '["Enantiomers","C-2 Epimers","C-4 Epimers","Anomers"]'::jsonb, '"C-2 Epimers"'::jsonb, 'They differ only at C-2.', 1, 'MEDIUM', 4, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('e497426f-d927-44ca-bdcd-0b591c39737e', 'exam-cnp-final', 'Which of the following is a non-reducing sugar?', 'MCQ', '["Glucose","Fructose","Sucrose","Maltose"]'::jsonb, '"Sucrose"'::jsonb, 'Sucrose has no free anomeric carbon.', 1, 'HARD', 5, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('d50a6751-273d-4cfc-a7d6-86677bb69d47', 'exam-cnp-final', 'The specific rotation of a pure enantiomer is +50°. What is the rotation of a racemic mixture?', 'MCQ', '["+50°","-50°","0°","+25°"]'::jsonb, '"0°"'::jsonb, 'Racemates are optically inactive.', 1, 'EASY', 6, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('a603482c-ed8f-4c8a-8f4e-fcc9e04a4aeb', 'exam-cnp-final', 'Which projection is best for visualizing the chair conformation of glucose?', 'MCQ', '["Fischer","Haworth","Chair","Newman"]'::jsonb, '"Chair"'::jsonb, 'Chair conformation shows axial/equatorial positions.', 1, 'MEDIUM', 7, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('58f63d50-90c0-47a9-9da5-4323b47d3f59', 'exam-cnp-final', 'Thalidomide is a teratogen. This means it causes:', 'MCQ', '["Cancer","Birth defects","Liver failure","Blindness"]'::jsonb, '"Birth defects"'::jsonb, 'Phocomelia.', 1, 'HARD', 8, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('86ed4274-5e03-4c7f-affc-a01ba9443e3b', 'exam-cnp-final', 'Which of the following is a polysaccharide?', 'MCQ', '["Glucose","Sucrose","Starch","Lactose"]'::jsonb, '"Starch"'::jsonb, 'Polymer of glucose.', 1, 'EASY', 9, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('8db69d67-d53f-432b-b29e-bd28dbab5a99', 'exam-cnp-final', 'What is the product of the reduction of D-glucose?', 'MCQ', '["Gluconic acid","Glucaric acid","Sorbitol","Mannitol"]'::jsonb, '"Sorbitol"'::jsonb, 'Reduction of aldehyde to alcohol.', 1, 'MEDIUM', 10, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('246273e9-a40e-49b8-95fe-e245b1d70280', 'exam-cnp-final', 'Which of the following amino acids is achiral?', 'MCQ', '["Alanine","Glycine","Leucine","Serine"]'::jsonb, '"Glycine"'::jsonb, 'R group is H.', 1, 'HARD', 11, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('a573edf9-fc4e-492d-896c-1f97911a44f3', 'exam-cnp-final', 'The anomeric carbon in a pyranose ring comes from which functional group?', 'MCQ', '["Alcohol","Ketone","Aldehyde/Ketone","Carboxylic acid"]'::jsonb, '"Aldehyde/Ketone"'::jsonb, 'Carbonyl carbon becomes anomeric.', 1, 'EASY', 12, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('e91f45d5-a25f-4910-bb2d-5b889896841b', 'exam-cnp-final', 'Which test is used to detect reducing sugars?', 'MCQ', '["Biuret Test","Benedict's Test","Iodine Test","Ninhydrin Test"]'::jsonb, '"Benedict's Test"'::jsonb, 'Reduces Cu2+ to Cu+.', 1, 'MEDIUM', 13, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('ab8e97df-3594-4a46-84ad-7c362aca7184', 'exam-cnp-final', 'Enantiomers can be separated by:', 'MCQ', '["Simple distillation","Chiral chromatography","Filtration","Centrifugation"]'::jsonb, '"Chiral chromatography"'::jsonb, 'Requires chiral environment.', 1, 'HARD', 14, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('6effdccf-403c-4187-ac7c-a27c8398ff21', 'exam-cnp-final', 'Which of the following is a ketose?', 'MCQ', '["Glucose","Galactose","Fructose","Ribose"]'::jsonb, '"Fructose"'::jsonb, 'Ketohexose.', 1, 'EASY', 15, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('0ce54e41-b218-414d-8890-57991cd4c2f0', 'exam-cnp-final', 'The linkage in cellulose is:', 'MCQ', '["Alpha-1,4","Beta-1,4","Alpha-1,6","Beta-1,6"]'::jsonb, '"Beta-1,4"'::jsonb, 'Beta linkage makes it indigestible by humans.', 1, 'MEDIUM', 16, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('768a821b-e843-4136-af99-96588b279ecc', 'exam-cnp-final', 'Which of the following is a meso compound?', 'MCQ', '["(2R,3R)-tartaric acid","(2S,3S)-tartaric acid","(2R,3S)-tartaric acid","None"]'::jsonb, '"(2R,3S)-tartaric acid"'::jsonb, 'Internal plane of symmetry.', 1, 'HARD', 17, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('862fd223-ebaa-4b23-a639-8bc4cc57415a', 'exam-cnp-final', 'Which drug is an example of a chiral switch?', 'MCQ', '["Aspirin","Esomeprazole","Paracetamol","Metformin"]'::jsonb, '"Esomeprazole"'::jsonb, 'From Omeprazole.', 1, 'EASY', 18, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('9f16904b-0290-4736-8a5c-48505aa87897', 'exam-cnp-final', 'What is the major storage polysaccharide in animals?', 'MCQ', '["Starch","Cellulose","Glycogen","Chitin"]'::jsonb, '"Glycogen"'::jsonb, 'Animal starch.', 1, 'MEDIUM', 19, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('3dd5568e-79ec-4c8e-a7d3-601d02db3a4e', 'exam-cnp-final', 'Which of the following is NOT a chiral center?', 'MCQ', '["A carbon with 4 different groups","A nitrogen in a quaternary ammonium salt with 4 different groups","A carbon in a double bond","A sulfur in a sulfoxide with different groups"]'::jsonb, '"A carbon in a double bond"'::jsonb, 'sp2 carbons are planar.', 1, 'HARD', 20, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b867b44f-3c85-4c33-ab88-26e09329f2d4', 'exam-cnp-final', 'Mutarotation refers to the change in optical rotation due to:', 'MCQ', '["Racemization","Interconversion of alpha and beta anomers","Hydrolysis","Oxidation"]'::jsonb, '"Interconversion of alpha and beta anomers"'::jsonb, 'Equilibrium in solution.', 1, 'EASY', 21, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('c39fe9b1-1a4a-48ff-bc76-5f46be8bf6e0', 'exam-cnp-final', 'Which of the following is a disaccharide?', 'MCQ', '["Glucose","Maltose","Starch","Ribose"]'::jsonb, '"Maltose"'::jsonb, 'Glucose + Glucose.', 1, 'MEDIUM', 22, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('5ab82c25-a78f-4610-ad2d-69df2f1af250', 'exam-cnp-final', 'The Cahn-Ingold-Prelog priority is based on:', 'MCQ', '["Atomic mass","Atomic number","Electronegativity","Size"]'::jsonb, '"Atomic number"'::jsonb, 'Higher Z = Higher priority.', 1, 'HARD', 23, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('ab97e0f7-405a-41d9-bac1-22722ce0027a', 'exam-cnp-final', 'Which of the following is true for diastereomers?', 'MCQ', '["They are mirror images.","They have identical physical properties.","They can be separated by physical methods.","They must be meso."]'::jsonb, '"They can be separated by physical methods."'::jsonb, 'Different BP/MP/Solubility.', 1, 'EASY', 24, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('082b43d7-429a-4bf8-9d4a-fa694e257388', 'exam-cnp-final', 'Which sugar is found in DNA?', 'MCQ', '["Ribose","Deoxyribose","Glucose","Fructose"]'::jsonb, '"Deoxyribose"'::jsonb, '2-deoxy-D-ribose.', 1, 'MEDIUM', 25, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('e1fc13da-fe61-4639-b8bc-3523b46ff0c2', 'exam-cnp-final', 'Which of the following is a reducing sugar?', 'MCQ', '["Sucrose","Trehalose","Lactose","Methyl glucoside"]'::jsonb, '"Lactose"'::jsonb, 'Has free anomeric carbon.', 1, 'HARD', 26, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('2f41f7a0-db26-4e48-bb6b-ff5a9778c1bf', 'exam-cnp-final', 'The number of stereoisomers of an aldohexose is:', 'MCQ', '["4","8","16","32"]'::jsonb, '"16"'::jsonb, '2^4 = 16.', 1, 'EASY', 27, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('c225713f-369c-4c70-bd45-d782fe448972', 'exam-cnp-final', 'Which of the following is a component of starch?', 'MCQ', '["Amylose","Cellulose","Glycogen","Chitin"]'::jsonb, '"Amylose"'::jsonb, 'Amylose and Amylopectin.', 1, 'MEDIUM', 28, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('31c739a8-f82d-4ae2-b4ed-55aa5eb1bc27', 'exam-cnp-final', 'Which term describes the 50:50 mixture of enantiomers?', 'MCQ', '["Meso","Racemic","Pure","Anomeric"]'::jsonb, '"Racemic"'::jsonb, 'Racemate.', 1, 'HARD', 29, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b93c3eb7-0efb-4039-ae35-7c9bed08016c', 'exam-cnp-final', 'Which of the following is an essential amino acid?', 'MCQ', '["Alanine","Leucine","Serine","Glutamate"]'::jsonb, '"Leucine"'::jsonb, 'Must be obtained from diet.', 1, 'EASY', 30, '{"real_type":"MCQ","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('4b2775b7-31f7-42ac-8212-56efa6fa5e5b', 'exam-cnp-final', 'Identify the glycosidic bond type in Maltose (alpha-1,4 vs beta-1,4).', 'MCQ', '["Alpha-1,4","Beta-1,4","Alpha-1,6","Beta-1,6"]'::jsonb, '"Alpha-1,4"'::jsonb, 'Maltose consists of two glucose units linked by an alpha-1,4-glycosidic bond.', 1, 'MEDIUM', 31, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide83.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('f3d72ed6-567d-4245-9081-8b29d7e7ac72', 'exam-cnp-final', 'Identify the anomer shown in the Haworth projection.', 'MCQ', '["Alpha","Beta"]'::jsonb, '"Beta"'::jsonb, 'OH is up (equatorial).', 1, 'HARD', 32, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide20.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('87c7711a-c03d-4aed-95f7-f4c68d8a050b', 'exam-cnp-final', 'Identify the molecule shown.', 'MCQ', '["Glucose","Fructose","Ribose","Galactose"]'::jsonb, '"Glucose"'::jsonb, 'Aldohexose structure.', 1, 'EASY', 33, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide10.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('a288650a-6527-4615-9822-d4fd10731d39', 'exam-cnp-final', 'Is the linkage shown alpha or beta?', 'MCQ', '["Alpha","Beta"]'::jsonb, '"Beta"'::jsonb, 'Bond points up.', 1, 'MEDIUM', 34, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide85.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('fb4b2d79-e431-454c-940a-6cba8e3ee63b', 'exam-cnp-final', 'Identify the chiral center.', 'MCQ', '["C1","C2","C3","C4"]'::jsonb, '"C2"'::jsonb, 'Asymmetric carbon.', 1, 'HARD', 35, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide5.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b9f91662-379c-4caa-aa83-369da4802b63', 'exam-cnp-final', 'Which conformation is shown?', 'MCQ', '["Chair","Boat"]'::jsonb, '"Chair"'::jsonb, 'Stable form.', 1, 'EASY', 36, '{"real_type":"MCQ","image_url":"/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide30.png"}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('825dc91a-5151-4800-9691-ec3b86542853', 'exam-cnp-final', 'Select **all** true statements about **enantiomers**.', 'MULTI_SELECT', '["They have identical boiling points.","They rotate plane-polarized light in opposite directions.","They react at the same rate with achiral reagents.","They always have different biological activities."]'::jsonb, '["They have identical boiling points.","They rotate plane-polarized light in opposite directions.","They react at the same rate with achiral reagents."]'::jsonb, 'Often different bio-activity, but not always.', 2, 'MEDIUM', 37, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('3ce997ad-2bac-4bdb-8066-8bcd11e8d278', 'exam-cnp-final', 'Select the reducing sugars.', 'MULTI_SELECT', '["Glucose","Fructose","Sucrose","Maltose"]'::jsonb, '["Glucose","Fructose","Maltose"]'::jsonb, 'Sucrose is non-reducing.', 2, 'HARD', 38, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('86ab2ad7-cc18-40ab-93bc-61bb9f74c2b2', 'exam-cnp-final', 'Select the chiral molecules.', 'MULTI_SELECT', '["2-butanol","2-propanol","Lactic acid","Acetone"]'::jsonb, '["2-butanol","Lactic acid"]'::jsonb, 'Have chiral centers.', 2, 'EASY', 39, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('90f1e361-c70d-47ae-924a-68ca65fefbff', 'exam-cnp-final', 'Select the polysaccharides.', 'MULTI_SELECT', '["Starch","Glycogen","Cellulose","Sucrose"]'::jsonb, '["Starch","Glycogen","Cellulose"]'::jsonb, 'Sucrose is a disaccharide.', 2, 'MEDIUM', 40, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('e88b5111-e2a6-4281-931d-80a6581aef9e', 'exam-cnp-final', 'Select the properties that differ between diastereomers.', 'MULTI_SELECT', '["Boiling point","Melting point","Solubility","Molecular formula"]'::jsonb, '["Boiling point","Melting point","Solubility"]'::jsonb, 'Formula is same.', 2, 'HARD', 41, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('6d08d694-235c-4bd8-9782-4ddbd9b29903', 'exam-cnp-final', 'Select the components of Sucrose.', 'MULTI_SELECT', '["Glucose","Fructose","Galactose","Ribose"]'::jsonb, '["Glucose","Fructose"]'::jsonb, 'Glc + Fru.', 2, 'EASY', 42, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b90a4020-6283-41a0-8a3f-f2ef248bc1f0', 'exam-cnp-final', 'Select the aldoses.', 'MULTI_SELECT', '["Glucose","Galactose","Ribose","Fructose"]'::jsonb, '["Glucose","Galactose","Ribose"]'::jsonb, 'Fructose is a ketose.', 2, 'MEDIUM', 43, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('c37a60dd-077e-436a-a038-365516bbfe4d', 'exam-cnp-final', 'Select the drugs that are single enantiomers.', 'MULTI_SELECT', '["Esomeprazole","Levofloxacin","Escitalopram","Ibuprofen (OTC)"]'::jsonb, '["Esomeprazole","Levofloxacin","Escitalopram"]'::jsonb, 'Ibuprofen is racemic.', 2, 'HARD', 44, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('e1880ef1-cf3a-4406-9007-cef1c308ae35', 'exam-cnp-final', 'Select the terms associated with mutarotation.', 'MULTI_SELECT', '["Alpha anomer","Beta anomer","Open chain","Racemization"]'::jsonb, '["Alpha anomer","Beta anomer","Open chain"]'::jsonb, 'Not racemization.', 2, 'EASY', 45, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('99f2a3fa-85de-47ba-af14-4cbfab0fe695', 'exam-cnp-final', 'Select the tests for carbohydrates.', 'MULTI_SELECT', '["Molisch Test","Benedict's Test","Biuret Test","Fehling's Test"]'::jsonb, '["Molisch Test","Benedict's Test","Fehling's Test"]'::jsonb, 'Biuret is for proteins.', 2, 'MEDIUM', 46, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b7b1ccbf-66b5-4633-be4f-4089e0d5a425', 'exam-cnp-final', 'Select the achiral amino acids.', 'MULTI_SELECT', '["Glycine","Alanine","Valine","Proline"]'::jsonb, '["Glycine"]'::jsonb, 'Only Glycine.', 2, 'HARD', 47, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('414e97eb-71a3-4253-bb6d-b9163ecb28fe', 'exam-cnp-final', 'Select the factors affecting optical rotation.', 'MULTI_SELECT', '["Concentration","Path length","Temperature","Wavelength"]'::jsonb, '["Concentration","Path length","Temperature","Wavelength"]'::jsonb, 'All affect alpha.', 2, 'EASY', 48, '{"real_type":"MULTI_SELECT","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('8c55cf60-77ee-4c94-9328-12449361b9d5', 'exam-cnp-final', 'True or False: A racemic mixture can be resolved by simple distillation.', 'TRUE_FALSE', '["True","False"]'::jsonb, '"False"'::jsonb, 'Enantiomers have identical boiling points.', 1, 'MEDIUM', 49, '{"real_type":"TRUE_FALSE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('2b408691-9dde-4166-baae-96b00abdb7db', 'exam-cnp-final', 'True or False: All monosaccharides are reducing sugars.', 'TRUE_FALSE', '["True","False"]'::jsonb, '"True"'::jsonb, 'They all have free carbonyls in open chain.', 1, 'HARD', 50, '{"real_type":"TRUE_FALSE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('e76e164d-2166-49a7-87de-bc695a74c607', 'exam-cnp-final', 'True or False: Cellulose is a branched polymer.', 'TRUE_FALSE', '["True","False"]'::jsonb, '"False"'::jsonb, 'Linear.', 1, 'EASY', 51, '{"real_type":"TRUE_FALSE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('cc4a4d75-63e4-4d31-8b5b-203f9046c621', 'exam-cnp-final', 'The specific rotation of a pure enantiomer is +50°. A mixture has an observed rotation of -10°. The % composition of the (-) enantiomer is ______%.', 'FILL_BLANK', NULL, '"60"'::jsonb, '20% ee of (-). 60% (-) and 40% (+).', 1, 'MEDIUM', 52, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('affd992f-1dcf-47b1-9dc1-85f56df475e6', 'exam-cnp-final', 'Glucose and Galactose are C-______ epimers.', 'FILL_BLANK', NULL, '"4"'::jsonb, 'Differ at C4.', 1, 'HARD', 53, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('a5358937-a6c5-4816-a602-0dd7b1827252', 'exam-cnp-final', 'The bond connecting two sugar units is called a ______ bond.', 'FILL_BLANK', NULL, '"glycosidic"'::jsonb, 'Ether linkage.', 1, 'EASY', 54, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b0e06bdf-0339-4c0c-b4f3-d037f880bc74', 'exam-cnp-final', 'Sucrose is composed of Glucose and ______.', 'FILL_BLANK', NULL, '"Fructose"'::jsonb, 'Disaccharide.', 1, 'MEDIUM', 55, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('763b4bfc-8790-4435-8dd5-dfc19aafbadb', 'exam-cnp-final', 'The storage form of glucose in plants is ______.', 'FILL_BLANK', NULL, '"starch"'::jsonb, 'Amylose/Amylopectin.', 1, 'HARD', 56, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('5c1b1d4f-028d-43de-a0be-7c840d6c3651', 'exam-cnp-final', 'A molecule that is non-superimposable on its mirror image is ______.', 'FILL_BLANK', NULL, '"chiral"'::jsonb, 'Definition.', 1, 'EASY', 57, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('7c4a225b-e3f3-4587-98e1-2602a3bef015', 'exam-cnp-final', 'The process of separating enantiomers is called ______.', 'FILL_BLANK', NULL, '"resolution"'::jsonb, 'Separation.', 1, 'MEDIUM', 58, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('ba24a80b-5a58-463a-b13d-f92f5734facc', 'exam-cnp-final', 'Aldehydes reduce Benedict''s reagent to form a ______ precipitate.', 'FILL_BLANK', NULL, '"red"'::jsonb, 'Cu2O.', 1, 'HARD', 59, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('82f4c2f8-a8b5-4381-aee4-be51ead50cde', 'exam-cnp-final', 'The active enantiomer of a drug is called the ______.', 'FILL_BLANK', NULL, '"eutomer"'::jsonb, 'Good isomer.', 1, 'EASY', 60, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('01082e4f-d9d6-4691-b5d0-f720374adf74', 'exam-cnp-final', 'Fructose is a ______-hexose.', 'FILL_BLANK', NULL, '"keto"'::jsonb, 'Ketone group.', 1, 'MEDIUM', 61, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('4e74223b-3270-45c7-afe9-9db28cef6fc1', 'exam-cnp-final', 'The number of carbons in a pentose is ______.', 'FILL_BLANK', NULL, '"5"'::jsonb, 'Penta = 5.', 1, 'HARD', 62, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('daa29634-6e6b-4bae-bfa4-eebafa466a10', 'exam-cnp-final', 'Enantiomers rotate light in ______ directions.', 'FILL_BLANK', NULL, '"opposite"'::jsonb, '+ and -.', 1, 'EASY', 63, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('3e631fc9-1f02-492b-a118-b3d5e2ed3255', 'exam-cnp-final', 'Meso compounds are optically ______.', 'FILL_BLANK', NULL, '"inactive"'::jsonb, 'Zero rotation.', 1, 'MEDIUM', 64, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('7b657ca5-2b16-40d1-bdf7-e5cf3c9caf4d', 'exam-cnp-final', 'The linear polymer of glucose in starch is called ______.', 'FILL_BLANK', NULL, '"amylose"'::jsonb, 'Alpha-1,4.', 1, 'HARD', 65, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('e89ad17a-e3cc-4e6e-baa5-ab6418f98b1d', 'exam-cnp-final', 'The branched polymer of glucose in starch is called ______.', 'FILL_BLANK', NULL, '"amylopectin"'::jsonb, 'Alpha-1,6 branches.', 1, 'EASY', 66, '{"real_type":"FILL_BLANK","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('3bfe81bf-8daa-46be-beef-8922468b3f21', 'exam-cnp-final', 'Match the molecule to its class.', 'MATCHING', '[{"left":"Fructose","right":"Ketohexose"},{"left":"Ribose","right":"Aldopentose"},{"left":"Glyceraldehyde","right":"Aldotriose"}]'::jsonb, '{"Fructose":"Ketohexose","Ribose":"Aldopentose","Glyceraldehyde":"Aldotriose"}'::jsonb, 'Classification.', 2, 'MEDIUM', 67, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('088934ec-4f33-481d-92aa-a78c39de040b', 'exam-cnp-final', 'Match the disaccharide to its monomers.', 'MATCHING', '[{"left":"Sucrose","right":"Glucose + Fructose"},{"left":"Lactose","right":"Glucose + Galactose"},{"left":"Maltose","right":"Glucose + Glucose"}]'::jsonb, '{"Sucrose":"Glucose + Fructose","Lactose":"Glucose + Galactose","Maltose":"Glucose + Glucose"}'::jsonb, 'Composition.', 2, 'HARD', 68, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b16bc301-b002-4dac-9cfa-161b0a3c2542', 'exam-cnp-final', 'Match the term to the definition.', 'MATCHING', '[{"left":"Enantiomers","right":"Mirror images"},{"left":"Diastereomers","right":"Non-mirror images"},{"left":"Meso","right":"Achiral with chiral centers"}]'::jsonb, '{"Enantiomers":"Mirror images","Diastereomers":"Non-mirror images","Meso":"Achiral with chiral centers"}'::jsonb, 'Stereochem terms.', 2, 'EASY', 69, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('096443ec-49ec-40f7-9edb-9723b3d8f1b5', 'exam-cnp-final', 'Match the test to the target.', 'MATCHING', '[{"left":"Benedict's","right":"Reducing Sugars"},{"left":"Iodine","right":"Starch"},{"left":"Ninhydrin","right":"Amino Acids"}]'::jsonb, '{"Benedict's":"Reducing Sugars","Iodine":"Starch","Ninhydrin":"Amino Acids"}'::jsonb, 'Chemical tests.', 2, 'MEDIUM', 70, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('d4a38f4f-a4d5-4ed6-b4e1-d016099e2c8a', 'exam-cnp-final', 'Match the drug to the effect.', 'MATCHING', '[{"left":"Thalidomide","right":"Teratogen"},{"left":"Ibuprofen","right":"Anti-inflammatory"},{"left":"Digoxin","right":"Heart Failure"}]'::jsonb, '{"Thalidomide":"Teratogen","Ibuprofen":"Anti-inflammatory","Digoxin":"Heart Failure"}'::jsonb, 'Pharmacology.', 2, 'HARD', 71, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('edad3930-fa6f-4e34-9c50-17c092a82807', 'exam-cnp-final', 'Match the linkage to the polymer.', 'MATCHING', '[{"left":"Alpha-1,4","right":"Starch"},{"left":"Beta-1,4","right":"Cellulose"},{"left":"Alpha-1,6","right":"Glycogen (Branch)"}]'::jsonb, '{"Alpha-1,4":"Starch","Beta-1,4":"Cellulose","Alpha-1,6":"Glycogen (Branch)"}'::jsonb, 'Glycosidic bonds.', 2, 'EASY', 72, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('499adb82-4e55-4652-9736-869d381e20e0', 'exam-cnp-final', 'Match the projection to the use.', 'MATCHING', '[{"left":"Fischer","right":"Open chain sugars"},{"left":"Haworth","right":"Cyclic sugars"},{"left":"Chair","right":"Conformation"}]'::jsonb, '{"Fischer":"Open chain sugars","Haworth":"Cyclic sugars","Chair":"Conformation"}'::jsonb, 'Visualizations.', 2, 'MEDIUM', 73, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('3d8dd6d7-b91f-4205-a157-3e74df44a68a', 'exam-cnp-final', 'Match the epimer pair.', 'MATCHING', '[{"left":"Glucose/Mannose","right":"C2"},{"left":"Glucose/Galactose","right":"C4"},{"left":"Ribose/Arabinose","right":"C2"}]'::jsonb, '{"Glucose/Mannose":"C2","Glucose/Galactose":"C4","Ribose/Arabinose":"C2"}'::jsonb, 'Epimers.', 2, 'HARD', 74, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('54765f56-75ea-4c26-9a50-1ccbe0f5ca8b', 'exam-cnp-final', 'Match the chiral term.', 'MATCHING', '[{"left":"R/S","right":"Configuration"},{"left":"+/-","right":"Rotation"},{"left":"D/L","right":"Relative Configuration"}]'::jsonb, '{"R/S":"Configuration","+/-":"Rotation","D/L":"Relative Configuration"}'::jsonb, 'Nomenclature.', 2, 'EASY', 75, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b428096e-bfa3-463b-9c0b-6f48dd95b1fd', 'exam-cnp-final', 'Match the functional group.', 'MATCHING', '[{"left":"Aldehyde","right":"R-CHO"},{"left":"Ketone","right":"R-CO-R"},{"left":"Alcohol","right":"R-OH"}]'::jsonb, '{"Aldehyde":"R-CHO","Ketone":"R-CO-R","Alcohol":"R-OH"}'::jsonb, 'Chemistry.', 2, 'MEDIUM', 76, '{"real_type":"MATCHING","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('4987fc90-8827-4704-9d1c-6f19e995e0b8', 'exam-cnp-final', 'Order the following from smallest to largest.', 'MATCHING', '["Triose","Tetrose","Pentose","Hexose"]'::jsonb, '["Triose","Tetrose","Pentose","Hexose"]'::jsonb, 'Ordering by number of carbon atoms: 3, 4, 5, 6.', 2, 'HARD', 77, '{"real_type":"ORDER_SEQUENCE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('830e4c6c-0363-433e-9a83-654c7a8e14b8', 'exam-cnp-final', 'Order the steps in the Haworth projection drawing.', 'MATCHING', '["Draw ring","Place anomeric OH","Place other groups","Determine alpha/beta"]'::jsonb, '["Draw ring","Place anomeric OH","Place other groups","Determine alpha/beta"]'::jsonb, 'Process.', 2, 'EASY', 78, '{"real_type":"ORDER_SEQUENCE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('f78f99a5-f815-4526-8dbb-0f2844bf8f3c', 'exam-cnp-final', 'Order the sweetness (Low to High).', 'MATCHING', '["Lactose","Glucose","Sucrose","Fructose"]'::jsonb, '["Lactose","Glucose","Sucrose","Fructose"]'::jsonb, 'Fructose is sweetest.', 2, 'MEDIUM', 79, '{"real_type":"ORDER_SEQUENCE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('b1f9cddb-1182-4003-8716-91c5fc167735', 'exam-cnp-final', 'Order the priority of groups (CIP) on Glyceraldehyde.', 'MATCHING', '["-OH","-CHO","-CH2OH","-H"]'::jsonb, '["-OH","-CHO","-CH2OH","-H"]'::jsonb, 'O > C=O > C-O > H.', 2, 'HARD', 80, '{"real_type":"ORDER_SEQUENCE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('0c87e627-12a3-4d04-8dc1-7316eb5c711a', 'exam-cnp-final', 'Order the stability of cyclohexane conformations (Most to Least).', 'MATCHING', '["Chair","Twist Boat","Boat","Half Chair"]'::jsonb, '["Chair","Twist Boat","Boat","Half Chair"]'::jsonb, 'Energy levels.', 2, 'EASY', 81, '{"real_type":"ORDER_SEQUENCE","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('532182fd-b55e-4fc1-a52a-7e9f63e48b93', 'exam-cnp-final', 'Discuss the importance of stereochemistry in the interaction between a drug and its receptor.', 'SHORT_ANSWER', NULL, '"Receptors are chiral biological macromolecules (proteins). Drug-receptor interaction is like a 'hand-in-glove' fit. One enantiomer may fit perfectly (eutomer), while the other may not fit or bind differently (distomer), leading to different pharmacological effects."'::jsonb, 'Three-point attachment.', 1, 'MEDIUM', 82, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('a993e857-1c00-4510-9977-b5f3b91c4037', 'exam-cnp-final', 'Explain why **Cellulose** is indigestible by humans.', 'SHORT_ANSWER', NULL, '"Cellulose contains beta-1,4-glycosidic bonds. Humans lack the enzyme cellulase required to hydrolyze these bonds, so we cannot digest it."'::jsonb, 'Enzyme specificity.', 1, 'HARD', 83, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('2b392a07-ef18-4631-a287-7449c59573f8', 'exam-cnp-final', 'What is **Mutarotation**?', 'SHORT_ANSWER', NULL, '"Mutarotation is the change in specific rotation of a chiral compound (like glucose) in solution over time, due to the equilibrium between alpha and beta anomers via the open-chain form."'::jsonb, 'Dynamic equilibrium.', 1, 'EASY', 84, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('66974a90-93a4-4408-be0d-27c7b3de89b1', 'exam-cnp-final', 'Define **Epimers**.', 'SHORT_ANSWER', NULL, '"Epimers are diastereomers that differ in configuration at only one chiral center."'::jsonb, 'Specific type of diastereomer.', 1, 'MEDIUM', 85, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('56ec7f0a-2664-441b-85a4-0654cb1ddfcb', 'exam-cnp-final', 'Why is **Sucrose** a non-reducing sugar?', 'SHORT_ANSWER', NULL, '"Because the glycosidic bond involves the anomeric carbons of both glucose and fructose, leaving no free anomeric carbon to open up and reduce reagents."'::jsonb, 'No free hemiacetal.', 1, 'HARD', 86, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('5b2af59b-523b-4c2d-9f1e-c13ab61f3da0', 'exam-cnp-final', 'What is a **Racemic Mixture**?', 'SHORT_ANSWER', NULL, '"A 1:1 mixture of enantiomers that is optically inactive."'::jsonb, '50:50 mix.', 1, 'EASY', 87, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('83c28f57-f125-439d-89a0-cf95eca9cb7e', 'exam-cnp-final', 'Explain the difference between **Starch** and **Glycogen**.', 'SHORT_ANSWER', NULL, '"Both are polymers of alpha-D-glucose. Starch (plants) has amylose (linear) and amylopectin (branched). Glycogen (animals) is similar to amylopectin but more highly branched."'::jsonb, 'Branching density.', 1, 'MEDIUM', 88, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('298e8ccd-fa5a-48ed-879d-8749a055c448', 'exam-cnp-final', 'What is the **Anomeric Effect**?', 'SHORT_ANSWER', NULL, '"The preference for electronegative substituents at the anomeric position to be axial rather than equatorial, contrary to steric prediction."'::jsonb, 'Electronic effect.', 1, 'HARD', 89, '{"real_type":"SHORT_ANSWER","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('830cf442-2b63-4fd0-81ae-3bf9ff6c2aa3', 'exam-cnp-final', 'Calculate the number of stereoisomers for an aldohexose (e.g., Glucose) in its open-chain form.', 'SHORT_ANSWER', NULL, '"16"'::jsonb, 'Aldohexoses have 4 chiral centers. 2^4 = 16 stereoisomers.', 1, 'EASY', 90, '{"real_type":"CALCULATION","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('c01c7db8-4cbb-4ecc-951b-3954fa4659ee', 'exam-cnp-final', 'A solution of 2g of substance in 10mL of water in a 1dm tube rotates light by +10°. Calculate the specific rotation.', 'SHORT_ANSWER', NULL, '"+50°"'::jsonb, '[alpha] = alpha / (l * c). c = 2g/10mL = 0.2 g/mL. [alpha] = 10 / (1 * 0.2) = 50.', 1, 'MEDIUM', 91, '{"real_type":"CALCULATION","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('f8c436b2-9477-42b9-bb35-12f2d3529b18', 'exam-cnp-final', 'How many chiral centers are in an aldotetrose?', 'SHORT_ANSWER', NULL, '"2"'::jsonb, 'C2 and C3 are chiral.', 1, 'HARD', 92, '{"real_type":"CALCULATION","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('f3a4435d-35cd-4b85-83c2-1f8c12fc8442', 'exam-cnp-final', 'Calculate the molecular weight of Glucose (C6H12O6). (C=12, H=1, O=16)', 'SHORT_ANSWER', NULL, '"180"'::jsonb, '(6*12) + (12*1) + (6*16) = 72 + 12 + 96 = 180.', 1, 'EASY', 93, '{"real_type":"CALCULATION","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('49060b7e-3ea8-4704-8e76-de76a7ae46a0', 'exam-cnp-final', 'A new drug is being developed for hypertension. It has two chiral centers. How many stereoisomers are possible, and what must the manufacturer do to get approval?', 'SHORT_ANSWER', NULL, '"2^2 = 4 stereoisomers. The manufacturer must separate and characterize all 4 isomers, determine the active one(s), and justify whether to market a single isomer or a mixture based on safety/efficacy data."'::jsonb, 'Multiple chiral centers increase complexity.', 2, 'MEDIUM', 94, '{"real_type":"CASE_STUDY","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('e5faf587-5827-4f30-832e-5b9be448175a', 'exam-cnp-final', 'A patient with lactose intolerance consumes milk and experiences bloating. Explain the biochemical basis.', 'SHORT_ANSWER', NULL, '"The patient lacks the enzyme lactase, which hydrolyzes the beta-1,4 bond in lactose. Undigested lactose ferments in the gut, causing gas/bloating."'::jsonb, 'Enzyme deficiency.', 2, 'HARD', 95, '{"real_type":"CASE_STUDY","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('504da979-4b0f-4abb-ac93-a0d80ee21dc8', 'exam-cnp-final', 'A student states that ''All Meso compounds are chiral because they have chiral centers''. Identify the error.', 'SHORT_ANSWER', NULL, '"The error is in the definition of chirality. While meso compounds *do* have chiral centers, they are *achiral* overall because they possess an internal plane of symmetry and are superimposable on their mirror image."'::jsonb, 'Presence of chiral centers does not guarantee chirality.', 1, 'EASY', 96, '{"real_type":"IDENTIFY_ERROR","image_url":null}'::jsonb);

INSERT INTO questions (id, exam_id, content, question_type, options, correct_answer, explanation, points, difficulty, order_index, metadata)
VALUES ('69017181-85bb-4410-9231-7dcfc585ac07', 'exam-cnp-final', 'A student claims that D-Glucose rotates light to the right (+) because of the ''D'' designation. Identify the error.', 'SHORT_ANSWER', NULL, '"The 'D' designation refers to the configuration of the highest numbered chiral center relative to D-Glyceraldehyde, NOT the direction of optical rotation. D-Glucose happens to be dextrorotatory (+), but D-Fructose is levorotatory (-)."'::jsonb, 'D/L vs +/- confusion.', 1, 'MEDIUM', 97, '{"real_type":"IDENTIFY_ERROR","image_url":null}'::jsonb);
