
interface CardProps {
    title: string,
    text: string,
    selected: boolean,
    onCardClick: (cardTitle: string) => void;
}

export const SubscriptionCard: React.FC<CardProps> = ({
    title,
    text,
    selected,
    onCardClick
}) => {
    
    const handleClick = () => {
        onCardClick(title);

    }
    return (
        <div onClick={handleClick} className={`block w-full h-full rounded-lg  px-[25px] py-[24px] md:py-[32px] cursor-pointer shadow-md ${selected ? " bg-darkCyan": "bg-[#F4F1EB] hover:bg-paleOrange"}`}>
            <div className="flex flex-col text-left gap-y-2 md:gap-y-6">
                <h1 className={`font-[fraunces] font-[900] text-[24px] leading-[32px] ${selected ? " text-lightCream" : "text-darkGreyBlue hover:text-darkGreyBlue"}`}>{title}</h1>
                <p className={`font-[barlow] font-[400] text-[16px] leading-[26px] ${selected ? " text-lightCream" : "text-darkGreyBlue hover:text-darkGreyBlue"}`}>{text}</p>
            </div>
            
        </div>
    )
}