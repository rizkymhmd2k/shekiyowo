import styles from "../style";
import Cardmac from "./Cardmac";

import Greet from "./Greet";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} min-h-[800px]`}>

      <Greet />

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <Cardmac />
      </div>


    </section>
  );
};

export default Hero;
