import Bio from "@/components/Bio/page";
import Info from "@/components/Info/page";
import Skill from "@/components/Skill/page";
import WhatIDo from "@/components/WhatIDo/page";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Info />
      <Bio />
      <WhatIDo />
      <Skill />
    </>
  );
}
