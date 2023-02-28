import { useState } from "react";
import { star, starpix } from "../assets";
import { gallery } from "../constants";
import GalleryCard from "./GalleryCard";
import styles, { layout } from "../style";
import { drake } from "../assets";
import { quote, navLinks } from "../constants";




const Generator = () => {
    const handleClick = (index) => {
        setCurrentIndex(index);
    };
    const [currentIndex, setCurrentIndex] = useState(0);
    const [randomQuotes, setRandomQuotes] = useState(quote);


    console.log('currentIndex', currentIndex);







    return (
        <section id="product" className={`flex-row w-full ax-h-[700px] ss:max-h-full bg-pink`}>

            <div className={`${layout.sectionInfoGallery} ${styles.paddingX} mb-20 w-full`}>

                {randomQuotes.length && (
                    <div className="flex-col w-full relative">
                        <div className={`min-h-[210px] ss:min-h-[170px] ${styles.flexCenter}`}>
                            <h2 className={`${styles.heading2}`}>
                                {randomQuotes[currentIndex].title}
                            </h2>
                        </div>


                        <div onClick={() => handleClick(Math.floor(Math.random() * quote.length))} className={`relative bottom-5 ${styles.flexCenter} my-4 w-full`}>

                            <div
                                class="inline-block rounded-full border border-black bg-amber-400 p-3 text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-indigo-500"
                            >
                                <h2>click</h2>


                            </div>
                        </div>


                    </div>

                )}


            </div>
            {/* border-t-2 border-black bg-pink */}

            <div className={`relative   ${layout.sectionGen} ${styles.paddingX}  ${styles.flexCenter} `}>

                <div className="relative -translate-y-12 ">
                    <div className="flex-1 oval overflow-hidden border-2 border-black -rotate-12 z-[5] shadow-2xl subpixel-antialiased rounded">
                        <img src={drake} alt="billing" className="w-full object-cover h-full " />
                    </div>
                    <img src={star} alt="star" className="absolute z-[0] w-[120px] -top-5 right rotate-12 " />
                    <img src={starpix} alt="star" className="absolute z-[0] w-[60px] bottom-0 right-10 rotate-12 " />
                </div>


                <div className="flex-col">
                    <div class="group relative block mt-5 -translate-x-6 -translate-y-12 md:translate-y-0">
                        <div class="relative flex h-full transform items-end border-2 border-black bg-white ">
                            <div class=" ">
                                <h2 class="m-2 text-2md font-medium">we been wkkwkw for?</h2>
                            </div>

                        </div>
                    </div>

                    <div class="group relative block mt-5 -translate-y-12 md:translate-y-0">
                        <span class="absolute inset-0 border-2 border-dashed border-black translate-y-2 translate-x-2 "></span>

                        <div class="relative flex h-full transform items-end border-2 border-black bg-white ">
                            <div class=" ">
                                <h2 class="m-2 text-2md font-medium">we been wkkwkw for?</h2>
                            </div>

                        </div>
                    </div>

                    <div class="group relative block mt-5 -translate-x-9 -translate-y-12 md:translate-y-0	">
                        <div class="relative flex h-full transform items-end border-2 border-black bg-white ">
                            <div class=" ">
                                <h2 class="m-2 text-2md font-medium">we been wkkwkw for?</h2>
                            </div>

                        </div>
                    </div>


                </div>


            </div>



        </section>
    )
}

export default Generator;
