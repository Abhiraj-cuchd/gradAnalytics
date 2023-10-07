import styles from "./style";
import {
  Footer,
  Navbar,
  Lms,
  Services,
  Testimonials,
  Hero,
  Cta,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Services />
        <Lms />
        <Testimonials />
        <Cta />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
