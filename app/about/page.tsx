import { HeadQuarters } from "@/views/about/headquarters";
import { Commitment } from "../../views/about/commitment";
import { Hero } from "../../views/about/hero";
import { Quality } from "../../views/about/quality";

export default function About() {
    return (
        <div className="flex flex-col lg:px-[80px] lg:py-2 md:px-[40px] sm:px-[24px] w-full min-h-screen justify-between">
            <section className="block">
                <Hero />
            </section>
            <section className="block pt-40">
                <Commitment />
            </section>
            <section className="block pt-80">
                <Quality />
            </section>
            <section className="block py-40">
                <HeadQuarters />
            </section>
        </div>
        

    )
}