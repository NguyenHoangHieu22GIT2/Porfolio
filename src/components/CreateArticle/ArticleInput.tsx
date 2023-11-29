import React, { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type props = {
  onChangeMarkdown: (data: string) => void;
  markdown: string;
};
export const ArticleInput = (props: props) => {
  const articleSchema = z.object({
    articleTitle: z.string().min(5, {
      message: "Should be longer than 5, need to make title more appealing",
    }),
    articleDescription: z
      .string()
      .min(25, { message: "Should be able to description what you write" }),
    articleImage: z.string().url(),
    articleBody: z
      .string()
      .min(5, { message: "The article Body should have some information" }),
    articleType: z.enum(["project", "blog"]),
  });
  const form = useForm<z.infer<typeof articleSchema>>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      articleImage: "",
      articleType: "blog",
      articleTitle: "",
      articleBody: "",
      articleDescription: "",
    },
  });
  function onChangeValue(e: React.ChangeEvent<HTMLTextAreaElement>) {
    props.onChangeMarkdown(e.target.value);
  }
  async function createArticle(data: z.infer<typeof articleSchema>) {
    const result = await axios
      .post("/api/articles", data)
      .then((result) => result.data);
    console.log(result);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(createArticle)}>
          <FormField
            control={form.control}
            name="articleTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Article Title</FormLabel>
                <FormControl>
                  <Input placeholder="The best day of my life :)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="articleDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Article Description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="So my day begins like this..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="articleImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Article Image</FormLabel>
                <FormControl>
                  <Input placeholder="..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="articleType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Article Type</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} required={true}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your Type of article" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Type</SelectLabel>
                        <SelectItem value="blog">blog</SelectItem>
                        <SelectItem value="project">project</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="articleBody"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Article Body</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    onChange={(e) => {
                      onChangeValue(e);
                      field.onChange(e.target.value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="mt-5">Create Article</Button>
        </form>
      </Form>
    </div>
  );
};
