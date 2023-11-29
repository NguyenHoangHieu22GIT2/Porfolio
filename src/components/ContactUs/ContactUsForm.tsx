import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
export const ContactUsForm = (props: {}) => {
  const contactUsSchema = z.object({
    firstName: z
      .string()
      .min(1, { message: "First name should not be emptied" })
      .max(20, {
        message: "First name should not be too long than 20 characters",
      }),
    lastName: z
      .string()
      .min(1, { message: "Last name should not be emptied" })
      .max(20, {
        message: "Last name should not be too long than 20 characters",
      }),
    email: z.string().email("Should be an email"),
    messages: z.string(),
  });
  const form = useForm<z.infer<typeof contactUsSchema>>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      messages: "",
    },
  });
  function sendContactUs(data: z.infer<typeof contactUsSchema>) {
    console.log(data);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(sendContactUs)}>
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Hieu" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Hoang" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      type="email"
                      {...field}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="messages"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Messages</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Today, I want to talk about..."
                      {...field}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button className="mt-5" type="submit">
            Send
          </Button>
        </form>
      </Form>
    </div>
  );
};
