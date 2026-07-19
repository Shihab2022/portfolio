import * as z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  subject: z.string().min(1, { message: "Subject is required." }),
  message: z
    .string()
    .min(20, { message: "Message must be at least 20 characters long." }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
