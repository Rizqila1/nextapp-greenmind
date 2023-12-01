import React from "react";

export const Card = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={`card color rounded-[30px] inline-block ${props.className}`}
    >
      {props.children}
    </section>
  );
};

const Title = (props: { children: React.ReactNode; className?: string }) => {
  return (
    <section className={`card ${props.className}`}>{props.children}</section>
  );
};

const Body = (props: { children: React.ReactNode; className?: string }) => {
  return <section className={`${props.className}`}>{props.children}</section>;
};

Card.Title = Title;
Card.Body = Body;
