import React, { Suspense } from 'react';

// Components
import Room from '../components/room';

// Externals
import { BakeShadows, OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
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
        <Canvas camera={{ position: [10, 10, 10] }} linear={true} orthographic={true} shadows={true}>
          <Stage adjustCamera={1.3} shadows={{ type: 'contact', frames: 1 }}>
            <Room />
          </Stage>

          <BakeShadows />

          <OrbitControls
            enablePan={false}
            enableZoom={false}
            makeDefault={true}
            maxAzimuthAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 3}
            minAzimuthAngle={0}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </Suspense>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Pierre Maclot</title>;
