export interface QuestionData {
  content: string;
  type: 'MCQ' | 'MULTI_SELECT' | 'TRUE_FALSE' | 'FILL_BLANK' | 'SHORT_ANSWER' | 'MATCHING' | 'ORDER_SEQUENCE' | 'CALCULATION' | 'CASE_STUDY' | 'IDENTIFY_ERROR';
  options?: string[] | { left: string; right: string }[];
  correctAnswer: string | string[] | { [key: string]: string };
  explanation: string;
  image?: string; // Path to image in course-images bucket
}
