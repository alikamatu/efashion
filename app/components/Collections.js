// import ImageOne from '/assets/collector.png'
// import ImageTwo from '/assets/Collectionbanner.png'
// import ImageThree from '/assets/Collection.png'

const Collection = [
    {
        id: 1,
        name: "New Arrivals",
        image: '/assets/collector.png',
        category: "new"
    },
    {
        id: 2,
        name: "The Casual Edit",
        image: '/assets/Collectionbanner.png',
        category: "casual"
    },
    {
        id: 3,
        name: "Best-Sellers",
        image: '/assets/Collection.png',
        category: "best"
    }
]

export default function Collections() {

    return (
        <div className="flex flex-col p-10 gap-8">
            <div className="flex">
            <p className="text-xl">Elevate your lifestyle with a more intelligent, superior wardrobe. <br />Our range is crafted sustainably with longevity in mind.</p>
            </div>
            <div className="flex items-center justify-center gap-6 mt-10">
                {Collection.map((item, index) => (
                    <div key={index} className="flex relative">
                    <img src={item.image} className="w-[500px]" alt="" />
                    <p className="absolute bottom-6 left-6 text-white text-xl">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}