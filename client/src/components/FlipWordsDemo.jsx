import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Anytime", "Anywhere", "Anyhow"];

  return (
    <div className="h-[20rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-black">
        Study <FlipWords words={words} /> <br />
        wherever you are!
      </div>
    </div>
  );
}
