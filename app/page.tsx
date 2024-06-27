import { HeroParallax } from "@/components/ui/HeroParallax";
import { featureData } from "@/data";
import { KeyFeatures } from "@/components/home/KeyFeatures";
import { GettingStarted } from "@/components/home/GettingStarted";

export default function Home() {
  return (
    <>
      <HeroParallax products={featureData} />
      <KeyFeatures />
      <GettingStarted />
    </>
  );
}
