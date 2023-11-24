"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Logo from "../public/assets/shared/desktop/logo.svg";
import hamBurger from "../public/assets/shared/mobile/icon-hamburger.svg";
import hamBurgerClose from "../public/assets/shared/mobile/icon-close.svg";


export const NavBar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    return (
        <nav className="flex flex-wrap w-full items-center justify-between mx-auto lg:px-[80px] lg:pt-[50px] md:p-[40px] sm:px-[24px] sm:py-[32px]">
            {/*Logo*/}
            <div>
                <Image src={Logo} width={0} height={0} alt="Logo" sizes="100vw" style={{width: '100%', height: '100%'}}/>
            </div>

            {/*Desktop and Tablet Nav */}
            <ul className="list-none md:flex flex-1 hidden justify-end items-center ">
                <li className="pr-8">
                    <Link href="/" className="font-[Barlow] font-[700] text-[15px] leading-[15px] text-Grey hover:text-darkGreyBlue hover:cursor-pointer">Home</Link>
                </li>
                
                <li className="pr-8">
                    <Link href="/about" className="font-[Barlow] font-[700] text-[15px] leading-[15px] text-Grey hover:text-darkGreyBlue hover:cursor-pointer">About</Link>
                </li>

                <li className="">
                    <Link href="/subscribe" className="font-[Barlow] font-[700] text-[15px] leading-[15px] text-Grey hover:text-darkGreyBlue hover:cursor-pointer">Create Your Plan</Link>
                </li>
            </ul>

            {/*hamBurger Icon */}
            <div className={`${!navOpen ? "md:hidden flex flex-1 justify-end items-center": "hidden"}`}>
                <Image src={hamBurger} width={16} height={15} alt="menu" className="object-contain cursor-pointer" onClick={() => setNavOpen((prev) => !prev)} />
            </div>

            {/*hamBurgerClose Icon */}
            <div className={`"md:hidden block w-full fixed z-10 transform top-[38px] right-[0px] ease-in-out transition-all duration-1000" ${navOpen ? "translate-x-[0px]" : "translate-x-full"}`}>
                <Image src={hamBurgerClose} width={16} height={15} alt="menu-close" onClick={() => setNavOpen(false)} className="cursor-pointer absolute right-6"/>
            </div>
            <div className={`"md:hidden block  w-full h-full fixed z-10 bg-gradient-to-t from-transparent to-lightCream to-[70%] transform mt-[88px] top-0 right-0 ease-in-out transition-all duration-1000" ${navOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-center place-items-center text-center">

                
                <ul className="list-none ">
                    <li className="pt-16">
                        <Link href="/" className="font-[fraunces] font-[900] text-[24px] leading-[32px] text-darkGreyBlue " onClick={() => setNavOpen(false)}>Home</Link>
                    </li>
                    
                    <li className="pt-16">
                        <Link href="/about" className="font-[fraunces] font-[900] text-[24px] leading-[32px] text-darkGreyBlue " onClick={() => setNavOpen(false)}>About</Link>
                    </li>

                    <li className="pt-16">
                        <Link href="/subscribe" className="font-[fraunces] font-[900] text-[24px] leading-[32px] text-darkGreyBlue " onClick={() => setNavOpen(false)}>Create Your Plan</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}