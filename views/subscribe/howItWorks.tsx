

const WorksTypes = [
    {
        id: "01",
        title: "Pick your coffee",
        text: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
    },
    {
        id: "02",
        title: "Choose the frequency",
        text: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
    },
    {
        id: "03",
        title: "Receive and enjoy!",
        text: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
    },
]
export const HowItWorks = () => {
    return (
        <div className="flex flex-col w-full h-full gap-20  py-20 md:py-[100px] lg:px-[85px] max-md:text-center max-md:items-center bg-[#2C343E] rounded-lg">
            
            <div className="hidden md:flex w-full md:px-[40px]">
                <div className="w-[31px] h-[31px] border-darkCyan  border-2 rounded-full"></div>
                <div className="lg:w-[340px] md:w-[200px]  h-px my-[10px] border-2 border-paleOrange "></div>
                <div className="w-[31px] h-[31px] border-darkCyan  border-2 rounded-full"></div>
                <div className="lg:w-[340px] md:w-[200px]  h-px my-[10px] border-2 border-paleOrange "></div>

                <div className="w-[31px] h-[31px] border-darkCyan  border-2 rounded-full"></div>

            </div>
            <div className="grid md:grid-cols-3 md:grid-rows-1 sm:grid-rows-3 lg:gap-24 md:gap-[10px] gap-14 md:px-[40px]">
                {WorksTypes.map((types, index) => (
                    <div key={index} className="flex flex-col lg:gap-y-8 md:gap-y-10 gap-y-8 ">
                        <h1 className=" font-[fraunces] font-[900] text-[72px] leading-[72px] text-paleOrange">{types.id}</h1>
                        <h4 className="lg:w-[75%] font-[fraunces] font-[900] text-[28px] leading-[32px] md:text-[32px] md:leading-[36px] text-lightCream">{types.title}</h4>
                        <p className="lg:w-[93%] md:w-[95%] font-[barlow] font-[400] text-[15px] text-leading[25px] text-lightCream">{types.text}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}