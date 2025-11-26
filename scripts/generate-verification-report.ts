import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function generateReport() {
  console.log('Fetching all questions...');
  
  const { data: questions, error } = await supabase
    .from('questions')
    .select('*')
    .order('exam_id')
    .order('order_index');

  if (error) {
    console.error('Error:', error);
    return;
  }

  let report = '# Content Verification Report\n\n';
  report += `Generated on: ${new Date().toISOString()}\n\n`;
  report += `Total Questions: ${questions.length}\n\n`;

  let currentExam = '';

  for (const q of questions) {
    if (q.exam_id !== currentExam) {
      currentExam = q.exam_id;
      report += `\n## Exam: ${currentExam}\n\n`;
    }

    report += `### Q${q.order_index + 1} (${q.question_type})\n`;
    report += `**Content**: ${q.content}\n\n`;
    
    if (q.metadata?.image_url) {
      report += `**Image**: ${q.metadata.image_url}\n`;
      // Check if image looks valid (basic string check)
      const validPath = q.metadata.image_url.includes('Chemistry_of_Natural_Product_CNP');
      report += `**Image Status**: ${validPath ? '✅ Valid Path' : '❌ INVALID PATH'}\n`;
    }

    report += `**Options**:\n`;
    if (Array.isArray(q.options)) {
      q.options.forEach((opt: string) => report += `- ${opt}\n`);
    } else if (typeof q.options === 'object') {
      report += JSON.stringify(q.options, null, 2) + '\n';
    }

    report += `\n**Correct Answer**: ${JSON.stringify(q.correct_answer)}\n`;
    report += `**Explanation**: ${q.explanation}\n`;
    report += `**Hint**: ${q.metadata?.hint || 'None'}\n`;
    report += `\n---\n`;
  }

  fs.writeFileSync('verification_report.md', report);
  console.log('Report generated: verification_report.md');
}

generateReport();
