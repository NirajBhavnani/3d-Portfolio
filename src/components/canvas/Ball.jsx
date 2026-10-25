import { useRef } from "react";
import { useThree } from "@react-three/fiber";
import { Decal, useTexture } from "@react-three/drei";

export const BallScene = ({ icon }) => {
  const rotationRef = useRef();
  const dragRef = useRef(null);
  const invalidate = useThree((state) => state.invalidate);
  const [decal] = useTexture([icon]);

  const handlePointerDown = (event) => {
    event.stopPropagation();
    const pointerType = event.nativeEvent.pointerType;
    const captured = pointerType !== "touch";
    if (captured) {
      event.target.setPointerCapture(event.pointerId);
    }

    dragRef.current = {
      x: event.clientX,
      y: event.clientY,
      lastX: event.clientX,
      lastY: event.clientY,
      pointerType,
      captured,
      axis: pointerType === "touch" ? null : "both",
    };
  };

  const handlePointerMove = (event) => {
    const drag = dragRef.current;
    if (!drag) return;

    const totalX = event.clientX - drag.x;
    const totalY = event.clientY - drag.y;

    if (drag.pointerType === "touch" && drag.axis === null) {
      if (Math.hypot(totalX, totalY) < 6) {
        return;
      }

      drag.axis =
        Math.abs(totalX) >= Math.abs(totalY) ? "horizontal" : "vertical";
      if (drag.axis === "horizontal") {
        event.target.setPointerCapture(event.pointerId);
        drag.captured = true;
      }
    }

    const deltaX = event.clientX - drag.lastX;
    const deltaY = event.clientY - drag.lastY;
    drag.lastX = event.clientX;
    drag.lastY = event.clientY;
    drag.x = event.clientX;
    drag.y = event.clientY;

    if (drag.axis === "vertical") return;

    if (drag.axis === "both") {
      rotationRef.current.rotation.x += deltaY * 0.01;
    }
    if (drag.axis === "both" || drag.axis === "horizontal") {
      rotationRef.current.rotation.y += deltaX * 0.01;
    }

    invalidate();
  };

  const handlePointerUp = (event) => {
    const drag = dragRef.current;
    dragRef.current = null;
    if (drag?.captured && event.target.hasPointerCapture(event.pointerId)) {
      event.target.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 0, 5]} intensity={0.45} />
      <group ref={rotationRef}>
        <mesh
          scale={2.75}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            map={decal}
            rotation={[2 * Math.PI, 0, 6.25]}
            flatShading
          />
        </mesh>
      </group>
    </>
  );
};
