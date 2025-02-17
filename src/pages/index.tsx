import React, { Suspense } from 'react';

// Components
import Room from '../components/room';

// Externals
import { BakeShadows, CameraControls, Html, Preload, Stage, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import CameraControlsImpl from 'camera-controls';
import type { HeadFC, PageProps } from 'gatsby';

// Layouts
import Layout from '../layouts';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Canvas
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 10] }}
        dpr={[1, 2]}
        frameloop="demand"
        orthographic={true}
        shadows={true}
      >
        <Suspense fallback={<Loader />}>
          <Stage adjustCamera={false} environment="forest" intensity={1} shadows="contact">
            <Room />
          </Stage>

          <Preload all={true} />

          <BakeShadows />

          <CameraControls
            enabled={true}
            makeDefault={true}
            maxAzimuthAngle={Math.PI / 1.99999}
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={0.00001}
            minPolarAngle={0}
            mouseButtons={{
              left: CameraControlsImpl.ACTION.ROTATE,
              middle: CameraControlsImpl.ACTION.NONE,
              right: CameraControlsImpl.ACTION.NONE,
              wheel: CameraControlsImpl.ACTION.ZOOM
            }}
            smoothTime={0.5}
            touches={{
              one: CameraControlsImpl.ACTION.TOUCH_ROTATE,
              two: CameraControlsImpl.ACTION.TOUCH_ZOOM,
              three: CameraControlsImpl.ACTION.NONE
            }}
          />
        </Suspense>
      </Canvas>
    </Layout>
  );
};

function Loader() {
  const { progress } = useProgress();

  return <Html center={true}>{progress}% loaded</Html>;
}

export default IndexPage;

export const Head: HeadFC = () => <title>Pierre Maclot</title>;
