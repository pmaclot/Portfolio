import React, { Suspense } from 'react';

// Components
import Room from '../components/room';

// Externals
import { BakeShadows, CameraControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import CameraControlsImpl from 'camera-controls';
import type { HeadFC, PageProps } from 'gatsby';
import { Flex, Spinner } from 'theme-ui';

// Layouts
import Layout from '../layouts';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Suspense
        fallback={
          <Flex
            sx={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', height: '100%', width: '100%' }}
          >
            <Spinner />
          </Flex>
        }
      >
        <Canvas
          camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 10] }}
          dpr={[1, 2]}
          frameloop="demand"
          linear={true}
          orthographic={true}
          shadows={true}
        >
          <Stage adjustCamera={false} shadows={{ type: 'contact', frames: 1 }}>
            <Room />
          </Stage>

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
        </Canvas>
      </Suspense>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Pierre Maclot</title>;
