import './App.css';
import Room from './Room_large';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars , Environment } from '@react-three/drei';
import React, { Suspense, useState } from 'react';
import {Physics, Debug} from '@react-three/cannon';
import { Cursor } from './Drag';

function App() {


  const [physics, setPhysics] = useState(false);


  return (
    <div className="App" style={{width:'100vw', height:'100vh'}}>
      <Canvas shadows camera={{ fov:50, position:[15,15,-15] }}>
        <color attach='background' args={['gray']} />
        <directionalLight position={[10,10,-7]} color={'#ffffff'} intensity={2} castShadow
                          shadow-bias = {-0.001} shadow-camera-near={1} shadow-camera-far={200}
                          shadow-camera-top={10} shadow-camera-bottom={-10} shadow-camera-left={-10} shadow-camera-right={10} />
        <directionalLight position={[4,10,-10]} color={'#fff6ed'} intensity={1} />
        <Suspense fallback={null} >
          <Physics iterations={2} >
            <Debug scale={100} color="black">
              <Room physics={physics} setPhysics={setPhysics}/>
            </Debug>
            <Cursor />
            <Stars/>
          </Physics>
        </Suspense> 
        {(!physics) && <OrbitControls /> }
      </Canvas>
    </div>
  );
}

export default App;
