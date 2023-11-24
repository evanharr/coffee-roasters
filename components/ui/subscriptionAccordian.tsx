import Image from "next/image";
import { useState, useEffect } from "react"
import { Transition } from "@headlessui/react"
import { SubscriptionCard } from "./subscriptionCard";

import arrow from "../../public/assets/plan/desktop/icon-arrow.svg";

interface AccordianProps {
    id: string,
    title: string,
    options: {title:string; text: string}[],
    onCardClick: (id: string, cardTitle: string) => void,
    openAccordions: string[],
    onAccordionToggle: (accordionId: string) => void,
    disabled: boolean,

}
export const SubscriptionAccordion: React.FC<AccordianProps> = ({
    id,
    title,
    options,
    onCardClick,
    openAccordions,
    onAccordionToggle,
    disabled
    
}) => {
    const [selectedCard, setSelectedCard] = useState<string | null>(null);
    const isSelected = openAccordions.includes(id);

    //if Capsule option is selected, reset selected card, and close Grind Option accordion
    useEffect(() => {
        if(isSelected && disabled) {
            setSelectedCard(null);
            handleToggle();
        }
    })

    //add accordion id to array of openAccordions
    const handleToggle = () => {
        onAccordionToggle(id);
    };

    //set selected card, add accordion id and card title to zod formState
    const handleCardClick = (cardTitle: string) => {
        setSelectedCard(cardTitle);
        onCardClick(id, cardTitle);
      };

    return (
        <div className="flex flex-col w-full gap-y-14 ">

            <div {...(!disabled && {onClick: handleToggle})} className="flex w-full justify-between items-center cursor-pointer ">
                <h1 className={`font-[fraunces] font-[900] text-[24px] leading-[28px] md:text-[28px] md:leading-[48px] text-Grey ${disabled ? "opacity-50" : "opacity-100"}`}>{title}</h1>
                <div  className={`${isSelected ? "": "rotate-180"}`}>
                    <Image src={arrow} width={0} height={0} alt="icon-arrow" sizes="100vw" style={{width:"18px", height:"12px"}} />
                </div>
            </div>
            <Transition
            show={isSelected}
            enter="duration-500 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            >
                
                <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 xl:gap-x-[24px] md:gap-x-[10px] gap-y-0 max-md:gap-y-[16px] ">


                    {options.map((card,index)=> (
                        <SubscriptionCard key={index} title={card.title} text={card.text} selected={selectedCard === card.title} onCardClick={handleCardClick}/>
                    ))}

                </div>
                
            </Transition>

        </div>
    )
}