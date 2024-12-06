import Image from "next/image";

export default function Store() {
    
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex flex-col gap-8 w-[80%] justify-center items-center">
                <div className="flex flex-col w-[80%] gap-6 p-8 justify-center items-center">
                    <h2 className="text-3xl">Visit Us</h2>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, magnam voluptatibus accusantium porro culpa quaerat voluptates dicta enim perferendis illum vitae earum incidunt pariatur nemo at consectetur, nobis eaque odit?
                    Harum cum aperiam minima, exercitationem tempore quo tempora sed provident optio! Laborum inventore, voluptate sequi asperiores id dolorum excepturi eius impedit. Cum at deleniti velit amet laborum explicabo est consequatur.
                    Sed nemo possimus unde nulla commodi a quasi officiis, inventore soluta veniam in perspiciatis magnam eligendi incidunt cum laboriosam aliquid vero, voluptatum deleniti repellendus quisquam ipsum. Officia itaque alias facilis?</p>
                </div>
                <div className="flex w-full justify-between items-start">
                    <div className="flex flex-col">
                        <h2>Stores</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eligendi ea repellendus voluptates est! Nostrum omnis quas illo autem, enim aperiam molestias qui at adipisci perferendis quasi ex nihil accusamus.
                        Dolore voluptatem aliquid deleniti saepe aspernatur ducimus tempora accusantium? Esse officiis, obcaecati tempore suscipit architecto reiciendis odio necessitatibus dolorum? Facilis iusto rem quia incidunt hic, sed quis eaque quisquam? Beatae!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, accusantium numquam. Minus voluptatum quibusdam id incidunt, accusantium fuga architecto modi mollitia, quod iure blanditiis rerum? Sed quia magni ab nam?</p>
                    </div>
                    <div className="flex">
                        <Image src="/assets/store2.jpg" width={400} height={400} alt="store"/>
                    </div>
                </div>
            </div>
        </div>
    )
}