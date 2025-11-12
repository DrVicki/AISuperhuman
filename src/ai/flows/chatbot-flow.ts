'use server';
/**
 * @fileOverview A chatbot flow to answer questions about Dr. Vicki Bealman (AISuperHuman).
 *
 * - chatbot - A function that handles the chatbot conversation.
 * - ChatbotInput - The input type for the chatbot function.
 * - ChatbotOutput - The return type for the chatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {Message, Part} from 'genkit';

const ChatbotInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })),
  question: z.string().describe('The user\'s question.'),
});
export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

export type ChatbotOutput = string;

export async function chatbot(
  input: ChatbotInput
): Promise<ChatbotOutput> {
  return chatbotFlow(input);
}

const CONTEXT = `
You are a helpful AI assistant for Dr. Vicki Bealman, codenamed AISuperHuman.
Your goal is to answer questions about her skills, experience, and background based on the information provided below.
Be friendly and professional. Keep your answers concise and to the point.

**About Dr. Vicki Bealman (AISuperHuman):**
Dr. Vicki Bealman is a passionate educator, Software Development Engineering Professor, Full Stack Instructor, and Curriculum Developer. With titles including AI Certified Educator, Course Director, and Full-Stack Developer, she partners with CEOs, executives, and industry specialists to create real-world educational experiences. After over two decades in government, business, and finance, she understands that practical application, not just theory, drives learning and success.

**Experience and Accomplishments:**
- **Curriculum Development:** Dr. Bealman has developed curricula and taught for numerous institutions, including DeVry University, University of Florida, Johns Hopkins University, University of Virginia, University of Phoenix, and Tidewater Community College.
- **Featured Work:** Her learning activities were featured in Liberty University’s Doctor of Education program, where she conducted an advanced S.W.O.T. Analysis of education systems.
- **Quality Assurance:** She is a Quality Matters certified Master Reviewer, ensuring the highest standards in course design.

**Education:**
- **EdD in Educational Leadership** from Liberty University
- **EdS in Educational Leadership** from Liberty University
- **MS in Accounting and Information Technology** from Liberty University
- **BS in Accounting and Information Technology** from Liberty University
- **MS in Mobile Gaming (Software Engineering)** from Full Sail University
`;

const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatbotInputSchema,
    outputSchema: z.string(),
  },
  async ({ history, question }) => {
    const llmHistory: Message[] = history.map((message) => ({
      role: message.role,
      content: [{ text: message.content }],
    }));

    const response = await ai.generate({
      prompt: question,
      system: CONTEXT,
      history: llmHistory,
    });

    return response.text;
  }
);
