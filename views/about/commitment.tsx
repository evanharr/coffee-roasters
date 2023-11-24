"use client"
import Image from "next/image";

import desktopImageCommitment from "../../public/assets/about/desktop/image-commitment.jpg";
import tabletImageCommitment from "../../public/assets/about/tablet/image-commitment.jpg";
import mobileImageCommitment from "../../public/assets/about/mobile/image-commitment.jpg";
export const Commitment = () => {
    return (
        <div className="w-full h-full flex max-md:flex-col lg:px-20 lg:gap-32 md:gap-[70px] gap-12 justify-center items-center">
            
            <div className="w-[40%] h-full lg:block sm:hidden ">
                <Image src={desktopImageCommitment} width={0} height={0} alt="Image Commitment" unoptimized sizes="100vw" style={{width:"100%", height:"100%",borderRadius:"8px"}}/>
            </div>
            <div className="w-[40%] h-full lg:hidden md:block sm:hidden ">
                <Image src={tabletImageCommitment} width={0} height={0} alt="Image Commitment" unoptimized sizes="100vw" style={{width:"100%", height:"100%",borderRadius:"8px"}}/>
            </div>
            <div className="w-[100%] h-full md:hidden sm:block">
                <Image src={mobileImageCommitment} width={0} height={0} alt="Image Commitment" unoptimized sizes="100vw" style={{width:"100%", height:"100%",borderRadius:"8px"}}/>
            </div>
            <div className="md:w-[50%] flex flex-col text-center md:text-left gap-y-8">
                <h1 className="font-[fraunces] font-[900] lg:text-[40px] text-[32px] leading-[48px] text-darkGreyBlue">Our commitment</h1>
                <p className="font-[barlow] font-[400] text-[15px] leading-[25px] text-darkGreyBlue">We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
            </div>
        </div>
    )
} 