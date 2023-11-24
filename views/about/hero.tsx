"use client"

import Link from "next/link";
import { Button } from "../../components/ui/button";

export const Hero = () => {

    return (
        <div className=" w-full lg:h-[450px] md:h-[400px] sm:h-[400px] xl:bg-desktopAboutHero md:bg-tabletAboutHero sm:bg-mobileAboutHero bg-cover bg-no-repeat rounded-lg">
            <div className="block w-full py-28 lg:pl-[85px] md:pl-[58px] sm:pl-[24px] ">
                <h1 className="font-[fraunces] font-[900] text-lightCream lg:text-[72px] lg:leading-[72px] md:text-[48px] md:leading-[48px] sm:text-[40px] sm:leading-[40px]">About Us</h1>
                <p className="font-[barlow] font-[400] text-[15px] leading-[25px] text-lightCream py-8 xl:w-[35%] md:w-[65%]">Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
            </div>
        </div>
    )
}