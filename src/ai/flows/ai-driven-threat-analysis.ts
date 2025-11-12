'use server';

/**
 * @fileOverview An AI-driven threat analysis tool that analyzes global news and security reports to identify potential threats and provide risk assessments for AISuperHuman's missions.
 *
 * - analyzeThreats - A function that handles the threat analysis process.
 * - ThreatAnalysisInput - The input type for the analyzeThreats function.
 * - ThreatAnalysisOutput - The return type for the analyzeThreats function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ThreatAnalysisInputSchema = z.object({
  news: z
    .string()
    .describe('Global news headlines and summaries.'),
  securityReports: z
    .string()
    .describe('Recent security reports and threat intelligence.'),
});
export type ThreatAnalysisInput = z.infer<typeof ThreatAnalysisInputSchema>;

const ThreatAnalysisOutputSchema = z.object({
  threatSummary: z.string().describe('A summary of potential threats.'),
  riskAssessment: z.string().describe('A risk assessment for AISuperHuman missions.'),
  recommendations: z
    .string()
    .describe('Recommendations for mitigating potential threats.'),
});
export type ThreatAnalysisOutput = z.infer<typeof ThreatAnalysisOutputSchema>;

export async function analyzeThreats(
  input: ThreatAnalysisInput
): Promise<ThreatAnalysisOutput> {
  return analyzeThreatsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'threatAnalysisPrompt',
  input: {schema: ThreatAnalysisInputSchema},
  output: {schema: ThreatAnalysisOutputSchema},
  prompt: `You are an AI-powered threat analysis tool designed to identify potential threats and provide risk assessments for AISuperHuman's missions.

  Analyze the following global news and security reports to identify potential threats and provide a risk assessment for AISuperHuman's missions.

  Global News:
  {{news}}

  Security Reports:
  {{securityReports}}

  Threat Summary:
  Risk Assessment:
  Recommendations: `,
});

const analyzeThreatsFlow = ai.defineFlow(
  {
    name: 'analyzeThreatsFlow',
    inputSchema: ThreatAnalysisInputSchema,
    outputSchema: ThreatAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
