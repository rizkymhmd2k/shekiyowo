import React, { useState } from "react";
import { close } from "../assets";



const GalleryCard = ({ title, img, id }) => {

    // console.log('potoxxx', img)

    const [modal, setModal] = useState(false);
    //
    const [current, setCurrent] = useState(0);


    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <div className="flex px-1 py-1 max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card
        group max-h-[600px] ">
                <img onClick={toggleModal} src={img} alt={title} className="cursor-zoom-in	w-64 h-64 object-cover border-2 border-black rounded-[15px] 
          transition duration-500 group-hover:scale-105 " />
            </div>


            {modal && (
                <div className={`modal ${modal ? 'appear' : ''}`}>
                    <div className="modal-content">
                        <img src={img} alt={title} className="modalImg border-2 border-black rounded-[15px] " />
                        <img
                            src={close }
                            alt="menu"
                            className="w-[64px] h-[64px] object-contain close-modal bg-white"
                            onClick={toggleModal}
                        />
                    </div>
                </div>
            )}

        </>
    )
}


export default GalleryCard;
