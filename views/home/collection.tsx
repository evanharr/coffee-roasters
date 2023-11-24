"use client"
import { Coffee } from "../../components/ui/coffee";
import danche from "../public/assets/home/desktop/image-danche.png";
import piccollo from "../public/assets/home/desktop/image-piccollo.png";
import espresso from "../public/assets/home/desktop/image-gran-espresso.png";
import planalto from "../public/assets/home/desktop/image-planalto.png";

const Collections = [
    {
        title: "Gran Espresso",
        text: "Light and flavorful blend with cocoa and black pepper for an intense experience",
        url: "/assets/home/desktop/image-gran-espresso.png",

    },
    {
        title: "Planalto",
        text: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
        url: "/assets/home/desktop/image-planalto.png",
    },
    {
        title: "Picollo",
        text: "Mild and smooth blend featuring notes of toasted almond and dried cherry",
        url: "/assets/home/desktop/image-piccollo.png",
    },
    {
        title: "Danche",
        text: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
        url: "/assets/home/desktop/image-danche.png",
    }
]
export const Collection = () => {
    return (
        <div className="flex w-full h-full justify-center items-center">
            
            <div className="block relative w-[90%]">

                <div className="absolute w-full h-32 bg-gradient-to-t from-[#FEFCF7] to-Grey bg-clip-text text-transparent pt-6">
                    <h1 className="text-center font-[fraunces] font-[900] text-[40px] md:text-[96px] lg:text-[180px] leading-[72px] ">
                    our collection
                    </h1>
                </div>

                <div className="relative grid grid-rows-4 lg:grid-rows-1 lg:grid-cols-4 justify-center items-center gap-14 lg:gap-0 md:pt-20 sm:pt-32">
            
                    {Collections.map((collection, index)=> (
                        
                        <div key={index} className="">
                            <Coffee title={collection.title} text={collection.text} image={collection.url}/>
                        </div>
                        
                    ))}

                </div>
           </div>
  
        </div>

    )
}