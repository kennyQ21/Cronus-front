"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

interface CameraControllerProps {
  isReducedMotion?: boolean | null;
}

export default function CameraController({ isReducedMotion }: CameraControllerProps) {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);
  const targetCameraPos = useRef(new THREE.Vector3(0, 0, 5));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to -1 to 1
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    if (!isReducedMotion) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isReducedMotion]);

  useFrame((state, delta) => {
    if (isReducedMotion) return;

    // Calculate target position
    // Mouse adds a small parallax effect
    const parallaxX = mouse.current.x * 0.5;
    const parallaxY = mouse.current.y * 0.5;
    
    // Scroll moves the camera forward into the z-axis to simulate flying through space
    // and slightly alters the y-axis
    const scrollZ = 5 - (scrollY.current * 0.005); 
    const scrollY_Offset = -(scrollY.current * 0.002);

    targetCameraPos.current.set(parallaxX, parallaxY + scrollY_Offset, scrollZ);

    // Smoothly interpolate current camera position to target
    camera.position.lerp(targetCameraPos.current, 1.5 * delta);
    
    // Look slightly towards the center
    camera.lookAt(0, 0, 0);
  });

  return null;
}
