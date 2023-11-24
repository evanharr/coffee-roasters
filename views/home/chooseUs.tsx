"use client"
import { ChooseCard } from "@/components/ui/chooseCard";


const ChooseCards = [
    {
        title:"Best quality",
        text: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
        url: "/assets/home/desktop/icon-coffee-bean.svg",
    },
    {
        title:"Exclusive benefits",
        text: "Special offers and swag when you subscribe, including 30% off your first shipment.",
        url: "/assets/home/desktop/icon-gift.svg",
    },
    {
        title:"Free shipping",
        text: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
        url: "/assets/home/desktop/icon-truck.svg",
    },
]
export const Choose = () => {
    return (
        <div className="block w-full h-full relative ">

            <div className="block  absolute md:h-[577px] sm:h-[902px] bg-[#2C343E] rounded-lg  ">

                <div className="block w-full h-full  ">
                    <div className="flex flex-col justify-center items-center gap-8 pt-24">

                        <h2 className="font-[fraunces] font-[900] lg:text[40px] lg:leading-[40px] md:text-[32px] md:leading-[48px] sm:text-[28px] leading-[28px] text-lightCream">Why choose us?</h2>
                        <p className="w-[95%] md:w-[80%] lg:w-[41%] font-[barlow] font-[400] text-[15px] leading-[25px] text-lightCream text-center opacity-80">
                            A large part of our role is choosing which particular coffees will be featured 
                            in our range. This means working closely with the best coffee growers to give 
                            you a more impactful experience on every level.
                        </p>

                    </div>
                </div>



         
            </div>

            <div className="relative w-[85%] m-auto grid lg:grid-cols-3 lg:grid-rows-1 md:grid-rows-3 sm:grid-rows-3 gap-[30px] md:pt-80 pt-80 ">
                {ChooseCards.map((card,index) => (
                    
                    <ChooseCard key={index} title={card.title} text={card.text} image={card.url}/>
                    
                ))}
             </div>




        </div>
    )
}