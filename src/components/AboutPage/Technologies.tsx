import React from "react";
import { Container } from "../ui/Container";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export const Technologies = (props: {}) => {
  return (
    <div>
      <Container>
        <h1 className="font-bold text-3xl">
          Technologies That I have learnt over the years...
        </h1>
        <p>Here's a brief rundown of what I learnt through my Journey</p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Html, Css and Javascript</AccordionTrigger>
            <AccordionContent className="leading-7">
              This is the first three languages that I have learnt when I was in
              grade 10, aww I feel so nostalgic now. so I started coding when
              the pandemic ( Covid-19 ) kicked in, all schools had to learn from
              home, and I was so bored staying at home and studying online
              through google meet. I thought to myself "what if i learn
              something new ?",that's when I think about programming, with all
              the courses I had found online, it's pretty easy to learn with all
              the materials all can be found on the internet. HTML seems easy,
              which I didn't have much trouble with, not with CSS though. CSS IS
              still one of the hardest language to master, right now I am using
              a UI library (shadCN) to build this website, I don't really think
              I can build this beautiful website using only CSS haha. Now onto
              Javascript, the funny thing is I learn Python before Javascript
              since Python is a ultimate beginner language on youtube, but I
              kinda hate it simply because of its simple syntax, hard to read,
              and hard to implement python in something useful without having
              little knowledge. That's why I like Javascript better simply its
              syntax is pretty great, easier to understand because it's a little
              bit more structured, and I can see the results right away, that
              motivated me when I first learn Javascript
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Node.JS</AccordionTrigger>
            <AccordionContent className="leading-7">
              When I was a beginner, knowing I can create a server with ease
              made me so happy. Being able to create something on my own but
              sounds big like a server was a hude deal for me. This makes me so
              happy to learn programming and the cool thing is. Node.JS with
              expressJS was so easy that I built a simple application (MVC) with
              it. It's an E-commerce app I belived, Now I am trying my best to
              create better server that can scale well but pretty hard for now.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>React.JS</AccordionTrigger>
            <AccordionContent className="leading-7">
              Not gonna lie, the best library to create websites. But in the
              past, I rushed learning React.JS ( just to feel like a cool kid )
              and had faced consequences because of it. It was too hard when It
              was still using Class components, which is a hard thing to
              understand when I had no idea what OOP was. I learnt about 5-6
              months about it and I was so tired of learning React.js ,I just
              stops keeping programming because of React... I started to learn
              it again when I knew I had to study at IT university
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Tailwind.css</AccordionTrigger>
            <AccordionContent className="leading-7">
              Fast forwards 1 year later, I somehow was convinced by my father.
              He said that I had to go IT university, and because I did have
              experiences with programming before, I was like "why not?". And
              that's why I am here, and the next technology that I really love
              is Tailwind.css, it is so easy to style stuff. It makes me not
              scared of css anymore, and I now can product beautiful website
              with ease with designs
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Redis</AccordionTrigger>
            <AccordionContent className="leading-7">
              I'm not good with Redis for now ( will update this later ), I just
              learnt a little bit of syntax . Still a long way to go...
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Container>
    </div>
  );
};
