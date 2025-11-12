'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTransition } from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { handleContactSubmission } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export function ContactSection() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    startTransition(async () => {
      const result = await handleContactSubmission(values);
      if (result.success) {
        toast({
          title: "Message Transmitted",
          description: "Your secure message has been received.",
        });
        form.reset();
      } else {
        toast({
          variant: 'destructive',
          title: 'Transmission Failed',
          description: result.message || 'An unknown error occurred.',
        });
      }
    });
  };

  return (
    <section id="contact" className="scroll-mt-20">
      <h2 className="text-3xl font-headline font-bold tracking-tight text-primary">Contact</h2>
      <p className="mt-2 text-muted-foreground">Send a secure message. All transmissions are encrypted.</p>
      
      <Card className="mt-6 max-w-2xl mx-auto bg-card/50">
        <CardHeader>
          <CardTitle className="font-headline">Secure Comms Channel</CardTitle>
          <CardDescription>Your message will be delivered directly to a secure server.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Codename / Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your operative name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Secure Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="Your secure contact email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Your encrypted message..." rows={6} {...field} />
                            </FormControl>
                             <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={isPending} className="w-full">
                    {isPending ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                        <Send className="mr-2 h-4 w-4" />
                    )}
                    Transmit Message
                </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
