import React from "react";
import Hero from "@/app/components/hero";

export default function Performance() {
  return (
    <div>
      <Hero
        imgUrl={"/performance.png"}
        altTxt="performance pic"
        content="AnyTime,Performance's ploblem is important."
      />
    </div>
  );
}
