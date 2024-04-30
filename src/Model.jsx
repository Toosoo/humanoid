import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/humanoid_robot.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.032, 1, -7]} rotation={[Math.PI / 3, -.3, 0]} >
          <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_1.geometry}
            material={materials.HEAD}
            />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_2.geometry}
            material={materials.EYES}
            />
            </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_3.geometry}
            material={materials.BODY}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_4.geometry}
            material={materials.HINGE}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_5.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_6.geometry}
            material={materials.material_5}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/humanoid_robot.glb')
