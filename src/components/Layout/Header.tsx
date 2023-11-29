"use client";

import connectMongo from "@/utils/connectMongodb";
import userDocument from "@/models/User";
import { User } from "@/type/User";
import { Container } from "../ui/Container";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { GiUnstableProjectile } from "react-icons/gi";
import { BiLogoBlogger } from "react-icons/bi";
import { Input } from "../ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { HiBars3 } from "react-icons/hi2";
import { FiSun } from "react-icons/fi";
import { PiMoonStars } from "react-icons/pi";
import { useTheme } from "next-themes";
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
import { useToast } from "../ui/use-toast";
import { useUserSession } from "@/utils/store";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
export default function Header(_props: {}) {
  const { setBossId, bossId } = useUserSession();
  const { toast } = useToast();
  const userSchema = z.object({
    username: z.string(),
    password: z.string(),
  });

  type userType = z.infer<typeof userSchema>;

  const form = useForm<userType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function submit(data: userType) {
    try {
      const result: AxiosResponse = await axios
        .post("/api/auth", data)
        .then((result) => result);

      if (result.status >= 500) {
        throw new Error(result.data);
      }
      if (typeof result.data !== "object") {
        return toast({
          title: "Login failed!",
          description: result.data,
        });
      }
      sessionStorage.setItem("bossId", result.data);
      setBossId(result.data);
      setOpenDialog(false);
      toast({
        title: "Login successfully",
        description: "You are hoang hieu, the best guy ever!",
      });
    } catch (error: any) {
      const anError: AxiosResponse = error;
      toast({
        title: "Login failed!",
        description: error.response.data,
      });
    }
  }

  const { theme, setTheme } = useTheme();
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <header className="py-2 z-50 dark:bg-slate-700/70 sticky top-0 bg-slate-100/70 backdrop-blur-lg">
      <Container>
        <div className="flex justify-between items-center">
          <main>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Avatar>
                    <AvatarImage src="/avatar.jpeg" />
                    <AvatarFallback>Hoang Hieu</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>Hoang Hieu</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </main>
          {/* For Phones */}
          {/* For Computer */}
          <nav className="hidden md:block">
            <ul className="flex gap-7 text-xl ">
              <li className="hover:text-blue-300 transition ">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:text-blue-300 transition ">
                <Link href={"/about"}>About</Link>
              </li>
              <li className="hover:text-blue-300 transition ">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Link href={"/articles"}>Articles</Link>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <div className="flex items-stretch gap-2 [&>*]:basis-1/2">
                      <Link
                        href="/articles/projects"
                        className="flex  h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b dark:from-slate-700/50 dark:to-black/70 from-slate-100/50 to-slate-200  p-6 no-underline outline-none focus:shadow-md"
                      >
                        <GiUnstableProjectile />
                        {/* <Icons.logo className="h-6 w-6" /> */}
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Projects
                        </div>
                        <p className="text-sm leading-tight  text-muted-foreground">
                          All my projects and source codes
                        </p>
                      </Link>
                      <Link
                        href="/articles/blogs"
                        className="flex  h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b dark:from-slate-700/50 dark:to-black/70 from-slate-100/50 to-slate-200  p-6 no-underline outline-none focus:shadow-md"
                      >
                        <BiLogoBlogger />
                        {/* <Icons.logo className="h-6 w-6" /> */}
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Blogs
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          My life in a nutshell
                        </p>
                      </Link>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </li>
              <li className="hover:text-blue-300 transition ">
                <Link href={"/contact-us"}>Contact Us</Link>
              </li>
              {bossId && (
                <li className="hover:text-blue-300 transition ">
                  <Link href={"/create-article"}>Create Article</Link>
                </li>
              )}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            {!bossId && (
              <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogTrigger asChild>
                  <Button variant="outline">Login</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Prove yourself</DialogTitle>
                    <DialogDescription>
                      Login to have all access of the website
                    </DialogDescription>
                  </DialogHeader>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(submit)}>
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Username</FormLabel>
                              <FormControl>
                                <Input placeholder="Username" {...field} />
                              </FormControl>
                              <FormDescription>
                                The name you always use.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Password</FormLabel>
                              <FormControl>
                                <Input placeholder="Password" {...field} />
                              </FormControl>
                              <FormDescription>
                                The Password you always use.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <Button type="submit"> Login</Button>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            )}
            <div className="md:hidden block">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant={"outline"}>
                    <HiBars3 />
                  </Button>
                </SheetTrigger>
                <SheetContent className="text-center">
                  <SheetHeader>Where do you want to go ?</SheetHeader>
                  <SheetDescription>
                    All the contents are await...
                  </SheetDescription>
                  <ul className="text-3xl mt-5 flex flex-col gap-5">
                    <li className="hover:text-blue-300 w-full transition ">
                      <Link className="w-full block" href={"/"}>
                        Home
                      </Link>
                    </li>
                    <li className="hover:text-blue-300 w-full transition ">
                      <Link className="w-full block" href={"/about"}>
                        About
                      </Link>
                    </li>
                    <li className="hover:text-blue-300 w-full transition ">
                      <Link className="w-full block" href={"/articles"}>
                        Articles
                      </Link>
                    </li>
                    <li className="hover:text-blue-300 w-full transition ">
                      <Link className="w-full block" href={"/contact-us"}>
                        Contact Us
                      </Link>
                    </li>
                    {bossId && (
                      <li className="hover:text-blue-300 w-full transition ">
                        <Link className="w-full block" href={"/create-article"}>
                          Create Article
                        </Link>
                      </li>
                    )}
                  </ul>
                </SheetContent>
              </Sheet>
            </div>
            <Button
              className={
                theme === "light"
                  ? "bg-slate-200 hover:bg-slate-300 text-black"
                  : "bg-slate-800 hover:bg-slate-700 text-white"
              }
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <FiSun /> : <PiMoonStars />}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
