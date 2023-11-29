import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Container } from "../ui/Container";
import Link from "next/link";
import { LinkButton } from "../ui/LinkButton";

export const Newsletter = (props: {}) => {
  return (
    <div className="">
      <Container>
        <Card className="flex md:flex-row flex-col shadow-lg px-10 py-6 items-center bg-[#1f2937] dark:bg-[#becada] dark:text-black text-white lg:justify-between">
          <CardHeader>
            <CardTitle>Updates Delivered to your mails!</CardTitle>
            <CardDescription>
              All the posts relevant to me, coding and tips will be all
              delivered to you in seconds.
            </CardDescription>
            <i>No spam - Unsubscribe at any time !</i>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-2">
              <Input type="email" required className="w-full border-2" />
              <Button className="bg-[#6a4cbd] text-white hover:bg-[#a56ffa]">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};
