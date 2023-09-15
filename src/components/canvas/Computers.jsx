import React, { Suspense, useEffect, useState } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { Html } from '@react-three/drei';
extend({ Html });
import { HexColorPicker } from "react-colorful";
import { proxy, useSnapshot } from "valtio"

const state = proxy({
  current: null,
  items: {
    material: "#f00000"
  },
})


function Model(props) {
  const snap = useSnapshot(state)

  const { nodes, materials } = useGLTF('./audi_r8_3d_model/scene.gltf')
  return (
    
    <group {...props} dispose={null}>
      
      
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, -0.978, -0.316]}>
          <mesh geometry={nodes.wheel_support003_0.geometry} material={materials.material} />
          <mesh geometry={nodes.wheel_support003_1.geometry} material={materials['Material.008']} />
        </group>
        <group position={[0.893, 1.632, -0.413]}>
          <mesh geometry={nodes.back_left_wheel_0.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.back_left_wheel_1.geometry} material={materials.tyre_rin} />
          <mesh geometry={nodes.back_left_wheel_2.geometry} material={materials['Material.007']} />
          <mesh geometry={nodes.back_left_wheel_3.geometry} material={materials.tyre_rin_bolts} />
        </group>
        <group position={[0, 1.062, -0.337]}>
          <mesh geometry={nodes.side_0.geometry} material={materials.material} material-color={snap.items.material}/>
          <mesh geometry={nodes.side_1.geometry} material={materials['Material.008']} />
        </group>
        <group position={[0, 2.374, -0.096]} rotation={[-1.399, 0, -Math.PI]} scale={0.123}>
          <mesh geometry={nodes.license_plate006_0.geometry} material={materials.license_plate} />
          <mesh geometry={nodes.license_plate006_1.geometry} material={materials['Material.008']} />
        </group>
        <group position={[0, -2.435, -0.283]} rotation={[1.399, 0, 0]} scale={0.123}>
          <mesh geometry={nodes.license_plate_0.geometry} material={materials.license_plate} />
          <mesh geometry={nodes.license_plate_1.geometry} material={materials['Material.008']} />
        </group>
        <group position={[0.959, -0.692, 0.138]}>
          <group position={[0.067, 0.056, 0.075]} scale={0.03}>
            <mesh geometry={nodes.left_rear_view_mirror_0.geometry} material={materials.material} />
            <mesh geometry={nodes.left_rear_view_mirror_1.geometry} material={materials.mirror} />
          </group>
          <group position={[-1.985, 0.056, 0.075]} scale={0.03}>
            <mesh geometry={nodes.right_rear_view_mirror_0.geometry} material={materials.material} />
            <mesh geometry={nodes.right_rear_view_mirror_1.geometry} material={materials.mirror} />
          </group>
          <mesh geometry={nodes.left_rear_view_mirror_bottom_0.geometry} material={materials.material} />
        </group>
        <group position={[0, -1.585, -0.044]}>
          <mesh geometry={nodes.hood_0.geometry} material={materials.material} />
          <mesh geometry={nodes.hood_1.geometry} material={materials['Material.008']} />
        </group>
        <group position={[0, 1.601, 0.093]}>
          <mesh geometry={nodes.gas_supply_back_0.geometry} material={materials.material} />
          <mesh geometry={nodes.gas_supply_back_1.geometry} material={materials['Material.008']} />
        </group>
        <group position={[0, -2.069, -0.37]}>
          <mesh geometry={nodes.front_bottom_0.geometry} material={materials.material} />
          <mesh geometry={nodes.front_bottom_1.geometry} material={materials['Material.008']} />
        </group>
        <group position={[0.652, -2.084, -0.181]} rotation={[Math.PI / 2, 0, 0]} scale={0.028}>
          <mesh geometry={nodes.front_left_glass_lights_0.geometry} material={materials['Material.007']} />
          <mesh geometry={nodes.front_left_glass_lights_1.geometry} material={materials['Material.005']} />
          <mesh geometry={nodes.front_left_glass_lights_2.geometry} material={materials['Material.009']} />
        </group>
        <group position={[0.717, -2.011, -0.164]}>
          <mesh geometry={nodes.front_left_glass_inside_0.geometry} material={materials['Material.004']} />
          <mesh geometry={nodes.front_left_glass_inside_1.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.front_left_glass_inside_2.geometry} material={materials['Material.007']} />
          <mesh geometry={nodes.front_left_glass_inside_3.geometry} material={materials['Material.008']} />
          <mesh geometry={nodes.front_left_glass_inside_4.geometry} material={materials.glass_lights} />
        </group>
        <group position={[0, -0.118, -0.572]}>
          <mesh geometry={nodes.bottom_sides_0.geometry} material={materials.material} />
          <mesh geometry={nodes.bottom_sides_1.geometry} material={materials['Material.008']} />
        </group>
        <group position={[0, 2.123, 0.058]} scale={0.063}>
          <mesh geometry={nodes.back_lights_0.geometry} material={materials.BACK_LIGHTS_BACK} />
          <mesh geometry={nodes.back_lights_1.geometry} material={materials.back_lights} />
          <mesh geometry={nodes.back_lights_2.geometry} material={materials['back_lights.002']} />
        </group>
        <group position={[0, 2.207, -0.248]}>
          <mesh geometry={nodes.back_0.geometry} material={materials.material} />
          <mesh geometry={nodes.back_1.geometry} material={materials['Material.008']} />
        </group>
        <group position={[0, 2.185, 0.017]}>
          <mesh geometry={nodes.back_lights_park003_0.geometry} material={materials.BACK_LIGHTS_BACK} />
          <mesh geometry={nodes.back_lights_park003_1.geometry} material={materials['back_lights.002']} />
        </group>
        <group position={[0, 2.138, 0.055]} rotation={[-Math.PI, 0, 0]} scale={[-0.005, 0.005, 0.005]}>
          <mesh geometry={nodes.back_lights003_0.geometry} material={materials['backlight.002']} />
          <mesh geometry={nodes.back_lights003_1.geometry} material={materials.backlight} />
          <mesh geometry={nodes.back_lights003_2.geometry} material={materials['backlight.001']} />
        </group>
        <group position={[-0.001, 1.289, 0.368]} scale={[1.073, 1, 1]}>
          <mesh geometry={nodes.back_glass_0.geometry} material={materials.glass} />
          <mesh geometry={nodes.back_glass_1.geometry} material={materials['Material.008']} />
        </group>
        <group position={[-0.717, -2.011, -0.164]}>
          <mesh geometry={nodes.front_right_glass_inside001_0.geometry} material={materials['Material.004']} />
          <mesh geometry={nodes.front_right_glass_inside001_1.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.front_right_glass_inside001_2.geometry} material={materials['Material.007']} />
          <mesh geometry={nodes.front_right_glass_inside001_3.geometry} material={materials['Material.008']} />
          <mesh geometry={nodes.front_right_glass_inside001_4.geometry} material={materials.glass_lights} />
        </group>
        <group position={[-0.652, -2.084, -0.181]} rotation={[Math.PI / 2, 0, 0]} scale={0.028}>
          <mesh geometry={nodes.front_right_glass_lights_0.geometry} material={materials['Material.007']} />
          <mesh geometry={nodes.front_right_glass_lights_1.geometry} material={materials['Material.005']} />
          <mesh geometry={nodes.front_right_glass_lights_2.geometry} material={materials['Material.009']} />
        </group>
        <group position={[0.893, -1.345, -0.413]}>
          <mesh geometry={nodes.front_left_wheel_0.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.front_left_wheel_1.geometry} material={materials.tyre_rin} />
          <mesh geometry={nodes.front_left_wheel_2.geometry} material={materials['Material.007']} />
          <mesh geometry={nodes.front_left_wheel_3.geometry} material={materials.tyre_rin_bolts} />
        </group>
        <group position={[-0.893, -1.345, -0.413]}>
          <mesh geometry={nodes.front_right_wheel_0.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.front_right_wheel_1.geometry} material={materials.tyre_rin} />
          <mesh geometry={nodes.front_right_wheel_2.geometry} material={materials['Material.007']} />
          <mesh geometry={nodes.front_right_wheel_3.geometry} material={materials.tyre_rin_bolts} />
        </group>
        <group position={[-0.893, 1.632, -0.413]}>
          <mesh geometry={nodes.back_right_wheel_0.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.back_right_wheel_1.geometry} material={materials.tyre_rin} />
          <mesh geometry={nodes.back_right_wheel_2.geometry} material={materials['Material.007']} />
          <mesh geometry={nodes.back_right_wheel_3.geometry} material={materials.tyre_rin_bolts} />
        </group>
        <mesh geometry={nodes.windshield_0.geometry} material={materials.glass} position={[0, -0.846, 0.327]} />
        <mesh geometry={nodes.window_rubber_0.geometry} material={materials.rubber} position={[0, 0.035, 0.298]} />
        <mesh geometry={nodes.window_bar_left_0.geometry} material={materials.material} position={[0.704, -0.122, 0.403]} />
        <mesh geometry={nodes.spoiler_0.geometry} material={materials.material} position={[0, 2.178, 0.158]} />
        <mesh geometry={nodes.rubber_windshield_0.geometry} material={materials.rubber} position={[0, -0.907, 0.283]} />
        <mesh geometry={nodes.roof_0.geometry} material={materials.material} position={[0, 0.402, 0.525]} />
        <mesh geometry={nodes.right_rear_view_mirror_bottom_0.geometry} material={materials.material} position={[-0.959, -0.692, 0.137]} />
        <mesh geometry={nodes.rear_left_window_0.geometry} material={materials.glass} position={[0.781, -0.068, 0.307]} />
        <mesh geometry={nodes.net_front_0.geometry} material={materials['Material.011']} position={[0, -2.409, -0.326]} rotation={[Math.PI / 2, 0, 0]} scale={[0.333, 0.136, 0.136]} />
        <mesh geometry={nodes.light_nets003_0.geometry} material={materials['Material.011']} position={[0, -2.134, -0.335]} />
        <mesh geometry={nodes.inside_plate_front_lights003_0.geometry} material={materials['Material.011']} position={[0, -2.062, -0.355]} />
        <mesh geometry={nodes.inside_plate_front_0.geometry} material={materials['Material.008']} position={[0, -2.368, -0.317]} rotation={[Math.PI / 2, 0, 0]} scale={[0.333, 0.136, 0.136]} />
        <mesh geometry={nodes.inside_plate_back_lights_0.geometry} material={materials['Material.008']} position={[-0.002, 2.125, -0.15]} />
        <mesh geometry={nodes.gas_supply_sides_0.geometry} material={materials['Material.008']} position={[0, 0.774, 0.001]} />
        <mesh geometry={nodes.front_plate_metal_0.geometry} material={materials['Material.012']} position={[0, -2.41, -0.302]} />
        <mesh geometry={nodes.front_bottom_support_0.geometry} material={materials['Material.008']} position={[0, -2.284, -0.603]} />
        <mesh geometry={nodes.front_ailerons_0.geometry} material={materials['Material.011']} position={[0, -2.163, -0.359]} />
        <mesh geometry={nodes.exhaust_pipes_0.geometry} material={materials['Material.012']} position={[0, 2.286, -0.381]} rotation={[Math.PI / 2, 0, 0]} scale={0.044} />
        <mesh geometry={nodes.left_door_0.geometry} material={materials.material} position={[0.969, -0.163, -0.143]} />
        <mesh geometry={nodes.left_door_handle_0.geometry} material={materials.material} position={[1.005, 0.466, 0.013]} />
        <mesh geometry={nodes.break_lights003_0.geometry} material={materials.backlight} position={[-0.002, 0.766, 0.536]} scale={0.007} />
        <mesh geometry={nodes.bottom_back_lights003_0.geometry} material={materials.backlight} position={[-0.005, 2.409, -0.479]} rotation={[-Math.PI, 0, 0]} scale={[-0.009, 0.009, 0.009]} />
        <mesh geometry={nodes.back_lights_glass_0.geometry} material={materials['back_lights.001']} position={[0, 2.133, 0.056]} scale={0.063} />
        <mesh geometry={nodes.back_trunk_0.geometry} material={materials.material} position={[0, 1.983, 0.22]} />
        <mesh geometry={nodes.back_roof_lights_0.geometry} material={materials.back_lights} position={[0, 0.77, 0.536]} />
        <mesh geometry={nodes.back_plate_bottom_0.geometry} material={materials['Material.008']} position={[0, 2.242, -0.561]} />
        <mesh geometry={nodes.back_nets_0.geometry} material={materials.material} position={[0, 2.215, -0.138]} />
        <mesh geometry={nodes.back_bottom_net003_0.geometry} material={materials['Material.011']} position={[0, 2.338, -0.525]} scale={[1, 1, 0.807]} />
        <mesh geometry={nodes.back_bottom_light003_0.geometry} material={materials.back_lights} position={[-0.003, 2.397, -0.479]} />
        <mesh geometry={nodes.back_ailerons_support_0.geometry} material={materials.material} position={[0, 1.209, 0.374]} scale={[1.073, 1, 1]} />
        <mesh geometry={nodes.back_ailerons001_0.geometry} material={materials.material} position={[0.566, 1.148, 0.38]} />
        <mesh geometry={nodes.back_ailerons_0.geometry} material={materials['Material.011']} position={[0, 2.24, -0.136]} />
        <mesh geometry={nodes.audi_back003_0.geometry} material={materials['Material.007']} position={[-0.002, 2.385, 0.068]} rotation={[-1.046, 0, 0]} scale={[-0.027, 0.027, 0.027]} />
        <mesh geometry={nodes.audi_front_0.geometry} material={materials['Material.007']} position={[-0.002, -2.352, -0.094]} rotation={[0.557, 0, -Math.PI]} scale={[-0.027, 0.027, 0.027]} />
        <mesh geometry={nodes.lights_front_glass001_0.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.lights_front_left_glass_0.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.window_bar_right_0.geometry} material={materials.material} position={[-0.704, -0.122, 0.403]} />
        <mesh geometry={nodes.rear_right_window_0.geometry} material={materials.glass} position={[-0.781, -0.068, 0.307]} />
        <mesh geometry={nodes.right_door_0.geometry} material={materials.material} position={[-0.969, -0.163, -0.143]} />
        <mesh geometry={nodes.right_door_handle_0.geometry} material={materials.material} position={[-1.005, 0.466, 0.013]} />
      </group>
    </group>
    
  )
};

