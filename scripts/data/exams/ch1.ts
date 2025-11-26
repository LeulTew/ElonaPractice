import { QuestionData } from './types';

export const EXAM_1_CONTENT: QuestionData[] = [
  // --- MCQ (30 Questions) ---
  {
    content: "Examine the image of **Lactic Acid**. What is the relationship between the two structures shown?",
    type: "MCQ",
    options: [
      "Enantiomers",
      "Diastereomers",
      "Identical",
      "Constitutional Isomers"
    ],
    correctAnswer: "Enantiomers",
    explanation: "The two structures are non-superimposable mirror images of each other, which defines them as enantiomers.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product_CNP/ch1/lactic_acid_enantiomers.svg"
  },
  {
    content: "Look at the structure of **Meso-Tartaric Acid**. Why is this molecule optically inactive?",
    type: "MCQ",
    options: ["It lacks chiral centers.", "It has a plane of symmetry.", "It is a racemic mixture.", "It has no double bonds."],
    correctAnswer: "It has a plane of symmetry.",
    explanation: "Despite having two chiral centers, the internal plane of symmetry makes the molecule achiral (meso).",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product_CNP/ch1/meso_tartaric_acid.svg"
  },
  {
    content: "Identify the conformation shown in the **Newman Projection** on the left.",
    type: "MCQ",
    options: ["Staggered", "Eclipsed", "Boat", "Chair"],
    correctAnswer: "Staggered",
    explanation: "The substituents on the front and back carbons are 60 degrees apart, minimizing steric hindrance.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product_CNP/ch1/newman_staggered.svg"
  },
  {
    content: "Compare the two alkene isomers shown. Which one is **cis-2-butene**?",
    type: "MCQ",
    options: ["Structure A (Left)", "Structure B (Right)", "Both", "Neither"],
    correctAnswer: "Structure A (Left)",
    explanation: "In cis-2-butene, the two methyl groups are on the same side of the double bond.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product_CNP/ch1/cis_2_butene.svg"
  },
  {
    content: "Based on the **trans-2-butene** structure, what is the relationship between the two methyl groups?",
    type: "MCQ",
    options: ["They are on the same side.", "They are on opposite sides.", "They are attached to the same carbon.", "They are perpendicular."],
    correctAnswer: "They are on opposite sides.",
    explanation: "Trans isomers have high-priority groups on opposite sides of the double bond.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product_CNP/ch1/trans_2_butene.svg"
  },
  {
    content: "Determine the **R/S configuration** of the chiral center shown in the diagram.",
    type: "MCQ",
    options: ["R", "S", "E", "Z"],
    correctAnswer: "S",
    explanation: "Priorities: Br(1) > Cl(2) > F(3) > H(4). H is in the back (dashed). Sequence 1->2->3 is counter-clockwise, so it is S.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product_CNP/ch1/rs_configuration.svg"
  },
  {
    content: "Identify the molecule shown in the **Fischer Projection**.",
    type: "MCQ",
    options: ["D-Glucose", "L-Glucose", "D-Fructose", "D-Galactose"],
    correctAnswer: "D-Glucose",
    explanation: "The structure shows the characteristic OH pattern of D-Glucose (Right-Left-Right-Right).",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product_CNP/ch1/fischer_glucose.svg"
  },
  {
    content: "Examine the **Cyclohexane Chair** conformation. Which bonds are highlighted in red?",
    type: "MCQ",
    options: ["Axial", "Equatorial", "Allylic", "Vinylic"],
    correctAnswer: "Axial",
    explanation: "The bonds pointing straight up and down are axial bonds.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product_CNP/ch1/cyclohexane_chair.svg"
  },
  {
    content: "Compare the two structures of **2,3-dichlorobutane**. What is their relationship?",
    type: "MCQ",
    options: ["Enantiomers", "Diastereomers", "Identical", "Constitutional Isomers"],
    correctAnswer: "Diastereomers",
    explanation: "Structure A is (2R,3R) and Structure B is (2R,3S) Meso. They are stereoisomers but not mirror images, so they are diastereomers.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product_CNP/ch1/diastereomers.svg"
  },
  {
    content: "Which of the following is NOT a requirement for a molecule to be chiral?",
    type: "MCQ",
    options: ["Lack of a plane of symmetry", "Lack of a center of inversion", "Presence of a chiral carbon", "Non-superimposable mirror image"],
    correctAnswer: "Presence of a chiral carbon",
    explanation: "Molecules can be chiral without chiral carbons (e.g., allenes, binaphthyls)."
  },
  {
    content: "If a sample rotates plane-polarized light clockwise, it is designated as:",
    type: "MCQ",
    options: ["Levorotatory (-)", "Dextrorotatory (+)", "Racemic (+/-)", "Meso"],
    correctAnswer: "Dextrorotatory (+)",
    explanation: "Clockwise rotation is dextrorotatory (+)."
  },
  {
    content: "Diastereomers are stereoisomers that are:",
    type: "MCQ",
    options: ["Mirror images", "Not mirror images", "Superimposable", "Identical"],
    correctAnswer: "Not mirror images",
    explanation: "Diastereomers are stereoisomers that are not enantiomers (not mirror images)."
  },
  {
    content: "Which method is used to separate enantiomers?",
    type: "MCQ",
    options: ["Simple distillation", "Fractional crystallization", "Chiral chromatography", "Filtration"],
    correctAnswer: "Chiral chromatography",
    explanation: "Standard separation methods fail; chiral environments are needed."
  },
  {
    content: "What is the configuration of the chiral center if the priorities 1->2->3 are clockwise and the lowest priority group is in the back?",
    type: "MCQ",
    options: ["R", "S", "E", "Z"],
    correctAnswer: "R",
    explanation: "Clockwise with H in back = R (Rectus)."
  },
  {
    content: "What is the configuration of the chiral center if the priorities 1->2->3 are counter-clockwise and the lowest priority group is in the back?",
    type: "MCQ",
    options: ["R", "S", "E", "Z"],
    correctAnswer: "S",
    explanation: "Counter-clockwise with H in back = S (Sinister)."
  },
  {
    content: "Which molecule has a C2 axis of symmetry but no plane of symmetry?",
    type: "MCQ",
    options: ["Meso-tartaric acid", "(2R,3R)-tartaric acid", "Water", "Methane"],
    correctAnswer: "(2R,3R)-tartaric acid",
    explanation: "Chiral molecules can have axes of rotation, just not planes or centers of inversion."
  },
  {
    content: "How many stereoisomers does 2,3-dichlorobutane have?",
    type: "MCQ",
    options: ["2", "3", "4", "5"],
    correctAnswer: "3",
    explanation: "It has 2 chiral centers but is symmetric. (2R,3R), (2S,3S), and Meso (2R,3S). Total = 3."
  },
  {
    content: "Specific rotation depends on all of the following EXCEPT:",
    type: "MCQ",
    options: ["Temperature", "Wavelength of light", "Concentration", "Volume of sample"],
    correctAnswer: "Volume of sample",
    explanation: "Specific rotation is an intensive property; it depends on path length, not total volume."
  },
  {
    content: "Which term describes isomers that differ only in the spatial arrangement of atoms?",
    type: "MCQ",
    options: ["Constitutional isomers", "Stereoisomers", "Conformers", "Rotamers"],
    correctAnswer: "Stereoisomers",
    explanation: "Definition of stereoisomerism."
  },
  {
    content: "Which of the following is true for a meso compound?",
    type: "MCQ",
    options: ["It rotates plane-polarized light.", "It has no chiral centers.", "It is achiral.", "It exists as a pair of enantiomers."],
    correctAnswer: "It is achiral.",
    explanation: "Meso compounds are achiral despite having chiral centers."
  },
  {
    content: "The process of separating a racemic mixture into its enantiomers is called:",
    type: "MCQ",
    options: ["Racemization", "Resolution", "Inversion", "Mutarotation"],
    correctAnswer: "Resolution",
    explanation: "Resolution is the separation of enantiomers."
  },
  {
    content: "Which of the following groups has the highest CIP priority?",
    type: "MCQ",
    options: ["-CH2OH", "-CHO", "-COOH", "-CH3"],
    correctAnswer: "-COOH",
    explanation: "C bonded to (O,O,O) vs (O,O,H) vs (O,H,H)."
  },
  {
    content: "What is the relationship between (2R,3R)-2,3-dibromopentane and (2S,3S)-2,3-dibromopentane?",
    type: "MCQ",
    options: ["Enantiomers", "Diastereomers", "Identical", "Meso"],
    correctAnswer: "Enantiomers",
    explanation: "Invert all centers -> Enantiomers."
  },
  {
    content: "Which of the following is an example of a chiral object?",
    type: "MCQ",
    options: ["A glove", "A ball", "A cube", "A fork"],
    correctAnswer: "A glove",
    explanation: "A glove is non-superimposable on its mirror image."
  },
  {
    content: "The observed rotation of a sample is +10 degrees. If the path length is 1 dm and concentration is 1 g/mL, what is the specific rotation?",
    type: "MCQ",
    options: ["+10", "+100", "+1", "+0.1"],
    correctAnswer: "+10",
    explanation: "[alpha] = alpha / (l * c) = 10 / (1 * 1) = 10."
  },
  {
    content: "Which of the following is NOT a type of stereoisomer?",
    type: "MCQ",
    options: ["Enantiomer", "Diastereomer", "Structural isomer", "Meso compound"],
    correctAnswer: "Structural isomer",
    explanation: "Structural (constitutional) isomers are not stereoisomers."
  },
  {
    content: "What is the relationship between cis-2-butene and trans-2-butene?",
    type: "MCQ",
    options: ["Enantiomers", "Diastereomers", "Identical", "Constitutional isomers"],
    correctAnswer: "Diastereomers",
    explanation: "Geometric isomers (cis/trans) are diastereomers."
  },
  {
    content: "Which molecule is achiral?",
    type: "MCQ",
    options: ["2-butanol", "2-chloropropane", "2-chlorobutane", "3-methylhexane"],
    correctAnswer: "2-chloropropane",
    explanation: "It has a plane of symmetry."
  },
  {
    content: "How many chiral centers are in 2-bromo-3-chlorobutane?",
    type: "MCQ",
    options: ["0", "1", "2", "3"],
    correctAnswer: "2",
    explanation: "C2 and C3 are chiral."
  },
  {
    content: "Which of the following is true about racemic mixtures?",
    type: "MCQ",
    options: ["They rotate light to the right.", "They rotate light to the left.", "They are optically inactive.", "They are pure compounds."],
    correctAnswer: "They are optically inactive.",
    explanation: "Rotations cancel out."
  },
  {
    content: "The 'E' in E/Z notation stands for:",
    type: "MCQ",
    options: ["Entgegen (Opposite)", "Zusammen (Together)", "Equal", "Energy"],
    correctAnswer: "Entgegen (Opposite)",
    explanation: "German for opposite."
  },

  // --- Multi-Select (12 Questions) ---
  {
    content: "Select all conditions required for a molecule to be **meso**.",
    type: "MULTI_SELECT",
    options: [
      "Must have chiral centers.",
      "Must be optically active.",
      "Must have an internal plane of symmetry.",
      "Must be superimposable on its mirror image."
    ],
    correctAnswer: [
      "Must have chiral centers.",
      "Must have an internal plane of symmetry.",
      "Must be superimposable on its mirror image."
    ],
    explanation: "Meso compounds have chiral centers but are achiral due to symmetry."
  },
  {
    content: "Select all statements that are **true** about enantiomers.",
    type: "MULTI_SELECT",
    options: [
      "They have the same boiling point.",
      "They have the same melting point.",
      "They react identically with achiral reagents.",
      "They rotate plane-polarized light in the same direction."
    ],
    correctAnswer: [
      "They have the same boiling point.",
      "They have the same melting point.",
      "They react identically with achiral reagents."
    ],
    explanation: "They rotate light in OPPOSITE directions."
  },
  {
    content: "Which of the following are types of stereoisomers?",
    type: "MULTI_SELECT",
    options: ["Enantiomers", "Diastereomers", "Constitutional Isomers", "Meso Compounds"],
    correctAnswer: ["Enantiomers", "Diastereomers", "Meso Compounds"],
    explanation: "Constitutional isomers are not stereoisomers."
  },
  {
    content: "Select the molecules that are chiral.",
    type: "MULTI_SELECT",
    options: ["2-butanol", "2-propanol", "3-methylhexane", "Ethanol"],
    correctAnswer: ["2-butanol", "3-methylhexane"],
    explanation: "They have chiral centers and no symmetry."
  },
  {
    content: "Select the properties that differ between diastereomers.",
    type: "MULTI_SELECT",
    options: ["Boiling Point", "Melting Point", "Solubility", "Molecular Weight"],
    correctAnswer: ["Boiling Point", "Melting Point", "Solubility"],
    explanation: "Diastereomers have different physical properties."
  },
  {
    content: "Select the correct designations for Cahn-Ingold-Prelog priorities.",
    type: "MULTI_SELECT",
    options: ["Based on atomic number", "Based on atomic mass", "Higher number = Higher priority", "Lower number = Higher priority"],
    correctAnswer: ["Based on atomic number", "Higher number = Higher priority"],
    explanation: "Rules of CIP."
  },
  {
    content: "Select the methods used to determine chirality.",
    type: "MULTI_SELECT",
    options: ["Polarimetry", "X-ray crystallography", "Mass spectrometry", "NMR with chiral shift reagents"],
    correctAnswer: ["Polarimetry", "X-ray crystallography", "NMR with chiral shift reagents"],
    explanation: "Mass spec usually cannot distinguish enantiomers without special techniques."
  },
  {
    content: "Select the true statements about racemic mixtures.",
    type: "MULTI_SELECT",
    options: ["Net rotation is zero", "Contains 50:50 enantiomers", "Boiling point is always the same as pure enantiomer", "Can be resolved"],
    correctAnswer: ["Net rotation is zero", "Contains 50:50 enantiomers", "Can be resolved"],
    explanation: "BP can differ (racemic compound vs mixture)."
  },
  {
    content: "Select the chiral centers in 2,3-dihydroxybutanedioic acid (Tartaric acid).",
    type: "MULTI_SELECT",
    options: ["C1", "C2", "C3", "C4"],
    correctAnswer: ["C2", "C3"],
    explanation: "The central carbons are chiral."
  },
  {
    content: "Select the terms that describe the relationship between (R,R) and (S,S) isomers.",
    type: "MULTI_SELECT",
    options: ["Enantiomers", "Mirror images", "Diastereomers", "Superimposable"],
    correctAnswer: ["Enantiomers", "Mirror images"],
    explanation: "Inversion of all centers."
  },
  {
    content: "Select the molecules that can exhibit optical activity.",
    type: "MULTI_SELECT",
    options: ["Chiral molecules", "Racemic mixtures", "Meso compounds", "Enantiomerically pure compounds"],
    correctAnswer: ["Chiral molecules", "Enantiomerically pure compounds"],
    explanation: "Racemates and meso are inactive."
  },
  {
    content: "Select the representations used for 3D structures.",
    type: "MULTI_SELECT",
    options: ["Wedge-Dash", "Fischer", "Newman", "Lewis"],
    correctAnswer: ["Wedge-Dash", "Fischer", "Newman"],
    explanation: "Lewis is 2D connectivity."
  },

  // --- Fill-in-the-Blank (15 Questions) ---
  {
    content: "A molecule that is non-superimposable on its mirror image is called ______.",
    type: "FILL_BLANK",
    correctAnswer: "chiral",
    explanation: "Definition of chirality."
  },
  {
    content: "Stereoisomers that are not mirror images of each other are called ______.",
    type: "FILL_BLANK",
    correctAnswer: "diastereomers",
    explanation: "Definition of diastereomers."
  },
  {
    content: "A 1:1 mixture of enantiomers is called a ______ mixture.",
    type: "FILL_BLANK",
    correctAnswer: "racemic",
    explanation: "Definition of racemate."
  },
  {
    content: "The instrument used to measure optical rotation is called a ______.",
    type: "FILL_BLANK",
    correctAnswer: "polarimeter",
    explanation: "Device name."
  },
  {
    content: "Meso compounds are optically ______.",
    type: "FILL_BLANK",
    correctAnswer: "inactive",
    explanation: "Due to symmetry."
  },
  {
    content: "The Cahn-Ingold-Prelog system uses atomic ______ to assign priority.",
    type: "FILL_BLANK",
    correctAnswer: "number",
    explanation: "Basis of priority."
  },
  {
    content: "Clockwise rotation of plane-polarized light is designated as ______ (+).",
    type: "FILL_BLANK",
    correctAnswer: "dextrorotatory",
    explanation: "Direction."
  },
  {
    content: "Counter-clockwise rotation is designated as ______ (-).",
    type: "FILL_BLANK",
    correctAnswer: "levorotatory",
    explanation: "Direction."
  },
  {
    content: "Geometric isomers (cis/trans) are a type of ______.",
    type: "FILL_BLANK",
    correctAnswer: "diastereomer",
    explanation: "Classification."
  },
  {
    content: "A carbon atom bonded to four different groups is called a ______ center.",
    type: "FILL_BLANK",
    correctAnswer: "chiral",
    explanation: "Or stereocenter."
  },
  {
    content: "Enantiomers have ______ physical properties in an achiral environment.",
    type: "FILL_BLANK",
    correctAnswer: "identical",
    explanation: "Same BP, MP, etc."
  },
  {
    content: "The specific rotation of a racemic mixture is ______.",
    type: "FILL_BLANK",
    correctAnswer: "0",
    explanation: "Zero."
  },
  {
    content: "Resolution is the separation of ______.",
    type: "FILL_BLANK",
    correctAnswer: "enantiomers",
    explanation: "Process."
  },
  {
    content: "Fischer projections are often used for ______.",
    type: "FILL_BLANK",
    correctAnswer: "carbohydrates",
    explanation: "Sugars."
  },
  {
    content: "The maximum number of stereoisomers for a molecule with 3 chiral centers is ______.",
    type: "FILL_BLANK",
    correctAnswer: "8",
    explanation: "2^3 = 8."
  },

  // --- Matching (10 Questions) ---
  {
    content: "Match the term to its definition.",
    type: "MATCHING",
    options: [
      { left: "Enantiomer", right: "Mirror image" },
      { left: "Diastereomer", right: "Non-mirror image" },
      { left: "Meso", right: "Achiral with chiral centers" }
    ],
    correctAnswer: {
      "Enantiomer": "Mirror image",
      "Diastereomer": "Non-mirror image",
      "Meso": "Achiral with chiral centers"
    },
    explanation: "Definitions."
  },
  {
    content: "Match the rotation to the symbol.",
    type: "MATCHING",
    options: [
      { left: "Dextrorotatory", right: "(+)" },
      { left: "Levorotatory", right: "(-)" },
      { left: "Racemic", right: "(+/-)" }
    ],
    correctAnswer: {
      "Dextrorotatory": "(+)",
      "Levorotatory": "(-)",
      "Racemic": "(+/-)"
    },
    explanation: "Symbols."
  },
  {
    content: "Match the projection to its use.",
    type: "MATCHING",
    options: [
      { left: "Fischer", right: "Sugars/Amino Acids" },
      { left: "Newman", right: "Conformational Analysis" },
      { left: "Chair", right: "Cyclohexane stability" }
    ],
    correctAnswer: {
      "Fischer": "Sugars/Amino Acids",
      "Newman": "Conformational Analysis",
      "Chair": "Cyclohexane stability"
    },
    explanation: "Uses."
  },
  {
    content: "Match the priority (CIP) to the atom.",
    type: "MATCHING",
    options: [
      { left: "Br", right: "1 (High)" },
      { left: "Cl", right: "2" },
      { left: "F", right: "3 (Low)" }
    ],
    correctAnswer: {
      "Br": "1 (High)",
      "Cl": "2",
      "F": "3 (Low)"
    },
    explanation: "Atomic number: Br > Cl > F."
  },
  {
    content: "Match the isomer type.",
    type: "MATCHING",
    options: [
      { left: "Cis-Trans", right: "Geometric" },
      { left: "R/S", right: "Absolute Configuration" },
      { left: "D/L", right: "Relative Configuration" }
    ],
    correctAnswer: {
      "Cis-Trans": "Geometric",
      "R/S": "Absolute Configuration",
      "D/L": "Relative Configuration"
    },
    explanation: "Types."
  },
  {
    content: "Match the property to Enantiomers vs Diastereomers.",
    type: "MATCHING",
    options: [
      { left: "Enantiomers", right: "Same BP" },
      { left: "Diastereomers", right: "Different BP" },
      { left: "Racemate", right: "Inactive" }
    ],
    correctAnswer: {
      "Enantiomers": "Same BP",
      "Diastereomers": "Different BP",
      "Racemate": "Inactive"
    },
    explanation: "Properties."
  },
  {
    content: "Match the chiral center count to max stereoisomers.",
    type: "MATCHING",
    options: [
      { left: "1 center", right: "2 isomers" },
      { left: "2 centers", right: "4 isomers" },
      { left: "3 centers", right: "8 isomers" }
    ],
    correctAnswer: {
      "1 center": "2 isomers",
      "2 centers": "4 isomers",
      "3 centers": "8 isomers"
    },
    explanation: "2^n rule."
  },
  {
    content: "Match the molecule to chirality.",
    type: "MATCHING",
    options: [
      { left: "2-butanol", right: "Chiral" },
      { left: "2-propanol", right: "Achiral" },
      { left: "Meso-tartaric acid", right: "Achiral (Meso)" }
    ],
    correctAnswer: {
      "2-butanol": "Chiral",
      "2-propanol": "Achiral",
      "Meso-tartaric acid": "Achiral (Meso)"
    },
    explanation: "Examples."
  },
  {
    content: "Match the separation method.",
    type: "MATCHING",
    options: [
      { left: "Distillation", right: "Diastereomers" },
      { left: "Chiral Column", right: "Enantiomers" },
      { left: "Filtration", right: "Solids" }
    ],
    correctAnswer: {
      "Distillation": "Diastereomers",
      "Chiral Column": "Enantiomers",
      "Filtration": "Solids"
    },
    explanation: "Methods."
  },
  {
    content: "Match the configuration.",
    type: "MATCHING",
    options: [
      { left: "R", right: "Clockwise" },
      { left: "S", right: "Counter-clockwise" },
      { left: "E", right: "Opposite sides" }
    ],
    correctAnswer: {
      "R": "Clockwise",
      "S": "Counter-clockwise",
      "E": "Opposite sides"
    },
    explanation: "Definitions."
  },

  // --- Short Answer (8 Questions) ---
  {
    content: "Explain why enantiomers are difficult to separate.",
    type: "SHORT_ANSWER",
    correctAnswer: "Enantiomers have identical physical properties (boiling point, solubility, etc.) in an achiral environment, so standard physical separation methods like distillation do not work. They require a chiral environment (e.g., chiral chromatography or resolving agents) to be distinguished.",
    explanation: "Identical physical properties."
  },
  {
    content: "What is a meso compound? Give an example.",
    type: "SHORT_ANSWER",
    correctAnswer: "A meso compound is a molecule that has chiral centers but is achiral overall because it possesses an internal plane of symmetry. Example: Meso-tartaric acid.",
    explanation: "Symmetry cancels chirality."
  },
  {
    content: "Define 'Specific Rotation'.",
    type: "SHORT_ANSWER",
    correctAnswer: "Specific rotation is a standardized measure of the optical rotation of a substance, defined for a path length of 1 dm and a concentration of 1 g/mL at a specific temperature and wavelength.",
    explanation: "Standardized property."
  },
  {
    content: "How do you determine the R/S configuration of a chiral center?",
    type: "SHORT_ANSWER",
    correctAnswer: "1. Assign priorities to the 4 groups based on atomic number (CIP rules). 2. Orient the molecule so the lowest priority group (4) is in the back. 3. Trace the path from 1 -> 2 -> 3. Clockwise is R, Counter-clockwise is S.",
    explanation: "CIP rules."
  },
  {
    content: "What is the difference between conformation and configuration?",
    type: "SHORT_ANSWER",
    correctAnswer: "Conformations are different spatial arrangements formed by rotation around single bonds (interconvertible without breaking bonds). Configurations are different arrangements that can only be interconverted by breaking and reforming bonds (e.g., R/S, cis/trans).",
    explanation: "Rotation vs Bond breaking."
  },
  {
    content: "Why is thalidomide a tragic example of stereochemistry?",
    type: "SHORT_ANSWER",
    correctAnswer: "Thalidomide was sold as a racemate. One enantiomer was a sedative, but the other caused severe birth defects (teratogen). This highlighted the importance of testing individual enantiomers.",
    explanation: "Historical tragedy."
  },
  {
    content: "What is a racemic mixture?",
    type: "SHORT_ANSWER",
    correctAnswer: "A racemic mixture (or racemate) is a 1:1 mixture of two enantiomers. It is optically inactive because the rotations of the two enantiomers cancel each other out.",
    explanation: "50:50 mix."
  },
  {
    content: "Explain the term 'Optical Activity'.",
    type: "SHORT_ANSWER",
    correctAnswer: "Optical activity is the ability of a chiral substance to rotate the plane of plane-polarized light.",
    explanation: "Rotation of light."
  },

  // --- Label Diagram (6 Questions) ---
  {
    content: "Identify the chiral center in the molecule shown.",
    type: "MCQ",
    options: ["Carbon A", "Carbon B", "Carbon C", "None"],
    correctAnswer: "Carbon B",
    explanation: "Carbon B is bonded to 4 different groups.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide5.png"
  },
  {
    content: "Determine if the molecule shown is R or S.",
    type: "MCQ",
    options: ["R", "S"],
    correctAnswer: "S",
    explanation: "Priorities 1->2->3 are counter-clockwise with H in back.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide10.png"
  },
  {
    content: "Is this molecule Chiral or Achiral (Meso)?",
    type: "MCQ",
    options: ["Chiral", "Achiral (Meso)"],
    correctAnswer: "Achiral (Meso)",
    explanation: "Plane of symmetry is visible.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide15.png"
  },
  {
    content: "Identify the relationship between Structure A and Structure B.",
    type: "MCQ",
    options: ["Enantiomers", "Diastereomers", "Identical"],
    correctAnswer: "Diastereomers",
    explanation: "One center inverted, one same.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide20.png"
  },
  {
    content: "Which projection is shown?",
    type: "MCQ",
    options: ["Fischer", "Newman", "Sawhorse"],
    correctAnswer: "Newman",
    explanation: "Looking down the bond axis.",
    image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide25.png"
  },
  {
    content: "Identify the plane of symmetry in this molecule.",
    type: "MCQ",
    options: ["Vertical", "Horizontal", "Diagonal", "None"],
    correctAnswer: "Vertical",
    explanation: "Cuts the molecule in half.",
    image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide30.png"
  },

  // --- Order/Sequence (5 Questions) ---
  {
    content: "Order the groups by CIP priority (High to Low).",
    type: "ORDER_SEQUENCE",
    options: ["-OH", "-NH2", "-CH3", "-H"],
    correctAnswer: ["-OH", "-NH2", "-CH3", "-H"],
    explanation: "O(8) > N(7) > C(6) > H(1)."
  },
  {
    content: "Order the steps to determine R/S configuration.",
    type: "ORDER_SEQUENCE",
    options: ["Assign priorities", "Orient lowest priority back", "Trace path 1->2->3", "Determine R/S"],
    correctAnswer: ["Assign priorities", "Orient lowest priority back", "Trace path 1->2->3", "Determine R/S"],
    explanation: "Standard procedure."
  },
  {
    content: "Order the following by number of stereoisomers (Low to High).",
    type: "ORDER_SEQUENCE",
    options: ["Methane", "2-butanol", "2,3-dichlorobutane", "Glucose (open chain)"],
    correctAnswer: ["Methane", "2-butanol", "2,3-dichlorobutane", "Glucose (open chain)"],
    explanation: "0, 2, 3, 16."
  },
  {
    content: "Order the atoms by atomic number (High to Low).",
    type: "ORDER_SEQUENCE",
    options: ["I", "Br", "Cl", "F"],
    correctAnswer: ["I", "Br", "Cl", "F"],
    explanation: "Periodic table trend."
  },
  {
    content: "Order the stability of cyclohexane conformations (Most to Least).",
    type: "ORDER_SEQUENCE",
    options: ["Chair", "Twist Boat", "Boat", "Half Chair"],
    correctAnswer: ["Chair", "Twist Boat", "Boat", "Half Chair"],
    explanation: "Energy profile."
  },

  // --- Calculation (4 Questions) ---
  {
    content: "Calculate the max number of stereoisomers for a molecule with 4 chiral centers.",
    type: "CALCULATION",
    correctAnswer: "16",
    explanation: "2^4 = 16."
  },
  {
    content: "A sample has an observed rotation of +20 degrees. Path length = 2 dm, Concentration = 0.5 g/mL. Calculate specific rotation.",
    type: "CALCULATION",
    correctAnswer: "+20",
    explanation: "[alpha] = 20 / (2 * 0.5) = 20 / 1 = 20."
  },
  {
    content: "If a mixture has 80% enantiomer A and 20% enantiomer B, what is the enantiomeric excess (ee)?",
    type: "CALCULATION",
    correctAnswer: "60%",
    explanation: "ee = %major - %minor = 80 - 20 = 60%."
  },
  {
    content: "Calculate the % of the (+) enantiomer if the ee is 50%.",
    type: "CALCULATION",
    correctAnswer: "75%",
    explanation: "ee = 50%. Racemic part = 50%. (+) = 50 (excess) + 25 (half of racemic) = 75%."
  },

  // --- True/False (3 Questions) ---
  {
    content: "True or False: All chiral molecules have chiral centers.",
    type: "TRUE_FALSE",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "Some molecules like allenes are chiral without chiral centers."
  },
  {
    content: "True or False: A racemic mixture can be separated by simple distillation.",
    type: "TRUE_FALSE",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "Enantiomers have identical boiling points."
  },
  {
    content: "True or False: Diastereomers have different physical properties.",
    type: "TRUE_FALSE",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "They have different BP, MP, solubility."
  },

  // --- Case Study (2 Questions) ---
  {
    content: "A chemist synthesizes a drug with 2 chiral centers. They isolate 3 fractions. Fraction A is optically active. Fraction B is optically active. Fraction C is optically inactive. Identify the fractions.",
    type: "CASE_STUDY",
    correctAnswer: "Fractions A and B are likely the enantiomeric pair (e.g., R,R and S,S). Fraction C is likely the meso compound (R,S), which is achiral and optically inactive.",
    explanation: "2 chiral centers often give 3 isomers (pair + meso)."
  },
  {
    content: "A patient is prescribed a racemic drug. The R-enantiomer is active, but the S-enantiomer causes nausea. What strategy could the pharmaceutical company use to improve the drug?",
    type: "CASE_STUDY",
    correctAnswer: "Chiral Switch: Develop and market the pure R-enantiomer (eutomer) as a new product. This would eliminate the side effects caused by the S-enantiomer (distomer) and potentially allow for a lower dose.",
    explanation: "Removing the distomer improves safety/efficacy."
  },

  // --- Identify Error (2 Questions) ---
  {
    content: "A student claims that 'cis-1,2-dimethylcyclohexane is chiral because it has chiral centers'. Identify the error.",
    type: "IDENTIFY_ERROR",
    correctAnswer: "The student failed to check for symmetry. Cis-1,2-dimethylcyclohexane is a meso compound because it has a plane of symmetry (in the planar representation or time-averaged). It is achiral.",
    explanation: "Presence of chiral centers does not guarantee chirality."
  },
  {
    content: "A label reads 'Specific Rotation = +25 degrees at 10cm path length'. Identify the missing information required for a standard value.",
    type: "IDENTIFY_ERROR",
    correctAnswer: "The label is missing the concentration, temperature, and wavelength of light (usually D-line of sodium). Specific rotation must be reported with these parameters.",
    explanation: "Standard conditions required."
  }
];
