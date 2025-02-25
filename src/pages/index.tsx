import React, { Suspense, useRef } from 'react';

// Components
import Room from '../components/room2';

// Externals
import { Canvas } from '@react-three/fiber';
import { BakeShadows, CameraControls, Html, Preload, Stage, useHelper, useProgress } from '@react-three/drei';

import CameraControlsImpl from 'camera-controls';
import type { HeadFC, PageProps } from 'gatsby';

// Layouts
import Layout from '../layouts';
import { DirectionalLight, DirectionalLightHelper } from 'three';

const IndexPage: React.FC<PageProps> = () => {
  const dirLight = useRef<DirectionalLight>(null);

  return (
    <Layout>
      <Canvas
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 10] }}
        frameloop="demand"
        orthographic={true}
        shadows={true}
      >
        <Suspense fallback={<Loader />}>
          {/* <ambientLight intensity={1} /> */}
          <directionalLight
            castShadow={true}
            color={0xffffff}
            intensity={7}
            position={[-5, 5, -10]}
            ref={dirLight}
            rotation={[-2, -1, 0]}
          />
          {/* {dirLight.current && <directionalLightHelper args={[dirLight.current, 4, 0xff0000]} />}  */}
          <Stage adjustCamera={false} environment="forest" intensity={0.2} shadows="contact">
            <Room />
          </Stage>

          <Preload all={true} />

          {/* <BakeShadows /> */}

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

  return <Html center={true}>{progress.toFixed(0)}% loaded</Html>;
}

export default IndexPage;

export const Head: HeadFC = () => <title>Pierre Maclot</title>;
