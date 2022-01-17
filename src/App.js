import './App.css';
import Room from './Room_shoetest';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars , Environment } from '@react-three/drei';
import React, { Suspense, useState } from 'react';
import {Physics, Debug} from '@react-three/cannon';
import { Cursor } from './Drag';
import Whiteboard from './modals/Whiteboard';
import {NoToneMapping} from 'three';

import Setting from './modals/Setting';
import Logo from './modals/Logo';

function App() {


  const [physics, setPhysics] = useState(true);
  const [draw, setDraw] = useState(false);


  return (
    <div className="App">
      <div style={{ position:'absolute' , width:'100%', height:'100%'}}>
        <Canvas shadows camera={{ fov:50, position:[15,15,-15] }} onCreated={({ gl }) => { gl.toneMapping = NoToneMapping }}>
          <color attach='background' args={['#222222']} />
          <directionalLight position={[10,10,7]} color={'#ffffff'} intensity={3} castShadow
                            shadow-bias = {-0.001} shadow-camera-near={1} shadow-camera-far={200}
                            shadow-camera-top={10} shadow-camera-bottom={-10} shadow-camera-left={-10} shadow-camera-right={10} />
          <directionalLight position={[4,10,-10]} color={'#fff6ed'} intensity={3} />
          <Suspense fallback={null} >
            <Physics iterations={2}  gravity={[0, -200, 0]}>

              <Room setDraw={setDraw} physics={physics}/>
              <Cursor />
              <Stars/>

            </Physics>
          </Suspense> 
          <OrbitControls />
        </Canvas>
      </div>

      {draw&&<Whiteboard draw={draw} setDraw={setDraw}/>}
      <Setting setPhysics={setPhysics} physics={physics} />
      <Logo />
    </div>
  );
}

export default App;
