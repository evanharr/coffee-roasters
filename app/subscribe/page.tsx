import { HowItWorks } from "../../views/subscribe/howItWorks"
import { Hero } from "../../views/subscribe/hero"
import { SubscribeSellection } from "@/views/subscribe/subscribeSellection"

export default function Subscribe() {
    return (
        <div className=" w-full min-h-screen flex flex-col  lg:py-2 justify-between">
        <section className="block px-[24px] md:px-[40px] xl:px-[80px]">
            <Hero />
        </section>
        <section className="block pt-40 xl:px-[80px]">
            <HowItWorks />
        </section>
        <section className="block py-40 px-[24px] md:px-[40px] xl:px-[80px]">
            <SubscribeSellection />
        </section>
    </div>
    )
}