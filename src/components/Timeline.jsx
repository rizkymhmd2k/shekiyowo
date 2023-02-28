import { timelines } from "../constants";
import GalleryCard from "./GalleryCard";
import styles, { layout } from "../style";
import { drake } from "../assets";
import React, { useState } from "react";
import { close } from "../assets";




const Timeline = () => {

    const TimeCard = ({ title, content, date, pict }) => {
        const [modal, setModal] = useState(false);
        // console.log('modalstate', modal)
        const toggleModal = () => {
            setModal(!modal);
        }
       
        return (
            <li class="border-l-2 border-black">
                <div class="md:flex flex-start">

                    <div class="bg-pink1 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                        </svg>
                    </div>

                    <div class="block p-6 border-2 border-black shadow-lg bg-gray-100 max-w-md ml-6 mb-10 last:mt-10 ">
                        <div class="flex justify-between mb-4">
                            <a href="#!" class="font-medium text-pink1 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">{title}</a>
                            <a href="#!" class="font-medium text-pink1 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">{date}</a>
                        </div>
                        <p class="text-gray-700 mb-6">{content}</p>

                        <div className="flex flex-wrap gap-5 justify-center w-full  ">
                            {/* {gallery.map((pict) => <GalleryCard key={pict.id} {...pict} />)} */}
                            {/* <img src={drake} alt="" className="  border-black mb-4 " />
                        <img src={drake} alt="" className="  border-black  " />
                        <img src={drake} alt="" className=" border-2 border-black rounded-[15px] " /> */}

                            {/* <img src={pict} alt="" className=" border-2 border-black rounded-[15px] " />  */}
                            {pict.map((pict) => (<img onClick={toggleModal} src={pict} alt="" className=" border-2 border-black rounded-[15px] " />))}
                            {/* {pict.map((pict) => console.log('mapmap', pict))} */}

                            {/* modals */}
                            {modal && (
                                <div className={`modal ${modal ? 'appear' : ''}`}>
                                    <div className="modal-content">
                                    {pict.map((pict) => (<img src={pict} alt={title} className="modalImg border-2 border-black rounded-[15px] " />))}

                                        {/* <img src={pict} alt={title} className="modalImg border-2 border-black rounded-[15px] " /> */}
                                        <img
                                            src={close}
                                            alt="menu"
                                            className="w-[64px] h-[64px] object-contain close-modal bg-white"
                                            onClick={toggleModal}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </li>

        )
    }





    return (
        <section id="timeline" className={`flex-col ${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}>

            <h3 class="text-2xl text-gray-700 font-bold mb-6 ml-3">Timeline</h3>

            <ol >
                {/* <TimeCard />
                <TimeCard />
                <TimeCard /> */}

                {timelines.map((time, index) => (
                    <TimeCard key={time.title} {...time} index={index}  />
                ))}


            </ol>


        </section>
    )
}

export default Timeline;
