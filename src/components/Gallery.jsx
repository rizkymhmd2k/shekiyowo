import { gallery } from "../constants";
import GalleryCard from "./GalleryCard";
import styles, { layout } from "../style";


const Gallery = () => {



  return (
    <section id="gallery" className={`flex-col  ${styles.paddingX} ${styles.paddingY}	 h-full ss:max-h-full`}>

      <div className={layout.sectionInfoGallery}>
        {/* <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2> */}
        <h2 className={styles.heading2}>
          The girl with kyottest smile
        </h2>
        <p className={`${styles.paragraph} mt-5`}>
        All the statistics in the world can’t measure the warmth of your smile.
        </p>

      </div>

      {/* <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      {/* <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" /> */}
      {/* <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" /> */}
      {/* gradient end */}
      {/* </div>  */}

      {/* ini baguss */}
      <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
        {gallery.map((pict) => <GalleryCard key={pict.id} {...pict} />)}


      </div>




      

    </section>
  )
}

export default Gallery;
