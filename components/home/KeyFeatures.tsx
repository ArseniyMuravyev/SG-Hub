import { FC } from "react";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { GlareCard } from "../ui/GlareCard";
import { cardData } from "@/data";

export const KeyFeatures: FC = () => {
  return (
    <section>
      <TextGenerateEffect
        words="What are the Key Features of SG Hub?"
        className="heading mt-8"
      />
      <div className="flex gap-8 md:gap-16 items-center mt-8 md:mt-16">
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
      </div>
    </section>
  );
};
