const Bean = [
    {
        id: 1,
        title: "The Smart Chic",
        image: "/assets/Collections.png",
        category: "New"
    }, 
    {
        id: 2,
        title: "Ready To Go",
        image: "/assets/Collectionss.png",
        category: "best"
    }
]

export default function Beans() {

    return(
        <div className="md:flex p-2 items-center justify-center gap-4 md:p-10">
            {Bean.map((item, i) => (
                <div className="md:flex m-3 md:m-0 relative">
                    <img src={item.image} className="relative" alt="" />
                    <p className="absolute bottom-6 left-4 text-white text-xl">{item.title}</p>
                </div>
            ))}
        </div>
    )
}