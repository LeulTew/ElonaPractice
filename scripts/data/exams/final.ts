import { QuestionData } from './types';

export const EXAM_FINAL_CONTENT: QuestionData[] = [
  // --- MCQ (30 Questions) ---
  {
    content: "Identify the structure of the **DNA Double Helix**. What does the 5' to 3' orientation indicate?",
    type: "MCQ",
    options: ["Antiparallel strands", "Parallel strands", "Identical strands", "Single strand"],
    correctAnswer: "Antiparallel strands",
    explanation: "The two strands of DNA run in opposite directions (5'->3' and 3'->5').",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/course-images/final/dna_helix.svg"
  },
  {
    content: "Examine the **Michaelis-Menten Plot**. What does the parameter **Km** represent?",
    type: "MCQ",
    options: ["Substrate concentration at Vmax", "Substrate concentration at 1/2 Vmax", "Maximum velocity", "Enzyme concentration"],
    correctAnswer: "Substrate concentration at 1/2 Vmax",
    explanation: "Km is defined as the substrate concentration at which the reaction rate is half of Vmax.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/course-images/final/michaelis_menten.svg"
  },
  {
    content: "Look at the **Peptide Bond Formation** diagram. What molecule is released during this reaction?",
    type: "MCQ",
    options: ["Water (H2O)", "Carbon Dioxide (CO2)", "Ammonia (NH3)", "Hydrogen (H2)"],
    correctAnswer: "Water (H2O)",
    explanation: "Peptide bond formation is a dehydration synthesis (condensation) reaction, releasing water.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/course-images/final/peptide_bond.svg"
  },
  {
    content: "Based on the **DNA** structure, which base pairs with Adenine (A)?",
    type: "MCQ",
    options: ["Thymine (T)", "Cytosine (C)", "Guanine (G)", "Uracil (U)"],
    correctAnswer: "Thymine (T)",
    explanation: "In DNA, Adenine pairs with Thymine via two hydrogen bonds.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/course-images/final/dna_helix.svg"
  },
  {
    content: "In the **Michaelis-Menten** graph, what happens to the velocity (V) as substrate concentration [S] becomes very high?",
    type: "MCQ",
    options: ["It approaches Vmax", "It decreases to zero", "It increases linearly", "It becomes negative"],
    correctAnswer: "It approaches Vmax",
    explanation: "At saturating substrate concentrations, the enzyme is fully occupied, and the rate approaches Vmax.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/course-images/final/michaelis_menten.svg"
  },
  {
    content: "Which of the following statements regarding the stereochemistry of glucose is **incorrect**?",
    type: "MCQ",
    options: [
      "D-glucose is the enantiomer of L-glucose.",
      "D-glucose has 4 chiral centers in its open-chain form.",
      "Alpha-D-glucose and Beta-D-glucose are enantiomers.",
      "Meso-tartaric acid can be formed by oxidation of galactose (not glucose)."
    ],
    correctAnswer: "Alpha-D-glucose and Beta-D-glucose are enantiomers.",
    explanation: "Alpha and Beta anomers are diastereomers (specifically epimers at C1)."
  },
  {
    content: "In the context of drug approval, why is the 'chiral switch' strategy economically attractive?",
    type: "MCQ",
    options: [
      "It allows extending patent protection for a drug.",
      "It eliminates the need for clinical trials.",
      "It reduces the cost of synthesis.",
      "It allows selling the racemate as a new drug."
    ],
    correctAnswer: "It allows extending patent protection for a drug.",
    explanation: "Developing a single enantiomer can grant new patent exclusivity."
  },
  {
    content: "Which of the following is an example of a **glycoside** used in medicine?",
    type: "MCQ",
    options: ["Digoxin", "Ibuprofen", "Thalidomide", "Cholesterol"],
    correctAnswer: "Digoxin",
    explanation: "Digoxin is a cardiac glycoside."
  },
  {
    content: "What is the relationship between D-Glucose and D-Mannose?",
    type: "MCQ",
    options: ["Enantiomers", "C-2 Epimers", "C-4 Epimers", "Anomers"],
    correctAnswer: "C-2 Epimers",
    explanation: "They differ only at C-2."
  },
  {
    content: "Which of the following is a non-reducing sugar?",
    type: "MCQ",
    options: ["Glucose", "Fructose", "Sucrose", "Maltose"],
    correctAnswer: "Sucrose",
    explanation: "Sucrose has no free anomeric carbon."
  },
  {
    content: "Enantiomers can be separated by:",
    type: "MCQ",
    options: ["Simple distillation", "Chiral chromatography", "Filtration", "Centrifugation"],
    correctAnswer: "Chiral chromatography",
    explanation: "Requires chiral environment."
  },
  {
    content: "Which of the following is a ketose?",
    type: "MCQ",
    options: ["Glucose", "Galactose", "Fructose", "Ribose"],
    correctAnswer: "Fructose",
    explanation: "Ketohexose."
  },
  {
    content: "The linkage in cellulose is:",
    type: "MCQ",
    options: ["Alpha-1,4", "Beta-1,4", "Alpha-1,6", "Beta-1,6"],
    correctAnswer: "Beta-1,4",
    explanation: "Beta linkage makes it indigestible by humans."
  },
  {
    content: "Which of the following is a meso compound?",
    type: "MCQ",
    options: ["(2R,3R)-tartaric acid", "(2S,3S)-tartaric acid", "(2R,3S)-tartaric acid", "None"],
    correctAnswer: "(2R,3S)-tartaric acid",
    explanation: "Internal plane of symmetry."
  },
  {
    content: "Which drug is an example of a chiral switch?",
    type: "MCQ",
    options: ["Aspirin", "Esomeprazole", "Paracetamol", "Metformin"],
    correctAnswer: "Esomeprazole",
    explanation: "From Omeprazole."
  },
  {
    content: "What is the major storage polysaccharide in animals?",
    type: "MCQ",
    options: ["Starch", "Cellulose", "Glycogen", "Chitin"],
    correctAnswer: "Glycogen",
    explanation: "Animal starch."
  },
  {
    content: "Which of the following is NOT a chiral center?",
    type: "MCQ",
    options: ["A carbon with 4 different groups", "A nitrogen in a quaternary ammonium salt with 4 different groups", "A carbon in a double bond", "A sulfur in a sulfoxide with different groups"],
    correctAnswer: "A carbon in a double bond",
    explanation: "sp2 carbons are planar."
  },
  {
    content: "Mutarotation refers to the change in optical rotation due to:",
    type: "MCQ",
    options: ["Racemization", "Interconversion of alpha and beta anomers", "Hydrolysis", "Oxidation"],
    correctAnswer: "Interconversion of alpha and beta anomers",
    explanation: "Equilibrium in solution."
  },
  {
    content: "Which of the following is a disaccharide?",
    type: "MCQ",
    options: ["Glucose", "Maltose", "Starch", "Ribose"],
    correctAnswer: "Maltose",
    explanation: "Glucose + Glucose."
  },
  {
    content: "The Cahn-Ingold-Prelog priority is based on:",
    type: "MCQ",
    options: ["Atomic mass", "Atomic number", "Electronegativity", "Size"],
    correctAnswer: "Atomic number",
    explanation: "Higher Z = Higher priority."
  },
  {
    content: "Which of the following is true for diastereomers?",
    type: "MCQ",
    options: ["They are mirror images.", "They have identical physical properties.", "They can be separated by physical methods.", "They must be meso."],
    correctAnswer: "They can be separated by physical methods.",
    explanation: "Different BP/MP/Solubility."
  },
  {
    content: "Which sugar is found in DNA?",
    type: "MCQ",
    options: ["Ribose", "Deoxyribose", "Glucose", "Fructose"],
    correctAnswer: "Deoxyribose",
    explanation: "2-deoxy-D-ribose."
  },
  {
    content: "Which of the following is a reducing sugar?",
    type: "MCQ",
    options: ["Sucrose", "Trehalose", "Lactose", "Methyl glucoside"],
    correctAnswer: "Lactose",
    explanation: "Has free anomeric carbon."
  },
  {
    content: "The number of stereoisomers of an aldohexose is:",
    type: "MCQ",
    options: ["4", "8", "16", "32"],
    correctAnswer: "16",
    explanation: "2^4 = 16."
  },
  {
    content: "Which of the following is a component of starch?",
    type: "MCQ",
    options: ["Amylose", "Cellulose", "Glycogen", "Chitin"],
    correctAnswer: "Amylose",
    explanation: "Amylose and Amylopectin."
  },
  {
    content: "Which term describes the 50:50 mixture of enantiomers?",
    type: "MCQ",
    options: ["Meso", "Racemic", "Pure", "Anomeric"],
    correctAnswer: "Racemic",
    explanation: "Racemate."
  },
  {
    content: "Which of the following is an essential amino acid?",
    type: "MCQ",
    options: ["Alanine", "Leucine", "Serine", "Glutamate"],
    correctAnswer: "Leucine",
    explanation: "Must be obtained from diet."
  },
  {
    content: "Examine the structure of **ATP**. Which bond is the 'high-energy' bond broken to release energy?",
    type: "MCQ",
    options: ["Alpha-Beta phosphoanhydride", "Beta-Gamma phosphoanhydride", "Adenine-Ribose glycosidic", "Ribose-Phosphate ester"],
    correctAnswer: "Beta-Gamma phosphoanhydride",
    explanation: "Hydrolysis of the terminal phosphoanhydride bond releases a large amount of free energy.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/course-images/final/atp_structure.png"
  },
  {
    content: "Identify the secondary structure shown in the diagram. What type of bonds stabilize this structure?",
    type: "MCQ",
    options: ["Alpha-helix stabilized by Hydrogen bonds", "Beta-sheet stabilized by Disulfide bonds", "Alpha-helix stabilized by Ionic bonds", "Beta-sheet stabilized by Hydrogen bonds"],
    correctAnswer: "Alpha-helix stabilized by Hydrogen bonds",
    explanation: "The alpha-helix is stabilized by intrachain hydrogen bonds between the carbonyl oxygen and amide hydrogen.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/course-images/final/protein_alpha_helix.png"
  },

  // --- Multi-Select (12 Questions) ---
  {
    content: "Select **all** true statements about **enantiomers**.",
    type: "MULTI_SELECT",
    options: [
      "They have identical boiling points.",
      "They rotate plane-polarized light in opposite directions.",
      "They react at the same rate with achiral reagents.",
      "They always have different biological activities."
    ],
    correctAnswer: ["They have identical boiling points.", "They rotate plane-polarized light in opposite directions.", "They react at the same rate with achiral reagents."],
    explanation: "Often different bio-activity, but not always."
  },
  {
    content: "Select the reducing sugars.",
    type: "MULTI_SELECT",
    options: ["Glucose", "Fructose", "Sucrose", "Maltose"],
    correctAnswer: ["Glucose", "Fructose", "Maltose"],
    explanation: "Sucrose is non-reducing."
  },
  {
    content: "Select the chiral molecules.",
    type: "MULTI_SELECT",
    options: ["2-butanol", "2-propanol", "Lactic acid", "Acetone"],
    correctAnswer: ["2-butanol", "Lactic acid"],
    explanation: "Have chiral centers."
  },
  {
    content: "Select the polysaccharides.",
    type: "MULTI_SELECT",
    options: ["Starch", "Glycogen", "Cellulose", "Sucrose"],
    correctAnswer: ["Starch", "Glycogen", "Cellulose"],
    explanation: "Sucrose is a disaccharide."
  },
  {
    content: "Select the properties that differ between diastereomers.",
    type: "MULTI_SELECT",
    options: ["Boiling point", "Melting point", "Solubility", "Molecular formula"],
    correctAnswer: ["Boiling point", "Melting point", "Solubility"],
    explanation: "Formula is same."
  },
  {
    content: "Select the components of Sucrose.",
    type: "MULTI_SELECT",
    options: ["Glucose", "Fructose", "Galactose", "Ribose"],
    correctAnswer: ["Glucose", "Fructose"],
    explanation: "Glc + Fru."
  },
  {
    content: "Select the aldoses.",
    type: "MULTI_SELECT",
    options: ["Glucose", "Galactose", "Ribose", "Fructose"],
    correctAnswer: ["Glucose", "Galactose", "Ribose"],
    explanation: "Fructose is a ketose."
  },
  {
    content: "Select the drugs that are single enantiomers.",
    type: "MULTI_SELECT",
    options: ["Esomeprazole", "Levofloxacin", "Escitalopram", "Ibuprofen (OTC)"],
    correctAnswer: ["Esomeprazole", "Levofloxacin", "Escitalopram"],
    explanation: "Ibuprofen is racemic."
  },
  {
    content: "Select the terms associated with mutarotation.",
    type: "MULTI_SELECT",
    options: ["Alpha anomer", "Beta anomer", "Open chain", "Racemization"],
    correctAnswer: ["Alpha anomer", "Beta anomer", "Open chain"],
    explanation: "Not racemization."
  },
  {
    content: "Select the tests for carbohydrates.",
    type: "MULTI_SELECT",
    options: ["Molisch Test", "Benedict's Test", "Biuret Test", "Fehling's Test"],
    correctAnswer: ["Molisch Test", "Benedict's Test", "Fehling's Test"],
    explanation: "Biuret is for proteins."
  },
  {
    content: "Select the achiral amino acids.",
    type: "MULTI_SELECT",
    options: ["Glycine", "Alanine", "Valine", "Proline"],
    correctAnswer: ["Glycine"],
    explanation: "Only Glycine."
  },
  {
    content: "Select the factors affecting optical rotation.",
    type: "MULTI_SELECT",
    options: ["Concentration", "Path length", "Temperature", "Wavelength"],
    correctAnswer: ["Concentration", "Path length", "Temperature", "Wavelength"],
    explanation: "All affect alpha."
  },

  // --- Fill-in-the-Blank (15 Questions) ---
  {
    content: "The specific rotation of a pure enantiomer is +50°. A mixture has an observed rotation of -10°. The % composition of the (-) enantiomer is ______%.",
    type: "FILL_BLANK",
    correctAnswer: "60",
    explanation: "20% ee of (-). 60% (-) and 40% (+)."
  },
  {
    content: "Glucose and Galactose are C-______ epimers.",
    type: "FILL_BLANK",
    correctAnswer: "4",
    explanation: "Differ at C4."
  },
  {
    content: "The bond connecting two sugar units is called a ______ bond.",
    type: "FILL_BLANK",
    correctAnswer: "glycosidic",
    explanation: "Ether linkage."
  },
  {
    content: "Sucrose is composed of Glucose and ______.",
    type: "FILL_BLANK",
    correctAnswer: "Fructose",
    explanation: "Disaccharide."
  },
  {
    content: "The storage form of glucose in plants is ______.",
    type: "FILL_BLANK",
    correctAnswer: "starch",
    explanation: "Amylose/Amylopectin."
  },
  {
    content: "A molecule that is non-superimposable on its mirror image is ______.",
    type: "FILL_BLANK",
    correctAnswer: "chiral",
    explanation: "Definition."
  },
  {
    content: "The process of separating enantiomers is called ______.",
    type: "FILL_BLANK",
    correctAnswer: "resolution",
    explanation: "Separation."
  },
  {
    content: "Aldehydes reduce Benedict's reagent to form a ______ precipitate.",
    type: "FILL_BLANK",
    correctAnswer: "red",
    explanation: "Cu2O."
  },
  {
    content: "The active enantiomer of a drug is called the ______.",
    type: "FILL_BLANK",
    correctAnswer: "eutomer",
    explanation: "Good isomer."
  },
  {
    content: "Fructose is a ______-hexose.",
    type: "FILL_BLANK",
    correctAnswer: "keto",
    explanation: "Ketone group."
  },
  {
    content: "The number of carbons in a pentose is ______.",
    type: "FILL_BLANK",
    correctAnswer: "5",
    explanation: "Penta = 5."
  },
  {
    content: "Enantiomers rotate light in ______ directions.",
    type: "FILL_BLANK",
    correctAnswer: "opposite",
    explanation: "+ and -."
  },
  {
    content: "Meso compounds are optically ______.",
    type: "FILL_BLANK",
    correctAnswer: "inactive",
    explanation: "Zero rotation."
  },
  {
    content: "The linear polymer of glucose in starch is called ______.",
    type: "FILL_BLANK",
    correctAnswer: "amylose",
    explanation: "Alpha-1,4."
  },
  {
    content: "The branched polymer of glucose in starch is called ______.",
    type: "FILL_BLANK",
    correctAnswer: "amylopectin",
    explanation: "Alpha-1,6 branches."
  },

  // --- Matching (10 Questions) ---
  {
    content: "Match the molecule to its class.",
    type: "MATCHING",
    options: [
      { left: "Fructose", right: "Ketohexose" },
      { left: "Ribose", right: "Aldopentose" },
      { left: "Glyceraldehyde", right: "Aldotriose" }
    ],
    correctAnswer: {
      "Fructose": "Ketohexose",
      "Ribose": "Aldopentose",
      "Glyceraldehyde": "Aldotriose"
    },
    explanation: "Classification."
  },
  {
    content: "Match the disaccharide to its monomers.",
    type: "MATCHING",
    options: [
      { left: "Sucrose", right: "Glucose + Fructose" },
      { left: "Lactose", right: "Glucose + Galactose" },
      { left: "Maltose", right: "Glucose + Glucose" }
    ],
    correctAnswer: {
      "Sucrose": "Glucose + Fructose",
      "Lactose": "Glucose + Galactose",
      "Maltose": "Glucose + Glucose"
    },
    explanation: "Composition."
  },
  {
    content: "Match the term to the definition.",
    type: "MATCHING",
    options: [
      { left: "Enantiomers", right: "Mirror images" },
      { left: "Diastereomers", right: "Non-mirror images" },
      { left: "Meso", right: "Achiral with chiral centers" }
    ],
    correctAnswer: {
      "Enantiomers": "Mirror images",
      "Diastereomers": "Non-mirror images",
      "Meso": "Achiral with chiral centers"
    },
    explanation: "Stereochem terms."
  },
  {
    content: "Match the test to the target.",
    type: "MATCHING",
    options: [
      { left: "Benedict's", right: "Reducing Sugars" },
      { left: "Iodine", right: "Starch" },
      { left: "Ninhydrin", right: "Amino Acids" }
    ],
    correctAnswer: {
      "Benedict's": "Reducing Sugars",
      "Iodine": "Starch",
      "Ninhydrin": "Amino Acids"
    },
    explanation: "Chemical tests."
  },
  {
    content: "Match the drug to the effect.",
    type: "MATCHING",
    options: [
      { left: "Thalidomide", right: "Teratogen" },
      { left: "Ibuprofen", right: "Anti-inflammatory" },
      { left: "Digoxin", right: "Heart Failure" }
    ],
    correctAnswer: {
      "Thalidomide": "Teratogen",
      "Ibuprofen": "Anti-inflammatory",
      "Digoxin": "Heart Failure"
    },
    explanation: "Pharmacology."
  },
  {
    content: "Match the linkage to the polymer.",
    type: "MATCHING",
    options: [
      { left: "Alpha-1,4", right: "Starch" },
      { left: "Beta-1,4", right: "Cellulose" },
      { left: "Alpha-1,6", right: "Glycogen (Branch)" }
    ],
    correctAnswer: {
      "Alpha-1,4": "Starch",
      "Beta-1,4": "Cellulose",
      "Alpha-1,6": "Glycogen (Branch)"
    },
    explanation: "Glycosidic bonds."
  },
  {
    content: "Match the projection to the use.",
    type: "MATCHING",
    options: [
      { left: "Fischer", right: "Open chain sugars" },
      { left: "Haworth", right: "Cyclic sugars" },
      { left: "Chair", right: "Conformation" }
    ],
    correctAnswer: {
      "Fischer": "Open chain sugars",
      "Haworth": "Cyclic sugars",
      "Chair": "Conformation"
    },
    explanation: "Visualizations."
  },
  {
    content: "Match the epimer pair.",
    type: "MATCHING",
    options: [
      { left: "Glucose/Mannose", right: "C2" },
      { left: "Glucose/Galactose", right: "C4" },
      { left: "Ribose/Arabinose", right: "C2" }
    ],
    correctAnswer: {
      "Glucose/Mannose": "C2",
      "Glucose/Galactose": "C4",
      "Ribose/Arabinose": "C2"
    },
    explanation: "Epimers."
  },
  {
    content: "Match the chiral term.",
    type: "MATCHING",
    options: [
      { left: "R/S", right: "Configuration" },
      { left: "+/-", right: "Rotation" },
      { left: "D/L", right: "Relative Configuration" }
    ],
    correctAnswer: {
      "R/S": "Configuration",
      "+/-": "Rotation",
      "D/L": "Relative Configuration"
    },
    explanation: "Nomenclature."
  },
  {
    content: "Match the functional group.",
    type: "MATCHING",
    options: [
      { left: "Aldehyde", right: "R-CHO" },
      { left: "Ketone", right: "R-CO-R" },
      { left: "Alcohol", right: "R-OH" }
    ],
    correctAnswer: {
      "Aldehyde": "R-CHO",
      "Ketone": "R-CO-R",
      "Alcohol": "R-OH"
    },
    explanation: "Chemistry."
  },

  // --- Short Answer (8 Questions) ---
  {
    content: "Discuss the importance of stereochemistry in the interaction between a drug and its receptor.",
    type: "SHORT_ANSWER",
    correctAnswer: "Receptors are chiral biological macromolecules (proteins). Drug-receptor interaction is like a 'hand-in-glove' fit. One enantiomer may fit perfectly (eutomer), while the other may not fit or bind differently (distomer), leading to different pharmacological effects.",
    explanation: "Three-point attachment."
  },
  {
    content: "Explain why **Cellulose** is indigestible by humans.",
    type: "SHORT_ANSWER",
    correctAnswer: "Cellulose contains beta-1,4-glycosidic bonds. Humans lack the enzyme cellulase required to hydrolyze these bonds, so we cannot digest it.",
    explanation: "Enzyme specificity."
  },
  {
    content: "What is **Mutarotation**?",
    type: "SHORT_ANSWER",
    correctAnswer: "Mutarotation is the change in specific rotation of a chiral compound (like glucose) in solution over time, due to the equilibrium between alpha and beta anomers via the open-chain form.",
    explanation: "Dynamic equilibrium."
  },
  {
    content: "Define **Epimers**.",
    type: "SHORT_ANSWER",
    correctAnswer: "Epimers are diastereomers that differ in configuration at only one chiral center.",
    explanation: "Specific type of diastereomer."
  },
  {
    content: "Why is **Sucrose** a non-reducing sugar?",
    type: "SHORT_ANSWER",
    correctAnswer: "Because the glycosidic bond involves the anomeric carbons of both glucose and fructose, leaving no free anomeric carbon to open up and reduce reagents.",
    explanation: "No free hemiacetal."
  },
  {
    content: "What is a **Racemic Mixture**?",
    type: "SHORT_ANSWER",
    correctAnswer: "A 1:1 mixture of enantiomers that is optically inactive.",
    explanation: "50:50 mix."
  },
  {
    content: "Explain the difference between **Starch** and **Glycogen**.",
    type: "SHORT_ANSWER",
    correctAnswer: "Both are polymers of alpha-D-glucose. Starch (plants) has amylose (linear) and amylopectin (branched). Glycogen (animals) is similar to amylopectin but more highly branched.",
    explanation: "Branching density."
  },
  {
    content: "What is the **Anomeric Effect**?",
    type: "SHORT_ANSWER",
    correctAnswer: "The preference for electronegative substituents at the anomeric position to be axial rather than equatorial, contrary to steric prediction.",
    explanation: "Electronic effect."
  },

  // --- Calculation (4 Questions) ---
  {
    content: "Calculate the number of stereoisomers for an aldohexose (e.g., Glucose) in its open-chain form.",
    type: "CALCULATION",
    correctAnswer: "16",
    explanation: "Aldohexoses have 4 chiral centers. 2^4 = 16 stereoisomers."
  },
  {
    content: "A solution of 2g of substance in 10mL of water in a 1dm tube rotates light by +10°. Calculate the specific rotation.",
    type: "CALCULATION",
    correctAnswer: "+50°",
    explanation: "[alpha] = alpha / (l * c). c = 2g/10mL = 0.2 g/mL. [alpha] = 10 / (1 * 0.2) = 50."
  },
  {
    content: "How many chiral centers are in an aldotetrose?",
    type: "CALCULATION",
    correctAnswer: "2",
    explanation: "C2 and C3 are chiral."
  },
  {
    content: "Calculate the molecular weight of Glucose (C6H12O6). (C=12, H=1, O=16)",
    type: "CALCULATION",
    correctAnswer: "180",
    explanation: "(6*12) + (12*1) + (6*16) = 72 + 12 + 96 = 180."
  },

  // --- Order/Sequence (5 Questions) ---
  {
    content: "Order the following from smallest to largest.",
    type: "ORDER_SEQUENCE",
    options: ["Triose", "Tetrose", "Pentose", "Hexose"],
    correctAnswer: ["Triose", "Tetrose", "Pentose", "Hexose"],
    explanation: "Ordering by number of carbon atoms: 3, 4, 5, 6."
  },
  {
    content: "Order the steps in the Haworth projection drawing.",
    type: "ORDER_SEQUENCE",
    options: ["Draw ring", "Place anomeric OH", "Place other groups", "Determine alpha/beta"],
    correctAnswer: ["Draw ring", "Place anomeric OH", "Place other groups", "Determine alpha/beta"],
    explanation: "Process."
  },
  {
    content: "Order the sweetness (Low to High).",
    type: "ORDER_SEQUENCE",
    options: ["Lactose", "Glucose", "Sucrose", "Fructose"],
    correctAnswer: ["Lactose", "Glucose", "Sucrose", "Fructose"],
    explanation: "Fructose is sweetest."
  },
  {
    content: "Order the priority of groups (CIP) on Glyceraldehyde.",
    type: "ORDER_SEQUENCE",
    options: ["-OH", "-CHO", "-CH2OH", "-H"],
    correctAnswer: ["-OH", "-CHO", "-CH2OH", "-H"],
    explanation: "O > C=O > C-O > H."
  },
  {
    content: "Order the stability of cyclohexane conformations (Most to Least).",
    type: "ORDER_SEQUENCE",
    options: ["Chair", "Twist Boat", "Boat", "Half Chair"],
    correctAnswer: ["Chair", "Twist Boat", "Boat", "Half Chair"],
    explanation: "Energy levels."
  },

  // --- True/False (3 Questions) ---
  {
    content: "True or False: A racemic mixture can be resolved by simple distillation.",
    type: "TRUE_FALSE",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "Enantiomers have identical boiling points."
  },
  {
    content: "True or False: All monosaccharides are reducing sugars.",
    type: "TRUE_FALSE",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "They all have free carbonyls in open chain."
  },
  {
    content: "True or False: Cellulose is a branched polymer.",
    type: "TRUE_FALSE",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "Linear."
  },

  // --- Label Diagram (6 Questions) ---
  {
    content: "Identify the glycosidic bond type in Maltose (alpha-1,4 vs beta-1,4).",
    type: "MCQ",
    options: ["Alpha-1,4", "Beta-1,4", "Alpha-1,6", "Beta-1,6"],
    correctAnswer: "Alpha-1,4",
    explanation: "Maltose consists of two glucose units linked by an alpha-1,4-glycosidic bond.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide83.png"
  },
  {
    content: "Identify the anomer shown in the Haworth projection.",
    type: "MCQ",
    options: ["Alpha", "Beta"],
    correctAnswer: "Beta",
    explanation: "OH is up (equatorial).",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide20.png"
  },
  {
    content: "Identify the molecule shown.",
    type: "MCQ",
    options: ["Glucose", "Fructose", "Ribose", "Galactose"],
    correctAnswer: "Glucose",
    explanation: "Aldohexose structure.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide10.png"
  },
  {
    content: "Is the linkage shown alpha or beta?",
    type: "MCQ",
    options: ["Alpha", "Beta"],
    correctAnswer: "Beta",
    explanation: "Bond points up.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide85.png"
  },
  {
    content: "Identify the chiral center.",
    type: "MCQ",
    options: ["C1", "C2", "C3", "C4"],
    correctAnswer: "C2",
    explanation: "Asymmetric carbon.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide5.png"
  },
  {
    content: "Which conformation is shown?",
    type: "MCQ",
    options: ["Chair", "Boat"],
    correctAnswer: "Chair",
    explanation: "Stable form.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide30.png"
  },

  // --- Case Study (2 Questions) ---
  {
    content: "A new drug is being developed for hypertension. It has two chiral centers. How many stereoisomers are possible, and what must the manufacturer do to get approval?",
    type: "CASE_STUDY",
    correctAnswer: "2^2 = 4 stereoisomers. The manufacturer must separate and characterize all 4 isomers, determine the active one(s), and justify whether to market a single isomer or a mixture based on safety/efficacy data.",
    explanation: "Multiple chiral centers increase complexity."
  },
  {
    content: "A patient with lactose intolerance consumes milk and experiences bloating. Explain the biochemical basis.",
    type: "CASE_STUDY",
    correctAnswer: "The patient lacks the enzyme lactase, which hydrolyzes the beta-1,4 bond in lactose. Undigested lactose ferments in the gut, causing gas/bloating.",
    explanation: "Enzyme deficiency."
  },

  // --- Identify Error (2 Questions) ---
  {
    content: "A student states that 'All Meso compounds are chiral because they have chiral centers'. Identify the error.",
    type: "IDENTIFY_ERROR",
    correctAnswer: "The error is in the definition of chirality. While meso compounds *do* have chiral centers, they are *achiral* overall because they possess an internal plane of symmetry and are superimposable on their mirror image.",
    explanation: "Presence of chiral centers does not guarantee chirality."
  },
  {
    content: "A student claims that D-Glucose rotates light to the right (+) because of the 'D' designation. Identify the error.",
    type: "IDENTIFY_ERROR",
    correctAnswer: "The 'D' designation refers to the configuration of the highest numbered chiral center relative to D-Glyceraldehyde, NOT the direction of optical rotation. D-Glucose happens to be dextrorotatory (+), but D-Fructose is levorotatory (-).",
    explanation: "D/L vs +/- confusion."
  }
];
