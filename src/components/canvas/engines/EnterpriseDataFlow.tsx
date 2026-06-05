import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function EnterpriseDataFlow() {
  const pointsRef = useRef<THREE.Points>(null);

  const posArr = useMemo(() => {
    const count = 2000;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return arr;
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length / 3; i++) {
        // Move particles along the Z axis (pipeline flow)
        positions[i * 3 + 2] += 0.2;
        if (positions[i * 3 + 2] > 15) {
          positions[i * 3 + 2] = -15; // Reset to start
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group position={[-5, 0, 0]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[posArr, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.08} color="#00D4FF" transparent opacity={0.6} blending={THREE.AdditiveBlending} depthWrite={false} />
      </points>
      
      {/* Container Pipeline Rings */}
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={i} position={[0, 0, (i - 2) * 6]}>
          <ringGeometry args={[4.8, 5, 32]} />
          <meshBasicMaterial color="#60A5FA" transparent opacity={0.2} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}
