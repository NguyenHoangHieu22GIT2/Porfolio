import React from "react";
import { Container } from "../ui/Container";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export const Introduction = (props: {}) => {
  return (
    <section className="mt-20">
      <Container>
        <div className="flex gap-3  items-center">
          <div className="basis-2/3">
            <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-xl  font-bold">
              I'm <span className="text-[#14b8a6]">Hoang Hieu</span>, A
              developer With passion to teach people around the world.
            </h1>
          </div>
          <div className="basis-1/3">
            <Image
              src="/avatar.jpeg"
              className="rounded-full border-2 border-slate-800 hover:shadow-2xl transition"
              alt="Avatar"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="flex gap-3">
          <Link
            className="border px-5 py-2 rounded-lg bg-muted/70 hover:bg-muted transition"
            href={"/articles"}
          >
            Read Articles
          </Link>
          <Link className="px-5 py-2 rounded-lg " href={"/articles"}>
            More about me
          </Link>
        </div>
      </Container>
    </section>
  );
};
