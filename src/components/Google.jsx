import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "@/components"

const Google = () => {
  
  return (
    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-100 h-100">
    <Canvas camera={{
        position: [8, 2, 1],
        fov: 50,
    }}
    >
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
      />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
    </div>
  )
}

export default Google;
