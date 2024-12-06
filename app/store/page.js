import Image from "next/image";
import Footer from "../components/Footer";

export default function Store() {
    
    return (
        <div className="flex flex-col w-full justify-center items-center">
            <div className="flex flex-col gap-8 w-full md:w-[80%] justify-center items-center">
                <div className="flex flex-col w-full md:w-[80%] gap-6 p-1 md:p-8 justify-center items-center">
                    <h2 className="text-3xl">Visit Us</h2>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, magnam voluptatibus accusantium porro culpa quaerat voluptates dicta enim perferendis illum vitae earum incidunt pariatur nemo at consectetur, nobis eaque odit?
                    Harum cum aperiam minima, exercitationem tempore quo tempora sed provident optio! Laborum inventore, voluptate sequi asperiores id dolorum excepturi eius impedit. Cum at deleniti velit amet laborum explicabo est consequatur.
                    Sed nemo possimus unde nulla commodi a quasi officiis, inventore soluta veniam in perspiciatis magnam eligendi incidunt cum laboriosam aliquid vero, voluptatum deleniti repellendus quisquam ipsum. Officia itaque alias facilis?</p>
                </div>
                <div className="md:flex w-full justify-between items-start">
                    <div className="flex flex-col gap-6 p-2 md:p-0 w-full md:w-[50%]">
                        <h2 className="text-3xl">Stores</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eligendi ea repellendus voluptates est! Nostrum omnis quas illo autem, enim aperiam molestias qui at adipisci perferendis quasi ex nihil accusamus.
                        Dolore voluptatem aliquid deleniti saepe aspernatur ducimus tempora accusantium? Esse officiis, obcaecati tempore suscipit architecto reiciendis odio necessitatibus dolorum? Facilis iusto rem quia incidunt hic, sed quis eaque quisquam? Beatae!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, accusantium numquam. Minus voluptatum quibusdam id incidunt, accusantium fuga architecto modi mollitia, quod iure blanditiis rerum? Sed quia magni ab nam?</p>
                    </div>
                    <div className="hidden md:flex">
                        <Image src="/assets/store2.jpg" width={800} height={800} alt="store"/>
                    </div>
                    <div className="flex md:hidden w-[100%] p-2 overflow-hidden justify-center items-center">
                        <Image src="/assets/store2.jpg" width={800} height={800} alt="store"/>
                    </div>

                </div>
                <div className="flex p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="flex flex-col">
                            <div className="flex h-[400px] overflow-hidden">
                                <Image src="/assets/store3.jpg" width={500} height={500} className="object-cover" alt="stores.png" />
                            </div>
                        <p>Union Square -San Francisco</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex h-[400px] overflow-hidden">
                                <Image src="/assets/store.jpg" width={500} height={500} className="object-cover" alt="stores.png" />
                            </div>
                        <p>Union Square -San Francisco</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex h-[400px] overflow-hidden">
                                <Image src="/assets/store4.jpg" width={500} height={500} className="object-cover" alt="stores.png" />
                            </div>
                        <p>Union Square -San Francisco</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex h-[400px] overflow-hidden">
                                <Image src="/assets/store5.jpg" width={500} height={500} className="object-cover" alt="stores.png" />
                            </div>
                        <p>Union Square -San Francisco</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex h-[400px] overflow-hidden">
                                <Image src="/assets/store1.jpg" width={500} height={500} className="object-cover" alt="stores.png" />
                            </div>
                        <p>Union Square -San Francisco</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex h-[400px] overflow-hidden">
                                <Image src="/assets/store6.jpg" width={500} height={500} className="object-cover" alt="stores.png" />
                            </div>
                        <p>Union Square -San Francisco</p>
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center items-center p-2 md:p-8">
                    <div className="md:flex w-full justify-between md:gap-0 items-start">
                        <div className="flex h-[400px] md:h-[600px] w-full md:w-[50%] overflow-hidden">
                            <Image src="/assets/store7.jpg" className="object-cover" width={800} height={800} alt="stores.picture" />
                        </div>
                        <div className="flex w-full md:w-[45%] flex-col my-4 md:my-0 gap-6">
                            <h2 className="text-3xl">Book an Appointment</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel officia culpa voluptatem ipsum deleniti? Libero distinctio, nesciunt rerum dolore nostrum assumenda non rem. Eveniet cumque recusandae harum similique itaque. Assumenda.</p>
                            <button className="flex w-52 py-3 justify-center items-center bg-blue-200">Book Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}