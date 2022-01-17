/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef, useState, useMemo, useEffect } from 'react'
import { useGLTF, Html, SpotLight } from '@react-three/drei'
import Youtube from './Youtube'
import { usePlane, useBox, useConvexPolyhedron } from '@react-three/cannon';
import { useDragConstraint } from './Drag'
import * as THREE from 'three';
import { Geometry } from "three-stdlib";
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from "three/src/loaders/TextureLoader.js";


const toConvexPolyhedron = (geoArray) => {
  // geoArray : [[geometry1,[position1]],[geometry2,[position2], ...]
  const val = [[],[],[]];
  for(let i=0 ; i<geoArray.length ; i++){
    const geo = new Geometry().fromBufferGeometry(geoArray[i][0]);
    geo.mergeVertices();
    val[0].push(...(geo.vertices.map((v) => [v.x+geoArray[i][1][0], v.y+geoArray[i][1][1], v.z+geoArray[i][1][2]])));
    // vertices are consist of x,y,z vector coordinate
    val[1].push(...(geo.faces.map((f) => [f.a, f.b, f.c])));
    // faces are consist of index of vertices
  }
  return val;
};

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/room_shoetest.gltf')

  const [planeRef] = usePlane(()=>({ mass : 0, type :'Static', rotation : [-Math.PI / 2, 0, 0],  position : [0,5,0]}));
  
  // shoe gravity
  const shoe1Geo = useMemo(()=>toConvexPolyhedron([[nodes.shoe_bottom1.geometry,[0,0,0]],[nodes.shoe_top1.geometry,[0, 1.65, 1.8]]]), [nodes]);
  const [shoe1Ref] = useConvexPolyhedron(() => ({ mass: (props.physics?40:0), args : shoe1Geo, position : [26.6, 6.1, 9], linearDamping: 0.95, angularDamping: 0.95 }));
  let shoe1Bind = useDragConstraint(shoe1Ref);


  // draw img load
  const img = localStorage.getItem('imgValue');

  const path = (img)?img : 'logo192.png';
  const drawTexture = useLoader(TextureLoader, path); // set path from public directory
  const githubTexture = useLoader(TextureLoader, 'github.jpeg');


  return (
    <group ref={group} {...props} dispose={null}>

      <group position={[-44.75, 66, -32]}>
        <mesh geometry={nodes.image1.geometry} onClick={()=>props.setDraw((val)=>!val)} />
        <mesh receiveShadow rotation={[0,Math.PI/2,0]} position={[0.35,0,0]}>
          <boxBufferGeometry attach="geometry" args={[16, 20, 0.1]} />
          <meshBasicMaterial attach="material" map={drawTexture} />
        </mesh>
      </group>



      <group ref={shoe1Ref} dispose={null} {...shoe1Bind}>
        <mesh geometry={nodes.shoe_bottom1.geometry} material={nodes.shoe_bottom1.material}  />
        <mesh geometry={nodes.shoe_top1.geometry} material={nodes.shoe_top1.material} position={[0, 1.65, 1.8]} />
      </group>

      <mesh ref={planeRef}>

      </mesh>

      <mesh geometry={nodes.bed_down6.geometry} material={nodes.bed_down6.material} position={[6.92, 14.64, 27.72]} />
      <mesh geometry={nodes.bed_down7.geometry} material={nodes.bed_down7.material} position={[6.92, 14.64, 33.88]} />
      <mesh geometry={nodes.bed_down8.geometry} material={nodes.bed_down8.material} position={[6.92, 14.64, 21.56]} />
      <mesh geometry={nodes.bed_down9.geometry} material={nodes.bed_down9.material} position={[6.92, 14.64, 40.04]} />
      <mesh geometry={nodes.bed_down5.geometry} material={nodes.bed_down5.material} position={[6.92, 8.48, 30.8]} />
      <mesh geometry={nodes.bed_down1.geometry} material={nodes.bed_down1.material} position={[6.92, 15.96, 44.88]} />
      <mesh geometry={nodes.bed_down2.geometry} material={nodes.bed_down2.material} position={[6.92, 15.96, 16.72]} />
      <mesh geometry={nodes.bed_down3.geometry} material={nodes.bed_down3.material} position={[6.92, 28.28, 44.88]} />
      <mesh geometry={nodes.bed_down4.geometry} material={nodes.bed_down4.material} position={[6.92, 28.28, 16.72]} />
      <mesh
        geometry={nodes.bed_bedding1.geometry}
        material={nodes.bed_bedding1.material}
        position={[-16.4, 17.72, 31.24]}
      />
      <mesh
        geometry={nodes.bed_floor001.geometry}
        material={nodes.bed_floor001.material}
        position={[-16.4, 8.48, 31.24]}
      />
      <mesh
        geometry={nodes.bed_pillow001.geometry}
        material={nodes.bed_pillow001.material}
        position={[-29.93, 21.57, 30.91]}
      />
      <mesh geometry={nodes.bed_up10.geometry} material={nodes.bed_up10.material} position={[-39.72, 29.6, 30.8]} />
      <mesh geometry={nodes.bed_up6.geometry} material={nodes.bed_up6.material} position={[-39.72, 19.04, 27.72]} />
      <mesh geometry={nodes.bed_up7.geometry} material={nodes.bed_up7.material} position={[-39.72, 19.04, 33.88]} />
      <mesh geometry={nodes.bed_up8.geometry} material={nodes.bed_up8.material} position={[-39.72, 19.04, 21.56]} />
      <mesh geometry={nodes.bed_up9.geometry} material={nodes.bed_up9.material} position={[-39.72, 19.04, 40.04]} />
      <mesh geometry={nodes.bed_up5.geometry} material={materials['Steel - Satin']} position={[-39.72, 8.48, 30.8]} />
      <mesh geometry={nodes.bed_up1.geometry} material={nodes.bed_up1.material} position={[-39.72, 20.36, 16.72]} />
      <mesh geometry={nodes.bed_up2.geometry} material={nodes.bed_up2.material} position={[-39.72, 20.36, 44.88]} />
      <mesh geometry={nodes.bed_up3.geometry} material={nodes.bed_up3.material} position={[-39.72, 37.08, 16.72]} />
      <mesh geometry={nodes.bed_up4.geometry} material={nodes.bed_up4.material} position={[-39.72, 37.08, 44.88]} />
      <mesh
        geometry={nodes.bed_matris.geometry}
        material={materials['Powder Coat - Rough (Blue).001']}
        position={[-16.4, 12.88, 31.24]}
      />
      <mesh
        geometry={nodes.book_inside3.geometry}
        material={nodes.book_inside3.material}
        position={[-40.85, 65.1, 9.1]}
      />
      <mesh
        geometry={nodes.book_cover1001.geometry}
        material={nodes.book_cover1001.material}
        position={[-40.85, 66.3, 5.8]}
      />
      <mesh
        geometry={nodes.book_inside1001.geometry}
        material={nodes.book_inside1001.material}
        position={[-41, 64.8, 9.1]}
      />
      <mesh
        geometry={nodes.book_inside2001.geometry}
        material={nodes.book_inside2001.material}
        position={[-41, 66, 5.8]}
      />
      <mesh
        geometry={nodes.book_inside3002.geometry}
        material={nodes.book_inside3002.material}
        position={[-40.1, 64.74, 1.26]}
      />
      <mesh geometry={nodes.box001.geometry} material={nodes.box001.material} position={[33.5, 22.82, -35.5]} />
      <mesh geometry={nodes.box_file2.geometry} material={nodes.box_file2.material} position={[30, 25.55, -35.2]} />
      <mesh
        geometry={nodes.box_file3001.geometry}
        material={nodes.box_file3001.material}
        position={[33.64, 24.69, -35.2]}
      />
      <mesh geometry={nodes.box_file1.geometry} material={nodes.box_file1.material} position={[28, 25.55, -35.2]} />
      <mesh
        geometry={nodes.box_filename2.geometry}
        material={nodes.box_filename2.material}
        position={[30.75, 28.5, -37]}
      />
      <mesh
        geometry={nodes.box_filename3001.geometry}
        material={nodes.box_filename3001.material}
        position={[32.82, 27.62, -37]}
      />
      <mesh
        geometry={nodes.box_filename1.geometry}
        material={nodes.box_filename1.material}
        position={[28.75, 28.5, -37]}
      />
      <mesh
        geometry={nodes.button_plate001.geometry}
        material={nodes.button_plate001.material}
        position={[-22, 27, -27]}
      />
      <mesh
        geometry={nodes.button_push1001.geometry}
        material={nodes.button_push1001.material}
        position={[-22, 29, -21]}
      />
      <mesh
        geometry={nodes.button_push2001.geometry}
        material={nodes.button_push2001.material}
        position={[-22, 29, -27]}
      />
      <mesh
        geometry={nodes.button_push3001.geometry}
        material={nodes.button_push3001.material}
        position={[-22, 29, -33]}
      />
      <mesh
        geometry={nodes.button_shape1001.geometry}
        material={nodes.button_shape1001.material}
        position={[-22, 30.25, -21]}
      />
      <mesh
        geometry={nodes.button_shape2001.geometry}
        material={nodes.button_shape2001.material}
        position={[-22, 30.25, -27.27]}
      />
      <mesh
        geometry={nodes.button_shape3001.geometry}
        material={nodes.button_shape3001.material}
        position={[-22, 30.25, -32.73]}
      />
      <mesh
        geometry={nodes.chair_backbody001.geometry}
        material={nodes.chair_backbody001.material}
        position={[1.58, 27, -13.83]}
      />
      <mesh
        geometry={nodes.chair_backleg1_1.geometry}
        material={nodes.chair_backleg1_1.material}
        position={[3.31, 19, -18.57]}
      />
      <mesh
        geometry={nodes.chair_backleg2.geometry}
        material={nodes.chair_backleg2.material}
        position={[-0.11, 19, -9.17]}
      />
      <mesh geometry={nodes.chair_leg1_1.geometry} material={nodes.chair_leg1_1.material} position={[-7.5, 9, -22.5]} />
      <mesh geometry={nodes.chair_leg2.geometry} material={nodes.chair_leg2.material} position={[1.9, 9, -19.08]} />
      <mesh geometry={nodes.chair_leg3.geometry} material={nodes.chair_leg3.material} position={[-10.92, 9, -13.1]} />
      <mesh
        geometry={nodes['chair_leg3_(1)'].geometry}
        material={nodes['chair_leg3_(1)'].material}
        position={[-1.52, 9, -9.68]}
      />
      <mesh geometry={nodes.chair_sit.geometry} material={nodes.chair_sit.material} position={[-4.51, 14.5, -16.09]} />
      <mesh
        geometry={nodes.wall_cover1.geometry}
        material={nodes.wall_cover1.material}
        position={[-45.25, 52.5, 2.5]}
      />
      <mesh
        geometry={nodes.wall_cover2.geometry}
        material={nodes.wall_cover2.material}
        position={[2.25, 52.5, -45.25]}
      />
      <mesh geometry={nodes.speak_body.geometry} material={nodes.speak_body.material} position={[26, 51.3, -37.5]} />
      <mesh
        geometry={nodes.speak_front.geometry}
        material={nodes.speak_front.material}
        position={[25.8, 51.42, -31.75]}
      />
      <mesh
        geometry={nodes.speak_holeedge1.geometry}
        material={nodes.speak_holeedge1.material}
        position={[26, 56, -31.35]}
      />
      <mesh
        geometry={nodes.speak_holeedge2.geometry}
        material={nodes.speak_holeedge2.material}
        position={[26, 47, -31.35]}
      />
      <mesh
        geometry={nodes.speak_holemain1.geometry}
        material={nodes.speak_holemain1.material}
        position={[26, 56, -30.5]}
      />
      <mesh
        geometry={nodes.speak_holemain2.geometry}
        material={nodes.speak_holemain2.material}
        position={[26, 47, -30.5]}
      />
      <mesh geometry={nodes.speak_hole2.geometry} material={nodes.speak_hole2.material} position={[26, 47, -31.5]} />
      <mesh geometry={nodes.speak_hole1.geometry} material={nodes.speak_hole1.material} position={[26, 56, -31.5]} />
      <mesh
        geometry={nodes.table_body2.geometry}
        material={nodes.table_body2.material}
        position={[33.45, 39.65, -34.75]}
      />
      <mesh
        geometry={nodes.table_bar1.geometry}
        material={nodes.table_bar1.material}
        position={[21.35, 21.5, -30.85]}
      />
      <mesh
        geometry={nodes.table_bar2.geometry}
        material={nodes.table_bar2.material}
        position={[45.55, 21.5, -30.85]}
      />
      <mesh
        geometry={nodes.table_bar3.geometry}
        material={nodes.table_bar3.material}
        position={[21.35, 21.5, -40.85]}
      />
      <mesh
        geometry={nodes.table_bar4.geometry}
        material={nodes.table_bar4.material}
        position={[45.55, 21.5, -40.85]}
      />
      <mesh
        geometry={nodes.table_body1.geometry}
        material={nodes.table_body1.material}
        position={[33.45, 15.65, -34.75]}
      />

      <mesh geometry={nodes.image2.geometry} material={nodes.image2.material} position={[-44.75, 75.22, -13.62]} />
      <mesh geometry={nodes.com_back.geometry} material={nodes.com_back.material} position={[-36.65, 35.35, -28.95]} />
      <mesh
        geometry={nodes.com_front.geometry}
        material={nodes.com_front.material}
        position={[-29.78, 37.55, -28.95]}
      />
      <mesh
        geometry={nodes.com_screen.geometry}
        material={nodes.com_screen.material}
        position={[-30.23, 38.1, -28.95]}
      />
      <mesh geometry={nodes.cup001.geometry} material={nodes.cup001.material} position={[-24.72, 28.55, -8.46]} />
      <mesh geometry={nodes.desk_leg1_1.geometry} material={nodes.desk_leg1_1.material} position={[-30, 13.5, 4.5]} />
      <mesh geometry={nodes.desk_leg2.geometry} material={nodes.desk_leg2.material} position={[-30, 13.5, -40.5]} />
      <mesh geometry={nodes.desk_top001.geometry} material={nodes.desk_top001.material} position={[-30, 24, -18]} />
      <mesh geometry={nodes.floor_main.geometry} material={nodes.floor_main.material} position={[0, 1.5, 0]} />
      <mesh
        geometry={nodes.book_cover3.geometry}
        material={nodes.book_cover3.material}
        position={[-40.25, 64.73, 1.26]}
      />
      <mesh geometry={nodes.light_main.geometry} material={nodes.light_main.material} position={[-36, 39.5, 1]} />
      <mesh
        geometry={nodes.light_stand001.geometry}
        material={nodes.light_stand001.material}
        position={[-36, 31.5, 1]}
      />
      <mesh geometry={nodes.memo1001.geometry} material={nodes.memo1001.material} position={[-28.68, 61.88, -43.85]} />
      <mesh geometry={nodes.memo2001.geometry} material={nodes.memo2001.material} position={[-18, 58, -43.85]} />
      <mesh geometry={nodes.memo3001.geometry} material={nodes.memo3001.material} position={[-9, 66.5, -43.85]} />
      <mesh geometry={nodes.memo4001.geometry} material={nodes.memo4001.material} position={[-22.5, 71.43, -43.85]} />
      <mesh
        geometry={nodes.memoboard001.geometry}
        material={nodes.memoboard001.material}
        position={[-20.22, 63.1, -44.54]}
      />
      <mesh
        geometry={nodes.neon_hello1_1.geometry}
        material={nodes.neon_hello1_1.material}
        position={[17.52, 84.28, -44.25]}
      />
      <mesh
        geometry={nodes.neon_hello2.geometry}
        material={nodes.neon_hello2.material}
        position={[24.49, 84.01, -44.23]}
      />
      <mesh
        geometry={nodes.neon_hello3.geometry}
        material={nodes.neon_hello3.material}
        position={[28.49, 85.14, -44.31]}
      />
      <mesh
        geometry={nodes.neon_hello4.geometry}
        material={nodes.neon_hello4.material}
        position={[31.26, 85.14, -44.31]}
      />
      <mesh
        geometry={nodes.neon_hello5.geometry}
        material={nodes.neon_hello5.material}
        position={[33.97, 84.01, -44.29]}
      />
      <mesh
        geometry={nodes.neon_world1_1.geometry}
        material={nodes.neon_world1_1.material}
        position={[14.7, 75.04, -44.28]}
      />
      <mesh
        geometry={nodes.neon_world2.geometry}
        material={nodes.neon_world2.material}
        position={[21.89, 72.88, -44.29]}
      />
      <mesh
        geometry={nodes.neon_world3.geometry}
        material={nodes.neon_world3.material}
        position={[26.27, 73.23, -44.31]}
      />
      <mesh
        geometry={nodes.neon_world4.geometry}
        material={nodes.neon_world4.material}
        position={[30.52, 74, -44.31]}
      />
      <mesh
        geometry={nodes.neon_world5.geometry}
        material={nodes.neon_world5.material}
        position={[33.9, 73.39, -44.29]}
      />
      
      <mesh geometry={nodes.pic_main3.geometry} material={nodes.pic_main3.material} position={[-44.75, 53.5, 22.75]} />


      <mesh geometry={nodes.pic_main2.geometry} material={nodes.pic_main2.material} position={[-44.75, 58, 36.75]} />

      <mesh position={[-44.75, 44.5, 35.25]} rotation={[0,Math.PI/2,0]} >
        <boxBufferGeometry args={[10,10,0.5]} />
        <meshBasicMaterial attachArray="material" color={'#333333'} />
        <meshBasicMaterial attachArray="material" color={'#333333'} />
        <meshBasicMaterial attachArray="material" color={'#333333'} />
        <meshBasicMaterial attachArray="material" color={'#333333'} />
        <meshBasicMaterial attachArray="material" map={githubTexture}/>
        <meshBasicMaterial attachArray="material" color={'#333333'} />
      </mesh>
      
      
      <mesh geometry={nodes.pic_side3.geometry} material={nodes.pic_side3.material} position={[-44.65, 53.5, 22.75]} />
      <mesh geometry={nodes.pic_side2.geometry} material={nodes.pic_side2.material} position={[-44.65, 58, 36.75]} />
      <mesh
        geometry={nodes.plant_body1001.geometry}
        material={materials['Powder Coat - Rough (Green)']}
        position={[40.59, 56.81, -34.89]}
      />
      <mesh
        geometry={nodes.plant_body2001.geometry}
        material={materials['Powder Coat - Rough (Green).001']}
        position={[37.32, 62.02, -34.37]}
      />
      <mesh
        geometry={nodes.plant_pot001.geometry}
        material={nodes.plant_pot001.material}
        position={[40.27, 46.42, -34.75]}
      />
      <mesh
        geometry={nodes.plant_soil.geometry}
        material={materials['Powder Coat - Rough (Yellow).005']}
        position={[40.27, 45.81, -34.75]}
      />
      <mesh geometry={nodes.rug.geometry} material={nodes.rug.material} position={[15.79, 5.25, 17.8]} />
      <mesh
        geometry={nodes.shelf_body001.geometry}
        material={nodes.shelf_body001.material}
        position={[-40, 58.5, -1.5]}
      />
      <mesh
        geometry={nodes.shelf_leg1_1.geometry}
        material={nodes.shelf_leg1_1.material}
        position={[-41.5, 54.5, -10.5]}
      />
      <mesh geometry={nodes.shelf_leg2.geometry} material={nodes.shelf_leg2.material} position={[-41.5, 54.5, 7.5]} />
      <mesh geometry={nodes.trash001.geometry} material={nodes.trash001.material} position={[11.66, 17.46, -35.88]} />
      <mesh geometry={nodes.trash_can.geometry} material={nodes.trash_can.material} position={[11, 12, -36]} />
      <mesh geometry={nodes.wall_main.geometry} material={nodes.wall_main.material} position={[-15.17, 52.5, -15.17]} />
      <mesh geometry={nodes.wall_bar.geometry} material={nodes.wall_bar.material} position={[-14.08, 10, -14.08]} />
      <mesh geometry={nodes.floor_wood1.geometry} material={nodes.floor_wood1.material} position={[0, 4.6, -5]} />
      <mesh geometry={nodes.floor_wood2.geometry} material={nodes.floor_wood2.material} position={[0, 4.6, -25]} />
      <mesh geometry={nodes.floor_wood3.geometry} material={nodes.floor_wood3.material} position={[0, 4.6, 15]} />
      <mesh geometry={nodes.floor_wood4.geometry} material={nodes.floor_wood4.material} position={[0, 4.49, -42.02]} />
      <mesh geometry={nodes.floor_wood5.geometry} material={nodes.floor_wood5.material} position={[0, 4.6, 35]} />
      <mesh geometry={nodes.floor_wood10.geometry} material={nodes.floor_wood10.material} position={[0, 4.6, -35]} />
      <mesh geometry={nodes.floor_wood6.geometry} material={nodes.floor_wood6.material} position={[0, 4.6, 5]} />
      <mesh geometry={nodes.floor_wood7.geometry} material={nodes.floor_wood7.material} position={[0, 4.6, 25]} />
      <mesh geometry={nodes.floor_wood8.geometry} material={nodes.floor_wood8.material} position={[0, 4.6, -15]} />
      <mesh geometry={nodes.floor_wood9.geometry} material={nodes.floor_wood9.material} position={[0, 4.49, 42.02]} />
      <mesh
        geometry={nodes.bed_bedding2.geometry}
        material={nodes.bed_bedding2.material}
        position={[-10.72, 17.45, 31.46]}
      />
      <mesh
        geometry={nodes.bed_bedding3.geometry}
        material={nodes.bed_bedding3.material}
        position={[-20.88, 17.7, 31.46]}
      />
      <mesh geometry={nodes.bed_down10.geometry} material={nodes.bed_down10.material} position={[6.92, 20.8, 30.8]} />



      
      <mesh geometry={nodes.shoe_bottom2.geometry} material={nodes.shoe_bottom2.material} position={[22.16, 6.1, 21.51]}/>
      <mesh geometry={nodes.shoe_top2.geometry} material={nodes.shoe_top2.material} position={[23.85, 7.75, 22.13]} />
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
    </group>
  )
}

useGLTF.preload('/room_shoetest.gltf')
