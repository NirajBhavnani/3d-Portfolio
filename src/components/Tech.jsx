import { createRef, Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { BallScene } from "./canvas";

const InvalidateOnScroll = () => {
  const { invalidate, setFrameloop } = useThree();

  useEffect(() => {
    let scrollEndTimer;

    const handleScroll = () => {
      setFrameloop("always");
      invalidate();
      window.clearTimeout(scrollEndTimer);
      scrollEndTimer = window.setTimeout(() => {
        setFrameloop("demand");
        invalidate();
      }, 140);
    };

    const handleResize = () => invalidate();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
      capture: true,
    });
    window.addEventListener("resize", handleResize);
    invalidate();

    return () => {
      window.clearTimeout(scrollEndTimer);
      setFrameloop("demand");
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("resize", handleResize);
    };
  }, [invalidate, setFrameloop]);

  return null;
};

const BallLoading = () => (
  <mesh scale={2.75}>
    <icosahedronGeometry args={[1, 1]} />
    <meshBasicMaterial color="#29233f" wireframe />
  </mesh>
);

const Tech = () => {
  const containerRef = useRef(null);
  const [viewRefs] = useState(() => technologies.map(() => createRef()));

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I Work With</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>

      <div ref={containerRef} className="relative">
        <Canvas
          eventSource={containerRef}
          eventPrefix="client"
          frameloop="demand"
          dpr={[1, 1.25]}
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ antialias: false, powerPreference: "low-power" }}
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
          }}
        >
          <InvalidateOnScroll />
          {technologies.map((tech, index) => (
            <View key={tech.name} track={viewRefs[index]}>
              <Suspense fallback={<BallLoading />}>
                <BallScene icon={tech.icon} />
              </Suspense>
            </View>
          ))}
        </Canvas>

        <div className="mt-16 flex flex-row flex-wrap justify-center gap-6 sm:mt-20 sm:gap-10">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              ref={viewRefs[index]}
              className="h-28 w-28 cursor-grab"
              style={{ touchAction: "pan-y", userSelect: "none" }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