// Define the Computers component
// const Computers = () => {
  // Load the 3D model using the useGLTF hook
  // const computer = useGLTF('./audi_r8_3d_model/scene.gltf');

//   return (
//     <mesh>
//       {/* Add ambient light to the scene */}
//       <hemisphereLight intensity={0.4} groundColor="black"/>

//       {/* Add a focused light source */}
//       <pointLight intensity={1}/>

//       <spotLight 
//       position={[-150, 150, 10]}
//       angle={0.12}
//       penumbra={1}
//       intensity={2}
//       castShadow
//       shadow-mapSize={1024}
//       />

//        {/* Render the loaded 3D model */}
//       <primitive 
//       object={computer.scene}
//       scale={1.8}
//       position={[0, -1.5, 0]}
//       rotation={[0.0, 0.0, 0.0]}/>
//     </mesh>
//   );
// };

function Picker() {
  const snap = useSnapshot(state)
  return (
    <div className="absolute xs:bottom-30 bottom-32 w-full flex items-center justify-center h-10">
      <HexColorPicker className="picker" color={snap.items.material} onChange={(color) => (state.items.material = color)}/>
    </div>
  )
}


// Define the ComputersCanvas component
const ComputersCanvas = () => {
  const [material, setMaterial] = useState("#ffffff")
  
  return(
    <>
    <div style={{ width: "100vw", height: "100vh"}}>
      
    <Canvas 
      style={{ touchAction: "none" ,
      pointerEvents: "none"}}
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
    
      <Suspense fallback={null}>
        <hemisphereLight intensity={0.4} groundColor="black"/>
        <spotLight 
            position={[-150, 150, 10]}
            angle={0.12}
            penumbra={1}
            intensity={1.3}
            castShadow
            shadow-mapSize={1024}
      />
        <OrbitControls
          autoRotate
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          enableDamping={false}
  
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          
        />
        <Model 

        scale={1}
        position={[0, 0, 0]}
        customColors={{material:"orange"}}
        />
      </Suspense>

      <Preload all/> {/* Preload all assets used in the scene */}
      </Canvas>
      </div>
     
      
      
      <Picker/>
      
      
      
    </>


    
    
  );
};

export default ComputersCanvas;
