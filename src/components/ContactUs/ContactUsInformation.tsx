import React from "react";

export const ContactUsInformation = (props: {}) => {
  return (
    <div>
      <h1 className="font-bold text-3xl">
        This is where you send me your words
      </h1>
      <p>
        Now don't try to spam the mails, be polite and please have a good reason
        to mail me. because Otherwise you will be blocked from my emails :3
      </p>
      <br />
      <h3 className="italic text-muted-foreground">
        I will be gladly to answer if you:
      </h3>
      <ol className="list-decimal">
        <li>ask about codes.</li>
        <li>ask about blogs.</li>
        <li>ask about projects.</li>
        <li>want to work with me.</li>
      </ol>
    </div>
  );
};
