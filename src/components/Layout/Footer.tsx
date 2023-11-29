import React from "react";
import { Container } from "../ui/Container";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export const Footer = (props: {}) => {
  return (
    <footer className="my-3">
      <Container>
        <div className="flex gap-5 lg:flex-row flex-col md:mb-0 justify-around [&>*]:basis-1/2">
          <div className="flex justify-around ">
            <nav>
              <h3 className="font-bold ">General</h3>
              <ul className="flex flex-col gap-2">
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
              </ul>
            </nav>
            <nav>
              <h3 className="font-bold">Socia Media</h3>
              <ul>
                <li className="hover:text-blue-300 w-full transition ">
                  <Link
                    className="w-full block"
                    href={"https://www.facebook.com/hoanghieufro/"}
                  >
                    Facebook
                  </Link>
                </li>
                <li className="hover:text-blue-300 w-full transition ">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>Zalo</TooltipTrigger>
                      <TooltipContent>+84-0917077967</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
                <li className="hover:text-blue-300 w-full transition ">
                  <Link
                    className="w-full block"
                    href={"https://github.com/NguyenHoangHieu22GIT2"}
                  >
                    Github
                  </Link>
                </li>
              </ul>
            </nav>
            <nav>
              <h3 className="font-bold">Extra</h3>
              <ul>
                <li className="hover:text-blue-300 w-full transition ">
                  <Link className="w-full block" href={"/faqs"}>
                    FAQs
                  </Link>
                </li>
                <li className="hover:text-blue-300 w-full transition ">
                  <Link className="w-full block" href={"/changelogs"}>
                    Changelogs
                  </Link>
                </li>
                <li className="hover:text-blue-300 w-full transition ">
                  <Link className="w-full block" href={"/resume"}>
                    Resume
                  </Link>
                </li>
                <li className="hover:text-blue-300 w-full transition ">
                  <Link className="w-full block" href={"/resume"}>
                    Future
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:text-left text-center">
            <h1 className="uppercase">NewsLetter</h1>
            <p>Get new articles delivered to your inbox!</p>
            <div className="flex gap-3">
              <Input type="email" required placeholder="Your Email!" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
