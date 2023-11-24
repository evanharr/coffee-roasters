"use client"

import Image from "next/image";
import { Hero } from "../views/home/hero";
import { Collection } from "../views/home/collection";
import { Choose } from "../views/home/chooseUs";
import { HowItWorks } from "../views/home/howItWorks";

export default function Home(){
    return(
        <div className="flex flex-col lg:px-[80px] lg:py-2 md:px-[40px] sm:px-[24px]  w-full min-h-screen justify-between">
            
            <section className="block">
                <Hero />
            </section>
            
            <section className="block pt-40">
                <Collection />
            </section>

            <section className="block pt-40">
                <Choose />
            </section>

            <section className="block py-40">
                <HowItWorks />
            </section>
            
        </div>
        
    )
}