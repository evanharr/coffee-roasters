"use client"
import { useEffect, useState, useRef } from "react"

import { SubscriptionAccordion } from "@/components/ui/subscriptionAccordian"
import { Button } from "@/components/ui/button";
import { OrderModal } from "@/components/orderModal";
import FormSchema from './constants';

const SubscribeLinks = [
    {
        id: "1",
        title: "Preferences",
    },
    {
        id: "2",
        title: "Bean Type",
    },
    {
        id: "3",
        title: "Quantity",
    },
    {
        id: "4",
        title: "Grind Option",
    },
    {
        id: "5",
        title: "Deliveries",
    },
]

const PreferenceOptions =[
    {
        title: "Capsule",
        text: "Compatible with Nespresso systems and similar brewers",
    },
    {
        title: "Filter",
        text: "For pour over or drip methods like Aeropress, Chemex, and V60",
    },
    {
        title: "Espresso",
        text: "Dense and finely ground beans for an intense, flavorful experience",
    },
]

const BeanType = [
    {
        title: "Single Origin",
        text: "Distinct, high quality coffee from a specific family-owned farm",
    },
    {
        title: "Decaf",
        text: "Just like regular coffee, except the caffeine has been removed",
    },
    {
        title: "Blended",
        text: "Combination of two or three dark roasted beans of organic coffees",
    },
]

const Quantity = [
    {
        title: "250g",
        text: "Perfect for the solo drinker. Yields about 12 delicious cups.",
    },
    {
        title: "500g",
        text: "Perfect option for a couple. Yields about 40 delectable cups.",
    },
    {
        title: "1000g",
        text: "Perfect for offices and events. Yields about 90 delightful cups.",
    },
]

const GrindOptions = [
    {
        title: "Wholebean",
        text: "Best choice if you cherish the full sensory experience",
    },
    {
        title: "Filter",
        text: "For drip or pour-over coffee methods such as V60 or Aeropress",
    },
    {
        title: "Cafetiére",
        text: "Course ground beans specially suited for french press coffee",
    },
]

const Deliveries = [
    {
        title: "Every week",
        text: "$7.20 per shipment. Includes free first-class shipping.",
    },
    {
        title: "Every 2 weeks",
        text: "$9.60 per shipment. Includes free priority shipping.",
    },
    {
        title: "Every month",
        text: "$12.00 per shipment. Includes free priority shipping.",
    },
]

