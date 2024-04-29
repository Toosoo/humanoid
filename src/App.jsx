import { useState } from "react";
import { Stage, Gltf, OrbitControls, Environment, Point, Sparkles } from "@react-three/drei";
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette, BrightnessContrast } from "@react-three/postprocessing";
import { Model } from "./Model";

function App() {
  return (
    <>
      <color attach="background" args={["black"]} />
      <EffectComposer>
        {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.1} height={500} />
        <BrightnessContrast brightness={0} contrast={0.9} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}

        <Model />
        <Environment preset="city" />
        <ambientLight intensity={1} />

        {/* <pointLight position={[0,0,5]} intensity={20} color={'white'} /> */}
        <Sparkles count={10} speed={1} color={"yellow"} size={2} scale={5} noise={100} />
      </EffectComposer>
    </>
  );
}

export default App;
