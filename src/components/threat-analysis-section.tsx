'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { analyzeThreats, ThreatAnalysisOutput } from '@/ai/flows/ai-driven-threat-analysis';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { AlertCircle, FileText, Loader2, ShieldAlert, Sparkles, Wand2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  news: z.string().min(50, { message: 'Please provide more extensive news summaries.' }),
  securityReports: z.string().min(50, { message: 'Please provide more detailed security reports.' }),
});

const exampleNews = "Tensions rise in the South China Sea as unnamed naval fleets conduct large-scale exercises. Cyber-attacks on major financial institutions in Europe are attributed to the 'Lazarus' group. A new zero-day exploit targeting critical infrastructure control systems has been discovered by security researchers at OmniCorp.";
const exampleReports = "Report from CypherIntel indicates a 300% increase in phishing attacks targeting aerospace defense contractors. A dark web marketplace known as 'The Shadow Market' is auctioning what appears to be stolen schematics for a next-generation drone. Chatter on encrypted channels suggests a coordinated physical and cyber attack is imminent on a major energy grid.";

export function ThreatAnalysisSection() {
  const [analysisResult, setAnalysisResult] = useState<ThreatAnalysisOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      news: '',
      securityReports: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const result = await analyzeThreats(values);
      setAnalysisResult(result);
    } catch (e) {
      setError('Failed to analyze threats. The network may be unstable. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  const fillExampleData = () => {
    form.setValue('news', exampleNews);
    form.setValue('securityReports', exampleReports);
  }

  return (
    <section id="threat-analysis" className="scroll-mt-20">
      <h2 className="text-3xl font-headline font-bold tracking-tight text-primary">AI-Driven Threat Analysis</h2>
      <p className="mt-2 text-muted-foreground">Leverage generative AI to assess risks from real-time intelligence feeds.</p>
      
      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="font-headline flex items-center gap-2">
                                <FileText className="text-primary"/>
                                Intelligence Input
                            </CardTitle>
                            <CardDescription>Paste news articles and security reports below.</CardDescription>
                        </div>
                        <Button variant="ghost" size="sm" onClick={fillExampleData}>Try Example</Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="news"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Global News Feed</FormLabel>
                                <FormControl>
                                <Textarea placeholder="Paste global news summaries here..." rows={8} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="securityReports"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Security Reports</FormLabel>
                                <FormControl>
                                <Textarea placeholder="Paste recent security intelligence here..." rows={8} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={isLoading} className="w-full">
                            {isLoading ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                            <Wand2 className="mr-2 h-4 w-4" />
                            )}
                            Analyze Threats
                        </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>

        <div className="lg:col-span-3">
            <Card className="h-full min-h-[500px] flex flex-col">
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-2">
                        <Sparkles className="text-primary"/>
                        Analysis Output
                    </CardTitle>
                    <CardDescription>AI-generated threat assessment and recommendations.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex">
                    {isLoading && (
                        <div className="flex flex-col items-center justify-center h-full w-full">
                            <Loader2 className="h-12 w-12 animate-spin text-primary" />
                            <p className="mt-4 text-muted-foreground">Analyzing intelligence feeds...</p>
                        </div>
                    )}
                    {error && (
                         <Alert variant="destructive" className="my-auto">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Analysis Failed</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    {!isLoading && !analysisResult && !error && (
                        <div className="flex flex-col items-center justify-center h-full w-full text-center border-2 border-dashed rounded-lg">
                            <ShieldAlert className="h-12 w-12 text-muted-foreground/50" />
                            <p className="mt-4 max-w-xs text-muted-foreground">Analysis results will appear here once input is provided and analyzed.</p>
                        </div>
                    )}
                    {analysisResult && (
                        <div className="space-y-6 animate-in fade-in-50">
                            <div>
                                <h4 className="font-headline text-lg font-semibold text-primary">Threat Summary</h4>
                                <p className="mt-1 text-muted-foreground prose prose-invert prose-p:text-muted-foreground">{analysisResult.threatSummary}</p>
                            </div>
                            <div>
                                <h4 className="font-headline text-lg font-semibold text-primary">Risk Assessment</h4>
                                <p className="mt-1 text-muted-foreground prose prose-invert prose-p:text-muted-foreground">{analysisResult.riskAssessment}</p>
                            </div>
                            <div>
                                <h4 className="font-headline text-lg font-semibold text-primary">Recommendations</h4>
                                <p className="mt-1 text-muted-foreground prose prose-invert prose-p:text-muted-foreground">{analysisResult.recommendations}</p>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
