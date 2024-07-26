import { FC } from "react";
import { GlareCard } from "../ui/GlareCard";
import { cardData } from "@/data";

export const KeyFeatures: FC = () => {
  return (
    <section className="section">
      <h2 className="heading">What are the Key Features of SG Hub?</h2>
      <ul className="w-full flex flex-col lg:flex-row gap-8 md:gap-16 items-center justify-center mt-8 md:mt-16">
        {cardData.map((card) => (
          <GlareCard
            className="flex flex-col gap-3 justify-center items-center px-3"
            key={card.title}
          >
            {card.icon}
            <h3 className="text-xl md:text-2xl font-bold text-purple text-center">
              {card.title}
            </h3>
            <p className="text-center">{card.description}</p>
          </GlareCard>
        ))}
      </ul>
    </section>
  );
};
