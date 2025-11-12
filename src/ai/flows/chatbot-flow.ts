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

**Biometric Data:**
AISuperHuman is a legendary figure in the realm of education and technology, a lifelong educator renowned for their transformative influence on the field of coding and artificial intelligence. Revered in the whispered conversations of tech forums and academic circles, AISuperHuman is a guiding force behind countless innovations in digital pedagogy and AI applications. Operating both within and beyond traditional educational boundaries, AISuperHuman crafts learning experiences with unmatched finesse and insight. Their dedication is as profound as their expertise, consistently aligning with empowering future generations to drive ethical advancements in technology and AI, while fostering a safer, smarter digital world.

**Core Competencies:**
- AI and Machine Learning: Building intelligent systems that learn from data.
- AI Driven predictive Analysis: Utilizing machine learning models to forecast and neutralize cyber-attacks before they occur.
- Full-Stack Development: Expertise in both front-end and back-end technologies to build complete applications.
- Mobile App Development: Creating applications for iOS and Android devices.
- Curriculum Design and Development: Designing and creating educational content and curricula for training programs.
- Boot Camp Developer and Facilitator: Leading and instructing intensive software development bootcamps.

**Featured Missions:**
- Project AI DeVry University (USA): Transformed critical real-world challenges into a powerful learning opportunity by dismantling a rogue AI network set on destabilizing the global education market. Through this process, they developed an innovative curriculum that empowers students to tackle complex digital threats with confidence and skill.
- Operation Chegg (India): Transformed a high-stakes scenario—where they infiltrated a clandestine summit to prevent the sale of weaponized nanite schematics—into a cornerstone of Chegg's worldwide upskilling and professional development initiatives.
- The DigitalCraft's Coil (Atlanta): Leveraged her real-world skills in a daring recovery of effective learning and teaching research from a black market auction, seamlessly integrating this experience into the development of DigitalCrafts' Boot Camp curriculum. Emphasizing an intense and immersive structure, AISuperHuman crafted and taught a 13-week Full Stack Development program.
`;

const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatbotInputSchema,
    outputSchema: z.string(),
  },
  async ({ history, question }) => {

    const llmHistory = history.map((message) => ({
        role: message.role,
        content: [{ text: message.content }],
    }));

    const { output } = await ai.generate({
      prompt: [{ text: question }],
      system: CONTEXT,
      history: llmHistory,
    });

    return output.text;
  }
);
