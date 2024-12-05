import Service from "@/app/components/Service";

const Items = [
    {
        id: 1,
        name: "Classic Easy Zipper Tote",
        image: '/assets/image.png',
        price: 299,
        category: "bags"
    },
    {
        id: 2,
        name: "Wool Cashmier Sweater Coat",
        image: '/assets/coat.png',
        price: 398,
        category: "Clothing"
    },
    {
        id: 3,
        name: "Single-Origin Cashmere Beanie",
        image: '/assets/cujay.png',
        price: 98,
        category: "Cap"
    }
];


export default function Recent() {

    return(
        <div className="flex flex-col justify-center items-center w-full gap-16 p-8">
            <div className="lfex">
                <p className="text-3xl">Recently Viewed</p>
            </div>
            <Service />
        </div>
    )
}