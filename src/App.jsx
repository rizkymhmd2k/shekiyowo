import styles from "./style";
import { Gallery, Business, Timeline, Generator, CTA, Navbar, Poems, Hero } from "./components";

const App = () => (
  <div className="w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} border-y-2 border-black bg-white w-full sticky`}>
      <Navbar />
    </div>

    <div className={`bg-green ${styles.flexStart} `}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-white ${styles.flexStart} border-2 border-black `}>
      {/* <div className={`${styles.boxWidth}`}> */}
      <Generator />
      {/* </div> */}
    </div>


    <div className={`bg-white ${styles.flexStart} border-x-2 border-black `}>
      <div className={`${styles.boxWidth} `}>
        <Gallery />
      </div>
    </div>



    <div className={`bg-white ${styles.flexStart} `}>
      {/* <div className={`${styles.boxWidth}`}> */}
      <Business />
      {/* </div> */}
    </div>

    <div className={`bg-white ${styles.flexStart} border-x-2 border-black `}>
      <div className={`${styles.boxWidth}`}>
        <Timeline />
      </div>
    </div>

    <div className={`bg-white ${styles.flexStart} border-2 border-black bg-yellow`}>
      {/* <div className={`${styles.boxWidth}`}> */}
      <Poems />
      {/* </div> */}
    </div>





  </div>
);

export default App;
