import fs from 'fs';
import path from 'path';
import { EXAM_CONTENT } from './data/exam-content';

const PUBLIC_DIR = path.join(process.cwd(), 'public');

function verifyContent() {
  console.log('Starting Content Verification...');
  let errorCount = 0;
  let warningCount = 0;

  for (const [examId, questions] of Object.entries(EXAM_CONTENT)) {
    console.log(`\nVerifying ${examId} (${questions.length} questions)...`);
    
    questions.forEach((q, index) => {
      const qNum = index + 1;
      
      // 1. Check Image
      if (q.image) {
        const imagePath = path.join(PUBLIC_DIR, q.image);
        if (!fs.existsSync(imagePath)) {
          console.error(`[ERROR] ${examId} Q${qNum}: Image not found: ${q.image}`);
          errorCount++;
        } else {
          // Check if image name matches exam context (heuristic)
          const imageName = path.basename(q.image);
          if (examId.includes('ch1') && !imageName.includes('ch1') && !imageName.includes('Chapter_1')) {
            console.warn(`[WARN] ${examId} Q${qNum}: Image name ${imageName} might not match chapter context.`);
            warningCount++;
          }
          if (examId.includes('ch2') && !imageName.includes('ch2') && !imageName.includes('Chapter_2')) {
            console.warn(`[WARN] ${examId} Q${qNum}: Image name ${imageName} might not match chapter context.`);
            warningCount++;
          }
          // ch3 and final checks...
        }
        }


      // 2. Check Answer Validity
      if (q.type === 'MCQ' || q.type === 'MULTI_SELECT') {
        const options = q.options as string[];
        if (!options || options.length === 0) {
          console.error(`[ERROR] ${examId} Q${qNum}: ${q.type} missing options.`);
          errorCount++;
        } else {
          if (Array.isArray(q.correctAnswer)) {
            (q.correctAnswer as string[]).forEach(ans => {
              if (!options.includes(ans)) {
                console.error(`[ERROR] ${examId} Q${qNum}: Correct answer "${ans}" not in options.`);
                errorCount++;
              }
            });
          } else {
            if (!options.includes(q.correctAnswer as string)) {
              console.error(`[ERROR] ${examId} Q${qNum}: Correct answer "${q.correctAnswer}" not in options.`);
              errorCount++;
            }
          }
        }
      }

      // 3. Check Content
      if (!q.content || q.content.trim() === '') {
        console.error(`[ERROR] ${examId} Q${qNum}: Empty content.`);
        errorCount++;
      }
    });
  }

  console.log('\nVerification Complete.');
  console.log(`Errors: ${errorCount}`);
  console.log(`Warnings: ${warningCount}`);
}

verifyContent();
