import { QuestionData } from './types';

export const EXAM_2_CONTENT: QuestionData[] = [
  // --- MCQ (30 Questions) ---
  {
    content: "Identify the molecule shown in the **Fischer Projection**.",
    type: "MCQ",
    options: ["D-Glucose", "D-Fructose", "D-Galactose", "D-Ribose"],
    correctAnswer: "D-Fructose",
    explanation: "The presence of a ketone group at C2 identifies this as a ketose, specifically D-Fructose.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product_CNP/ch2/fischer_fructose.svg"
  },
  {
    content: "Examine the **Haworth Projection**. Which anomer of glucose is shown?",
    type: "MCQ",
    options: ["Alpha", "Beta", "Gamma", "Delta"],
    correctAnswer: "Alpha",
    explanation: "The anomeric hydroxyl group at C1 is pointing down (trans to the CH2OH group), indicating the alpha anomer.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product_CNP/ch2/haworth_glucose_alpha.svg"
  },
  {
    content: "Identify the disaccharide shown in the diagram.",
    type: "MCQ",
    options: ["Maltose", "Lactose", "Sucrose", "Cellobiose"],
    correctAnswer: "Sucrose",
    explanation: "The structure shows a glycosidic bond between the anomeric carbons of glucose and fructose.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product_CNP/ch2/sucrose.svg"
  },
  {
    content: "Based on the structure of **D-Fructose**, which carbon is the anomeric carbon in its cyclic form?",
    type: "MCQ",
    options: ["C1", "C2", "C3", "C4"],
    correctAnswer: "C2",
    explanation: "In ketoses like fructose, the carbonyl group is at C2, which becomes the anomeric carbon upon cyclization.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product_CNP/ch2/fischer_fructose.svg"
  },
  {
    content: "Look at the **Sucrose** molecule. Why is it a non-reducing sugar?",
    type: "MCQ",
    options: ["It has a free aldehyde group.", "Both anomeric carbons are involved in the bond.", "It is a monosaccharide.", "It contains a ketone."],
    correctAnswer: "Both anomeric carbons are involved in the bond.",
    explanation: "The glycosidic bond links C1 of glucose and C2 of fructose, locking both rings so they cannot open to form a reducing group.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product_CNP/ch2/sucrose.svg"
  },
  {
    content: "Identify the polysaccharide structure shown. Note the alpha-1,4-glycosidic linkage.",
    type: "MCQ",
    options: ["Amylose", "Cellulose", "Chitin", "Glycogen"],
    correctAnswer: "Amylose",
    explanation: "Amylose is a linear polymer of glucose linked by alpha-1,4 bonds, causing it to coil.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product_CNP/ch2/amylose.svg"
  },
  {
    content: "Examine the structure of **Cellulose**. What type of glycosidic bond connects the glucose units?",
    type: "MCQ",
    options: ["Alpha-1,4", "Beta-1,4", "Alpha-1,6", "Beta-1,6"],
    correctAnswer: "Beta-1,4",
    explanation: "Cellulose contains beta-1,4 linkages, which allow the chains to form straight, rigid fibers.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product_CNP/ch2/cellulose.svg"
  },
  {
    content: "Which of the following is the simplest aldose?",
    type: "MCQ",
    options: ["Glyceraldehyde", "Dihydroxyacetone", "Glucose", "Ribose"],
    correctAnswer: "Glyceraldehyde",
    explanation: "Glyceraldehyde is the simplest aldose (aldotriose)."
  },
  {
    content: "What is the relationship between D-glucose and L-glucose?",
    type: "MCQ",
    options: ["Enantiomers", "Diastereomers", "Anomers", "Epimers"],
    correctAnswer: "Enantiomers",
    explanation: "D and L forms are mirror images (enantiomers)."
  },
  {
    content: "Which carbon atom determines the D/L configuration in sugars?",
    type: "MCQ",
    options: ["The anomeric carbon", "The penultimate carbon (farthest from carbonyl)", "The carbonyl carbon", "C1"],
    correctAnswer: "The penultimate carbon (farthest from carbonyl)",
    explanation: "The chiral center farthest from the carbonyl group determines D/L."
  },
  {
    content: "Which polysaccharide is the storage form of glucose in animals?",
    type: "MCQ",
    options: ["Starch", "Cellulose", "Glycogen", "Chitin"],
    correctAnswer: "Glycogen",
    explanation: "Stored in liver and muscles."
  },
  {
    content: "Which polysaccharide is the structural component of plant cell walls?",
    type: "MCQ",
    options: ["Starch", "Cellulose", "Glycogen", "Chitin"],
    correctAnswer: "Cellulose",
    explanation: "Beta-1,4-linked glucose."
  },
  {
    content: "Which test detects reducing sugars?",
    type: "MCQ",
    options: ["Biuret test", "Benedict's test", "Sudan III test", "Iodine test"],
    correctAnswer: "Benedict's test",
    explanation: "Reduces Cu2+ to Cu+."
  },
  {
    content: "Sucrose is a non-reducing sugar because:",
    type: "MCQ",
    options: ["It has no free aldehyde/ketone group.", "It is a disaccharide.", "It contains fructose.", "It is insoluble."],
    correctAnswer: "It has no free aldehyde/ketone group.",
    explanation: "Both anomeric carbons are involved in the bond."
  },
  {
    content: "Amylose is a component of starch that is:",
    type: "MCQ",
    options: ["Branched", "Linear", "Cross-linked", "Cyclic"],
    correctAnswer: "Linear",
    explanation: "Alpha-1,4-linked glucose."
  },
  {
    content: "Amylopectin is a component of starch that is:",
    type: "MCQ",
    options: ["Branched", "Linear", "Cross-linked", "Cyclic"],
    correctAnswer: "Branched",
    explanation: "Has alpha-1,6 branches."
  },
  {
    content: "The repeating unit of cellulose is:",
    type: "MCQ",
    options: ["Glucose", "Galactose", "Cellobiose", "Maltose"],
    correctAnswer: "Cellobiose",
    explanation: "Disaccharide of beta-1,4-glucose."
  },
  {
    content: "Which sugar is found in DNA?",
    type: "MCQ",
    options: ["Ribose", "Deoxyribose", "Glucose", "Fructose"],
    correctAnswer: "Deoxyribose",
    explanation: "2-deoxyribose."
  },
  {
    content: "Which sugar is found in RNA?",
    type: "MCQ",
    options: ["Ribose", "Deoxyribose", "Glucose", "Fructose"],
    correctAnswer: "Ribose",
    explanation: "Ribonucleic acid."
  },
  {
    content: "Oxidation of the aldehyde group of glucose yields:",
    type: "MCQ",
    options: ["Gluconic acid", "Glucuronic acid", "Glucaric acid", "Sorbitol"],
    correctAnswer: "Gluconic acid",
    explanation: "Aldonic acid."
  },
  {
    content: "Oxidation of the primary alcohol group of glucose yields:",
    type: "MCQ",
    options: ["Gluconic acid", "Glucuronic acid", "Glucaric acid", "Sorbitol"],
    correctAnswer: "Glucuronic acid",
    explanation: "Uronic acid."
  },
  {
    content: "Reduction of glucose yields:",
    type: "MCQ",
    options: ["Gluconic acid", "Glucuronic acid", "Glucaric acid", "Sorbitol"],
    correctAnswer: "Sorbitol",
    explanation: "Sugar alcohol (glucitol)."
  },
  {
    content: "Which enzyme hydrolyzes starch?",
    type: "MCQ",
    options: ["Amylase", "Lipase", "Protease", "Cellulase"],
    correctAnswer: "Amylase",
    explanation: "Breaks alpha-1,4 bonds."
  },

  // --- Multi-Select (12 Questions) ---
  {
    content: "Select the reducing sugars.",
    type: "MULTI_SELECT",
    options: ["Glucose", "Fructose", "Sucrose", "Maltose", "Lactose"],
    correctAnswer: ["Glucose", "Fructose", "Maltose", "Lactose"],
    explanation: "Sucrose is non-reducing."
  },
  {
    content: "Select the disaccharides.",
    type: "MULTI_SELECT",
    options: ["Glucose", "Sucrose", "Maltose", "Lactose", "Starch"],
    correctAnswer: ["Sucrose", "Maltose", "Lactose"],
    explanation: "Glucose is mono, Starch is poly."
  },
  {
    content: "Select the polysaccharides.",
    type: "MULTI_SELECT",
    options: ["Glycogen", "Cellulose", "Starch", "Maltose"],
    correctAnswer: ["Glycogen", "Cellulose", "Starch"],
    explanation: "Maltose is a disaccharide."
  },
  {
    content: "Select the aldoses.",
    type: "MULTI_SELECT",
    options: ["Glucose", "Galactose", "Ribose", "Fructose"],
    correctAnswer: ["Glucose", "Galactose", "Ribose"],
    explanation: "Fructose is a ketose."
  },
  {
    content: "Select the ketoses.",
    type: "MULTI_SELECT",
    options: ["Fructose", "Dihydroxyacetone", "Glucose", "Ribulose"],
    correctAnswer: ["Fructose", "Dihydroxyacetone", "Ribulose"],
    explanation: "Contain ketone group."
  },
  {
    content: "Select the components of starch.",
    type: "MULTI_SELECT",
    options: ["Amylose", "Amylopectin", "Glycogen", "Cellulose"],
    correctAnswer: ["Amylose", "Amylopectin"],
    explanation: "Plant storage forms."
  },
  {
    content: "Select the sugars that are epimers of glucose.",
    type: "MULTI_SELECT",
    options: ["Mannose", "Galactose", "Fructose", "Ribose"],
    correctAnswer: ["Mannose", "Galactose"],
    explanation: "Differ at one carbon."
  },
  {
    content: "Select the functions of carbohydrates.",
    type: "MULTI_SELECT",
    options: ["Energy storage", "Structural support", "Cell recognition", "Catalysis"],
    correctAnswer: ["Energy storage", "Structural support", "Cell recognition"],
    explanation: "Catalysis is mainly proteins/RNA."
  },
  {
    content: "Select the tests for carbohydrates.",
    type: "MULTI_SELECT",
    options: ["Molisch test", "Benedict's test", "Biuret test", "Fehling's test"],
    correctAnswer: ["Molisch test", "Benedict's test", "Fehling's test"],
    explanation: "Biuret is for proteins."
  },
  {
    content: "Select the hexoses.",
    type: "MULTI_SELECT",
    options: ["Glucose", "Fructose", "Galactose", "Ribose"],
    correctAnswer: ["Glucose", "Fructose", "Galactose"],
    explanation: "Ribose is a pentose."
  },
  {
    content: "Select the pentoses.",
    type: "MULTI_SELECT",
    options: ["Ribose", "Deoxyribose", "Glucose", "Xylose"],
    correctAnswer: ["Ribose", "Deoxyribose", "Xylose"],
    explanation: "5 carbons."
  },
  {
    content: "Select the sugars that undergo mutarotation.",
    type: "MULTI_SELECT",
    options: ["Glucose", "Maltose", "Lactose", "Sucrose"],
    correctAnswer: ["Glucose", "Maltose", "Lactose"],
    explanation: "Must have free anomeric carbon."
  },

  // --- Fill-in-the-Blank (15 Questions) ---
  {
    content: "The simplest aldose is ______.",
    type: "FILL_BLANK",
    correctAnswer: "glyceraldehyde",
    explanation: "3 carbons."
  },
  {
    content: "The simplest ketose is ______.",
    type: "FILL_BLANK",
    correctAnswer: "dihydroxyacetone",
    explanation: "3 carbons."
  },
  {
    content: "Glucose is stored in animals as ______.",
    type: "FILL_BLANK",
    correctAnswer: "glycogen",
    explanation: "Animal starch."
  },
  {
    content: "Glucose is stored in plants as ______.",
    type: "FILL_BLANK",
    correctAnswer: "starch",
    explanation: "Plant energy."
  },
  {
    content: "The bond between two sugar units is called a ______ bond.",
    type: "FILL_BLANK",
    correctAnswer: "glycosidic",
    explanation: "Ether link."
  },
  {
    content: "Sucrose is a disaccharide of glucose and ______.",
    type: "FILL_BLANK",
    correctAnswer: "fructose",
    explanation: "Composition."
  },
  {
    content: "Lactose is a disaccharide of glucose and ______.",
    type: "FILL_BLANK",
    correctAnswer: "galactose",
    explanation: "Composition."
  },
  {
    content: "Maltose is a disaccharide of two ______ units.",
    type: "FILL_BLANK",
    correctAnswer: "glucose",
    explanation: "Composition."
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
    content: "Isomers that differ only at the anomeric carbon are called ______.",
    type: "FILL_BLANK",
    correctAnswer: "anomers",
    explanation: "Alpha/Beta."
  },
  {
    content: "Isomers that differ at only one chiral center are called ______.",
    type: "FILL_BLANK",
    correctAnswer: "epimers",
    explanation: "Subclass of diastereomers."
  },
  {
    content: "The reduction of glucose yields ______.",
    type: "FILL_BLANK",
    correctAnswer: "sorbitol",
    explanation: "Sugar alcohol."
  },
  {
    content: "Cellulose is a polymer of glucose linked by ______ bonds.",
    type: "FILL_BLANK",
    correctAnswer: "beta-1,4",
    explanation: "Linkage type."
  },
  {
    content: "Starch (amylose) is a polymer of glucose linked by ______ bonds.",
    type: "FILL_BLANK",
    correctAnswer: "alpha-1,4",
    explanation: "Linkage type."
  },

  // --- Matching (10 Questions) ---
  {
    content: "Match the sugar to its type.",
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
    explanation: "Classifications."
  },
  {
    content: "Match the disaccharide to its components.",
    type: "MATCHING",
    options: [
      { left: "Sucrose", right: "Glu + Fru" },
      { left: "Lactose", right: "Glu + Gal" },
      { left: "Maltose", right: "Glu + Glu" }
    ],
    correctAnswer: {
      "Sucrose": "Glu + Fru",
      "Lactose": "Glu + Gal",
      "Maltose": "Glu + Glu"
    },
    explanation: "Composition."
  },
  {
    content: "Match the polysaccharide to its function.",
    type: "MATCHING",
    options: [
      { left: "Starch", right: "Plant Storage" },
      { left: "Glycogen", right: "Animal Storage" },
      { left: "Cellulose", right: "Plant Structure" }
    ],
    correctAnswer: {
      "Starch": "Plant Storage",
      "Glycogen": "Animal Storage",
      "Cellulose": "Plant Structure"
    },
    explanation: "Functions."
  },
  {
    content: "Match the test to the target.",
    type: "MATCHING",
    options: [
      { left: "Benedict's", right: "Reducing Sugars" },
      { left: "Iodine", right: "Starch" },
      { left: "Seliwanoff's", right: "Ketoses" }
    ],
    correctAnswer: {
      "Benedict's": "Reducing Sugars",
      "Iodine": "Starch",
      "Seliwanoff's": "Ketoses"
    },
    explanation: "Chemical tests."
  },
  {
    content: "Match the ring size.",
    type: "MATCHING",
    options: [
      { left: "Pyranose", right: "6-membered" },
      { left: "Furanose", right: "5-membered" }
    ],
    correctAnswer: {
      "Pyranose": "6-membered",
      "Furanose": "5-membered"
    },
    explanation: "Ring structures."
  },
  {
    content: "Match the linkage.",
    type: "MATCHING",
    options: [
      { left: "Amylose", right: "Alpha-1,4" },
      { left: "Cellulose", right: "Beta-1,4" },
      { left: "Amylopectin", right: "Alpha-1,6 (branch)" }
    ],
    correctAnswer: {
      "Amylose": "Alpha-1,4",
      "Cellulose": "Beta-1,4",
      "Amylopectin": "Alpha-1,6 (branch)"
    },
    explanation: "Bond types."
  },
  {
    content: "Match the epimer.",
    type: "MATCHING",
    options: [
      { left: "Mannose", right: "C2 epimer of Glucose" },
      { left: "Galactose", right: "C4 epimer of Glucose" }
    ],
    correctAnswer: {
      "Mannose": "C2 epimer of Glucose",
      "Galactose": "C4 epimer of Glucose"
    },
    explanation: "Epimer positions."
  },
  {
    content: "Match the derivative.",
    type: "MATCHING",
    options: [
      { left: "Sorbitol", right: "Reduction product" },
      { left: "Gluconic acid", right: "Oxidation of C1" },
      { left: "Glucuronic acid", right: "Oxidation of C6" }
    ],
    correctAnswer: {
      "Sorbitol": "Reduction product",
      "Gluconic acid": "Oxidation of C1",
      "Glucuronic acid": "Oxidation of C6"
    },
    explanation: "Reactions."
  },
  {
    content: "Match the anomer.",
    type: "MATCHING",
    options: [
      { left: "Alpha", right: "OH opposite CH2OH (Trans)" },
      { left: "Beta", right: "OH same side CH2OH (Cis)" }
    ],
    correctAnswer: {
      "Alpha": "OH opposite CH2OH (Trans)",
      "Beta": "OH same side CH2OH (Cis)"
    },
    explanation: "Anomeric configuration."
  },
  {
    content: "Match the sugar count.",
    type: "MATCHING",
    options: [
      { left: "Triose", right: "3 carbons" },
      { left: "Pentose", right: "5 carbons" },
      { left: "Hexose", right: "6 carbons" }
    ],
    correctAnswer: {
      "Triose": "3 carbons",
      "Pentose": "5 carbons",
      "Hexose": "6 carbons"
    },
    explanation: "Nomenclature."
  },

  // --- Short Answer (8 Questions) ---
  {
    content: "Explain the difference between alpha and beta anomers of glucose.",
    type: "SHORT_ANSWER",
    correctAnswer: "In the alpha anomer, the -OH group on the anomeric carbon (C1) is on the opposite side of the ring (trans) to the -CH2OH group. In the beta anomer, the -OH is on the same side (cis).",
    explanation: "Stereochemistry at C1."
  },
  {
    content: "Why can humans digest starch but not cellulose?",
    type: "SHORT_ANSWER",
    correctAnswer: "Humans have amylase enzymes that break alpha-1,4 glycosidic bonds found in starch, but lack cellulase enzymes needed to break the beta-1,4 glycosidic bonds in cellulose.",
    explanation: "Enzyme specificity."
  },
  {
    content: "What is mutarotation?",
    type: "SHORT_ANSWER",
    correctAnswer: "Mutarotation is the spontaneous change in specific rotation of an optically active compound (like glucose) when dissolved in water, due to the equilibrium between alpha and beta anomers via the open-chain form.",
    explanation: "Equilibrium process."
  },
  {
    content: "Define 'Reducing Sugar'.",
    type: "SHORT_ANSWER",
    correctAnswer: "A reducing sugar is a carbohydrate that has a free aldehyde or ketone group (or hemiacetal/hemiketal) capable of acting as a reducing agent (e.g., reducing Cu2+ in Benedict's test).",
    explanation: "Chemical property."
  },
  {
    content: "What is the structural difference between amylose and amylopectin?",
    type: "SHORT_ANSWER",
    correctAnswer: "Amylose is a linear polymer of glucose with alpha-1,4 bonds. Amylopectin is a branched polymer with alpha-1,4 bonds and alpha-1,6 branch points.",
    explanation: "Branching."
  },
  {
    content: "Why is sucrose a non-reducing sugar?",
    type: "SHORT_ANSWER",
    correctAnswer: "In sucrose, the glycosidic bond is formed between the anomeric carbon of glucose and the anomeric carbon of fructose. Thus, neither ring can open to form a free aldehyde or ketone group.",
    explanation: "Bond location."
  },
  {
    content: "What are epimers?",
    type: "SHORT_ANSWER",
    correctAnswer: "Epimers are diastereomers that differ in configuration at only one chiral center.",
    explanation: "Definition."
  },
  {
    content: "Describe the formation of a hemiacetal.",
    type: "SHORT_ANSWER",
    correctAnswer: "A hemiacetal is formed by the reaction of an aldehyde with an alcohol. In sugars, the intramolecular reaction between the C1 aldehyde and C5 hydroxyl forms the cyclic hemiacetal.",
    explanation: "Cyclization mechanism."
  },

  // --- Label Diagram (6 Questions) ---
  {
    content: "Identify the anomeric carbon in the structure.",
    type: "MCQ",
    options: ["C1", "C2", "C3", "C4"],
    correctAnswer: "C1",
    explanation: "Carbon bonded to two oxygens.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide5.png"
  },
  {
    content: "Is this the alpha or beta anomer?",
    type: "MCQ",
    options: ["Alpha", "Beta"],
    correctAnswer: "Beta",
    explanation: "OH is equatorial (cis to CH2OH).",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide10.png"
  },
  {
    content: "Identify the glycosidic bond type.",
    type: "MCQ",
    options: ["Alpha-1,4", "Beta-1,4", "Alpha-1,6", "Beta-1,6"],
    correctAnswer: "Alpha-1,4",
    explanation: "Bond points down.",
    image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide15.png"
  },
  {
    content: "Which sugar is shown in the Fischer projection?",
    type: "MCQ",
    options: ["D-Glucose", "L-Glucose", "D-Galactose", "D-Mannose"],
    correctAnswer: "D-Glucose",
    explanation: "Right-Left-Right-Right pattern.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide20.png"
  },
  {
    content: "Identify the disaccharide.",
    type: "MCQ",
    options: ["Maltose", "Lactose", "Sucrose", "Cellobiose"],
    correctAnswer: "Lactose",
    explanation: "Galactose + Glucose with beta bond.",
    image: "/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide25.png"
  },
  {
    content: "Is this a pyranose or furanose ring?",
    type: "MCQ",
    options: ["Pyranose", "Furanose"],
    correctAnswer: "Furanose",
    explanation: "5-membered ring.",
    image: "https://ykskwxkgcapkflfpgiww.supabase.co/storage/v1/object/public/course-images/Chemistry_of_Natural_Product(CNP)_ch2_slide30.png"
  },

  // --- Order/Sequence (5 Questions) ---
  {
    content: "Order the steps in the cyclization of glucose.",
    type: "ORDER_SEQUENCE",
    options: ["Nucleophilic attack of O on C5", "Proton transfer", "Formation of Hemiacetal", "Ring closure"],
    correctAnswer: ["Nucleophilic attack of O on C5", "Ring closure", "Proton transfer", "Formation of Hemiacetal"],
    explanation: "Mechanism steps."
  },
  {
    content: "Order the sugars by sweetness (Low to High).",
    type: "ORDER_SEQUENCE",
    options: ["Lactose", "Glucose", "Sucrose", "Fructose"],
    correctAnswer: ["Lactose", "Glucose", "Sucrose", "Fructose"],
    explanation: "Relative sweetness."
  },
  {
    content: "Order the polysaccharides by branching (Least to Most).",
    type: "ORDER_SEQUENCE",
    options: ["Cellulose", "Amylose", "Amylopectin", "Glycogen"],
    correctAnswer: ["Cellulose", "Amylose", "Amylopectin", "Glycogen"],
    explanation: "Linear -> Branched -> Highly Branched."
  },
  {
    content: "Order the carbons in D-Glucose (Fischer) from top to bottom.",
    type: "ORDER_SEQUENCE",
    options: ["Aldehyde", "Chiral centers", "Primary alcohol"],
    correctAnswer: ["Aldehyde", "Chiral centers", "Primary alcohol"],
    explanation: "C1 to C6."
  },
  {
    content: "Order by number of carbons (Low to High).",
    type: "ORDER_SEQUENCE",
    options: ["Glyceraldehyde", "Erythrose", "Ribose", "Glucose"],
    correctAnswer: ["Glyceraldehyde", "Erythrose", "Ribose", "Glucose"],
    explanation: "3, 4, 5, 6."
  },

  // --- Calculation (4 Questions) ---
  {
    content: "How many stereoisomers are possible for an aldohexose (4 chiral centers)?",
    type: "CALCULATION",
    correctAnswer: "16",
    explanation: "2^4 = 16."
  },
  {
    content: "How many stereoisomers are possible for a ketohexose (3 chiral centers)?",
    type: "CALCULATION",
    correctAnswer: "8",
    explanation: "2^3 = 8."
  },
  {
    content: "If a solution contains 36% alpha-glucose and 64% beta-glucose, what is the ratio?",
    type: "CALCULATION",
    correctAnswer: "0.5625",
    explanation: "36/64 = 9/16 = 0.5625."
  },
  {
    content: "Calculate the molecular weight of glucose (C6H12O6). C=12, H=1, O=16.",
    type: "CALCULATION",
    correctAnswer: "180",
    explanation: "72 + 12 + 96 = 180."
  },

  // --- True/False (3 Questions) ---
  {
    content: "True or False: Fructose is a reducing sugar.",
    type: "TRUE_FALSE",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "It can tautomerize to an aldose."
  },
  {
    content: "True or False: Cellulose is branched.",
    type: "TRUE_FALSE",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "It is linear."
  },
  {
    content: "True or False: D-Glucose and L-Glucose are epimers.",
    type: "TRUE_FALSE",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "They are enantiomers."
  },

  // --- Case Study (2 Questions) ---
  {
    content: "A patient has lactose intolerance. They consume milk and experience bloating. Explain the biochemical cause.",
    type: "CASE_STUDY",
    correctAnswer: "The patient lacks the enzyme lactase, which hydrolyzes lactose into glucose and galactose. Undigested lactose ferments in the gut, causing gas and bloating.",
    explanation: "Enzyme deficiency."
  },
  {
    content: "A diabetic patient has high blood glucose. Why is the HbA1c test used for monitoring?",
    type: "CASE_STUDY",
    correctAnswer: "Glucose non-enzymatically reacts with hemoglobin (glycation). HbA1c reflects the average blood glucose over the lifespan of red blood cells (approx 3 months).",
    explanation: "Glycation marker."
  },

  // --- Identify Error (2 Questions) ---
  {
    content: "A student draws alpha-D-glucose with the anomeric OH pointing up (equatorial). Identify the error.",
    type: "IDENTIFY_ERROR",
    correctAnswer: "In the D-series, alpha means the OH is down (axial/trans to CH2OH). Beta is up (equatorial/cis).",
    explanation: "Alpha is down."
  },
  {
    content: "A text states that sucrose reduces Benedict's reagent. Identify the error.",
    type: "IDENTIFY_ERROR",
    correctAnswer: "Sucrose is a non-reducing sugar because both anomeric carbons are involved in the glycosidic bond. It will not react with Benedict's reagent.",
    explanation: "Sucrose is non-reducing."
  }
];
