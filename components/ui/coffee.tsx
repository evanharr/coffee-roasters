
import { StaticImageData } from "next/image"
import Image  from "next/image";

interface Coffees {
    title: string,
    text: string,
    image: any,
    
}


export const Coffee: React.FC<Coffees> = ({
    title,
    text,
    image,
    
}) => {
    return (
        <div className="flex">

        
        <div className="grid md:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2  gap-10 ">
            
            <div className="flex justify-center items-center ">
            <Image src={image} width={0} height={0} sizes="100vw"  alt="Coffee" style={{width: '90%', height: '100%'}} />
            </div>
            
            <div className="flex flex-col w-full gap-4 md:pt-2">
                <h4 className="font-[fraunces] font-[900] text-[24px] leading-[32px] text-darkBlueGrey text-center lg:text-center md:text-left ">{title}</h4>
                <p className="font-[barlow] font-[400] text-[16px] leading-[26px] text-center lg:text-center md:text-left lg:px-4">{text}</p>
            </div>

        </div>
        </div>
    )
}