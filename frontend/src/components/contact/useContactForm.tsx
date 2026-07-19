import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "./contact-schema";

export const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      // API integration abstraction layer
      // e.g., await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSuccess(true);
      form.reset();
      setTimeout(() => setIsSuccess(false), 4000);
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register: form.register,
    handleSubmit: form.handleSubmit(onSubmit),
    errors: form.formState.errors,
    isLoading,
    isSuccess,
  };
};
