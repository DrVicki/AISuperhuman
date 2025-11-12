'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function handleContactSubmission(values: z.infer<typeof contactSchema>) {
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    const errorMessages = parsed.error.issues.map(issue => issue.message).join(' ');
    return { success: false, message: `Invalid form data: ${errorMessages}` };
  }

  // In a real application, you would process this data:
  // e.g., send an email, save to a database, etc.
  console.log('Received contact submission:');
  console.log(parsed.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true };
}
