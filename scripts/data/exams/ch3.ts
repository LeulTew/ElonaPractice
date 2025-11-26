import { QuestionData } from './types';

export const EXAM_3_CONTENT: QuestionData[] = [
  // --- MCQ (30 Questions) ---
  {
    content: "Examine the structure of **Thalidomide**. Which enantiomer is associated with teratogenic effects (birth defects)?",
    type: "MCQ",
    options: ["(R)-Thalidomide", "(S)-Thalidomide", "Both are safe", "Neither is active"],
    correctAnswer: "(S)-Thalidomide",
    explanation: "The (S)-enantiomer is teratogenic, while the (R)-enantiomer is a sedative. However, they racemize in vivo.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product_CNP/ch3/thalidomide.svg"
  },
  {
    content: "Look at the **Ibuprofen** enantiomers. Which one is the pharmacologically active anti-inflammatory agent?",
    type: "MCQ",
    options: ["(S)-Ibuprofen", "(R)-Ibuprofen", "Both are equally active", "Neither"],
    correctAnswer: "(S)-Ibuprofen",
    explanation: "The (S)-enantiomer is the active COX inhibitor. The (R)-enantiomer is inactive but converts to (S) in the body.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product_CNP/ch3/ibuprofen.svg"
  },
  {
    content: "In the **Thalidomide** molecule shown, identify the chiral center.",
    type: "MCQ",
    options: ["The carbon in the glutarimide ring bonded to N", "The carbonyl carbon", "The nitrogen atom", "The benzene ring"],
    correctAnswer: "The carbon in the glutarimide ring bonded to N",
    explanation: "The chiral center is the carbon atom in the glutarimide ring attached to the nitrogen of the phthalimide group.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product_CNP/ch3/thalidomide.svg"
  },
  {
    content: "Based on the **Ibuprofen** diagram, what is the relationship between the (R) and (S) forms?",
    type: "MCQ",
    options: ["Enantiomers", "Diastereomers", "Constitutional Isomers", "Identical"],
    correctAnswer: "Enantiomers",
    explanation: "They are non-superimposable mirror images of each other.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product_CNP/ch3/ibuprofen.svg"
  },
  {
    content: "Which metabolic process converts the inactive (R)-Ibuprofen to the active (S)-Ibuprofen?",
    type: "MCQ",
    options: ["Chiral Inversion", "Racemization", "Hydrolysis", "Oxidation"],
    correctAnswer: "Chiral Inversion",
    explanation: "Unidirectional chiral inversion transforms the distomer to the eutomer.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product_CNP/ch3/ibuprofen.svg"
  },
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
  {
    content: "Examine the structures of **Limonene**. Which enantiomer is responsible for the smell of oranges?",
    type: "MCQ",
    options: ["(R)-(+)-Limonene", "(S)-(-)-Limonene", "Both smell the same", "Neither has a smell"],
    correctAnswer: "(R)-(+)-Limonene",
    explanation: "(R)-Limonene smells like oranges, while (S)-Limonene smells like lemons/turpentine. This illustrates how our olfactory receptors are chiral.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product_CNP/ch3/limonene_enantiomers.png"
  },
  {
    content: "Examine the reaction scheme for **Thalidomide**. What is the intermediate species shown in the racemization process?",
    type: "MCQ",
    options: ["Enol", "Carbocation", "Carbanion", "Radical"],
    correctAnswer: "Enol",
    explanation: "The racemization proceeds via an achiral enol intermediate, allowing the chiral center to invert.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product_CNP/ch3/thalidomide_racemization.png"
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
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product(CNP)_ch3_slide12.png"
  },
  {
    content: "Identify the functional group responsible for the acidity of Ibuprofen.",
    type: "MCQ",
    options: ["Carboxylic acid", "Alcohol", "Ketone", "Amine"],
    correctAnswer: "Carboxylic acid",
    explanation: "COOH group.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product(CNP)_ch3_slide12.png"
  },
  {
    content: "Which part of the Thalidomide molecule is the chiral center?",
    type: "MCQ",
    options: ["Glutarimide ring carbon", "Phthalimide ring", "Amide nitrogen", "Carbonyl oxygen"],
    correctAnswer: "Glutarimide ring carbon",
    explanation: "C bonded to N and H.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product(CNP)_ch3_slide5.png"
  },
  {
    content: "Identify the structure of Esomeprazole.",
    type: "MCQ",
    options: ["S-isomer", "R-isomer", "Racemate"],
    correctAnswer: "S-isomer",
    explanation: "Single enantiomer.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product(CNP)_ch3_slide20.png"
  },
  {
    content: "Identify the chiral center in Warfarin.",
    type: "MCQ",
    options: ["Hemiketal carbon", "Phenyl ring", "Methyl group", "Ketone"],
    correctAnswer: "Hemiketal carbon",
    explanation: "C9.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product(CNP)_ch3_slide15.png"
  },
  {
    content: "Which graph represents the plasma concentration of the Eutomer vs Distomer?",
    type: "MCQ",
    options: ["Graph A (Higher curve)", "Graph B (Lower curve)"],
    correctAnswer: "Graph A (Higher curve)",
    explanation: "Depends on clearance, but usually different.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product(CNP)_ch3_slide30.png"
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
];
