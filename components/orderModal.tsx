import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';

interface ModalProps {
    isOpen: boolean,
    onClose: () => void,
    modalText: (id: string) => string
    grindOption: boolean,

}
export const OrderModal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    modalText,
    grindOption,
}) => {

    const modalStyles: React.CSSProperties = {
    display: isOpen ? 'block' : 'none',
    };

    const modalRef = useRef<HTMLDivElement>(null);

    const handleCloseModal = (e: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
          onClose(); // Close the modal if clicked outside of it
        }
      };

   


  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleCloseModal);
    } else {
      document.removeEventListener('mousedown', handleCloseModal);
    }

    return () => {
      document.removeEventListener('mousedown', handleCloseModal);
    };
  }, [isOpen]);
    return (
        <>
        {isOpen && (

        
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50 " >
            <div ref={modalRef}  className=" ">
                <div className="w-[327px] h-[597px] md:w-[540px] mt-[35px] md:mt-[50px] rounded-lg">
                    <div className="flex flex-col bg-lightCream rounded-lg">
                        <h1 className="w-full h-full bg-darkGreyBlue text-lightCream font-[fraunces] font-[900] py-11 pl-6 text-[28px] leading-[32px] md:text-[40px] md:leading-[48px] rounded-t-lg">Order Summary</h1>
                        <div className="px-6 py-10 md:px-14 md:py-14">
                            <h1 className="font-[fraunces] font-[900] text-[24px] leading-[40px] text-Grey text-left tracking-[1.1px]">
                                "I drink my coffee using 
                                <span className="text-darkCyan"> {modalText("1")}</span>
                                , with a
                                <span className="text-darkCyan"> {modalText("2")} </span>
                                type of bean.
                                <span className="text-darkCyan"> {modalText("3")} </span>

                                {!grindOption && (
                                    <span>
                                        ground ala  
                                        <span className="text-darkCyan"> {modalText("4")}</span>
                                    </span>
                                )}, sent to me
                                <span className="text-darkCyan"> {modalText("5")}</span>
                                ."
                            </h1>
                            <p className="font-[barlow] font-[400] text-[15px] leading-[25px] tracking-[1px] text-darkGreyBlue opacity-80">
                            Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. 
                            </p>
                        </div>
                        <div className="md:hidden flex pb-10 justify-center">
                            <Button children={"Checkout - $14.00 / mo"} disabled={false} width={279}/>
                        </div>
                        <div className="hidden md:flex pb-10 gap-x-[17px] justify-center items-center">
                            <h1 className="font-[fraunces] font-[900] text-[32px] leading-[36px] tracking-[1px]">$14.00 / mo</h1>
                            <Button children={"Checkout"} disabled={false} width={217}/>
                        </div>

                    
                    </div>

                </div>
            </div>


        </div>
        )}
        </>
    )
}