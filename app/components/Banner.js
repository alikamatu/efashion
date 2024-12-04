import Link from "next/link";

export default function Banner() {

    return (
        <div className="flex flex-col relative">
            <img src='/assets/content.png' className="hidden md:block w-full h-[95vh] object-cover relative" alt="Banner.png" />
            <img src='/assets/mob.jpg' className="w-full md:hidden h-[95vh] object-cover relative" alt="Banner.png" />
            <div className="flex flex-col absolute items-start bottom-20 left-5 md:left-20">
                <p className="text-2xl md:text-4xl text-white">Elevate Your Style <br /> Timeless Fashion, Sustanable <br /> Choices.</p>
                <Link href='/shop'>
                <button className="my-4 bg-white py-3 px-6">Shop Now</button>
                </Link>
            </div>
        </div>
    )
}
