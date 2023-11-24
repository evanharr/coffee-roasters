"use client"
const widthVariants = (width: number) => {
    if (width === 217) {
        return 'w-[217px]';
      } 
    else if (width === 279) {
        return 'w-[279px]';
    }
}

interface ButtonProps {
    disabled: boolean,
    children?: React.ReactNode,
    width: number,
    //normal = 217
    //checkout small = 279
}
export const Button: React.FC<ButtonProps> = ({
    disabled,
    children,
    width,
}) => {
    const widthVar = widthVariants(width)
    return (
        <button className={`font-[fraunces] text-[18px] leading-[25px] text-white ${widthVar} h-[56px] rounded-lg  ${disabled ? "bg-[#E2DEDB] shadow-md" : "bg-darkCyan hover:bg-[#66D2CF] shadow-xl"}`}>
            {children}
        </button>
    )
}