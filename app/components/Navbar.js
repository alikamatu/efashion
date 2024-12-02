import Link from "next/link";

export default function Navbar() {

    return (
        <div className="flex w-full">
            <div className="flex p-6 px-8 w-full justify-between items-center">
                <img src="/icons/List.png" className="md:hidden" alt="" />
                <div className="hidden md:flex gap-4">
                    <img src="/icons/Logo.png" alt="" />
                    <ul className="flex gap-4">
                        <Link href='/'><li>Shop</li></Link>
                        <Link href='/'><li>New Arivals</li></Link>
                        <Link href='/'><li>Sales</li></Link>
                        <Link href='/'><li>Journal</li></Link>
                    </ul>
                </div>
                <div className="flex">
                <img className="md:hidden" src="/icons/Logo.png" alt="" />
                </div>
                <div className="flex items-center gap-4">
                    <img src="/icons/MagnifyingGlass.png" alt="" />
                    <Link href='/'><li className="list-none">Stores</li></Link>
                    <img src="/icons/Vector.png" alt="" />
                    <img src="/icons/Heart.png" alt="" />
                    <img src="/icons/Bag.png" alt="" />
                    </div>
            </div>
        </div>
    )
}