
import Image from "next/image";

import desktopImageQuality from "../../public/assets/about/desktop/image-quality.jpg";
import tabletImageQuality from "../../public/assets/about/tablet/image-quality.jpg";
import mobileImageQuality from "../../public/assets/about/mobile/image-quality.jpg";

export const Quality = () => {
    return (
        <div className="flex width-full lg:h-[475px] sm:h-full">
            
            <div className="relative block w-full md:px-20 px-7 lg:bg-desktopQuality md:bg-tabletQuality sm:bg-mobileQuality rounded-lg">
                <div className="flex flex-col gap-8 w-full xl:w-[50%] xl:py-20  md:pt-[220px] pb-16 pt-36 xl:text-left text-center">
                    <h1 className="font-[fraunces] font-[900] lg:text-[40px] md:text-[32px] md:leading-[48px] text-[28px] leading-[28px] text-lightCream">Uncompromising quality</h1>
                    <p className="font-[barlow] font-[400] text-[15px] leading-[25px] text-lightCream">Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
                </div>
            </div>

            <div className="xl:block sm:hidden absolute w-[30%] mt-[-88px] xl:ml-[750px]">
                <Image src={desktopImageQuality} width={0} height={0} alt="Image Commitment" sizes="100vw" unoptimized style={{width:"100%", height:"100%",borderRadius:"8px"}}/>
            </div>
            <div  className="xl:hidden lg:block sm:hidden absolute w-[60%] mt-[-160px] ml-32">
                <Image src={tabletImageQuality} width={0} height={0} alt="Image Commitment" sizes="100vw" unoptimized style={{width:"100%", height:"100%",borderRadius:"8px"}}/>
            </div>
            <div className="lg:hidden md:block sm:hidden absolute w-[70%] mt-[-160px] ml-20 ">
                <Image src={tabletImageQuality} width={0} height={0} alt="Image Commitment" sizes="100vw" unoptimized style={{width:"100%", height:"100%",borderRadius:"8px"}}/>
            </div>

            <div className="md:hidden sm:block absolute w-[74%] m-auto mt-[-80px] ml-[24px]">
                <Image src={mobileImageQuality} width={0} height={0} alt="Image Commitment" sizes="100vw" unoptimized style={{width:"100%", height:"100%",borderRadius:"8px"}}/>
            </div>

            

            

        </div>
    )
}