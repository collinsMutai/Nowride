import { motion } from "framer-motion";
import "./HeroBanner.css";

const HeroBanner = ({
  title,
  subtitle,
  backgroundImage,
  height = "60vh",
}) => {
  return (
    <section
      className="hero-banner"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        minHeight: height,
      }}
    >
      <motion.div
        className="hero-banner__overlay"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default HeroBanner;