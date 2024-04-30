import { useState } from "react";
import { Stage, Gltf, OrbitControls, Environment, Point, Sparkles } from "@react-three/drei";
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette, BrightnessContrast } from "@react-three/postprocessing";
import { Model } from "./Model";
import { useControls } from 'leva'

function App() {

  const { bloomHeight,luminanceThreshold,luminanceSmoothing,brightness,contrast } = useControls({ 
    bloomHeight:{min:0, max:700, value:500},
    luminanceThreshold :{min:0, max:1, value:0.5},
    luminanceSmoothing :{min:0, max:1, value:0.1},
    brightness:{min:0, max:1, value:0},
    contrast:{min:0, max:1, value:.9}
   })
  return (
    <>
      <color attach="background" args={["black"]} />
      <EffectComposer>
        <Bloom luminanceThreshold={luminanceThreshold} luminanceSmoothing={luminanceSmoothing} height={bloomHeight} />
        <BrightnessContrast brightness={brightness} contrast={contrast} />
         {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
        {/* <Noise opacity={0.02} /> */}
        {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}

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
