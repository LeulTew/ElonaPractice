export interface QuestionData {
  content: string;
  type: 'MCQ' | 'MULTI_SELECT' | 'TRUE_FALSE' | 'FILL_BLANK' | 'SHORT_ANSWER' | 'MATCHING' | 'ORDER_SEQUENCE' | 'CALCULATION' | 'CASE_STUDY' | 'IDENTIFY_ERROR';
  options?: string[] | { left: string; right: string }[];
  correctAnswer: string | string[] | { [key: string]: string };
  explanation: string;
  image?: string; // Path to image in course-images bucket
}

export const EXAM_CONTENT: Record<string, QuestionData[]> = {
  'exam-cnp-ch1': [
    // --- MCQ (30 Questions) ---
    {
      content: "Which of the following statements best describes a **chiral** molecule?",
      type: "MCQ",
      options: [
        "It is superimposable on its mirror image.",
        "It has a plane of symmetry.",
        "It is non-superimposable on its mirror image.",
        "It always contains a double bond."
      ],
      correctAnswer: "It is non-superimposable on its mirror image.",
      explanation: "Chirality is defined by the property of being non-superimposable on the mirror image, like left and right hands."
    },
    {
      content: "Identify the relationship between the two structures shown in the diagram (Enantiomers vs Diastereomers).",
      type: "MCQ",
      options: ["Enantiomers", "Diastereomers", "Identical", "Constitutional Isomers"],
      correctAnswer: "Enantiomers",
      explanation: "The structures are non-superimposable mirror images of each other.",
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide34.png"
    },
    {
      content: "What is the maximum number of stereoisomers for a compound with **n** chiral centers?",
      type: "MCQ",
      options: ["2n", "2^n", "n^2", "2n + 2"],
      correctAnswer: "2^n",
      explanation: "The maximum number of stereoisomers is calculated as 2^n, where n is the number of chiral centers."
    },
    {
      content: "Which of the following compounds is **optically inactive** despite having chiral centers?",
      type: "MCQ",
      options: ["(R)-2-chlorobutane", "(S)-2-chlorobutane", "Meso-tartaric acid", "(+)-Tartaric acid"],
      correctAnswer: "Meso-tartaric acid",
      explanation: "Meso compounds are achiral due to an internal plane of symmetry, making them optically inactive."
    },
    {
      content: "Assign the Cahn-Ingold-Prelog priority for the group -OH, -CH3, -H, -Cl.",
      type: "MCQ",
      options: ["Cl > OH > CH3 > H", "OH > Cl > CH3 > H", "Cl > CH3 > OH > H", "H > CH3 > OH > Cl"],
      correctAnswer: "Cl > OH > CH3 > H",
      explanation: "Priority is based on atomic number: Cl(17) > O(8) > C(6) > H(1)."
    },
    {
      content: "Which projection formula is most commonly used to represent carbohydrates?",
      type: "MCQ",
      options: ["Newman Projection", "Fischer Projection", "Sawhorse Projection", "Wedge-Dash Projection"],
      correctAnswer: "Fischer Projection",
      explanation: "Fischer projections are standard for depicting sugars."
    },
    {
      content: "Enantiomers have identical physical properties EXCEPT for:",
      type: "MCQ",
      options: ["Boiling point", "Melting point", "Interaction with plane-polarized light", "Density"],
      correctAnswer: "Interaction with plane-polarized light",
      explanation: "They rotate light in opposite directions."
    },
    {
      content: "A mixture containing equal amounts of a pair of enantiomers is called:",
      type: "MCQ",
      options: ["Optically pure", "Racemic mixture", "Meso compound", "Diastereomeric mixture"],
      correctAnswer: "Racemic mixture",
      explanation: "A 1:1 mixture of enantiomers is a racemate."
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
      content: "What is the relationship between (2R,3R)-2,3-dibromopentane and (2R,3S)-2,3-dibromopentane?",
      type: "MCQ",
      options: ["Enantiomers", "Diastereomers", "Identical", "Meso"],
      correctAnswer: "Diastereomers",
      explanation: "Invert some but not all centers -> Diastereomers."
    },
    {
      content: "Which instrument is used to measure optical activity?",
      type: "MCQ",
      options: ["Spectrophotometer", "Polarimeter", "Refractometer", "Viscometer"],
      correctAnswer: "Polarimeter",
      explanation: "A polarimeter measures the rotation of plane-polarized light."
    },
    {
      content: "The observed rotation of a sample is +10 degrees. If the path length is 1 dm and concentration is 1 g/mL, what is the specific rotation?",
      type: "MCQ",
      options: ["+10", "+100", "+1", "+0.1"],
      correctAnswer: "+10",
      explanation: "[alpha] = alpha / (l * c) = 10 / (1 * 1) = 10."
    },
    {
      content: "Which of the following is an example of a chiral drug?",
      type: "MCQ",
      options: ["Ibuprofen", "Aspirin", "Paracetamol", "Ethanol"],
      correctAnswer: "Ibuprofen",
      explanation: "Ibuprofen has a chiral center; Aspirin and Paracetamol do not."
    },
    {
      content: "Thalidomide is a classic example of why stereochemistry is important because:",
      type: "MCQ",
      options: ["One enantiomer is active, the other is inactive.", "One enantiomer cures morning sickness, the other causes birth defects.", "It is a meso compound.", "It cannot be resolved."],
      correctAnswer: "One enantiomer cures morning sickness, the other causes birth defects.",
      explanation: "The R-isomer is a sedative, the S-isomer is a teratogen."
    },
    {
      content: "Which of the following is NOT a type of isomer?",
      type: "MCQ",
      options: ["Constitutional", "Stereoisomer", "Isotope", "Conformational"],
      correctAnswer: "Isotope",
      explanation: "Isotopes are atoms with different neutron counts, not molecular isomers."
    },
    {
      content: "In a Fischer projection, horizontal lines represent bonds coming:",
      type: "MCQ",
      options: ["Out of the page (towards you)", "Into the page (away from you)", "In the plane", "Vertical"],
      correctAnswer: "Out of the page (towards you)",
      explanation: "Horizontal = Hug (towards you)."
    },
    {
      content: "In a Fischer projection, vertical lines represent bonds coming:",
      type: "MCQ",
      options: ["Out of the page", "Into the page", "In the plane", "Horizontal"],
      correctAnswer: "Into the page",
      explanation: "Vertical = Away."
    },

    // --- Multi-Select (12 Questions) ---
    {
      content: "Select **all** conditions required for a molecule to be considered **Meso**.",
      type: "MULTI_SELECT",
      options: [
        "Must have chiral centers",
        "Must be optically active",
        "Must have an internal plane of symmetry",
        "Must be superimposable on its mirror image"
      ],
      correctAnswer: ["Must have chiral centers", "Must have an internal plane of symmetry", "Must be superimposable on its mirror image"],
      explanation: "Meso compounds have chiral centers but are achiral overall due to symmetry."
    },
    {
      content: "Which of the following physical properties differ between **Enantiomers**?",
      type: "MULTI_SELECT",
      options: ["Boiling Point", "Melting Point", "Direction of rotation of plane-polarized light", "Interaction with other chiral molecules"],
      correctAnswer: ["Direction of rotation of plane-polarized light", "Interaction with other chiral molecules"],
      explanation: "Enantiomers have identical physical properties in an achiral environment."
    },
    {
      content: "Select the molecules that are **chiral**.",
      type: "MULTI_SELECT",
      options: ["2-butanol", "2-propanol", "3-methylhexane", "Ethanol"],
      correctAnswer: ["2-butanol", "3-methylhexane"],
      explanation: "2-butanol and 3-methylhexane have chiral centers with 4 different groups."
    },
    {
      content: "Which of the following statements about **Diastereomers** are true?",
      type: "MULTI_SELECT",
      options: [
        "They are mirror images.",
        "They have different physical properties.",
        "They can be separated by distillation.",
        "They must have at least two chiral centers."
      ],
      correctAnswer: ["They have different physical properties.", "They can be separated by distillation.", "They must have at least two chiral centers."],
      explanation: "Diastereomers differ in physical properties, allowing separation."
    },
    {
      content: "Select the correct Cahn-Ingold-Prelog priorities for the groups attached to a chiral center.",
      type: "MULTI_SELECT",
      options: ["-Br > -Cl", "-OH > -NH2", "-CH3 > -H", "-CH2CH3 > -CH3"],
      correctAnswer: ["-Br > -Cl", "-OH > -NH2", "-CH3 > -H", "-CH2CH3 > -CH3"],
      explanation: "All are correct based on atomic number and chain rules."
    },
    {
      content: "Which of the following are types of **Stereoisomers**?",
      type: "MULTI_SELECT",
      options: ["Enantiomers", "Diastereomers", "Constitutional Isomers", "Meso compounds"],
      correctAnswer: ["Enantiomers", "Diastereomers", "Meso compounds"],
      explanation: "Constitutional isomers are not stereoisomers."
    },
    {
      content: "Select the achiral objects.",
      type: "MULTI_SELECT",
      options: ["A perfect sphere", "A screw", "A fork", "A left hand"],
      correctAnswer: ["A perfect sphere", "A fork"],
      explanation: "Symmetric objects are achiral."
    },
    {
      content: "Which of the following are true about **Racemic Mixtures**?",
      type: "MULTI_SELECT",
      options: ["Optically inactive", "50:50 mixture of enantiomers", "Rotates light", "Separable by simple filtration"],
      correctAnswer: ["Optically inactive", "50:50 mixture of enantiomers"],
      explanation: "Racemates do not rotate light."
    },
    {
      content: "Select the compounds that contain a chiral center.",
      type: "MULTI_SELECT",
      options: ["Lactic acid", "Alanine", "Glycine", "Propane"],
      correctAnswer: ["Lactic acid", "Alanine"],
      explanation: "Glycine is the only achiral amino acid."
    },
    {
      content: "Which terms describe the configuration of a double bond?",
      type: "MULTI_SELECT",
      options: ["E", "Z", "R", "S", "Cis", "Trans"],
      correctAnswer: ["E", "Z", "Cis", "Trans"],
      explanation: "E/Z and Cis/Trans describe alkene geometry. R/S describe chiral centers."
    },
    {
      content: "Select the correct statements about **Optical Activity**.",
      type: "MULTI_SELECT",
      options: [
        "Measured by a polarimeter",
        "Property of chiral molecules",
        "Depends on path length",
        "Always positive"
      ],
      correctAnswer: ["Measured by a polarimeter", "Property of chiral molecules", "Depends on path length"],
      explanation: "Rotation can be positive or negative."
    },
    {
      content: "Which of the following can be used to resolve enantiomers?",
      type: "MULTI_SELECT",
      options: ["Chiral HPLC", "Enzymatic resolution", "Formation of diastereomeric salts", "Simple distillation"],
      correctAnswer: ["Chiral HPLC", "Enzymatic resolution", "Formation of diastereomeric salts"],
      explanation: "Distillation fails for enantiomers."
    },

    // --- Fill-in-the-Blank (15 Questions) ---
    {
      content: "A 50:50 mixture of two enantiomers is called a ______ mixture.",
      type: "FILL_BLANK",
      correctAnswer: "racemic",
      explanation: "A racemic mixture (or racemate) contains equal amounts of both enantiomers."
    },
    {
      content: "The specific rotation of pure (S)-carvone is +61°. The specific rotation of pure (R)-carvone is ______°.",
      type: "FILL_BLANK",
      correctAnswer: "-61",
      explanation: "Enantiomers rotate light by the same magnitude but in opposite directions."
    },
    {
      content: "Stereoisomers that are not mirror images of each other are called ______.",
      type: "FILL_BLANK",
      correctAnswer: "diastereomers",
      explanation: "Definition of diastereomers."
    },
    {
      content: "A molecule that is superimposable on its mirror image is ______.",
      type: "FILL_BLANK",
      correctAnswer: "achiral",
      explanation: "Achiral molecules are symmetric."
    },
    {
      content: "The Cahn-Ingold-Prelog priority of -OH is ______ than -CH3.",
      type: "FILL_BLANK",
      correctAnswer: "higher",
      explanation: "Oxygen (8) > Carbon (6)."
    },
    {
      content: "Meso compounds are optically ______.",
      type: "FILL_BLANK",
      correctAnswer: "inactive",
      explanation: "Internal symmetry cancels rotation."
    },
    {
      content: "The maximum number of stereoisomers for a compound with 3 chiral centers is ______.",
      type: "FILL_BLANK",
      correctAnswer: "8",
      explanation: "2^3 = 8."
    },
    {
      content: "If the lowest priority group is on a wedge, the apparent R configuration is actually ______.",
      type: "FILL_BLANK",
      correctAnswer: "S",
      explanation: "Reversing the rule for wedge."
    },
    {
      content: "Clockwise rotation of plane-polarized light is denoted by the symbol ______.",
      type: "FILL_BLANK",
      correctAnswer: "+",
      explanation: "Plus (+) or d-."
    },
    {
      content: "Counter-clockwise rotation is denoted by the symbol ______.",
      type: "FILL_BLANK",
      correctAnswer: "-",
      explanation: "Minus (-) or l-."
    },
    {
      content: "Separating enantiomers by converting them into diastereomers is called ______.",
      type: "FILL_BLANK",
      correctAnswer: "resolution",
      explanation: "Resolution via diastereomeric salt formation."
    },
    {
      content: "Isomers that differ in the order of bonding of atoms are called ______ isomers.",
      type: "FILL_BLANK",
      correctAnswer: "constitutional",
      explanation: "Also known as structural isomers."
    },
    {
      content: "A carbon atom bonded to four different groups is called a ______ center.",
      type: "FILL_BLANK",
      correctAnswer: "chiral",
      explanation: "Or stereocenter."
    },
    {
      content: "In a Fischer projection, the carbon chain is usually drawn ______.",
      type: "FILL_BLANK",
      correctAnswer: "vertically",
      explanation: "With the most oxidized group at the top."
    },
    {
      content: "Enantiomers react at different rates only with ______ reagents.",
      type: "FILL_BLANK",
      correctAnswer: "chiral",
      explanation: "Chiral recognition requires a chiral partner."
    },

    // --- Matching (10 Questions) ---
    {
      content: "Match the term with its definition.",
      type: "MATCHING",
      options: [
        { left: "Enantiomers", right: "Non-superimposable mirror images" },
        { left: "Diastereomers", right: "Stereoisomers that are not mirror images" },
        { left: "Constitutional Isomers", right: "Same formula, different connectivity" }
      ],
      correctAnswer: {
        "Enantiomers": "Non-superimposable mirror images",
        "Diastereomers": "Stereoisomers that are not mirror images",
        "Constitutional Isomers": "Same formula, different connectivity"
      },
      explanation: "Standard definitions."
    },
    {
      content: "Match the priority (High to Low) for Cahn-Ingold-Prelog.",
      type: "MATCHING",
      options: [
        { left: "-I", right: "1 (Highest)" },
        { left: "-Br", right: "2" },
        { left: "-Cl", right: "3" },
        { left: "-F", right: "4 (Lowest)" }
      ],
      correctAnswer: {
        "-I": "1 (Highest)",
        "-Br": "2",
        "-Cl": "3",
        "-F": "4 (Lowest)"
      },
      explanation: "Atomic number: I > Br > Cl > F."
    },
    {
      content: "Match the molecule to its chirality.",
      type: "MATCHING",
      options: [
        { left: "Meso-tartaric acid", right: "Achiral" },
        { left: "(R)-Lactic acid", right: "Chiral" },
        { left: "Methane", right: "Achiral" }
      ],
      correctAnswer: {
        "Meso-tartaric acid": "Achiral",
        "(R)-Lactic acid": "Chiral",
        "Methane": "Achiral"
      },
      explanation: "Meso and symmetric molecules are achiral."
    },
    {
      content: "Match the projection type to its description.",
      type: "MATCHING",
      options: [
        { left: "Fischer", right: "Cross/Plus shape" },
        { left: "Newman", right: "Circle with spokes" },
        { left: "Sawhorse", right: "Angled view of bond" }
      ],
      correctAnswer: {
        "Fischer": "Cross/Plus shape",
        "Newman": "Circle with spokes",
        "Sawhorse": "Angled view of bond"
      },
      explanation: "Visual representations."
    },
    {
      content: "Match the isomer count to the chiral centers (n).",
      type: "MATCHING",
      options: [
        { left: "n=1", right: "2 isomers" },
        { left: "n=2", right: "Max 4 isomers" },
        { left: "n=3", right: "Max 8 isomers" }
      ],
      correctAnswer: {
        "n=1": "2 isomers",
        "n=2": "Max 4 isomers",
        "n=3": "Max 8 isomers"
      },
      explanation: "2^n rule."
    },
    {
      content: "Match the symbol to the meaning.",
      type: "MATCHING",
      options: [
        { left: "R", right: "Rectus (Right)" },
        { left: "S", right: "Sinister (Left)" },
        { left: "d", right: "Dextrorotatory" },
        { left: "l", right: "Levorotatory" }
      ],
      correctAnswer: {
        "R": "Rectus (Right)",
        "S": "Sinister (Left)",
        "d": "Dextrorotatory",
        "l": "Levorotatory"
      },
      explanation: "Latin roots."
    },
    {
      content: "Match the separation technique to the target.",
      type: "MATCHING",
      options: [
        { left: "Distillation", right: "Liquids with different BP" },
        { left: "Resolution", right: "Enantiomers" },
        { left: "Filtration", right: "Solid from Liquid" }
      ],
      correctAnswer: {
        "Distillation": "Liquids with different BP",
        "Resolution": "Enantiomers",
        "Filtration": "Solid from Liquid"
      },
      explanation: "Separation methods."
    },
    {
      content: "Match the functional group to CIP priority (vs H).",
      type: "MATCHING",
      options: [
        { left: "-OH", right: "High Priority" },
        { left: "-H", right: "Low Priority" },
        { left: "-CH3", right: "Medium Priority" }
      ],
      correctAnswer: {
        "-OH": "High Priority",
        "-H": "Low Priority",
        "-CH3": "Medium Priority"
      },
      explanation: "O > C > H."
    },
    {
      content: "Match the term to the example.",
      type: "MATCHING",
      options: [
        { left: "Chiral Object", right: "Screw" },
        { left: "Achiral Object", right: "Ball" },
        { left: "Plane of Symmetry", right: "Mirror Plane" }
      ],
      correctAnswer: {
        "Chiral Object": "Screw",
        "Achiral Object": "Ball",
        "Plane of Symmetry": "Mirror Plane"
      },
      explanation: "Macroscopic examples."
    },
    {
      content: "Match the rotation to the sign.",
      type: "MATCHING",
      options: [
        { left: "Clockwise", right: "(+)" },
        { left: "Counter-clockwise", right: "(-)" },
        { left: "No rotation", right: "0" }
      ],
      correctAnswer: {
        "Clockwise": "(+)",
        "Counter-clockwise": "(-)",
        "No rotation": "0"
      },
      explanation: "Sign conventions."
    },

    // --- Short Answer (8 Questions) ---
    {
      content: "Explain why **trans-1,2-dimethylcyclohexane** can exist as a pair of enantiomers, while **cis-1,2-dimethylcyclohexane** is a meso compound.",
      type: "SHORT_ANSWER",
      correctAnswer: "The trans isomer lacks a plane of symmetry and is chiral. The cis isomer has a plane of symmetry bisecting the ring, making it achiral (meso) despite having chiral centers.",
      explanation: "Symmetry elements dictate chirality."
    },
    {
      content: "Define **Racemic Mixture** and explain its optical activity.",
      type: "SHORT_ANSWER",
      correctAnswer: "A racemic mixture is a 1:1 mixture of enantiomers. It is optically inactive because the rotation of one enantiomer exactly cancels the rotation of the other.",
      explanation: "Net rotation is zero."
    },
    {
      content: "What is a **Meso Compound**?",
      type: "SHORT_ANSWER",
      correctAnswer: "A meso compound is a molecule that has chiral centers but is achiral overall because it possesses an internal plane of symmetry.",
      explanation: "Superimposable on mirror image."
    },
    {
      content: "Explain the difference between **Configuration** and **Conformation**.",
      type: "SHORT_ANSWER",
      correctAnswer: "Configuration refers to the permanent arrangement of atoms (R/S, cis/trans) that can only be changed by breaking bonds. Conformation refers to temporary shapes arising from bond rotation (eclipsed/staggered).",
      explanation: "Breaking bonds vs rotating bonds."
    },
    {
      content: "Why do enantiomers have different biological activities?",
      type: "SHORT_ANSWER",
      correctAnswer: "Biological receptors and enzymes are chiral proteins. Enantiomers interact differently with these chiral binding sites, like a right hand trying to fit into a left glove.",
      explanation: "Chiral recognition."
    },
    {
      content: "Describe how to determine R/S configuration.",
      type: "SHORT_ANSWER",
      correctAnswer: "1. Assign priorities (CIP) to the 4 groups. 2. Orient the lowest priority group to the back. 3. Trace the path 1->2->3. Clockwise = R, Counter-clockwise = S.",
      explanation: "Standard procedure."
    },
    {
      content: "What is **Resolution** in stereochemistry?",
      type: "SHORT_ANSWER",
      correctAnswer: "Resolution is the process of separating a racemic mixture into its pure enantiomers, often by converting them into diastereomers using a chiral resolving agent.",
      explanation: "Separation technique."
    },
    {
      content: "Why is **Thalidomide** significant in the history of stereochemistry?",
      type: "SHORT_ANSWER",
      correctAnswer: "It showed that enantiomers can have drastically different effects (sedative vs teratogen), leading to stricter regulations on chiral drugs.",
      explanation: "Tragic consequence of ignoring chirality."
    },

    // --- Calculation (4 Questions) ---
    {
      content: "Calculate the **enantiomeric excess (ee)** of a mixture containing 80% (R)-isomer and 20% (S)-isomer.",
      type: "CALCULATION",
      correctAnswer: "60%",
      explanation: "ee = %Major - %Minor = 80% - 20% = 60%."
    },
    {
      content: "A sample has an observed rotation of +10°. If the pure enantiomer has a specific rotation of +20°, what is the **optical purity** of the sample?",
      type: "CALCULATION",
      correctAnswer: "50%",
      explanation: "Optical Purity = (Observed / Pure) * 100 = (10 / 20) * 100 = 50%."
    },
    {
      content: "A mixture has an ee of 50%. What is the percentage of the major enantiomer?",
      type: "CALCULATION",
      correctAnswer: "75%",
      explanation: "%Major = 50 + (ee/2) = 50 + 25 = 75%."
    },
    {
      content: "If the specific rotation of (S)-2-butanol is +13.5°, what is the observed rotation of a sample with 100% (R)-2-butanol?",
      type: "CALCULATION",
      correctAnswer: "-13.5°",
      explanation: "Enantiomers have equal but opposite rotation."
    },

    // --- Order/Sequence (5 Questions) ---
    {
      content: "Order the following groups by Cahn-Ingold-Prelog priority (Highest to Lowest).",
      type: "ORDER_SEQUENCE",
      options: ["-SH", "-OH", "-NH2", "-CH3"],
      correctAnswer: ["-SH", "-OH", "-NH2", "-CH3"],
      explanation: "Atomic numbers: S(16) > O(8) > N(7) > C(6)."
    },
    {
      content: "Order the steps to assign R/S configuration.",
      type: "ORDER_SEQUENCE",
      options: ["Assign priorities", "Orient lowest priority back", "Trace 1->2->3", "Determine R/S"],
      correctAnswer: ["Assign priorities", "Orient lowest priority back", "Trace 1->2->3", "Determine R/S"],
      explanation: "Logical flow."
    },
    {
      content: "Order the following by number of stereoisomers (Lowest to Highest).",
      type: "ORDER_SEQUENCE",
      options: ["Methane (0 centers)", "2-butanol (1 center)", "2,3-dibromopentane (2 centers)", "Glucose (4 centers)"],
      correctAnswer: ["Methane (0 centers)", "2-butanol (1 center)", "2,3-dibromopentane (2 centers)", "Glucose (4 centers)"],
      explanation: "0 < 2 < 4 < 16."
    },
    {
      content: "Order the atoms by CIP priority (High to Low).",
      type: "ORDER_SEQUENCE",
      options: ["Br", "Cl", "O", "H"],
      correctAnswer: ["Br", "Cl", "O", "H"],
      explanation: "Atomic number."
    },
    {
      content: "Order the following from most specific to least specific.",
      type: "ORDER_SEQUENCE",
      options: ["(2R,3R)-2,3-butanediol", "2,3-butanediol", "Butanediol", "Diol"],
      correctAnswer: ["(2R,3R)-2,3-butanediol", "2,3-butanediol", "Butanediol", "Diol"],
      explanation: "Specificity hierarchy."
    },

    // --- True/False (3 Questions) ---
    {
      content: "True or False: All molecules with chiral centers are chiral.",
      type: "TRUE_FALSE",
      options: ["True", "False"],
      correctAnswer: "False",
      explanation: "Meso compounds have chiral centers but are achiral."
    },
    {
      content: "True or False: Enantiomers have the same melting point.",
      type: "TRUE_FALSE",
      options: ["True", "False"],
      correctAnswer: "True",
      explanation: "Physical properties are identical."
    },
    {
      content: "True or False: R configuration always corresponds to (+) rotation.",
      type: "TRUE_FALSE",
      options: ["True", "False"],
      correctAnswer: "False",
      explanation: "There is no direct correlation between R/S and +/-."
    },

    // --- Label Diagram (6 Questions) ---
    {
      content: "Identify the configuration (R or S) for the chiral center indicated in the image.",
      type: "MCQ", 
      options: ["R", "S"],
      correctAnswer: "R",
      explanation: "Priorities are 1->2->3 clockwise with H in back -> R.",
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide44.png"
    },
    {
      content: "Is the molecule shown in the diagram Chiral or Achiral?",
      type: "MCQ",
      options: ["Chiral", "Achiral"],
      correctAnswer: "Chiral",
      explanation: "Lack of symmetry plane.",
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide34.png"
    },
    {
      content: "Identify the relationship between the two Newman projections shown.",
      type: "MCQ",
      options: ["Identical", "Enantiomers", "Diastereomers", "Conformers"],
      correctAnswer: "Conformers",
      explanation: "Rotation around single bond.",
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide20.png"
    },
    {
      content: "Determine the configuration of the alkene shown.",
      type: "MCQ",
      options: ["E", "Z"],
      correctAnswer: "E",
      explanation: "High priority groups on opposite sides.",
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide15.png"
    },
    {
      content: "Which projection is shown in the image?",
      type: "MCQ",
      options: ["Fischer", "Newman", "Sawhorse"],
      correctAnswer: "Fischer",
      explanation: "Cross representation.",
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide10.png"
    },
    {
      content: "Identify the chiral center in the molecule.",
      type: "MCQ",
      options: ["C1", "C2", "C3", "C4"],
      correctAnswer: "C2",
      explanation: "C2 is bonded to 4 different groups.",
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide5.png"
    },

    // --- Case Study (2 Questions) ---
    {
      content: "Thalidomide was prescribed as a sedative but caused birth defects. One enantiomer was therapeutic, the other teratogenic. Explain why separating them didn't solve the problem.",
      type: "CASE_STUDY",
      correctAnswer: "Thalidomide undergoes rapid racemization in vivo (in the body) at physiological pH. Even if pure enantiomer is administered, it converts to the mixture.",
      explanation: "In vivo racemization makes separation ineffective."
    },
    {
      content: "A chemist synthesizes a new drug with 3 chiral centers. They isolate one fraction that is optically inactive. What could this fraction be?",
      type: "CASE_STUDY",
      correctAnswer: "It could be a racemic mixture (50:50 enantiomers) or a meso compound (if symmetry permits).",
      explanation: "Both are optically inactive."
    },

    // --- Identify Error (2 Questions) ---
    {
      content: "The student assigned the configuration of the molecule shown as 'S'. Identify the error in their reasoning if priorities are 1->2->3 clockwise and the lowest priority group is on a wedge (coming out).",
      type: "IDENTIFY_ERROR",
      correctAnswer: "If the lowest priority group is on a wedge (forward), the apparent configuration must be reversed. Clockwise normally means R, but here it implies S. Wait, if they assigned S, they might be correct? The error is likely ignoring the wedge rule.",
      explanation: "Rule: If lowest priority is forward, R becomes S and S becomes R."
    },
    {
      content: "A student claims that since a molecule has no chiral carbons, it must be achiral. Identify the error.",
      type: "IDENTIFY_ERROR",
      correctAnswer: "Molecules can be chiral without chiral carbons, such as allenes or biphenyls (axial chirality).",
      explanation: "Chirality is a property of the whole molecule."
    }
  ],
  'exam-cnp-ch2': [
    // --- MCQ (30 Questions) ---
    {
      content: "Which of the following is a **ketose** sugar?",
      type: "MCQ",
      options: ["Glucose", "Fructose", "Galactose", "Mannose"],
      correctAnswer: "Fructose",
      explanation: "Fructose is a ketohexose, while the others are aldohexoses."
    },
    {
      content: "What is the relationship between $\\alpha$-D-glucose and $\\beta$-D-glucose?",
      type: "MCQ",
      options: ["Enantiomers", "Epimers", "Anomers", "Constitutional Isomers"],
      correctAnswer: "Anomers",
      explanation: "They differ only in the configuration at the anomeric carbon (C1)."
    },
    {
      content: "Which bond links two monosaccharides to form a disaccharide?",
      type: "MCQ",
      options: ["Peptide bond", "Glycosidic bond", "Phosphodiester bond", "Ester bond"],
      correctAnswer: "Glycosidic bond",
      explanation: "A glycosidic bond is formed between the anomeric carbon of one sugar and a hydroxyl group of another."
    },
    {
      content: "Which of the following is a **non-reducing** sugar?",
      type: "MCQ",
      options: ["Maltose", "Lactose", "Sucrose", "Cellobiose"],
      correctAnswer: "Sucrose",
      explanation: "Sucrose has a glycosidic bond between the two anomeric carbons, preventing ring opening."
    },
    {
      content: "Which monosaccharide is the C-4 epimer of Glucose?",
      type: "MCQ",
      options: ["Mannose", "Galactose", "Fructose", "Ribose"],
      correctAnswer: "Galactose",
      explanation: "Galactose differs from glucose only at C4."
    },
    {
      content: "Which monosaccharide is the C-2 epimer of Glucose?",
      type: "MCQ",
      options: ["Mannose", "Galactose", "Fructose", "Ribose"],
      correctAnswer: "Mannose",
      explanation: "Mannose differs from glucose only at C2."
    },
    {
      content: "Starch is composed of which two polysaccharides?",
      type: "MCQ",
      options: ["Amylose and Amylopectin", "Glycogen and Cellulose", "Amylose and Cellulose", "Amylopectin and Glycogen"],
      correctAnswer: "Amylose and Amylopectin",
      explanation: "Starch consists of linear amylose and branched amylopectin."
    },
    {
      content: "What is the major structural difference between starch and cellulose?",
      type: "MCQ",
      options: ["Starch has beta-linkages; cellulose has alpha-linkages.", "Starch has alpha-linkages; cellulose has beta-linkages.", "Starch is branched; cellulose is linear.", "Starch is a protein; cellulose is a carbohydrate."],
      correctAnswer: "Starch has alpha-linkages; cellulose has beta-linkages.",
      explanation: "The alpha vs beta linkage leads to helical vs sheet structures."
    },
    {
      content: "Which reagent is used to distinguish between reducing and non-reducing sugars?",
      type: "MCQ",
      options: ["Benedict's Reagent", "Biuret Reagent", "Ninhydrin", "Sudan III"],
      correctAnswer: "Benedict's Reagent",
      explanation: "Benedict's reagent reduces Cu2+ to Cu+ in the presence of reducing sugars."
    },
    {
      content: "The breakdown of glycogen to glucose is called:",
      type: "MCQ",
      options: ["Glycolysis", "Glycogenesis", "Glycogenolysis", "Gluconeogenesis"],
      correctAnswer: "Glycogenolysis",
      explanation: "Lysis (breakdown) of glycogen."
    },
    {
      content: "Which sugar is known as 'blood sugar'?",
      type: "MCQ",
      options: ["Fructose", "Sucrose", "Glucose", "Lactose"],
      correctAnswer: "Glucose",
      explanation: "Glucose is the primary sugar circulating in blood."
    },
    {
      content: "Lactose is composed of:",
      type: "MCQ",
      options: ["Glucose + Fructose", "Glucose + Galactose", "Glucose + Glucose", "Galactose + Fructose"],
      correctAnswer: "Glucose + Galactose",
      explanation: "Milk sugar is a disaccharide of glucose and galactose."
    },
    {
      content: "Which of the following is an aldohexose?",
      type: "MCQ",
      options: ["Ribose", "Glucose", "Fructose", "Glyceraldehyde"],
      correctAnswer: "Glucose",
      explanation: "Glucose has an aldehyde group and 6 carbons."
    },
    {
      content: "In the D-family of sugars, the OH group on the chiral center furthest from the carbonyl is on the:",
      type: "MCQ",
      options: ["Right", "Left", "Top", "Bottom"],
      correctAnswer: "Right",
      explanation: "D = Dextro (Right) in Fischer projection."
    },
    {
      content: "The cyclic form of glucose is a:",
      type: "MCQ",
      options: ["Hemiacetal", "Hemiketal", "Acetal", "Ketal"],
      correctAnswer: "Hemiacetal",
      explanation: "Formed by reaction of aldehyde and alcohol."
    },
    {
      content: "Which polysaccharide is the main storage form of glucose in animals?",
      type: "MCQ",
      options: ["Starch", "Cellulose", "Glycogen", "Chitin"],
      correctAnswer: "Glycogen",
      explanation: "Glycogen is stored in liver and muscles."
    },
    {
      content: "Which of the following is NOT a reducing sugar?",
      type: "MCQ",
      options: ["Glucose", "Fructose", "Maltose", "Sucrose"],
      correctAnswer: "Sucrose",
      explanation: "Sucrose has no free anomeric carbon."
    },
    {
      content: "The reaction of a sugar with an alcohol forms a:",
      type: "MCQ",
      options: ["Glycoside", "Peptide", "Lipid", "Nucleotide"],
      correctAnswer: "Glycoside",
      explanation: "Glycosides are acetals of sugars."
    },
    {
      content: "Which sugar is found in DNA?",
      type: "MCQ",
      options: ["Ribose", "Deoxyribose", "Glucose", "Fructose"],
      correctAnswer: "Deoxyribose",
      explanation: "2-deoxyribose is the sugar component of DNA."
    },
    {
      content: "Oxidation of the aldehyde group of glucose yields:",
      type: "MCQ",
      options: ["Glucuronic acid", "Gluconic acid", "Glucaric acid", "Sorbitol"],
      correctAnswer: "Gluconic acid",
      explanation: "Mild oxidation of CHO -> COOH gives aldonic acid (gluconic)."
    },
    {
      content: "Oxidation of both the aldehyde and primary alcohol groups of glucose yields:",
      type: "MCQ",
      options: ["Glucuronic acid", "Gluconic acid", "Glucaric acid", "Sorbitol"],
      correctAnswer: "Glucaric acid",
      explanation: "Strong oxidation gives aldaric acid (glucaric)."
    },
    {
      content: "Reduction of glucose yields:",
      type: "MCQ",
      options: ["Mannitol", "Sorbitol", "Galactitol", "Inositol"],
      correctAnswer: "Sorbitol",
      explanation: "Reduction of the aldehyde to alcohol gives the alditol (sorbitol)."
    },
    {
      content: "Which of the following is a pentose?",
      type: "MCQ",
      options: ["Glucose", "Fructose", "Ribose", "Erythrose"],
      correctAnswer: "Ribose",
      explanation: "Ribose has 5 carbons."
    },
    {
      content: "Chitin is a polymer of:",
      type: "MCQ",
      options: ["Glucose", "N-acetylglucosamine", "Galactose", "Fructose"],
      correctAnswer: "N-acetylglucosamine",
      explanation: "Found in exoskeletons of insects."
    },
    {
      content: "Which enzyme hydrolyzes starch?",
      type: "MCQ",
      options: ["Protease", "Lipase", "Amylase", "Cellulase"],
      correctAnswer: "Amylase",
      explanation: "Amylase breaks down starch."
    },
    {
      content: "The number of stereoisomers of an aldohexose is:",
      type: "MCQ",
      options: ["4", "8", "16", "32"],
      correctAnswer: "16",
      explanation: "2^4 = 16."
    },
    {
      content: "Which carbon is the anomeric carbon in a ketohexose like fructose?",
      type: "MCQ",
      options: ["C1", "C2", "C3", "C4"],
      correctAnswer: "C2",
      explanation: "The carbonyl group is at C2 in ketoses."
    },
    {
      content: "Mutarotation involves the interconversion of:",
      type: "MCQ",
      options: ["D and L isomers", "Alpha and Beta anomers", "Aldose and Ketose", "Pyranose and Furanose"],
      correctAnswer: "Alpha and Beta anomers",
      explanation: "Via the open chain form."
    },
    {
      content: "Which of the following is a structural polysaccharide in plants?",
      type: "MCQ",
      options: ["Starch", "Glycogen", "Cellulose", "Chitin"],
      correctAnswer: "Cellulose",
      explanation: "Cell wall component."
    },
    {
      content: "A sugar with a 5-membered ring is called a:",
      type: "MCQ",
      options: ["Pyranose", "Furanose", "Pentose", "Hexose"],
      correctAnswer: "Furanose",
      explanation: "Resembles furan."
    },

    // --- Multi-Select (12 Questions) ---
    {
      content: "Select **all** polysaccharides that are composed of glucose units.",
      type: "MULTI_SELECT",
      options: ["Starch", "Cellulose", "Glycogen", "Chitin"],
      correctAnswer: ["Starch", "Cellulose", "Glycogen"],
      explanation: "Chitin is a polymer of N-acetylglucosamine, not pure glucose."
    },
    {
      content: "Which of the following tests can be used to identify **reducing sugars**?",
      type: "MULTI_SELECT",
      options: ["Benedict's Test", "Fehling's Test", "Tollens' Test", "Biuret Test"],
      correctAnswer: ["Benedict's Test", "Fehling's Test", "Tollens' Test"],
      explanation: "Biuret test is for proteins. The others detect reducing sugars."
    },
    {
      content: "Select the **disaccharides**.",
      type: "MULTI_SELECT",
      options: ["Glucose", "Sucrose", "Lactose", "Maltose"],
      correctAnswer: ["Sucrose", "Lactose", "Maltose"],
      explanation: "Glucose is a monosaccharide."
    },
    {
      content: "Which of the following are **Aldohexoses**?",
      type: "MULTI_SELECT",
      options: ["Glucose", "Mannose", "Galactose", "Fructose"],
      correctAnswer: ["Glucose", "Mannose", "Galactose"],
      explanation: "Fructose is a ketohexose."
    },
    {
      content: "Select the sugars that undergo **Mutarotation**.",
      type: "MULTI_SELECT",
      options: ["Glucose", "Maltose", "Lactose", "Sucrose"],
      correctAnswer: ["Glucose", "Maltose", "Lactose"],
      explanation: "Sucrose is non-reducing and locked in acetal form."
    },
    {
      content: "Which of the following are functions of carbohydrates?",
      type: "MULTI_SELECT",
      options: ["Energy storage", "Structural support", "Cell recognition", "Catalysis"],
      correctAnswer: ["Energy storage", "Structural support", "Cell recognition"],
      explanation: "Catalysis is primarily a protein (enzyme) function."
    },
    {
      content: "Select the components of **Sucrose**.",
      type: "MULTI_SELECT",
      options: ["Glucose", "Fructose", "Galactose", "Ribose"],
      correctAnswer: ["Glucose", "Fructose"],
      explanation: "Table sugar."
    },
    {
      content: "Which of the following yield **Glucose** upon complete hydrolysis?",
      type: "MULTI_SELECT",
      options: ["Starch", "Cellulose", "Maltose", "Lactose"],
      correctAnswer: ["Starch", "Cellulose", "Maltose"],
      explanation: "Lactose yields Glucose + Galactose."
    },
    {
      content: "Select the correct statements about **Cellulose**.",
      type: "MULTI_SELECT",
      options: [
        "It contains beta-1,4-glycosidic bonds.",
        "It is digestible by humans.",
        "It is a linear polymer.",
        "It forms hydrogen bonds between chains."
      ],
      correctAnswer: ["It contains beta-1,4-glycosidic bonds.", "It is a linear polymer.", "It forms hydrogen bonds between chains."],
      explanation: "Humans lack cellulase."
    },
    {
      content: "Which of the following are **Epimers** of Glucose?",
      type: "MULTI_SELECT",
      options: ["Mannose", "Galactose", "Fructose", "Ribose"],
      correctAnswer: ["Mannose", "Galactose"],
      explanation: "C2 and C4 epimers respectively."
    },
    {
      content: "Select the sugars that give a positive **Tollens' Test** (Silver Mirror).",
      type: "MULTI_SELECT",
      options: ["Glucose", "Lactose", "Sucrose", "Maltose"],
      correctAnswer: ["Glucose", "Lactose", "Maltose"],
      explanation: "Reducing sugars reduce Ag+ to Ag."
    },
    {
      content: "Which of the following are **Ketoses**?",
      type: "MULTI_SELECT",
      options: ["Fructose", "Ribulose", "Glucose", "Glyceraldehyde"],
      correctAnswer: ["Fructose", "Ribulose"],
      explanation: "Contain ketone group."
    },

    // --- Fill-in-the-Blank (15 Questions) ---
    {
      content: "The phenomenon where the optical rotation of a freshly prepared sugar solution changes over time is called ______.",
      type: "FILL_BLANK",
      correctAnswer: "mutarotation",
      explanation: "Mutarotation is the equilibration between alpha and beta anomers."
    },
    {
      content: "Starch is a mixture of two polymers: amylose and ______.",
      type: "FILL_BLANK",
      correctAnswer: "amylopectin",
      explanation: "Amylose is linear, amylopectin is branched."
    },
    {
      content: "The bond connecting two monosaccharides is called a ______ bond.",
      type: "FILL_BLANK",
      correctAnswer: "glycosidic",
      explanation: "Ether linkage between sugars."
    },
    {
      content: "Glucose is stored in the liver as ______.",
      type: "FILL_BLANK",
      correctAnswer: "glycogen",
      explanation: "Animal starch."
    },
    {
      content: "Sucrose is a disaccharide of glucose and ______.",
      type: "FILL_BLANK",
      correctAnswer: "fructose",
      explanation: "Table sugar components."
    },
    {
      content: "The C-2 epimer of glucose is ______.",
      type: "FILL_BLANK",
      correctAnswer: "mannose",
      explanation: "Differ at C2."
    },
    {
      content: "The C-4 epimer of glucose is ______.",
      type: "FILL_BLANK",
      correctAnswer: "galactose",
      explanation: "Differ at C4."
    },
    {
      content: "A six-membered sugar ring is called a ______.",
      type: "FILL_BLANK",
      correctAnswer: "pyranose",
      explanation: "Resembles pyran."
    },
    {
      content: "A five-membered sugar ring is called a ______.",
      type: "FILL_BLANK",
      correctAnswer: "furanose",
      explanation: "Resembles furan."
    },
    {
      content: "Reduction of glucose yields the sugar alcohol ______.",
      type: "FILL_BLANK",
      correctAnswer: "sorbitol",
      explanation: "Also called glucitol."
    },
    {
      content: "The test used to detect starch is the ______ test.",
      type: "FILL_BLANK",
      correctAnswer: "iodine",
      explanation: "Turns blue-black."
    },
    {
      content: "Cellulose is a polymer of glucose linked by ______ bonds.",
      type: "FILL_BLANK",
      correctAnswer: "beta-1,4",
      explanation: "Beta linkage makes it indigestible."
    },
    {
      content: "The anomeric carbon in glucose is carbon number ______.",
      type: "FILL_BLANK",
      correctAnswer: "1",
      explanation: "C1 is the carbonyl carbon."
    },
    {
      content: "Sugars that can reduce Cu2+ to Cu+ are called ______ sugars.",
      type: "FILL_BLANK",
      correctAnswer: "reducing",
      explanation: "Have free aldehyde/ketone."
    },
    {
      content: "The general formula for carbohydrates is ______.",
      type: "FILL_BLANK",
      correctAnswer: "Cn(H2O)n",
      explanation: "Hydrate of carbon."
    },

    // --- Matching (10 Questions) ---
    {
      content: "Match the disaccharide to its monosaccharide components.",
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
      explanation: "Standard composition."
    },
    {
      content: "Match the polysaccharide to its function/structure.",
      type: "MATCHING",
      options: [
        { left: "Starch", right: "Plant energy storage" },
        { left: "Glycogen", right: "Animal energy storage" },
        { left: "Cellulose", right: "Plant cell wall" }
      ],
      correctAnswer: {
        "Starch": "Plant energy storage",
        "Glycogen": "Animal energy storage",
        "Cellulose": "Plant cell wall"
      },
      explanation: "Biological roles."
    },
    {
      content: "Match the sugar to its classification.",
      type: "MATCHING",
      options: [
        { left: "Glucose", right: "Aldohexose" },
        { left: "Fructose", right: "Ketohexose" },
        { left: "Ribose", right: "Aldopentose" }
      ],
      correctAnswer: {
        "Glucose": "Aldohexose",
        "Fructose": "Ketohexose",
        "Ribose": "Aldopentose"
      },
      explanation: "Structure based."
    },
    {
      content: "Match the test to the positive result.",
      type: "MATCHING",
      options: [
        { left: "Benedict's", right: "Brick red precipitate" },
        { left: "Tollens'", right: "Silver mirror" },
        { left: "Iodine", right: "Blue-black color" }
      ],
      correctAnswer: {
        "Benedict's": "Brick red precipitate",
        "Tollens'": "Silver mirror",
        "Iodine": "Blue-black color"
      },
      explanation: "Chemical tests."
    },
    {
      content: "Match the linkage to the molecule.",
      type: "MATCHING",
      options: [
        { left: "Alpha-1,4", right: "Maltose" },
        { left: "Beta-1,4", right: "Cellobiose" },
        { left: "Alpha-1,2", right: "Sucrose" }
      ],
      correctAnswer: {
        "Alpha-1,4": "Maltose",
        "Beta-1,4": "Cellobiose",
        "Alpha-1,2": "Sucrose"
      },
      explanation: "Glycosidic bonds."
    },
    {
      content: "Match the epimer to the carbon position.",
      type: "MATCHING",
      options: [
        { left: "Mannose", right: "C2" },
        { left: "Galactose", right: "C4" },
        { left: "Allose", right: "C3" }
      ],
      correctAnswer: {
        "Mannose": "C2",
        "Galactose": "C4",
        "Allose": "C3"
      },
      explanation: "Relative to Glucose."
    },
    {
      content: "Match the ring size to the name.",
      type: "MATCHING",
      options: [
        { left: "5-membered", right: "Furanose" },
        { left: "6-membered", right: "Pyranose" },
        { left: "Open chain", right: "Acyclic" }
      ],
      correctAnswer: {
        "5-membered": "Furanose",
        "6-membered": "Pyranose",
        "Open chain": "Acyclic"
      },
      explanation: "Ring nomenclature."
    },
    {
      content: "Match the oxidation product to the reagent.",
      type: "MATCHING",
      options: [
        { left: "Aldonic acid", right: "Bromine water (mild)" },
        { left: "Aldaric acid", right: "Nitric acid (strong)" },
        { left: "Uronic acid", right: "Enzymatic" }
      ],
      correctAnswer: {
        "Aldonic acid": "Bromine water (mild)",
        "Aldaric acid": "Nitric acid (strong)",
        "Uronic acid": "Enzymatic"
      },
      explanation: "Oxidation levels."
    },
    {
      content: "Match the sugar to its source.",
      type: "MATCHING",
      options: [
        { left: "Lactose", right: "Milk" },
        { left: "Sucrose", right: "Cane/Beet" },
        { left: "Fructose", right: "Fruit/Honey" }
      ],
      correctAnswer: {
        "Lactose": "Milk",
        "Sucrose": "Cane/Beet",
        "Fructose": "Fruit/Honey"
      },
      explanation: "Natural sources."
    },
    {
      content: "Match the term to the definition.",
      type: "MATCHING",
      options: [
        { left: "Anomers", right: "Differ at C1" },
        { left: "Epimers", right: "Differ at one C other than C1" },
        { left: "Enantiomers", right: "Mirror images" }
      ],
      correctAnswer: {
        "Anomers": "Differ at C1",
        "Epimers": "Differ at one C other than C1",
        "Enantiomers": "Mirror images"
      },
      explanation: "Isomer types."
    },

    // --- Short Answer (8 Questions) ---
    {
      content: "Explain why cellulose is indigestible by humans while starch is a major energy source, despite both being glucose polymers.",
      type: "SHORT_ANSWER",
      correctAnswer: "Cellulose contains beta-1,4-glycosidic bonds, which humans lack the enzyme (cellulase) to break. Starch contains alpha-1,4-bonds, which human amylases can hydrolyze.",
      explanation: "Enzyme specificity."
    },
    {
      content: "Why is Sucrose a non-reducing sugar?",
      type: "SHORT_ANSWER",
      correctAnswer: "In sucrose, the glycosidic bond is formed between the anomeric carbon of glucose (C1) and the anomeric carbon of fructose (C2). This locks both rings, leaving no free anomeric carbon to open and reduce reagents.",
      explanation: "No free hemiacetal."
    },
    {
      content: "Describe the process of **Mutarotation**.",
      type: "SHORT_ANSWER",
      correctAnswer: "Mutarotation is the change in optical rotation observed when a pure anomer (alpha or beta) is dissolved in water. It occurs because the ring opens to the aldehyde form and re-closes to form an equilibrium mixture of alpha and beta anomers.",
      explanation: "Equilibration."
    },
    {
      content: "What is the difference between **Amylose** and **Amylopectin**?",
      type: "SHORT_ANSWER",
      correctAnswer: "Amylose is a linear polymer of glucose with alpha-1,4 bonds. Amylopectin is a branched polymer with alpha-1,4 bonds and alpha-1,6 branch points.",
      explanation: "Branching."
    },
    {
      content: "Explain the structural difference between **DNA** and **RNA** sugars.",
      type: "SHORT_ANSWER",
      correctAnswer: "RNA contains Ribose, which has an -OH group at C2. DNA contains 2-Deoxyribose, which has an -H atom at C2 (lacking the oxygen).",
      explanation: "Deoxy = minus oxygen."
    },
    {
      content: "What happens when a monosaccharide reacts with an alcohol in the presence of acid?",
      type: "SHORT_ANSWER",
      correctAnswer: "It forms a glycoside (an acetal). The anomeric -OH is replaced by an -OR group.",
      explanation: "Glycoside formation."
    },
    {
      content: "Why are monosaccharides soluble in water?",
      type: "SHORT_ANSWER",
      correctAnswer: "They have multiple hydroxyl (-OH) groups that can form hydrogen bonds with water molecules.",
      explanation: "Hydrogen bonding."
    },
    {
      content: "What is the biological function of **Glycogen**?",
      type: "SHORT_ANSWER",
      correctAnswer: "Glycogen serves as the primary short-term energy storage form of glucose in animals, primarily stored in the liver and muscles.",
      explanation: "Energy reserve."
    },

    // --- Calculation (4 Questions) ---
    {
      content: "A sample of glucose contains 36% $\\alpha$-anomer and 64% $\\beta$-anomer. If the specific rotation of pure $\\alpha$ is +112° and pure $\\beta$ is +19°, calculate the specific rotation of the equilibrium mixture.",
      type: "CALCULATION",
      correctAnswer: "+52.5°",
      explanation: "Rotation = (0.36 * 112) + (0.64 * 19) = 40.32 + 12.16 = 52.48 ≈ 52.5°."
    },
    {
      content: "How many stereoisomers are possible for a ketohexose like fructose (3 chiral centers)?",
      type: "CALCULATION",
      correctAnswer: "8",
      explanation: "2^3 = 8."
    },
    {
      content: "If a disaccharide has a molecular formula of C12H22O11, what is its molecular weight? (C=12, H=1, O=16)",
      type: "CALCULATION",
      correctAnswer: "342",
      explanation: "(12*12) + (22*1) + (11*16) = 144 + 22 + 176 = 342."
    },
    {
      content: "Calculate the percentage of carbon in Glucose (C6H12O6). MW = 180.",
      type: "CALCULATION",
      correctAnswer: "40%",
      explanation: "Mass of C = 6*12 = 72. %C = (72/180)*100 = 40%."
    },

    // --- Order/Sequence (5 Questions) ---
    {
      content: "Order the steps in the Kiliani-Fischer synthesis.",
      type: "ORDER_SEQUENCE",
      options: [
        "Nucleophilic addition of HCN",
        "Hydrolysis of cyanohydrin to acid",
        "Lactonization",
        "Reduction to aldehyde"
      ],
      correctAnswer: [
        "Nucleophilic addition of HCN",
        "Hydrolysis of cyanohydrin to acid",
        "Lactonization",
        "Reduction to aldehyde"
      ],
      explanation: "Chain extension."
    },
    {
      content: "Order the following by sweetness (High to Low).",
      type: "ORDER_SEQUENCE",
      options: ["Fructose", "Sucrose", "Glucose", "Lactose"],
      correctAnswer: ["Fructose", "Sucrose", "Glucose", "Lactose"],
      explanation: "Fructose is the sweetest natural sugar."
    },
    {
      content: "Order the steps in the digestion of starch.",
      type: "ORDER_SEQUENCE",
      options: ["Salivary Amylase", "Pancreatic Amylase", "Maltase", "Absorption of Glucose"],
      correctAnswer: ["Salivary Amylase", "Pancreatic Amylase", "Maltase", "Absorption of Glucose"],
      explanation: "Digestion pathway."
    },
    {
      content: "Order by number of carbons (Low to High).",
      type: "ORDER_SEQUENCE",
      options: ["Triose", "Tetrose", "Pentose", "Hexose"],
      correctAnswer: ["Triose", "Tetrose", "Pentose", "Hexose"],
      explanation: "3, 4, 5, 6."
    },
    {
      content: "Order the following by solubility in water (High to Low).",
      type: "ORDER_SEQUENCE",
      options: ["Glucose", "Starch", "Cellulose"],
      correctAnswer: ["Glucose", "Starch", "Cellulose"],
      explanation: "Monosaccharides > Polysaccharides."
    },

    // --- True/False (3 Questions) ---
    {
      content: "True or False: D-Glucose and L-Glucose are epimers.",
      type: "TRUE_FALSE",
      options: ["True", "False"],
      correctAnswer: "False",
      explanation: "They are enantiomers."
    },
    {
      content: "True or False: Sucrose is a reducing sugar.",
      type: "TRUE_FALSE",
      options: ["True", "False"],
      correctAnswer: "False",
      explanation: "No free anomeric carbon."
    },
    {
      content: "True or False: Humans can digest cellulose.",
      type: "TRUE_FALSE",
      options: ["True", "False"],
      correctAnswer: "False",
      explanation: "Lack cellulase."
    },

    // --- Label Diagram (6 Questions) ---
    {
      content: "Identify the anomeric carbon in the structure shown.",
      type: "MCQ", 
      options: ["C1", "C2", "C5", "C6"],
      correctAnswer: "C1",
      explanation: "In aldoses like glucose, C1 is the anomeric carbon.",
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide33.png"
    },
    {
      content: "Is the glycosidic bond shown Alpha or Beta?",
      type: "MCQ",
      options: ["Alpha", "Beta"],
      correctAnswer: "Alpha",
      explanation: "Oxygen points down (trans to CH2OH).",
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide83.png"
    },
    {
      content: "Identify the sugar shown in the Fischer projection.",
      type: "MCQ",
      options: ["D-Glucose", "L-Glucose", "D-Galactose", "D-Mannose"],
      correctAnswer: "D-Glucose",
      explanation: "Right-Left-Right-Right pattern.",
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide10.png"
    },
    {
      content: "Identify the polymer shown.",
      type: "MCQ",
      options: ["Amylose", "Cellulose", "Chitin"],
      correctAnswer: "Cellulose",
      explanation: "Linear beta-1,4 linked glucose.",
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide90.png"
    },
    {
      content: "Which carbon determines the D/L configuration?",
      type: "MCQ",
      options: ["C1", "C2", "C5", "C6"],
      correctAnswer: "C5",
      explanation: "Penultimate carbon.",
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide5.png"
    },
    {
      content: "Identify the functional group at C1.",
      type: "MCQ",
      options: ["Aldehyde", "Ketone", "Alcohol", "Acid"],
      correctAnswer: "Aldehyde",
      explanation: "CHO group.",
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide2.png"
    },

    // --- Case Study (2 Questions) ---
    {
      content: "A patient with lactose intolerance experiences bloating and diarrhea after consuming milk. Explain the biochemical basis for these symptoms.",
      type: "CASE_STUDY",
      correctAnswer: "The patient lacks lactase, the enzyme required to hydrolyze lactose into glucose and galactose. Undigested lactose ferments in the colon, producing gas and drawing water into the intestine.",
      explanation: "Deficiency of lactase."
    },
    {
      content: "Galactosemia is a genetic disorder where infants cannot metabolize galactose. Why must they avoid milk?",
      type: "CASE_STUDY",
      correctAnswer: "Milk contains lactose, which breaks down into glucose and galactose. Accumulation of galactose (or its metabolites) is toxic.",
      explanation: "Metabolic block."
    },

    // --- Identify Error (2 Questions) ---
    {
      content: "A student drew the Haworth projection of $\\beta$-D-glucose with the -OH group at C1 pointing **down**. Identify the error.",
      type: "IDENTIFY_ERROR",
      correctAnswer: "In the D-series, the beta anomer has the anomeric -OH group pointing **up** (equatorial). Pointing down (axial) corresponds to the alpha anomer.",
      explanation: "Beta = Up (Butterfly)."
    },
    {
      content: "A student claims that starch and cellulose are identical because they are both glucose polymers. Identify the error.",
      type: "IDENTIFY_ERROR",
      correctAnswer: "They differ in the stereochemistry of the glycosidic bond (alpha vs beta), which leads to completely different 3D structures and properties (digestible vs indigestible).",
      explanation: "Linkage matters."
    }
  ],
  'exam-cnp-ch3': [
    // --- MCQ (30 Questions) ---
    {
      content: "Why did the FDA issuing a policy statement in 1992 regarding stereoisomeric drugs?",
      type: "MCQ",
      options: [
        "To ban all racemic drugs.",
        "To require development of racemates only.",
        "To ensure that the stereochemical composition is known and the choice of racemate vs enantiomer is justified.",
        "To simplify the approval process for generic drugs."
      ],
      correctAnswer: "To ensure that the stereochemical composition is known and the choice of racemate vs enantiomer is justified.",
      explanation: "The policy requires justification for developing a racemate."
    },
    {
      content: "Which term describes the phenomenon where one enantiomer is converted to the other in the body?",
      type: "MCQ",
      options: ["Bioinversion", "Bioconversion", "Chiral Inversion", "Racemization"],
      correctAnswer: "Chiral Inversion",
      explanation: "Chiral inversion (e.g., Ibuprofen R to S) is a metabolic process."
    },
    {
      content: "In the context of chiral drugs, what is a **eutomer**?",
      type: "MCQ",
      options: ["The enantiomer with the desired pharmacological activity.", "The enantiomer with lower toxicity.", "The inactive enantiomer.", "The racemic mixture."],
      correctAnswer: "The enantiomer with the desired pharmacological activity.",
      explanation: "Eutomer = Good/Active isomer."
    },
    {
      content: "Which of the following is a potential advantage of a **Chiral Switch**?",
      type: "MCQ",
      options: ["Increased dosage required.", "Reduced side effects.", "Shorter patent life.", "Lower manufacturing costs."],
      correctAnswer: "Reduced side effects.",
      explanation: "Eliminating the distomer can improve safety."
    },
    {
      content: "The inactive or less active enantiomer is called the:",
      type: "MCQ",
      options: ["Eutomer", "Distomer", "Isomer", "Polymer"],
      correctAnswer: "Distomer",
      explanation: "Distomer = Bad/Inactive isomer."
    },
    {
      content: "The ratio of the potency of the eutomer to the distomer is called the:",
      type: "MCQ",
      options: ["Therapeutic Index", "Eudismic Ratio", "Enantiomeric Excess", "Bioavailability"],
      correctAnswer: "Eudismic Ratio",
      explanation: "Measure of stereoselectivity."
    },
    {
      content: "Which drug undergoes unidirectional chiral inversion from R to S in vivo?",
      type: "MCQ",
      options: ["Thalidomide", "Ibuprofen", "Warfarin", "Propranolol"],
      correctAnswer: "Ibuprofen",
      explanation: "Inactive R converts to active S."
    },
    {
      content: "Esomeprazole (Nexium) is the S-enantiomer of which drug?",
      type: "MCQ",
      options: ["Omeprazole", "Lansoprazole", "Pantoprazole", "Rabeprazole"],
      correctAnswer: "Omeprazole",
      explanation: "Classic chiral switch example."
    },
    {
      content: "Which of the following is NOT a valid reason to develop a racemate?",
      type: "MCQ",
      options: ["Rapid in vivo racemization", "Both enantiomers have similar activity", "Separation is too expensive (with no safety benefit)", "The distomer is highly toxic"],
      correctAnswer: "The distomer is highly toxic",
      explanation: "If the distomer is toxic, the racemate should NOT be developed."
    },
    {
      content: "Levofloxacin is the active enantiomer of:",
      type: "MCQ",
      options: ["Ciprofloxacin", "Ofloxacin", "Norfloxacin", "Moxifloxacin"],
      correctAnswer: "Ofloxacin",
      explanation: "Levo- isomer of Ofloxacin."
    },
    {
      content: "Which pharmacokinetic process can be stereoselective?",
      type: "MCQ",
      options: ["Absorption", "Distribution", "Metabolism", "All of the above"],
      correctAnswer: "All of the above",
      explanation: "Chiral environments affect all PK stages."
    },
    {
      content: "The FDA 1992 policy requires that for a racemate:",
      type: "MCQ",
      options: ["Only the eutomer be tested.", "Only the distomer be tested.", "The pharmacokinetic profile of each enantiomer be determined.", "No testing is needed."],
      correctAnswer: "The pharmacokinetic profile of each enantiomer be determined.",
      explanation: "Must understand both components."
    },
    {
      content: "Which drug caused blindness due to one of its enantiomers?",
      type: "MCQ",
      options: ["Ethambutol", "Thalidomide", "Penicillamine", "Naproxen"],
      correctAnswer: "Ethambutol",
      explanation: "(S,S)-Ethambutol is tuberculostatic; (R,R) causes optic neuritis."
    },
    {
      content: "Escitalopram is the S-enantiomer of:",
      type: "MCQ",
      options: ["Citalopram", "Fluoxetine", "Sertraline", "Paroxetine"],
      correctAnswer: "Citalopram",
      explanation: "SSRI antidepressant."
    },
    {
      content: "Stereoselectivity in drug metabolism is primarily due to:",
      type: "MCQ",
      options: ["Chiral enzymes (e.g., CYP450)", "Chiral lipids", "Chiral water", "Achiral cofactors"],
      correctAnswer: "Chiral enzymes (e.g., CYP450)",
      explanation: "Enzymes are proteins (chiral)."
    },
    {
      content: "Which of the following describes a 'Chiral Switch'?",
      type: "MCQ",
      options: ["Switching from a generic to a brand name.", "Developing a single enantiomer from a previously marketed racemate.", "Changing the route of administration.", "Switching from a chiral to an achiral drug."],
      correctAnswer: "Developing a single enantiomer from a previously marketed racemate.",
      explanation: "Strategy to extend patent/improve safety."
    },
    {
      content: "For a drug with a high eudismic ratio, the distomer is essentially:",
      type: "MCQ",
      options: ["Highly active", "Inactive (impurity)", "Toxic", "Mutagenic"],
      correctAnswer: "Inactive (impurity)",
      explanation: "Large difference in potency."
    },
    {
      content: "Which enantiomer of Warfarin is more potent?",
      type: "MCQ",
      options: ["S-Warfarin", "R-Warfarin", "Both are equal", "Neither is active"],
      correctAnswer: "S-Warfarin",
      explanation: "S is 2-5 times more potent than R."
    },
    {
      content: "The interaction of a chiral drug with a receptor is often described by which model?",
      type: "MCQ",
      options: ["Lock and Key", "Three-Point Attachment", "Induced Fit", "All of the above"],
      correctAnswer: "Three-Point Attachment",
      explanation: "Explains stereospecificity."
    },
    {
      content: "Which of the following is true about (S)-Naproxen?",
      type: "MCQ",
      options: ["It is an NSAID.", "It is a liver toxin.", "It is a sedative.", "It is inactive."],
      correctAnswer: "It is an NSAID.",
      explanation: "The S-isomer is the active anti-inflammatory; R is a liver toxin."
    },
    {
      content: "If a racemate is developed, the manufacturer must prove:",
      type: "MCQ",
      options: ["That separation is impossible.", "That the distomer is beneficial or inert.", "That the drug is cheap.", "That the drug is water soluble."],
      correctAnswer: "That the distomer is beneficial or inert.",
      explanation: "Safety justification."
    },
    {
      content: "Which protein is primarily responsible for binding acidic drugs in plasma?",
      type: "MCQ",
      options: ["Albumin", "Alpha-1-acid glycoprotein", "Hemoglobin", "Collagen"],
      correctAnswer: "Albumin",
      explanation: "Albumin (HSA) binds acidic drugs stereoselectively."
    },
    {
      content: "Which protein binds basic drugs?",
      type: "MCQ",
      options: ["Albumin", "Alpha-1-acid glycoprotein", "Globulin", "Fibrinogen"],
      correctAnswer: "Alpha-1-acid glycoprotein",
      explanation: "AAG binds basic drugs."
    },
    {
      content: "The term 'racemic switch' is synonymous with:",
      type: "MCQ",
      options: ["Chiral switch", "Bioinversion", "Resolution", "Deracemization"],
      correctAnswer: "Chiral switch",
      explanation: "Industry term."
    },
    {
      content: "Which of the following is a consequence of stereoselective metabolism?",
      type: "MCQ",
      options: ["Different half-lives for enantiomers.", "Identical clearance rates.", "No change in ratio.", "Equal toxicity."],
      correctAnswer: "Different half-lives for enantiomers.",
      explanation: "One isomer is metabolized faster."
    },
    {
      content: "D-Penicillamine is used for rheumatoid arthritis. Why is L-Penicillamine avoided?",
      type: "MCQ",
      options: ["It is inactive.", "It is highly toxic (mutagenic).", "It is too expensive.", "It is unstable."],
      correctAnswer: "It is highly toxic (mutagenic).",
      explanation: "Severe toxicity of L-isomer."
    },
    {
      content: "Which technique is most commonly used to analyze the enantiomeric purity of drugs?",
      type: "MCQ",
      options: ["NMR", "Chiral HPLC", "IR Spectroscopy", "Mass Spectrometry"],
      correctAnswer: "Chiral HPLC",
      explanation: "High Performance Liquid Chromatography with chiral columns."
    },
    {
      content: "The FDA considers enantiomers of a drug to be:",
      type: "MCQ",
      options: ["The same active ingredient.", "Different active ingredients.", "Impurities.", "Prodrugs."],
      correctAnswer: "Different active ingredients.",
      explanation: "They are distinct chemical entities."
    },
    {
      content: "Which of the following drugs is marketed as a racemate?",
      type: "MCQ",
      options: ["Warfarin", "Levofloxacin", "Escitalopram", "Naproxen"],
      correctAnswer: "Warfarin",
      explanation: "Coumadin is racemic."
    },
    {
      content: "Stereoisomers that differ in biological activity are often compared using:",
      type: "MCQ",
      options: ["IC50 values", "Molecular weights", "Boiling points", "Refractive indices"],
      correctAnswer: "IC50 values",
      explanation: "Measure of potency."
    },

    // --- Multi-Select (12 Questions) ---
    {
      content: "Select **all** reasons why pharmacokinetics might differ between enantiomers.",
      type: "MULTI_SELECT",
      options: [
        "Different absorption rates via active transport.",
        "Different plasma protein binding.",
        "Different metabolic rates by chiral enzymes.",
        "Different molecular weight."
      ],
      correctAnswer: ["Different absorption rates via active transport.", "Different plasma protein binding.", "Different metabolic rates by chiral enzymes."],
      explanation: "Enantiomers have the same molecular weight."
    },
    {
      content: "Which of the following drugs are marketed as **single enantiomers**?",
      type: "MULTI_SELECT",
      options: ["Escitalopram", "Levofloxacin", "Ibuprofen (OTC)", "Esomeprazole"],
      correctAnswer: ["Escitalopram", "Levofloxacin", "Esomeprazole"],
      explanation: "Ibuprofen is typically sold as a racemate."
    },
    {
      content: "Select the drugs where the distomer contributes to toxicity.",
      type: "MULTI_SELECT",
      options: ["Thalidomide", "Ethambutol", "Penicillamine", "Ibuprofen"],
      correctAnswer: ["Thalidomide", "Ethambutol", "Penicillamine"],
      explanation: "Ibuprofen distomer is inverted to eutomer, not toxic."
    },
    {
      content: "Which of the following are regulatory requirements for a new chiral drug?",
      type: "MULTI_SELECT",
      options: [
        "Development of a stereospecific assay.",
        "Justification for developing a racemate.",
        "Evaluation of PK/PD of both enantiomers.",
        "Mandatory development of single enantiomer."
      ],
      correctAnswer: ["Development of a stereospecific assay.", "Justification for developing a racemate.", "Evaluation of PK/PD of both enantiomers."],
      explanation: "Single enantiomer is not mandatory if racemate is justified."
    },
    {
      content: "Select the factors that influence stereoselective protein binding.",
      type: "MULTI_SELECT",
      options: ["Protein structure (chiral)", "Drug configuration", "pH", "Temperature"],
      correctAnswer: ["Protein structure (chiral)", "Drug configuration", "pH", "Temperature"],
      explanation: "All affect binding affinity."
    },
    {
      content: "Which enzymes are known to be stereoselective?",
      type: "MULTI_SELECT",
      options: ["CYP2C9", "CYP2D6", "Esterases", "Amylase"],
      correctAnswer: ["CYP2C9", "CYP2D6", "Esterases"],
      explanation: "Drug metabolizing enzymes."
    },
    {
      content: "Select the advantages of single-enantiomer drugs.",
      type: "MULTI_SELECT",
      options: ["Lower dose", "Reduced metabolic load", "Simplified PK", "Lower cost of synthesis"],
      correctAnswer: ["Lower dose", "Reduced metabolic load", "Simplified PK"],
      explanation: "Synthesis is often more expensive."
    },
    {
      content: "Which of the following undergo in vivo racemization?",
      type: "MULTI_SELECT",
      options: ["Thalidomide", "Ibuprofen", "Oxazepam", "Glucose"],
      correctAnswer: ["Thalidomide", "Oxazepam"],
      explanation: "Ibuprofen is inversion (one way), not racemization (both ways). Oxazepam racemizes."
    },
    {
      content: "Select the terms related to chiral pharmacology.",
      type: "MULTI_SELECT",
      options: ["Eutomer", "Distomer", "Eudismic Ratio", "Isomer"],
      correctAnswer: ["Eutomer", "Distomer", "Eudismic Ratio"],
      explanation: "Specific terms."
    },
    {
      content: "Which of the following are chiral NSAIDs?",
      type: "MULTI_SELECT",
      options: ["Ibuprofen", "Naproxen", "Ketoprofen", "Aspirin"],
      correctAnswer: ["Ibuprofen", "Naproxen", "Ketoprofen"],
      explanation: "Aspirin is achiral."
    },
    {
      content: "Select the methods to obtain single enantiomers.",
      type: "MULTI_SELECT",
      options: ["Asymmetric synthesis", "Resolution of racemate", "Chiral pool synthesis", "Mixing enantiomers"],
      correctAnswer: ["Asymmetric synthesis", "Resolution of racemate", "Chiral pool synthesis"],
      explanation: "Mixing creates a racemate."
    },
    {
      content: "Which of the following are consequences of using a racemate?",
      type: "MULTI_SELECT",
      options: ["Competition for binding sites", "Complex PK", "Possible toxicity from distomer", "Always lower efficacy"],
      correctAnswer: ["Competition for binding sites", "Complex PK", "Possible toxicity from distomer"],
      explanation: "Efficacy depends on the drug."
    },

    // --- Fill-in-the-Blank (15 Questions) ---
    {
      content: "The inactive or less active enantiomer in a racemic drug is referred to as the ______.",
      type: "FILL_BLANK",
      correctAnswer: "distomer",
      explanation: "Distomer is the term for the enantiomer with lower or no desired activity."
    },
    {
      content: "The ratio of the activity of the eutomer to the distomer is known as the ______ ratio.",
      type: "FILL_BLANK",
      correctAnswer: "eudismic",
      explanation: "The eudismic ratio quantifies the difference in potency between enantiomers."
    },
    {
      content: "The active enantiomer is called the ______.",
      type: "FILL_BLANK",
      correctAnswer: "eutomer",
      explanation: "Good isomer."
    },
    {
      content: "Developing a single enantiomer from a marketed racemate is called a chiral ______.",
      type: "FILL_BLANK",
      correctAnswer: "switch",
      explanation: "Market strategy."
    },
    {
      content: "Metabolic conversion of one enantiomer to its antipode is called chiral ______.",
      type: "FILL_BLANK",
      correctAnswer: "inversion",
      explanation: "R to S."
    },
    {
      content: "Thalidomide causes birth defects, a property known as ______.",
      type: "FILL_BLANK",
      correctAnswer: "teratogenicity",
      explanation: "Causing malformations."
    },
    {
      content: "The FDA policy on stereoisomers was issued in the year ______.",
      type: "FILL_BLANK",
      correctAnswer: "1992",
      explanation: "Key regulatory date."
    },
    {
      content: "Ibuprofen is sold as a racemate because the R-isomer converts to the ______-isomer in vivo.",
      type: "FILL_BLANK",
      correctAnswer: "S",
      explanation: "Active form."
    },
    {
      content: "Separation of enantiomers using a chiral stationary phase is called chiral ______.",
      type: "FILL_BLANK",
      correctAnswer: "chromatography",
      explanation: "HPLC/GC."
    },
    {
      content: "A mixture of equal parts of enantiomers is a ______.",
      type: "FILL_BLANK",
      correctAnswer: "racemate",
      explanation: "Or racemic mixture."
    },
    {
      content: "The protein ______ binds acidic drugs in the blood.",
      type: "FILL_BLANK",
      correctAnswer: "albumin",
      explanation: "HSA."
    },
    {
      content: "The protein ______ binds basic drugs in the blood.",
      type: "FILL_BLANK",
      correctAnswer: "alpha-1-acid glycoprotein",
      explanation: "AAG."
    },
    {
      content: "Stereoselectivity is due to the ______ nature of biological systems.",
      type: "FILL_BLANK",
      correctAnswer: "chiral",
      explanation: "Proteins/DNA are chiral."
    },
    {
      content: "Esomeprazole is the S-enantiomer of ______.",
      type: "FILL_BLANK",
      correctAnswer: "omeprazole",
      explanation: "Prilosec."
    },
    {
      content: "Levofloxacin is the L-isomer of ______.",
      type: "FILL_BLANK",
      correctAnswer: "ofloxacin",
      explanation: "Antibiotic."
    },

    // --- Matching (10 Questions) ---
    {
      content: "Match the drug to its chiral characteristic.",
      type: "MATCHING",
      options: [
        { left: "Thalidomide", right: "Teratogenic distomer" },
        { left: "Ibuprofen", right: "Unidirectional chiral inversion" },
        { left: "Ethambutol", right: "One enantiomer causes blindness" }
      ],
      correctAnswer: {
        "Thalidomide": "Teratogenic distomer",
        "Ibuprofen": "Unidirectional chiral inversion",
        "Ethambutol": "One enantiomer causes blindness"
      },
      explanation: "Classic examples."
    },
    {
      content: "Match the term to the definition.",
      type: "MATCHING",
      options: [
        { left: "Eutomer", right: "Active enantiomer" },
        { left: "Distomer", right: "Inactive/Toxic enantiomer" },
        { left: "Racemate", right: "50:50 Mixture" }
      ],
      correctAnswer: {
        "Eutomer": "Active enantiomer",
        "Distomer": "Inactive/Toxic enantiomer",
        "Racemate": "50:50 Mixture"
      },
      explanation: "Terminology."
    },
    {
      content: "Match the drug to its class.",
      type: "MATCHING",
      options: [
        { left: "Escitalopram", right: "SSRI" },
        { left: "Esomeprazole", right: "PPI" },
        { left: "Levofloxacin", right: "Antibiotic" }
      ],
      correctAnswer: {
        "Escitalopram": "SSRI",
        "Esomeprazole": "PPI",
        "Levofloxacin": "Antibiotic"
      },
      explanation: "Pharmacological class."
    },
    {
      content: "Match the protein to its binding preference.",
      type: "MATCHING",
      options: [
        { left: "Albumin", right: "Acids" },
        { left: "Alpha-1-acid glycoprotein", right: "Bases" },
        { left: "Lipoprotein", right: "Neutrals" }
      ],
      correctAnswer: {
        "Albumin": "Acids",
        "Alpha-1-acid glycoprotein": "Bases",
        "Lipoprotein": "Neutrals"
      },
      explanation: "Plasma binding."
    },
    {
      content: "Match the process to the description.",
      type: "MATCHING",
      options: [
        { left: "Racemization", right: "Conversion to 50:50 mix" },
        { left: "Inversion", right: "Conversion to opposite enantiomer" },
        { left: "Resolution", right: "Separation of enantiomers" }
      ],
      correctAnswer: {
        "Racemization": "Conversion to 50:50 mix",
        "Inversion": "Conversion to opposite enantiomer",
        "Resolution": "Separation of enantiomers"
      },
      explanation: "Chemical processes."
    },
    {
      content: "Match the drug pair (Racemate -> Single).",
      type: "MATCHING",
      options: [
        { left: "Omeprazole", right: "Esomeprazole" },
        { left: "Citalopram", right: "Escitalopram" },
        { left: "Ofloxacin", right: "Levofloxacin" }
      ],
      correctAnswer: {
        "Omeprazole": "Esomeprazole",
        "Citalopram": "Escitalopram",
        "Ofloxacin": "Levofloxacin"
      },
      explanation: "Chiral switches."
    },
    {
      content: "Match the toxicity to the drug.",
      type: "MATCHING",
      options: [
        { left: "Blindness", right: "Ethambutol" },
        { left: "Phocomelia", right: "Thalidomide" },
        { left: "Liver toxicity", right: "Naproxen (R-isomer)" }
      ],
      correctAnswer: {
        "Blindness": "Ethambutol",
        "Phocomelia": "Thalidomide",
        "Liver toxicity": "Naproxen (R-isomer)"
      },
      explanation: "Adverse effects."
    },
    {
      content: "Match the year to the event.",
      type: "MATCHING",
      options: [
        { left: "1960s", right: "Thalidomide Tragedy" },
        { left: "1992", right: "FDA Policy Statement" },
        { left: "2000s", right: "Rise of Chiral Switches" }
      ],
      correctAnswer: {
        "1960s": "Thalidomide Tragedy",
        "1992": "FDA Policy Statement",
        "2000s": "Rise of Chiral Switches"
      },
      explanation: "Timeline."
    },
    {
      content: "Match the term to the symbol.",
      type: "MATCHING",
      options: [
        { left: "Eudismic Ratio", right: "ER" },
        { left: "Enantiomeric Excess", right: "ee" },
        { left: "Specific Rotation", right: "[alpha]" }
      ],
      correctAnswer: {
        "Eudismic Ratio": "ER",
        "Enantiomeric Excess": "ee",
        "Specific Rotation": "[alpha]"
      },
      explanation: "Abbreviations."
    },
    {
      content: "Match the interaction type to the model.",
      type: "MATCHING",
      options: [
        { left: "Stereospecific", right: "3-Point Attachment" },
        { left: "Non-specific", right: "2-Point Attachment" },
        { left: "Induced", right: "Conformational Change" }
      ],
      correctAnswer: {
        "Stereospecific": "3-Point Attachment",
        "Non-specific": "2-Point Attachment",
        "Induced": "Conformational Change"
      },
      explanation: "Receptor theory."
    },

    // --- Short Answer (8 Questions) ---
    {
      content: "Explain the concept of 'Chiral Switch' and provide one commercial example.",
      type: "SHORT_ANSWER",
      correctAnswer: "A chiral switch involves developing and marketing a single enantiomer of a drug that was previously approved and marketed as a racemate. Example: Esomeprazole (Nexium) developed from Omeprazole (Prilosec).",
      explanation: "Strategy."
    },
    {
      content: "Why is the **Three-Point Attachment** model important?",
      type: "SHORT_ANSWER",
      correctAnswer: "It explains why enantiomers have different biological activities. A minimum of three points of interaction between the drug and the chiral receptor are required to distinguish between enantiomers.",
      explanation: "Stereoselectivity basis."
    },
    {
      content: "What is **Chiral Inversion**?",
      type: "SHORT_ANSWER",
      correctAnswer: "It is the metabolic conversion of one enantiomer into its mirror image (antipode) within a biological system. For example, R-ibuprofen converts to S-ibuprofen.",
      explanation: "Metabolic process."
    },
    {
      content: "Why did the FDA not ban racemic drugs?",
      type: "SHORT_ANSWER",
      correctAnswer: "Because in some cases, both enantiomers are active, separation is too difficult/expensive, or they racemize in vivo, making a single enantiomer unnecessary or impossible to maintain.",
      explanation: "Practicality."
    },
    {
      content: "What is the **Eudismic Ratio**?",
      type: "SHORT_ANSWER",
      correctAnswer: "It is the ratio of the pharmacological activity (potency) of the eutomer to that of the distomer. A high ratio indicates high stereoselectivity.",
      explanation: "Potency ratio."
    },
    {
      content: "Discuss the significance of **Thalidomide**.",
      type: "SHORT_ANSWER",
      correctAnswer: "Thalidomide revealed the catastrophic consequences of ignoring stereochemistry. The R-isomer was a safe sedative, but the S-isomer caused severe birth defects (phocomelia). This led to stricter drug regulations.",
      explanation: "Historical impact."
    },
    {
      content: "How does **Plasma Protein Binding** affect chiral drugs?",
      type: "SHORT_ANSWER",
      correctAnswer: "Proteins like albumin are chiral. One enantiomer may bind more strongly than the other, leading to different concentrations of free (active) drug in the plasma.",
      explanation: "Free drug fraction."
    },
    {
      content: "What is a **Distomer**?",
      type: "SHORT_ANSWER",
      correctAnswer: "The distomer is the enantiomer of a chiral drug that has lower affinity for the receptor or is responsible for unwanted side effects/toxicity.",
      explanation: "Bad isomer."
    },

    // --- Calculation (4 Questions) ---
    {
      content: "If the eudismic ratio of a drug is 100 and the IC50 of the eutomer is 5 nM, what is the IC50 of the distomer?",
      type: "CALCULATION",
      correctAnswer: "500 nM",
      explanation: "Eudismic Ratio = Activity(Eutomer) / Activity(Distomer) = IC50(Distomer) / IC50(Eutomer). 100 = x / 5 => x = 500 nM."
    },
    {
      content: "A drug is administered as a racemate (500 mg). If the R-isomer is metabolized twice as fast as the S-isomer, which isomer will have a higher plasma concentration after 4 hours?",
      type: "CALCULATION",
      correctAnswer: "S-isomer",
      explanation: "Slower metabolism = higher concentration."
    },
    {
      content: "Calculate the Enantiomeric Excess (ee) if a mixture contains 95% S-isomer and 5% R-isomer.",
      type: "CALCULATION",
      correctAnswer: "90%",
      explanation: "95 - 5 = 90%."
    },
    {
      content: "If the specific rotation of the pure eutomer is +100, what is the rotation of the racemate?",
      type: "CALCULATION",
      correctAnswer: "0",
      explanation: "Racemates are optically inactive."
    },

    // --- Order/Sequence (5 Questions) ---
    {
      content: "Order the steps in the development of a chiral drug according to FDA guidelines.",
      type: "ORDER_SEQUENCE",
      options: [
        "Develop stereoselective assay",
        "Determine pharmacokinetics of each enantiomer",
        "Toxicology testing (if needed)",
        "Clinical trials"
      ],
      correctAnswer: [
        "Develop stereoselective assay",
        "Determine pharmacokinetics of each enantiomer",
        "Toxicology testing (if needed)",
        "Clinical trials"
      ],
      explanation: "Assay -> PK -> Tox -> Clinical."
    },
    {
      content: "Order the drugs by year of approval (Oldest to Newest).",
      type: "ORDER_SEQUENCE",
      options: ["Thalidomide", "Omeprazole", "Esomeprazole"],
      correctAnswer: ["Thalidomide", "Omeprazole", "Esomeprazole"],
      explanation: "1950s -> 1989 -> 2001."
    },
    {
      content: "Order the binding affinity (High to Low) for a typical stereoselective interaction.",
      type: "ORDER_SEQUENCE",
      options: ["Eutomer", "Racemate", "Distomer"],
      correctAnswer: ["Eutomer", "Racemate", "Distomer"],
      explanation: "Eutomer > Racemate (avg) > Distomer."
    },
    {
      content: "Order the phases of drug action where chirality matters.",
      type: "ORDER_SEQUENCE",
      options: ["Absorption", "Distribution", "Metabolism", "Receptor Binding"],
      correctAnswer: ["Absorption", "Distribution", "Metabolism", "Receptor Binding"],
      explanation: "ADME -> PD."
    },
    {
      content: "Order the potency (High to Low).",
      type: "ORDER_SEQUENCE",
      options: ["S-Warfarin", "Racemic Warfarin", "R-Warfarin"],
      correctAnswer: ["S-Warfarin", "Racemic Warfarin", "R-Warfarin"],
      explanation: "S is most potent."
    },

    // --- True/False (3 Questions) ---
    {
      content: "True or False: The FDA requires all new chiral drugs to be developed as single enantiomers.",
      type: "TRUE_FALSE",
      options: ["True", "False"],
      correctAnswer: "False",
      explanation: "Justification is required, not mandatory separation."
    },
    {
      content: "True or False: Enantiomers always have the same pharmacological activity.",
      type: "TRUE_FALSE",
      options: ["True", "False"],
      correctAnswer: "False",
      explanation: "They usually differ."
    },
    {
      content: "True or False: Chiral inversion occurs for all chiral drugs.",
      type: "TRUE_FALSE",
      options: ["True", "False"],
      correctAnswer: "False",
      explanation: "Only specific drugs like profens."
    },

    // --- Label Diagram (6 Questions) ---
    {
      content: "Identify the chiral center in the Ibuprofen molecule.",
      type: "MCQ", 
      options: ["Alpha-carbon", "Beta-carbon", "Carboxyl carbon", "Methyl carbon"],
      correctAnswer: "Alpha-carbon",
      explanation: "The carbon adjacent to the carboxyl group.",
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch3_slide12.png"
    },
    {
      content: "Identify the functional group responsible for the acidity of Ibuprofen.",
      type: "MCQ",
      options: ["Carboxylic acid", "Alcohol", "Ketone", "Amine"],
      correctAnswer: "Carboxylic acid",
      explanation: "COOH group.",
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch3_slide12.png"
    },
    {
      content: "Which part of the Thalidomide molecule is the chiral center?",
      type: "MCQ",
      options: ["Glutarimide ring carbon", "Phthalimide ring", "Amide nitrogen", "Carbonyl oxygen"],
      correctAnswer: "Glutarimide ring carbon",
      explanation: "C bonded to N and H.",
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch3_slide5.png"
    },
    {
      content: "Identify the structure of Esomeprazole.",
      type: "MCQ",
      options: ["S-isomer", "R-isomer", "Racemate"],
      correctAnswer: "S-isomer",
      explanation: "Single enantiomer.",
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch3_slide20.png"
    },
    {
      content: "Identify the chiral center in Warfarin.",
      type: "MCQ",
      options: ["Hemiketal carbon", "Phenyl ring", "Methyl group", "Ketone"],
      correctAnswer: "Hemiketal carbon",
      explanation: "C9.",
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch3_slide15.png"
    },
    {
      content: "Which graph represents the plasma concentration of the Eutomer vs Distomer?",
      type: "MCQ",
      options: ["Graph A (Higher curve)", "Graph B (Lower curve)"],
      correctAnswer: "Graph A (Higher curve)",
      explanation: "Depends on clearance, but usually different.",
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch3_slide30.png"
    },

    // --- Case Study (2 Questions) ---
    {
      content: "A pharmaceutical company is developing a new beta-blocker. The R-enantiomer is a potent beta-blocker, while the S-enantiomer causes toxicity. However, the synthesis produces a 50:50 mixture. What are the regulatory implications?",
      type: "CASE_STUDY",
      correctAnswer: "The company must either develop a method to separate the enantiomers (resolution) or synthesize the R-enantiomer stereoselectively. Developing the racemate would likely be rejected due to the known toxicity of the distomer.",
      explanation: "Safety first."
    },
    {
      content: "A generic company wants to market the racemate of a drug that is currently sold as a single enantiomer by the innovator. Is this allowed?",
      type: "CASE_STUDY",
      correctAnswer: "Generally no, unless they prove the racemate is safe and effective as a *new* drug. It cannot be a generic equivalent of the single enantiomer because the active ingredient is different (mixture vs pure).",
      explanation: "Different active ingredient."
    },

    // --- Identify Error (2 Questions) ---
    {
      content: "A researcher claims that since the R-enantiomer converts to the S-enantiomer in vivo, they only need to test the toxicity of the R-enantiomer. Identify the error.",
      type: "IDENTIFY_ERROR",
      correctAnswer: "This is incorrect. Since the S-enantiomer is formed in vivo, the organism is exposed to it. Therefore, the toxicity of the S-enantiomer (or the racemate) must also be evaluated to ensure safety.",
      explanation: "Exposure to metabolite."
    },
    {
      content: "A student states that 'Chiral Switch' means changing the chirality of a molecule from R to S. Identify the error.",
      type: "IDENTIFY_ERROR",
      correctAnswer: "A Chiral Switch refers to the commercial strategy of replacing a racemic drug with a single enantiomer product, not the chemical inversion of a molecule.",
      explanation: "Business/Regulatory term vs Chemical term."
    }
  ],
  'exam-cnp-final': [
    // --- MCQ (30 Questions) ---
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
      content: "The specific rotation of a pure enantiomer is +50°. What is the rotation of a racemic mixture?",
      type: "MCQ",
      options: ["+50°", "-50°", "0°", "+25°"],
      correctAnswer: "0°",
      explanation: "Racemates are optically inactive."
    },
    {
      content: "Which projection is best for visualizing the chair conformation of glucose?",
      type: "MCQ",
      options: ["Fischer", "Haworth", "Chair", "Newman"],
      correctAnswer: "Chair",
      explanation: "Chair conformation shows axial/equatorial positions."
    },
    {
      content: "Thalidomide is a teratogen. This means it causes:",
      type: "MCQ",
      options: ["Cancer", "Birth defects", "Liver failure", "Blindness"],
      correctAnswer: "Birth defects",
      explanation: "Phocomelia."
    },
    {
      content: "Which of the following is a polysaccharide?",
      type: "MCQ",
      options: ["Glucose", "Sucrose", "Starch", "Lactose"],
      correctAnswer: "Starch",
      explanation: "Polymer of glucose."
    },
    {
      content: "What is the product of the reduction of D-glucose?",
      type: "MCQ",
      options: ["Gluconic acid", "Glucaric acid", "Sorbitol", "Mannitol"],
      correctAnswer: "Sorbitol",
      explanation: "Reduction of aldehyde to alcohol."
    },
    {
      content: "Which of the following amino acids is achiral?",
      type: "MCQ",
      options: ["Alanine", "Glycine", "Leucine", "Serine"],
      correctAnswer: "Glycine",
      explanation: "R group is H."
    },
    {
      content: "The anomeric carbon in a pyranose ring comes from which functional group?",
      type: "MCQ",
      options: ["Alcohol", "Ketone", "Aldehyde/Ketone", "Carboxylic acid"],
      correctAnswer: "Aldehyde/Ketone",
      explanation: "Carbonyl carbon becomes anomeric."
    },
    {
      content: "Which test is used to detect reducing sugars?",
      type: "MCQ",
      options: ["Biuret Test", "Benedict's Test", "Iodine Test", "Ninhydrin Test"],
      correctAnswer: "Benedict's Test",
      explanation: "Reduces Cu2+ to Cu+."
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
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide83.png"
    },
    {
      content: "Identify the anomer shown in the Haworth projection.",
      type: "MCQ",
      options: ["Alpha", "Beta"],
      correctAnswer: "Beta",
      explanation: "OH is up (equatorial).",
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide20.png"
    },
    {
      content: "Identify the molecule shown.",
      type: "MCQ",
      options: ["Glucose", "Fructose", "Ribose", "Galactose"],
      correctAnswer: "Glucose",
      explanation: "Aldohexose structure.",
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide10.png"
    },
    {
      content: "Is the linkage shown alpha or beta?",
      type: "MCQ",
      options: ["Alpha", "Beta"],
      correctAnswer: "Beta",
      explanation: "Bond points up.",
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide85.png"
    },
    {
      content: "Identify the chiral center.",
      type: "MCQ",
      options: ["C1", "C2", "C3", "C4"],
      correctAnswer: "C2",
      explanation: "Asymmetric carbon.",
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch1_slide5.png"
    },
    {
      content: "Which conformation is shown?",
      type: "MCQ",
      options: ["Chair", "Boat"],
      correctAnswer: "Chair",
      explanation: "Stable form.",
      image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide30.png"
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
  ]
};
