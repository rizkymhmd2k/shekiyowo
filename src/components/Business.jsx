import styles, { layout } from "../style";
import { features } from "../constants";
// import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} `}>
    <div className={`relative w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue image-wrapper`}>
      <img src={icon} alt="star" className=" w-[70%] h-[70%] object-contain " />
      <h2 className="absolute top-[23px] left-[28px] text-xs text-white	font-bold	">{index + 1}</h2>
    </div>
    {/* <div className={`absolute   `}>
      <h2 className="w-[64px] h-[64px]">{index+1}</h2>
    </div> */}
    <div className="flex-1 flex flex-col ml-3 justify-center">

      <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

//${styles.paddingX} ${styles.paddingY} md:h-[600px]
const Business = () => (

  <section id="reasons" className={`${layout.section} w-full`}>

    <div className={`${layout.sectionInfo} border-2 border-black ${styles.paddingX} ${styles.paddingY} bg-yellow`}>
      <h2 className={styles.heading2}>
        They say love don't need any reasons. well, i do.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Tbh i don't plan this to happen. it's just sorta happened and i am glad it did.
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={` ${styles.paddingX} ${styles.paddingY} flex-1 flex-col border-t-2 border-r-2 border-b-2  border-l-2 md:border-l-0 md:border-t-2 border-black
         overflow-y-scroll 	h-full	 md:max-h-[600px]`}>

      <h2 className={styles.heading2}>
        Reasons why
      </h2>

      <div>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>

    </div>

  </section>
);

export default Business;
