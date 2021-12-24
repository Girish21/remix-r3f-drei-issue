import { Canvas } from '@react-three/fiber';
import ProjectText from './ProjectText';

export default function ProjectCanvas() {
  return (
    <div className="pcanvas">
      <Canvas
        gl={{ alpha: true, antialias: true }}
        camera={{
          far: 50,
          fov: 70,
          position: [0, 0, 10],
        }}
      >
        <ProjectText />
      </Canvas>
    </div>
  )
}
