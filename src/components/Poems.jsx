import { useState } from "react";
import { star, starpix } from "../assets";
import { gallery } from "../constants";
import GalleryCard from "./GalleryCard";
import styles, { layout } from "../style";
import { drake } from "../assets";
import { quote, navLinks } from "../constants";




const Poems = () => {





    return (
        <section id="product" className={`${styles.paddingX} flex-col w-full ax-h-[700px] ss:max-h-full`}>

            <div className={`min-h-[700px] p-2 sm:p-20 ${layout.sectionInfoGallery}`}>
                <p className={` ${styles.paragraph} indent-8 text-justify`}>
                    I don't know what will happen in the future. it's outside of my control. i dont know what will happen tomorrow, are we even still together tommorow, next week, or next year. life happens. But one thing for sure and it's in my control is i will always do my best to love you and make sure you feel loved. I'll stay beside you, honest and true.  Show me all the parts of you that you dont love, so i know where to begin with.
                    I know you've been hurt before, abandoned in all ways, i know its hard to trust someone new again. and you don't have to fully trust me, go with your own pace, start small and go from there. i hope i can make you feel safe. i hope that one time u know its okay to be vulnerable to be your self fully. and im here to accompany you growing to reach your biggest potential. because you are amazing  just the way you are.
                </p>
                <p className={` ${styles.paragraph} indent-8 text-justify`}>
                    Together, I hope we can develop together. We are going to reach our dreams and our own’s dreams. Im here to support your dreams and you to support mine I want you to be someone that remind me on the right track, someone that warn me not to make future mistakes and sins, someone that encourage me to keep pursuing meaningful things. I want to be your first source of support and understanding. I will continuously learn how to best love you, but I can’t make things happen for you. Just for know you are very special to me and im really grateful to met you. And im looking forward to creating a wonderful memories with the most precious person.
                </p>
            </div>
        </section>
    )
}

export default Poems;
