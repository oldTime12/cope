import Hero from "@/app/components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "主页",
  icons:{
    
  }
};

export default function Home() {
  return (
    <div>
      <Hero
        imgUrl={"/home.jpg"}
        altTxt="home pic"
        content="Let's make something great together."
      />
    </div>
  );
}
