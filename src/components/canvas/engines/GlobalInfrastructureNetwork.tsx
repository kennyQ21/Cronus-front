import React, { useRef, useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useEngineStore } from "@/store/engineStore";

export default function GlobalInfrastructureNetwork() {
  const earthRef = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, "/textures/earth_night_map.png");
  const activeIndustryLayer = useEngineStore((state) => state.activeIndustryLayer);

  // Industry colors mapping
  const getIndustryColor = () => {
    switch(activeIndustryLayer) {
      case "HEALTHCARE": return "#10B981"; // Emerald
      case "FINANCE": return "#3B82F6"; // Blue
      case "MANUFACTURING": return "#F59E0B"; // Amber
      case "RETAIL": return "#8B5CF6"; // Violet
      case "LOGISTICS": return "#EC4899"; // Pink
      default: return "#00D4FF"; // Default Cyan
    }
  };

  const layerColor = getIndustryColor();

  const satellites = useMemo(() => {
    return Array.from({ length: 25 }).map(() => ({
      orbitRadius: 10 + Math.random() * 6,
      orbitSpeed: 0.05 + Math.random() * 0.1,
      angle: Math.random() * Math.PI * 2,
      yOffset: (Math.random() - 0.5) * 10,
      size: 0.05 + Math.random() * 0.1,
    }));
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (earthRef.current) {
      earthRef.current.rotation.y = t * 0.02;
    }
  });

  return (
    <group position={[3, 0, 0]}>
      <group ref={earthRef}>
        <mesh>
          <sphereGeometry args={[8, 64, 64]} />
          <meshStandardMaterial 
            map={texture} 
            emissiveMap={texture}
            emissive={layerColor}
            emissiveIntensity={0.8}
            color="#030712"
            roughness={0.8}
            metalness={0.2}
          />
        </mesh>
        
        <mesh scale={1.03}>
          <sphereGeometry args={[8, 32, 32]} />
          <meshBasicMaterial color={layerColor} transparent opacity={0.05} side={THREE.BackSide} />
        </mesh>

        {Array.from({ length: 15 }).map((_, i) => (
          <mesh key={`ring-${i}`} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
            <torusGeometry args={[8.1 + Math.random() * 0.2, 0.01, 4, 64]} />
            <meshBasicMaterial color={layerColor} transparent opacity={0.15} />
          </mesh>
        ))}
      </group>

      {satellites.map((sat, i) => {
        return (
          <Satellite 
            key={i} 
            radius={sat.orbitRadius} 
            speed={sat.orbitSpeed} 
            initialAngle={sat.angle} 
            yOffset={sat.yOffset} 
            size={sat.size} 
            color={layerColor}
          />
        );
      })}
    </group>
  );
}

function Satellite({ radius, speed, initialAngle, yOffset, size, color }: { radius: number, speed: number, initialAngle: number, yOffset: number, size: number, color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      const angle = initialAngle + t * speed;
      ref.current.position.x = Math.cos(angle) * radius;
      ref.current.position.z = Math.sin(angle) * radius;
      ref.current.position.y = yOffset + Math.sin(t * 0.5 + initialAngle) * 0.5;
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[size, size, size * 2]} />
      <meshStandardMaterial color="#FFFFFF" emissive={color} emissiveIntensity={0.5} />
    </mesh>
  );
}
