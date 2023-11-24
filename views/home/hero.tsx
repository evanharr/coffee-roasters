"use client"

import { useRouter } from 'next/navigation';
import { Button } from "../../components/ui/button";

export const Hero = () => {
    const router = useRouter();
    return (
        <div className=" w-full h-[500px] lg:h-[600px] xl:bg-desktopHero md:bg-tabletHero sm:bg-mobileHero bg-cover bg-no-repeat rounded-lg">
        <div className="block w-full py-20 px-[24px] md:pl-[58px] lg:pl-[85px] ">
            <h1 className="font-[fraunces] font-[900] text-lightCream text-[40px] leading-[40px] md:text-[48px] md:leading-[48px] lg:text-[72px] lg:leading-[72px] max-md:text-center" >Great coffee <br /> made simple.</h1>
            <p className="py-8 xl:w-[35%] md:w-[65%] font-[barlow] font-[400] text-[15px] leading-[25px] max-md:text-center text-lightCream opacity-80">  Start your mornings with the world’s best coffees. Try our expertly curated artisan 
                 coffees from our best roasters delivered directly to your door, at your schedule.
            </p>
            <div onClick={()=> router.push('/subscribe')} className="flex py-4 lg:py-10 max-md:justify-center">
                <Button children="Create your plan" disabled={false} width={217}/>
            </div>

        </div>
        </div>
    )
}