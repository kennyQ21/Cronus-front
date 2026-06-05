import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function AIOrchestrationEngine() {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    return Array.from({ length: 40 }).map(() => ({
      pos: new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10
      ),
      size: Math.random() > 0.8 ? 0.3 : 0.1,
      speed: 0.1 + Math.random() * 0.5
    }));
  }, []);

  const lines = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < nodes.length - 1; i++) {
      if (Math.random() > 0.3) {
        points.push(nodes[i].pos, nodes[i + 1].pos);
      }
      if (i > 5 && Math.random() > 0.5) {
        points.push(nodes[i].pos, nodes[i - 5].pos);
      }
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [nodes]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[-5, 0, 0]}>
      {/* Nodes */}
      {nodes.map((node, i) => (
        <mesh key={i} position={node.pos}>
          <octahedronGeometry args={[node.size, 0]} />
          <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={node.size > 0.2 ? 2 : 0.5} wireframe={node.size <= 0.2} />
        </mesh>
      ))}

      {/* Connections */}
      <lineSegments geometry={lines}>
        <lineBasicMaterial color="#60A5FA" transparent opacity={0.2} />
      </lineSegments>

      {/* RAG Pulse Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[8, 0.05, 16, 100]} />
        <meshBasicMaterial color="#7C3AED" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}
