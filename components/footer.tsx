"use client"
import Image from "next/image";
import Link from "next/link";

import Logo from "../public/assets/shared/desktop/logo.svg";
import facebook from "../public/assets/shared/desktop/icon-facebook.svg";
import twitter from "../public/assets/shared/desktop/icon-twitter.svg";
import instagram from "../public/assets/shared/desktop/icon-instagram.svg";
import FooterLogo  from "./ui/icons/footerLogo";
import FacebookIcon from "./ui/icons/facebook";
import TwitterIcon from "./ui/icons/twitter";
import InstagramIcon from "./ui/icons/instagram";



export const Footer = () => {
    return (
        <footer className=" min-h-[120px] top-[-100vh] flex flex-wrap max-xl:flex-col sm:gap-12 items-center justify-between lg:mx-[80px] lg:px-[80px] lg:py-12 md:mx-[40px] md:px-[40px] md:py-14  sm:mx-6  sm:py-[55px] mb-[72px] bg-[#2C343E]">
            
            <div>
                <FooterLogo />
            </div>
            
            <ul className="list-none flex flex-1 max-md:flex-col max-md:gap-6 items-center  ">
                <li className="md:pr-8">
                    <Link href="/" className="font-[Barlow] font-[700] text-[15px] leading-[15px] text-Grey hover:text-lightCream hover:cursor-pointer">Home</Link>
                </li>
                
                <li className="md:pr-8">
                    <Link href="/about" className="font-[Barlow] font-[700] text-[15px] leading-[15px] text-Grey hover:text-lightCream hover:cursor-pointer">About</Link>
                </li>

                <li className="">
                    <Link href="/subscribe" className="font-[Barlow] font-[700] text-[15px] leading-[15px] text-Grey hover:text-lightCream hover:cursor-pointer">Create Your Plan</Link>
                </li>
            </ul>
            

            <div className="flex gap-6 place-items-center justify-center cursor-pointer">
                <FacebookIcon />
                <div className="pt-1">
                <TwitterIcon />
                </div>
               
                <InstagramIcon />
            </div>

            
           

        </footer>
    )
}