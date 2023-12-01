import { Card } from "@/app/components/card";
import Navbar from "@/app/components/navbar";
import React from "react";

const LandingPage = () => {
  return (
    <main>
      <Navbar />
      <Card className="w-full bg-palmgreen rounded-2xl relative p-12">
        <Card.Body>
          <section className="inline-flex">
            <h1 className="font-extrabold text-[64px]">
              Buy your
              <br />
              dream plants
            </h1>
          </section>
        </Card.Body>
      </Card>
    </main>
  );
};

export default LandingPage;
