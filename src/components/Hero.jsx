import styles from "../style";
import { discount, student2 } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} justify-end`}>
      <div className={`flex-1 ${styles.flexStart} flex flex-col xl:px-0 sm:px-16 px-6 `}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient mb-2 rounded-[10px]">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20% </span>
            Discount For {" "}
            <span className="text-white">One Month </span>
            Account
          </p>

        </div>
        <div className="flex flex-row justify-between items-center w-full">        
        
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[55px]">Welcome to <br className="sm:block"  />
          <span className="text-gradient">Grad Analytics</span> {" "}  </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>

        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>Our mission is to bridge the gap between data and education, providing innovative tools and resources that make data analytics accessible to all. Grad Analytics is here to guide you on your journey.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative px-6 py-6 lg:ml-10`}>
        <img src={student2} alt="robot" className="w-[100%] h-[100%] relative z-[5] rounded-3xl" />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 orange__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero