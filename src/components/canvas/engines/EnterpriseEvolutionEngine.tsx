import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

export default function EnterpriseEvolutionEngine() {
  const groupRef = useRef<THREE.Group>(null);

  // A constantly expanding fractal-like network
  const nodes = useMemo(() => {
    return Array.from({ length: 60 }).map(() => ({
      pos: new THREE.Vector3(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      ),
      phase: Math.random() * Math.PI * 2
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.rotation.y = t * 0.05;
      groupRef.current.rotation.z = t * 0.02;
      
      // Simulate breathing/expanding
      const scale = 1 + Math.sin(t * 0.5) * 0.1;
      groupRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group position={[-10, 0, 0]} ref={groupRef}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.pos}>
          <sphereGeometry args={[0.2, 8, 8]} />
          <meshBasicMaterial color="#00D4FF" />
        </mesh>
      ))}

      {/* Connecting web */}
      {nodes.map((node, i) => {
        if (i > 0 && i % 3 === 0) {
          const points = [node.pos, nodes[i-1].pos, nodes[0].pos];
          return (
            <Line 
              key={`line-${i}`} 
              points={points} 
              color="#60A5FA" 
              transparent 
              opacity={0.3} 
              lineWidth={1} 
            />
          );
        }
        return null;
      })}
    </group>
  );
}
