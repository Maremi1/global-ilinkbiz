import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, TorusKnot, Octahedron } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function Shape({
  position,
  geometry,
  color,
  speed = 1,
  scale = 1,
  orbit = 0,
}: {
  position: [number, number, number];
  geometry: "ico" | "torus" | "octa";
  color: string;
  speed?: number;
  scale?: number;
  orbit?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x += 0.006 * speed;
    ref.current.rotation.y += 0.008 * speed;
    ref.current.rotation.z += 0.003 * speed;
    const m = state.mouse;
    // Slow orbit + cursor parallax
    ref.current.position.x =
      position[0] + Math.cos(t * 0.25 * speed + orbit) * 0.6 + m.x * 0.6;
    ref.current.position.y =
      position[1] + Math.sin(t * 0.3 * speed + orbit) * 0.5 + m.y * 0.6;
    ref.current.position.z =
      position[2] + Math.sin(t * 0.2 * speed + orbit) * 0.4;
  });

  const material = (
    <MeshDistortMaterial
      color={color}
      roughness={0.1}
      metalness={0.85}
      distort={0.45}
      speed={2.4}
      transparent
      opacity={0.9}
      emissive={color}
      emissiveIntensity={0.45}
    />
  );

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={2}>
      {geometry === "ico" && (
        <Icosahedron ref={ref} args={[scale, 1]} position={position}>
          {material}
        </Icosahedron>
      )}
      {geometry === "torus" && (
        <TorusKnot ref={ref} args={[0.7 * scale, 0.22 * scale, 128, 16]} position={position}>
          {material}
        </TorusKnot>
      )}
      {geometry === "octa" && (
        <Octahedron ref={ref} args={[1.1 * scale, 0]} position={position}>
          {material}
        </Octahedron>
      )}
    </Float>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Radial glares */}
      <div className="radial-glare glare-cyan pulse-glow"
           style={{ width: 600, height: 600, top: "-10%", left: "-10%" }} />
      <div className="radial-glare glare-blue pulse-glow"
           style={{ width: 700, height: 700, bottom: "-15%", right: "-10%", animationDelay: "2s" }} />
      <div className="radial-glare glare-cyan pulse-glow"
           style={{ width: 500, height: 500, top: "40%", left: "55%", animationDelay: "4s" }} />

      {/* 3D canvas */}
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1.3} color="#3B82F6" />
          <pointLight position={[-5, -5, -5]} intensity={1.0} color="#0EA5E9" />
          <pointLight position={[0, 5, 2]} intensity={0.8} color="#2563EB" />

          <Shape position={[-3.5, 1.5, 0]} geometry="ico" color="#1D4ED8" speed={0.8} />
          <Shape position={[3.5, -1, -1]} geometry="torus" color="#2563EB" speed={1.1} />
          <Shape position={[0, 2.2, -2]} geometry="octa" color="#0EA5E9" speed={0.9} />
          <Shape position={[-2.5, -2, -1.5]} geometry="torus" color="#3B82F6" speed={0.7} />
          <Shape position={[3, 2, -3]} geometry="ico" color="#1E40AF" speed={1.0} />
        </Suspense>
      </Canvas>

      {/* Very subtle vignette so shapes remain visible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 70%, oklch(0.985 0.008 230 / 0.25) 100%)",
        }}
      />
    </div>
  );
}
