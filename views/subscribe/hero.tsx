"use client"

import Link from "next/link";

export const Hero = () => {

    return (
        <div className="w-full lg:h-[450px] md:h-[400px] sm:h-[400px] xl:bg-desktopPlanHero md:bg-tabletPlanHero sm:bg-mobilePlanHero bg-no-repeat bg-cover rounded-lg">
            <div className="block w-full py-32 lg:pl-[85px] md:pl-[58px] sm:px-[24px] text-center md:text-left">
                <h1 className="font-[fraunces] font-[900] text-lightCream lg:text-[72px] lg:leading-[72px] md:text-[48px] md:leading-[48px] sm:text-[40px] sm:leading-[40px]">Create a plan</h1>
                <p className="font-[barlow] font-[400] text-[15px] leading-[25px] text-lightCream py-8 xl:w-[35%] md:w-[65%]">Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.</p>
            </div>
        </div>
    )
}