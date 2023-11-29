"use client";
import { ContactUsForm } from "@/components/ContactUs/ContactUsForm";
import { ContactUsInformation } from "@/components/ContactUs/ContactUsInformation";
import { Layout } from "@/components/Layout/Layout";
import { Container } from "@/components/ui/Container";
import React, { Fragment } from "react";

export default function ContactUsPage() {
  return (
    <Fragment>
      <div className="mt-5">
        <Container>
          <div className="flex gap-6 [&>*]:basis-1/2">
            <ContactUsInformation />
            <ContactUsForm />
          </div>
        </Container>
      </div>
    </Fragment>
  );
}
