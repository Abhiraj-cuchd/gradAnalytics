import { lms4 } from '../assets';
import styles, { layout } from '../style';

const Lms = () => {
  return (
    <section id="lms" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={lms4} alt="lms" className='w-[100%] h-[100%] relative z-[5] rounded-[2%]' />

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'  />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'  />
      </div>

      <div className={`${layout.sectionInfo} lg:ml-32`}>
        <h2 className={`${styles.heading2}`}>Easily  Monitor your <br className="sm:block hidden" /> Progress from our   LMS Platform.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Students of Grad Analytics gets access to our courses through our own Learming Management system. They can track, Monitor and Control Their progress and perform actions.
        </p>
      </div>

    </section>
    )
}

export default Lms