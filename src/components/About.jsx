import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full cursor-grab">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]"
      >
        Passionate Software Engineer with a love for coding and problem-solving.
        From my first 'Hello world' program in C, I've been captivated by
        programming, leading to a multitude of exciting projects. As a Computer
        Engineer, my journey has encompassed assignments, online courses, and
        impactful internship projects.<br/> My skillset includes expertise in
        JavaScript, React.js, Vue.js, C#.NET, Python, Java, Flutter, Django,
        SQL, and Firebase. With a deep-rooted passion for software development,
        I thrive on tackling challenges and bringing innovative project ideas to
        life.<br/> Beyond coding, I enjoy engaging in diverse interests such as
        Chess, Anime, Cricket, Football, Guitar, Series, Photography, and Video
        Editing.<br/> I'm driven by a desire for continuous growth and always eager
        to explore new technologies and frameworks. Let's connect and
        collaborate on meaningful projects together!
      </motion.p>

      {/* Cards */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
