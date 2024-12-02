const IgPost = [
    {
        id: 1,
        image: 'assets/ig.png'
    },
    {
        id: 2,
        image: 'assets/igf.png'
    },
    {
        id: 3,
        image: 'assets/igt.png'
    },
    // {
    //     id: 4,
    //     image: 'assets/igtt.png'
    // },
    // {
    //     id: 5,
    //     image: 'assets/igff.png'
    // }
]

export default function Instagram () {

    return (
        <div className="flex flex-col p-10 items-center justify-center gap-12">
            <p>Shop Instagram</p>
            <div className="flex gap-3">
            {IgPost.map((item, i) => (
                <div key={i} className="flex relative cursor-pointer">
                    <img src={item.image} alt="" />
                    <div className="hidden absolute items-center justify-center w-full h-full bg-[#00000056] animate-pulse">
                    <img src="/icons/InstagramLogo.png" className="flex items-center justify-center" alt="" />
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}