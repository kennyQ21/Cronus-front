import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CloudTopology() {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
      gridRef.current.rotation.x = Math.PI / 4;
    }
  });

  return (
    <group position={[-5, -2, 0]} ref={gridRef}>
      {/* 3D Grid Overlay representing clusters */}
      <gridHelper args={[30, 30, "#00D4FF", "#030712"]} position={[0, 0, 0]} />
      <gridHelper args={[30, 15, "#60A5FA", "#030712"]} position={[0, 2, 0]} />

      {/* Floating K8s Pods / Servers */}
      {Array.from({ length: 16 }).map((_, i) => {
        const x = (i % 4 - 1.5) * 4;
        const z = (Math.floor(i / 4) - 1.5) * 4;
        return (
          <mesh key={i} position={[x, 1, z]}>
            <boxGeometry args={[1, 2, 1]} />
            <meshStandardMaterial color="#020617" emissive="#00D4FF" emissiveIntensity={0.8} wireframe />
          </mesh>
        );
      })}

      {/* Load Balancer Nodes */}
      <mesh position={[0, 5, 0]}>
        <octahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial color="#60A5FA" emissive="#60A5FA" emissiveIntensity={1} />
      </mesh>
    </group>
  );
}
