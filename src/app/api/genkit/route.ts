import {createNextApiHandler} from '@genkit-ai/next';
import '@/ai/flows/ai-driven-threat-analysis';
import '@/ai/flows/chatbot-flow';

export const {POST} = createNextApiHandler();
