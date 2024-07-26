import { FaTelegramPlane } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { OuterLink } from "../common/OuterLink";

export const Hero = () => {
  return (
    <section className="section antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
      <Header />
    </section>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 left-0 top-0">
      <TextGenerateEffect
        words="The Only Productive Social Network"
        className="mt-8 text-left text-white font-bold text-4xl md:text-5xl"
      />
      <TextGenerateEffect
        className="text-base md:text-xl mt-8 text-neutral-200"
        words="Join SG Hub: Connect with Hard-Working Achievers and Reach Your Goals Together"
      ></TextGenerateEffect>
      <div className="mt-8 flex items-center gap-4">
        <div className="flex items-center">
          <OuterLink
            link="https://instagram.com/sgclub.sg/"
            icon={<LuInstagram />}
          />
          <OuterLink
            link="https://tg.me/areniyMuravyev"
            icon={<FaTelegramPlane />}
          />
        </div>
        <p className="uppercase font-light text-white">
          read more about us online
        </p>
      </div>
    </div>
  );
};
