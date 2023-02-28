import { useState } from "react";
import { star, starpix } from "../assets";
import { gallery } from "../constants";
import GalleryCard from "./GalleryCard";
import styles, { layout } from "../style";
import { drake, pg2 } from "../assets";
import { quote, navLinks } from "../constants";




const Generator = () => {
    const handleClick = (index) => {
        setCurrentIndex(index);
    };
    const [currentIndex, setCurrentIndex] = useState(0);
    const [randomQuotes, setRandomQuotes] = useState(quote);


    console.log('currentIndex', currentIndex);
    console.log('randomQuotes', randomQuotes);








    return (
        <section id="generator" className={`w-full h-full bg-pink ${layout.sectionReverse}`}>


            {/* border-t-2 border-black bg-pink */}

            <div className={`relative flex-1  ${layout.sectionGen} ${styles.paddingX} ${styles.paddingY} ${styles.flexCenter} transition-transform hover:-translate-x-2 hover:-translate-y-2`}>

                <div className="relative md:-translate-y-12 ">
                    <div className="flex-1 oval overflow-hidden border-2 border-black -rotate-12 z-[5] shadow-2xl subpixel-antialiase rounded">
                        <img src={pg2} alt="billing" className="w-full object-cover h-full " />
                    </div>
                    <img src={star} alt="star" className="absolute z-[0] w-[120px] -top-5 right rotate-12 " />
                    <img src={starpix} alt="star" className="absolute z-[0] w-[60px] bottom-0 right-10 rotate-12 " />

                    {/* tulisannn */}
                    <div class="group absolute block top-[-16px] md:top-[32px] right-[-19px] md:right-[-55px]">
                        <div class="relative flex h-full transform items-end border-2 border-black bg-white ">
                            <h2 class="m-2 text-lg sm:text-6xl font-medium">cema</h2>
                        </div>
                    </div>

                    <div class="group absolute block top-[3rem] sm:top-[9rem] right-[-42px] md:right-[-60px]">
                        <div class="relative flex h-full transform items-end border-2 border-black bg-white ">
                            <h2 class="m-2 text-lg sm:text-4xl	 font-medium">facts</h2>
                        </div>
                    </div>

                    <div class="group absolute block bottom-[0.5rem] md:bottom-[5.5rem] right-[-27px]">
                        <div class="relative flex h-full transform items-end border-2 border-black bg-white ">
                            <h2 class="m-2 text-lg sm:text-5xl	font-medium">finder</h2>
                        </div>
                    </div>


                </div>


            </div>

            {/* divider */}

            <div className={`${layout.sectionInfoGallery} ${styles.paddingX} ${styles.paddingY} w-full flex-1 `}>

                {randomQuotes.length && (
                    <div className="flex-col w-full relative">
                        {/* min-h-[210px] ss:min-h-[170px] */}
                        {/* <div className={`h-96 p-9 ${styles.flexCenter} mb-10 bg-white border-2  border-black w-full rounded-xl shadow-2xl subpixel-antialiase `}>
                            <h2 className={`${styles.heading2} ${styles.flexCenter}`}>
                                {randomQuotes[currentIndex].title}
                            </h2>
                        </div> */}

                        {/* //cobaan */}
                        <div class="group relative block mt-5 ">
                            <span class="absolute inset-0 bg-black rounded-xl "></span>
                            <div className={`-translate-x-2 -translate-y-4 h-[500px] p-9 ${styles.flexCenter} mb-10 bg-white border-2  border-black w-full rounded-xl  subpixel-antialiase `}>
                                <h2 className={`${styles.heading2} ${styles.flexCenter}`}>
                                    {randomQuotes[currentIndex].title}
                                </h2>
                            </div>
                        </div>



                        <button onClick={() => handleClick(Math.floor(Math.random() * quote.length))} className={` cursor-pointer relative bottom-5 ${styles.flexCenter} w-full`}>
                            <div
                                class="inline-block rounded-full border border-black bg-amber-400 p-3 text-white hover:bg-white hover:text-black focus:outline-none focus:ring active:text-indigo-500"
                            >
                                <h2>click</h2>
                            </div>
                        </button>


                    </div>

                )}


            </div>



        </section>
    )
}

export default Generator;
