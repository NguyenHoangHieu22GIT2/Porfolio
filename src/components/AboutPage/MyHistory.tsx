import React from "react";
import { Container } from "../ui/Container";
import Image from "next/image";

export const MyHistory = (props: {}) => {
  return (
    <div className="mt-5">
      <Container>
        <div>
          <div className="text-center">
            <h1 className="font-bold text-[#5eead4] text-3xl"> About me</h1>
            <h3 className="text-muted-foreground italic">
              A journey to become a better me!
            </h3>
          </div>
          <div className="flex flex-col gap-5">
            <p>
              When I was 16, I was still just a young kid living in the
              pandemic. Being an introver, living at home everyday because of
              quarantine is one of the best thing that could ever happen to me!
              I didn't have to go to school, I didn't have to learn the old
              lessons, All I did was just to find a new hobby. That's when it
              came to my mind, Programming!
            </p>
            <div className="flex gap-3">
              <Image
                src={"/my-face2.jpeg"}
                alt="Hoang Hieu"
                width={300}
                height={300}
              />
              <p className="leading-9">
                Well the first Language I learnt was not a Programming Language,
                It was HTML, a hyper text Markup Language. Learning the Language
                was fun, because I had no idea how programming worked back at
                the day. Then I began to learn CSS so that I can fine-tune my
                website to look more appealing. Then I got stuck because they
                are so many effects that I want to learn. But back then, my
                skills weren't enough to dive deep. That's when I started to
                learn Bootstrap 4 The best library for me to style my website
                even faster and more appealing. Of course I didn't have the
                knowledge of designing. So the base design of Bootstrap had made
                my websites even better. When I made a lot of beautiful
                websites, I started to get curious at learning Javascript. My
                first programming Language ever, I was so hyped to learn what's
                a variable was, how a for-loop worked, if-else statements and
                much more. I got addicted to programming and I programmed every
                day, I woke up at 4am Everyday, programmed for 1 and a half hour
                then Went to school, When I came back to school, I hopped to
                computer and started to code from 1pm to 7pm. Every single day,
                repeat repeat repeat.
              </p>
            </div>
            <p>
              Then I got fed up, That's when I knew, I f*cked up. I programmed
              for too long, it burned down every single excitement from me to
              programming. Then I gave up because I had no interest in
              programming anymore. 1 and a half year later, somehow I chose IT
              to be my main study for the next 4 years in a university. My
              journey began again.
            </p>
            <p>
              Now Here I am, I have gone so far, learning a lot from my mistakes
              and trying to be a better person everyday!
            </p>
            <p>
              Hope my journey can motivate someone to keep going and never give
              up. But you deserve some rest once in a while. Don't burn out okay
              ?
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
