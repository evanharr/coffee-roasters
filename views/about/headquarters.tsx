
import Image from "next/image";

const CardLinks = [
    {
        icon: "/assets/about/desktop/illustration-uk.svg",
        title: "United Kingdom",
        street: "68 Asfordby Rd",
        city: "Alcaston",
        province: "SY6 1YA",
        number: " +44 1241 918425",

    },
    {
        icon: "/assets/about/desktop/illustration-canada.svg",
        title: "Canada",
        street: "528 Eglinton Avenue",
        city: "Toronto",
        province: "Ontario M4P 1A6",
        number: "+1 416 486 2997",
    },
    {
        icon: "/assets/about/desktop/illustration-australia.svg",
        title: "Australia",
        street: "36 Swanston Street",
        city: " Kewell",
        province: "Victoria",
        number: "+61 4 9928 3629",
    },
]

export const HeadQuarters = () => {
    return (
        <div className="block w-full h-full">
            <h1 className="font-[fraunces] font-[900] text-Grey text-[24px] leading-[32px] text-center md:text-left pb-[72px]">Our headquarters</h1>
            <div className="w-full grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-20 md:gap-x-8 lg:gap-x-20">
                
                {CardLinks.map((card,index) => (
                <div key={index} className="w-full grid grid-rows-3 justify-center place-items-center md:justify-start md:place-items-start">
                    <img src={card.icon}/>
                    <h1 className="font-[fraunces] font-[900] text-[28px] leading-[36px] md:text-[24px] pb-[22px]">{card.title}</h1>
                    <div className="flex flex-col text-center md:text-left">
                        <p>{card.street}</p>
                        <p>{card.city}</p>
                        <p>{card.province}</p>
                        <p>{card.number}</p>
                    </div>
                </div>
                ))}

            </div>

        </div>
    )
}