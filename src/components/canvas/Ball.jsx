import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal, //it will be used for texture
  OrbitControls,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <>
      <ambientLight intensity={0.15} />
      <directionalLight position={[0, 0, 5]} intensity={0.35} />
      <mesh scale={2.75}>
        {/* A class for generating an icosahedron geometry. */}
        <icosahedronGeometry args={[1, 1]} />

        {/* Materials describe the appearance of objects. They are defined in a (mostly) 
        renderer-independent way, so you don't have to rewrite materials if you decide to 
        use a different renderer. */}
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        {/* Adding texture */}
        <Decal
          position={[0, 0, 1]}
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]} //for horizontally mirroring them
          flatShading
        />
      </mesh>
    </>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.25]}
      gl={{ antialias: false, powerPreference: "low-power" }}
      className="cursor-grab"
    >
      {/* Suspense allows us to add a loader while the model is loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls allows us to move the component left and right */}
        <OrbitControls enableZoom={false} enablePan={false} />
        <Ball imgUrl={icon} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
