
import Image from "next/image";

interface CardProps {
    title: string,
    text: string,
    image: any,
}

export const ChooseCard: React.FC<CardProps> = ({
    title,
    text,
    image,
}) => {
    return (
        <div className="flex w-full bg-darkCyan rounded-lg py-16 md:py-10 justify-center place-items-center shadow-lg">

            <div className="grid w-full lg:grid-rows-2 lg:grid-cols-1 md:grid-cols-3 lg:gap-y-10 md:gap-0 sm:gap-y-16">

                <div className="w-full flex justify-center items-center">
                    <img src={image}  width="56px" height="56px"/>
                </div>

                <div className="flex flex-col gap-6 lg:text-center md:text-left text-center md:col-span-2">
                    <h1 className="font-[fraunces] font-[900] text-[24px] leading-[32px] text-lightCream">{title}</h1>
                    <p className="lg:w-[80%] lg:m-auto md:w-[95%] md:m-0 sm:w-[80%] m-auto text-lightCream">{text}</p>
                </div>


            </div>
        </div>
    )
}