export const SubscribeSellection = () => {
    const planSelectionRef = useRef<HTMLDivElement>(null);
    const [formState, setFormState] = useState(FormSchema.parse({ accordians: [] }));
    const [openAccordions, setOpenAccordions] = useState<string[]>([]);
    const [currentAccordion, setCurrentAccordion] = useState<string | null>(null);
    const [disableGrindOption, setDisableGrindOption] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    //Toggle Accordions 
    const handleToggleAccordion = (accordionId: string) => {
        
        setOpenAccordions((prevOpenAccordions) => {
          if (prevOpenAccordions.includes(accordionId)) {
            // If accordion is already open, close it
            return prevOpenAccordions.filter((id) => id !== accordionId);
          } else {
            // If accordion is closed, open it
            setCurrentAccordion(accordionId);
            return [...prevOpenAccordions, accordionId];
          }
        });
      };
    
  
    //Update selection of Card option in formState
    const handleCardClick = (accordianId: string, cardTitle: string) => {
        //If selected Card is Capsule disable the Grind option and remove from formState
        if(accordianId === '1' && cardTitle === 'Capsule'){
            setDisableGrindOption(true);
            setFormState(prevState => {
                const updatedAccordians = formState.accordians.filter(accordion => accordion.accordianId !== "4");
                return {
                    ...prevState,
                accordians: updatedAccordians,
                }
              });
        }
        if(accordianId === '1' && cardTitle != 'Capsule'){
            setDisableGrindOption(false);
        }
        
        setFormState((prevFormState) => {
            // Update the selected card for the specified dropdown
            const updatedAccordians = prevFormState.accordians.map((dropdown) =>
            
                dropdown.accordianId === accordianId
                ? { ...dropdown, selectedCard: { cardTitle } }
                : dropdown
            );
                
                if(!updatedAccordians.some((dropdown) => dropdown.accordianId === accordianId)){
                    updatedAccordians.push({accordianId, selectedCard: {cardTitle}});
    
                }
            return { ...prevFormState, accordians: updatedAccordians};
            });

      };
      

    const isSubmitAllowed = formState.accordians.length === (formState.accordians.some(acc => acc.selectedCard?.cardTitle === 'Capsule') ? 4 : 5);

    const handleSubmit = () => {
        setIsModalOpen(true);        
    }

    //Generate Order Summary Text based off Card selection
    const generateText = (accordianId: string) => {
        const accordian = formState.accordians.find((acc) => acc.accordianId === accordianId);
        var text = accordian?.selectedCard || null;

        if(text === null){
            return "_____";
        }
        return text?.cardTitle;
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        if (planSelectionRef.current) {
            planSelectionRef.current.scrollIntoView({ behavior: 'smooth' });
          }
    }
   

  useEffect(() => {
    if (isModalOpen) {
      // Scroll to the top of the page when the modal is opened
      window.scrollTo({ top: 0}); // Use 'smooth' for smooth scrolling
    }
  }, [isModalOpen]);

    return (

        <div className ="flex w-full h-full xl:pl-[85px] xl:pr-[40px] gap-x-[125px]">
            <OrderModal isOpen={isModalOpen} onClose={handleCloseModal} modalText={generateText} grindOption={disableGrindOption}/>

            {/*Desktop Side Menu */}
            <div className="max-xl:hidden flex flex-col w-[400px] cursor-pointer">
                {SubscribeLinks.map((link,index) => (
                    <div key={index} onClick={()=>handleToggleAccordion(link.id)} className="flex gap-x-7 py-6 border-solid border-b-[1px] last:border-0 border-Grey">
                            
                            <h1 className="font-[fraunces] font-[900] text-[24px] leading-[32px] text-Grey">0{link.id}</h1>
                            <h1 className={`font-[fraunces] font-[900] text-[24px] leading-[32px] hover:opacity-60 ${currentAccordion === link.id ? "text-darkBlueGrey opacity-100" : "opacity-40" } ${link.title === 'Grind Option' && disableGrindOption ? "opacity-20" : ""} `}>{link.title}</h1>
                        
                    </div>
                ))}
      
            </div>
            <div className="block w-full h-full">
                <div ref={planSelectionRef} className="grid grid-rows-1 gap-y-[88px]">
                    
                    <div className="flex flex-col gap-y-14 ">

                        <SubscriptionAccordion id={"1"} title={"How do you drink your coffee?"} options={PreferenceOptions} onCardClick={handleCardClick} openAccordions ={openAccordions} onAccordionToggle={handleToggleAccordion} disabled={false}/>

                        <SubscriptionAccordion id={"2"} title={"What type of coffee"} options={BeanType} onCardClick={handleCardClick} openAccordions ={openAccordions} onAccordionToggle={handleToggleAccordion} disabled={false}/>

                        <SubscriptionAccordion id={"3"} title={"How much would you like?"} options={Quantity} onCardClick={handleCardClick} openAccordions ={openAccordions} onAccordionToggle={handleToggleAccordion} disabled={false}/>

                        <SubscriptionAccordion id={"4"} title={"Want us to grind them?"}  options={GrindOptions} onCardClick={handleCardClick} openAccordions ={openAccordions} onAccordionToggle={handleToggleAccordion} disabled={disableGrindOption}/>

                        <SubscriptionAccordion id={"5"} title={"How often should we deliver"} options={Deliveries} onCardClick={handleCardClick} openAccordions ={openAccordions} onAccordionToggle={handleToggleAccordion} disabled={false}/>

                        <div className="flex flex-col gap-y-2 py-8 md:py-7 px-6 md:px-11 lg:px-16 bg-[#2C343E] rounded-lg text-left cursor-default">
                        <p className="font-[barlow] font-[200] text-[16px] leading-[26px] text-Grey">ORDER SUMMARY</p>
                        
                        <h1 className="font-[fraunces] font-[900] text-[24px] leading-[40px] text-white tracking-[1.1px]">
                        "I drink my coffee using 
                        <span className="text-darkCyan"> {generateText("1")}</span>
                        , with a
                        <span className="text-darkCyan"> {generateText("2")} </span>
                        type of bean.
                        <span className="text-darkCyan"> {generateText("3")} </span>

                        {!disableGrindOption && (
                            <span>
                                ground ala  
                                <span className="text-darkCyan"> {generateText("4")}</span>
                            </span>
                        )}
                        , sent to me
                        <span className="text-darkCyan"> {generateText("5")}</span>
                        ."
                        </h1>

      
                        </div>

                        <div {...(isSubmitAllowed && {onClick: handleSubmit})} className="flex justify-center xl:justify-end ">
                            <Button children={"Create my plan!"} disabled={!isSubmitAllowed} width={217}/>
                        </div>

                    </div>
                      
                </div>

            </div>

        </div>
    )
}