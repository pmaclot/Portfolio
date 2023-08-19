import React, { useRef, useState } from 'react';

// Externals
import { useCursor, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing';
import randomColor from 'randomcolor';
import { Mesh, MeshPhysicalMaterial, MeshStandardMaterial, PointLight } from 'three';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Circle001: Mesh;
    Circle002: Mesh;
    Circle003: Mesh;
    Circle004: Mesh;
    Circle004_1: Mesh;
    Circle004_2: Mesh;
    Circle005: Mesh;
    Circle005_1: Mesh;
    Circle005_2: Mesh;
    Circle005_3: Mesh;
    Circle007: Mesh;
    Circle007_1: Mesh;
    Circle007_2: Mesh;
    Circle008_1: Mesh;
    Circle008_2: Mesh;
    Circle010: Mesh;
    Circle011_1: Mesh;
    Circle011_2: Mesh;
    Circle012: Mesh;
    Circle012_1: Mesh;
    Circle012_2: Mesh;
    Circle013: Mesh;
    Circle013_1: Mesh;
    Circle013_2: Mesh;
    Circle014_1: Mesh;
    Circle014_2: Mesh;
    Circle015_1: Mesh;
    Circle015_2: Mesh;
    Circle020_1: Mesh;
    Circle020_2: Mesh;
    Circle034: Mesh;
    Circle036: Mesh;
    Circle037: Mesh;
    Circle038: Mesh;
    Circle039: Mesh;
    Circle040: Mesh;
    Circle041: Mesh;
    Circle042: Mesh;
    Circle043: Mesh;
    Circle044: Mesh;
    Circle045: Mesh;
    Circle046: Mesh;
    Circle047: Mesh;
    Circle048: Mesh;
    Circle049: Mesh;
    Circle050: Mesh;
    Circle051: Mesh;
    Circle052: Mesh;
    Circle: Mesh;
    Cone001: Mesh;
    Cone002: Mesh;
    Cone003: Mesh;
    Cone004: Mesh;
    Cone005: Mesh;
    Cone006: Mesh;
    Cone007: Mesh;
    Cone008: Mesh;
    Cone009: Mesh;
    Cone010: Mesh;
    Cone: Mesh;
    Cube001: Mesh;
    Cube002: Mesh;
    Cube004_1: Mesh;
    Cube004_2: Mesh;
    Cube: Mesh;
    Cup: Mesh;
    Cylinder001: Mesh;
    Cylinder002: Mesh;
    Cylinder003: Mesh;
    Cylinder004: Mesh;
    Cylinder005: Mesh;
    Cylinder006: Mesh;
    Cylinder007: Mesh;
    Cylinder008: Mesh;
    Cylinder009: Mesh;
    Cylinder010: Mesh;
    Cylinder: Mesh;
    Plane001: Mesh;
    Plane002: Mesh;
    Plane003: Mesh;
    Plane004: Mesh;
    Plane005: Mesh;
    Plane007: Mesh;
    Plane008: Mesh;
    Plane009: Mesh;
    Plane010: Mesh;
    Plane011: Mesh;
    Plane012: Mesh;
    Plane013: Mesh;
    Plane014: Mesh;
    Plane014_1: Mesh;
    Plane015: Mesh;
    Plane015_1: Mesh;
    Plane015_2: Mesh;
    Plane016: Mesh;
    Plane017: Mesh;
    Plane017_1: Mesh;
    Plane018: Mesh;
    Plane018_1: Mesh;
    Plane019: Mesh;
    Plane019_1: Mesh;
    Plane021: Mesh;
    Plane021_1: Mesh;
    Plane022: Mesh;
    Plane022_1: Mesh;
    Plane024: Mesh;
    Plane025: Mesh;
    Plane025_1: Mesh;
    Plane025_2: Mesh;
    Plane026: Mesh;
    Plane027: Mesh;
    Plane027_1: Mesh;
    Plane027_2: Mesh;
    Plane028_1: Mesh;
    Plane028_2: Mesh;
    Plane030_1: Mesh;
    Plane030_2: Mesh;
    Plane031: Mesh;
    Plane032_1: Mesh;
    Plane032_2: Mesh;
    Plane033: Mesh;
    Plane033_1: Mesh;
    Plane033_2: Mesh;
    Plane034: Mesh;
    Plane035: Mesh;
    Plane036: Mesh;
    Plane037: Mesh;
    Plane039: Mesh;
    Plane041: Mesh;
    Plane042: Mesh;
    Plane043: Mesh;
    Plane044: Mesh;
    Plane045: Mesh;
    Plane046: Mesh;
    Plane047: Mesh;
    Plane050: Mesh;
    Plane052: Mesh;
    Plane055: Mesh;
    Plane056: Mesh;
    Plane059: Mesh;
    Plane062: Mesh;
    Plane063: Mesh;
    Plane065: Mesh;
    Plane066: Mesh;
    Plane070: Mesh;
    Plane070_1: Mesh;
    Plane071: Mesh;
    Plane071_1: Mesh;
    Plane072: Mesh;
    Plane072_1: Mesh;
    Plane074: Mesh;
    Plane074_1: Mesh;
    Plane077_1: Mesh;
    Plane077_2: Mesh;
    Plane078: Mesh;
    Plane079_1: Mesh;
    Plane079_2: Mesh;
    Plane079_3: Mesh;
    Plane079_4: Mesh;
    Plane079_5: Mesh;
    Plane079_6: Mesh;
    Plane079_7: Mesh;
    Plane079_8: Mesh;
    Plane080_1: Mesh;
    Plane080_2: Mesh;
    Plane081: Mesh;
    Plane081_1: Mesh;
    Plane081_2: Mesh;
    Plane082: Mesh;
    Plane083_1: Mesh;
    Plane083_2: Mesh;
    Plane088: Mesh;
    Plane088_1: Mesh;
    Plane: Mesh;
    Plane_1: Mesh;
    Plane_2: Mesh;
    Poster001: Mesh;
    Poster: Mesh;
    Projector: Mesh;
    Shelf001: Mesh;
    Shelf002: Mesh;
    Shelf: Mesh;
    Sofa: Mesh;
    Torus001: Mesh;
    Torus001_1: Mesh;
    Torus001_2: Mesh;
    Torus001_3: Mesh;
    Torus001_4: Mesh;
    Torus001_5: Mesh;
    Vert001: Mesh;
    Vert: Mesh;
    forza: Mesh;
    halo: Mesh;
  };
  materials: {
    ['Black']: MeshStandardMaterial;
    ['Black.001']: MeshStandardMaterial;
    ['Black.002']: MeshStandardMaterial;
    Floor: MeshStandardMaterial;
    Glass: MeshPhysicalMaterial;
    Green: MeshStandardMaterial;
    Metal: MeshStandardMaterial;
    Screen: MeshStandardMaterial;
    Sofa: MeshStandardMaterial;
    White: MeshStandardMaterial;
    ['Material.001']: MeshStandardMaterial;
    ['Material.003']: MeshStandardMaterial;
    ['Material.009']: MeshStandardMaterial;
    ['Material.010']: MeshStandardMaterial;
    ['Material.011']: MeshStandardMaterial;
    ['Material.012']: MeshStandardMaterial;
    ['Material.013']: MeshStandardMaterial;
    ['Material.014']: MeshStandardMaterial;
    ['ambiant light']: MeshStandardMaterial;
    ['light']: MeshStandardMaterial;
    ['light.001']: MeshStandardMaterial;
    ['light.002']: MeshStandardMaterial;
    ['light.003']: MeshStandardMaterial;
    r: MeshPhysicalMaterial;
    g: MeshPhysicalMaterial;
    b: MeshPhysicalMaterial;
    v: MeshPhysicalMaterial;
    bulb: MeshStandardMaterial;
    forza: MeshStandardMaterial;
    halo: MeshStandardMaterial;
  };
};

const Room: React.FC<GroupProps> = (props) => {
  const { nodes, materials } = useGLTF('/models/room.glb') as GLTFResult;

  const [ambiantLight, setAmbiantLight] = useState<string>('#ab61ff');
  const [deskLight, setDeskLight] = useState<boolean>(true);

  const [desktopHovered, setDesktopHovered] = useState<boolean>(false);
  const [lightHovered, setLightHovered] = useState<boolean>(false);

  useCursor(desktopHovered || lightHovered, 'pointer', 'auto');

  const bulbMeshRef = useRef<Mesh>(null!);
  const fan1MeshRef = useRef<Mesh>(null!);
  const fan2MeshRef = useRef<Mesh>(null!);
  const desktop1MeshRef = useRef<Mesh>(null!);
  const desktop2MeshRef = useRef<Mesh>(null!);
  const screenMeshRef = useRef<Mesh>(null!);
  const tvStandMeshRef = useRef<Mesh>(null!);

  const deskLightRef = useRef<PointLight>(null!);
  const desktopLightRef = useRef<PointLight>(null!);
  const shelfLightRef = useRef<PointLight>(null!);

  const handleChangeAmbiantLight = (): void => {
    // Updating the ambiant light color
    const newAmbiantLight = randomColor({ luminosity: 'dark' });

    // Cloning material to avoid mutating the original
    const newAmbiantLightMaterial = materials['ambiant light'].clone();

    // Updating the emissive color
    newAmbiantLightMaterial.emissive.set(newAmbiantLight);

    // Updating the ambiant light color
    setAmbiantLight(newAmbiantLight);

    // Updating the material
    materials['ambiant light'] = newAmbiantLightMaterial;
    materials['ambiant light'].needsUpdate = true;
  };

  const handleToggleDeskLight = (): void => {
    // Updating the desk light
    setDeskLight((prevDeskLight) => !prevDeskLight);
  };

  return (
    <>
      <group {...props} dispose={null}>
        {/* Sofa */}
        <mesh
          castShadow={true}
          geometry={nodes.Sofa.geometry}
          material={materials.Sofa}
          position={[2.941, 0, 2.02]}
          receiveShadow={true}
          rotation={[0, Math.PI / 2, 0]}
          scale={1.35}
        >
          <mesh
            castShadow={true}
            geometry={nodes.Circle.geometry}
            material={materials.Metal}
            position={[-0.714, 0, -2.194]}
            receiveShadow={true}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh castShadow={true} geometry={nodes.Circle001.geometry} material={materials.Metal} receiveShadow={true} />
          <mesh
            castShadow={true}
            geometry={nodes.Plane001.geometry}
            material={materials.Sofa}
            position={[-0.714, 0, -2.194]}
            receiveShadow={true}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Plane002.geometry}
            material={materials.Sofa}
            position={[-0.599, 0.656, -1.422]}
            receiveShadow={true}
            rotation={[0, -Math.PI / 2, 0]}
            scale={0.855}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Plane003.geometry}
            material={materials.Sofa}
            position={[-0.599, 0.656, -2.976]}
            receiveShadow={true}
            rotation={[0, -Math.PI / 2, 0]}
            scale={0.855}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Plane004.geometry}
            material={materials.Sofa}
            position={[-1.402, 1.147, -1.422]}
            receiveShadow={true}
            rotation={[-Math.PI / 2, -0.086, -Math.PI / 2]}
            scale={0.855}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Plane005.geometry}
            material={materials.Sofa}
            position={[-1.402, 1.147, -2.976]}
            receiveShadow={true}
            rotation={[-Math.PI / 2, -0.086, -Math.PI / 2]}
            scale={0.855}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Plane007.geometry}
            material={materials.Sofa}
            position={[1.067, 0.656, -0.114]}
            receiveShadow={true}
            scale={0.855}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Plane008.geometry}
            material={materials.Sofa}
            position={[-0.487, 0.656, -0.114]}
            receiveShadow={true}
            scale={0.855}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Plane009.geometry}
            material={materials.Sofa}
            position={[1.067, 1.147, 0.689]}
            receiveShadow={true}
            rotation={[-1.485, 0, 0]}
            scale={0.855}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Plane010.geometry}
            material={materials.Sofa}
            position={[-0.487, 1.147, 0.689]}
            receiveShadow={true}
            rotation={[-1.485, 0, 0]}
            scale={0.855}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Plane011.geometry}
            material={materials.Sofa}
            position={[-1.404, 1.147, 0.063]}
            receiveShadow={true}
            rotation={[-Math.PI / 2, -0.086, -Math.PI / 2]}
            scale={[0.797, 0.855, 0.855]}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Plane012.geometry}
            material={materials.Sofa}
            position={[-0.6, 0.814, -3.578]}
            receiveShadow={true}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Plane013.geometry}
            material={materials.Sofa}
            position={[1.71, 0.814, -0.131]}
            receiveShadow={true}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
        </mesh>
        {/* Desk */}
        <group position={[0.551, 0, -3.143]}>
          <mesh castShadow={true} geometry={nodes.Plane014.geometry} material={materials.White} receiveShadow={true} />
          <mesh
            castShadow={true}
            geometry={nodes.Plane014_1.geometry}
            material={materials['Black']}
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Circle002.geometry} material={materials.Metal} receiveShadow={true} />
          <group position={[-1.407, 1.738, 0.461]} rotation={[-0.206, 0, 0]} scale={1.872}>
            <mesh
              castShadow={true}
              geometry={nodes.Circle005_1.geometry}
              material={materials.Metal}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Circle005_2.geometry}
              material={materials.White}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Circle005_3.geometry}
              material={materials['Black']}
              receiveShadow={true}
            />
          </group>
          <mesh
            castShadow={true}
            geometry={nodes.Circle007.geometry}
            material={materials['Black']}
            onClick={handleToggleDeskLight}
            onPointerOut={() => setLightHovered(false)}
            onPointerOver={() => setLightHovered(true)}
            position={[2.226, 1.748, -0.224]}
            receiveShadow={true}
            scale={1.396}
          >
            <group position={[0, 0.746, 0.38]} scale={1.158}>
              <mesh
                castShadow={true}
                geometry={nodes.Circle007_1.geometry}
                material={materials['Black']}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle007_2.geometry}
                material={deskLight ? materials.bulb : materials.Glass}
                receiveShadow={true}
                ref={bulbMeshRef}
              />
            </group>
            <pointLight
              castShadow={true}
              color="#ffad63"
              decay={2}
              intensity={0.8}
              position={[0.09, 0.415, 0.428]}
              ref={deskLightRef}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.7}
              shadow-mapSize-height={4096}
              shadow-mapSize-width={4096}
              visible={deskLight}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Vert.geometry}
              material={materials.Metal}
              position={[0, 0.128, 0]}
              receiveShadow={true}
            />
          </mesh>
          <mesh
            castShadow={true}
            geometry={nodes.Cup.geometry}
            material={materials['Black']}
            position={[1.672, 1.755, 0.505]}
            receiveShadow={true}
            rotation={[0, 0.586, 0]}
            scale={3.042}
          >
            <mesh castShadow={true} geometry={nodes.Circle050.geometry} material={materials.v} receiveShadow={true} />
            <mesh
              castShadow={true}
              geometry={nodes.Circle051.geometry}
              material={materials['Black']}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Circle052.geometry}
              material={nodes.Circle052.material}
              receiveShadow={true}
            />
          </mesh>
          <group position={[0.038, 1.748, -0.666]} scale={1.19}>
            <mesh
              castShadow={true}
              geometry={nodes.Plane015.geometry}
              material={materials['Black']}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Plane015_1.geometry}
              material={materials.Screen}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Plane015_2.geometry}
              material={materials['ambiant light']}
              receiveShadow={true}
              ref={screenMeshRef}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Circle004.geometry}
              material={materials.Metal}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Circle005.geometry}
              material={materials.Metal}
              receiveShadow={true}
            />
          </group>
          <mesh
            castShadow={true}
            geometry={nodes.Plane025.geometry}
            material={materials.White}
            position={[-0.177, 1.755, 0.573]}
            receiveShadow={true}
            rotation={[0.043, 0, 0]}
            scale={1.293}
          >
            <mesh
              castShadow={true}
              geometry={nodes.Plane024.geometry}
              material={materials.Metal}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Plane082.geometry}
              material={materials['Black']}
              position={[0.105, 0.011, -0.039]}
              receiveShadow={true}
            />
          </mesh>
          <mesh
            castShadow={true}
            geometry={nodes.Plane027.geometry}
            material={materials['Black.001']}
            position={[1.004, 1.746, 0.469]}
            receiveShadow={true}
            scale={1.151}
          >
            <mesh
              castShadow={true}
              geometry={nodes.Plane026.geometry}
              material={materials['Black']}
              position={[-0.085, 0.001, 0.057]}
              receiveShadow={true}
              scale={1.26}
            >
              <mesh
                castShadow={true}
                geometry={nodes.Cylinder.geometry}
                material={materials.Metal}
                position={[0.007, 0.042, -0.077]}
                receiveShadow={true}
                scale={1.213}
              >
                <mesh
                  castShadow={true}
                  geometry={nodes.Cube.geometry}
                  material={nodes.Cube.material}
                  position={[0, 0.008, 0]}
                  receiveShadow={true}
                />
              </mesh>
            </mesh>
          </mesh>
          <group
            onClick={handleChangeAmbiantLight}
            onPointerOut={() => setDesktopHovered(false)}
            onPointerOver={() => setDesktopHovered(true)}
            position={[-2.264, 1.748, -0.016]}
          >
            <mesh
              castShadow={true}
              geometry={nodes.Plane070.geometry}
              material={materials.White}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Plane070_1.geometry}
              material={materials['Black.001']}
              receiveShadow={true}
            />
            <group position={[0, 0.802, 0.607]}>
              <mesh
                castShadow={true}
                geometry={nodes.Circle008_1.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle008_2.geometry}
                material={materials['ambiant light']}
                receiveShadow={true}
                ref={fan1MeshRef}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle010.geometry}
                material={nodes.Circle010.material}
                position={[0.001, -0.002, 0.068]}
                receiveShadow={true}
              />
            </group>
            <group position={[0, 0.341, 0.607]}>
              <mesh
                castShadow={true}
                geometry={nodes.Circle008_1.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle008_2.geometry}
                material={materials['ambiant light']}
                receiveShadow={true}
                ref={fan2MeshRef}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle012.geometry}
                material={nodes.Circle012.material}
                position={[0.001, -0.002, 0.068]}
                receiveShadow={true}
              />
            </group>
            <mesh
              castShadow={true}
              geometry={nodes.Cube002.geometry}
              material={materials['Black']}
              position={[0.081, 0.708, 0.248]}
              receiveShadow={true}
              scale={0.754}
            />
            <group position={[0.037, 0.415, 0.298]}>
              <mesh
                castShadow={true}
                geometry={nodes.Cube004_1.geometry}
                material={materials['Black']}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Cube004_2.geometry}
                material={materials['ambiant light']}
                receiveShadow={true}
                ref={desktop1MeshRef}
              />
            </group>
            <group position={[0.037, 0.279, 0.298]}>
              <mesh
                castShadow={true}
                geometry={nodes.Cube004_1.geometry}
                material={materials['Black']}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Cube004_2.geometry}
                material={materials['ambiant light']}
                receiveShadow={true}
                ref={desktop2MeshRef}
              />
            </group>
            <mesh
              castShadow={true}
              geometry={nodes.Plane041.geometry}
              material={materials.Glass}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Plane042.geometry}
              material={materials['Black']}
              position={[-0.255, 0.529, 0.125]}
              receiveShadow={true}
              scale={0.927}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Plane043.geometry}
              material={materials['Black']}
              position={[-0.141, 0.671, -0.116]}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Plane044.geometry}
              material={materials['Black']}
              position={[-0.141, 0.671, -0.156]}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Plane045.geometry}
              material={materials['Black']}
              position={[-0.141, 0.671, -0.196]}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Plane046.geometry}
              material={materials['Black']}
              position={[-0.141, 0.671, -0.241]}
              receiveShadow={true}
            />
            <pointLight
              castShadow={true}
              color={ambiantLight}
              decay={2}
              intensity={0.5}
              position={[0.074, 0.935, -0.254]}
              ref={desktopLightRef}
              rotation={[-Math.PI / 2, 0, 0]}
              shadow-mapSize-height={4096}
              shadow-mapSize-width={4096}
            />
          </group>
        </group>
        {/* PS Cabinet */}
        <group position={[-3.357, 0, 0.667]}>
          <mesh
            castShadow={true}
            geometry={nodes.Plane017.geometry}
            material={materials['Black']}
            receiveShadow={true}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Plane017_1.geometry}
            material={materials['ambiant light']}
            receiveShadow={true}
            ref={tvStandMeshRef}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Circle003.geometry}
            material={materials.Metal}
            receiveShadow={true}
            rotation={[0, 1.571, 0]}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Plane039.geometry}
            material={materials.White}
            position={[-0.003, 0.892, -0.068]}
            receiveShadow={true}
            scale={[1.022, 1.158, 1.022]}
          >
            <mesh
              castShadow={true}
              geometry={nodes.Plane037.geometry}
              material={materials.White}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Plane077_1.geometry}
              material={materials['Black']}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Plane077_2.geometry}
              material={materials['light.002']}
              receiveShadow={true}
            />
          </mesh>
          <group position={[0.024, 0.892, -1.524]} scale={0.797}>
            <mesh castShadow={true} geometry={nodes.Plane079_1.geometry} material={materials.g} receiveShadow={true} />
            <mesh castShadow={true} geometry={nodes.Plane079_2.geometry} material={materials.r} receiveShadow={true} />
            <mesh castShadow={true} geometry={nodes.Plane079_3.geometry} material={materials.b} receiveShadow={true} />
            <mesh castShadow={true} geometry={nodes.Plane079_4.geometry} material={materials.v} receiveShadow={true} />
            <mesh
              castShadow={true}
              geometry={nodes.Plane079_5.geometry}
              material={materials['light']}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Plane079_6.geometry}
              material={materials['light.001']}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Plane079_7.geometry}
              material={materials['light.002']}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Plane079_8.geometry}
              material={materials['light.003']}
              receiveShadow={true}
            />
          </group>
          <group position={[-0.159, 0.932, 1.02]} rotation={[0, 1.571, 0]} scale={0.91}>
            <mesh
              castShadow={true}
              geometry={nodes.Plane080_1.geometry}
              material={materials['Black']}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Plane080_2.geometry}
              material={materials['light.002']}
              receiveShadow={true}
            />
            <group position={[-0.088, 0.108, -0.07]} scale={0.609}>
              <mesh
                castShadow={true}
                geometry={nodes.Circle011_1.geometry}
                material={materials['Black.001']}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle011_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <group position={[0.154, 0.11, -0.169]}>
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_1.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <group position={[0.154, 0.11, -0.116]}>
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_1.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <group position={[0.181, 0.11, -0.142]} rotation={[0, -1.571, 0]}>
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_1.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <group position={[0.128, 0.11, -0.142]} rotation={[0, -1.571, 0]}>
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_1.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <mesh
              castShadow={true}
              geometry={nodes.Plane047.geometry}
              material={materials.White}
              position={[0, 0.005, 0]}
              receiveShadow={true}
            />
            <group position={[-0.157, 0.109, -0.14]}>
              <mesh
                castShadow={true}
                geometry={nodes.Plane081_1.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Plane081_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <group position={[-0.157, 0.109, -0.14]} rotation={[0, 1.571, 0]}>
              <mesh
                castShadow={true}
                geometry={nodes.Plane018.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Plane018_1.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <mesh
              castShadow={true}
              geometry={nodes.Plane050.geometry}
              material={nodes.Plane050.material}
              position={[0, -0.068, 0]}
              receiveShadow={true}
            />
          </group>
          <group position={[0.28, 0.932, 1.02]} rotation={[0, 1.571, 0]} scale={0.91}>
            <mesh
              castShadow={true}
              geometry={nodes.Plane019.geometry}
              material={materials['Black']}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Plane019_1.geometry}
              material={materials['light.002']}
              receiveShadow={true}
            />
            <group position={[-0.088, 0.108, -0.07]} scale={0.609}>
              <mesh
                castShadow={true}
                geometry={nodes.Circle013_1.geometry}
                material={materials['Black.001']}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle013_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <group position={[0.154, 0.11, -0.169]}>
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_1.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <group position={[0.154, 0.11, -0.116]}>
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_1.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <group position={[0.181, 0.11, -0.142]} rotation={[0, -1.571, 0]}>
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_1.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <group position={[0.128, 0.11, -0.142]} rotation={[0, -1.571, 0]}>
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_1.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <mesh
              castShadow={true}
              geometry={nodes.Plane056.geometry}
              material={materials.White}
              position={[0, 0.005, 0]}
              receiveShadow={true}
            />
            <group position={[-0.157, 0.109, -0.14]}>
              <mesh
                castShadow={true}
                geometry={nodes.Plane021.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Plane021_1.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <group position={[-0.157, 0.109, -0.14]} rotation={[0, 1.571, 0]}>
              <mesh
                castShadow={true}
                geometry={nodes.Plane022.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Plane022_1.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <mesh
              castShadow={true}
              geometry={nodes.Plane059.geometry}
              material={nodes.Plane059.material}
              position={[0, -0.068, 0]}
              receiveShadow={true}
            />
          </group>
          <group position={[0.28, 0.932, 1.74]} rotation={[0, 1.571, 0]} scale={0.91}>
            <mesh
              castShadow={true}
              geometry={nodes.Plane025_1.geometry}
              material={materials['Black']}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Plane025_2.geometry}
              material={materials['light.002']}
              receiveShadow={true}
            />
            <group position={[-0.088, 0.108, -0.07]} scale={0.609}>
              <mesh
                castShadow={true}
                geometry={nodes.Circle014_1.geometry}
                material={materials['Black.001']}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle014_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <group position={[0.154, 0.11, -0.169]}>
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_1.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <group position={[0.154, 0.11, -0.116]}>
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_1.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <group position={[0.181, 0.11, -0.142]} rotation={[0, -1.571, 0]}>
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_1.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <group position={[0.128, 0.11, -0.142]} rotation={[0, -1.571, 0]}>
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_1.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <mesh
              castShadow={true}
              geometry={nodes.Plane052.geometry}
              material={materials.White}
              position={[0, 0.005, 0]}
              receiveShadow={true}
            />
            <group position={[-0.157, 0.109, -0.14]}>
              <mesh
                castShadow={true}
                geometry={nodes.Plane027_1.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Plane027_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <group position={[-0.157, 0.109, -0.14]} rotation={[0, 1.571, 0]}>
              <mesh
                castShadow={true}
                geometry={nodes.Plane028_1.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Plane028_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <mesh
              castShadow={true}
              geometry={nodes.Plane055.geometry}
              material={nodes.Plane055.material}
              position={[0, -0.068, 0]}
              receiveShadow={true}
            />
          </group>
          <group position={[-0.159, 0.932, 1.74]} rotation={[0, 1.571, 0]} scale={0.91}>
            <mesh
              castShadow={true}
              geometry={nodes.Plane030_1.geometry}
              material={materials['Black']}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Plane030_2.geometry}
              material={materials['light.002']}
              receiveShadow={true}
            />
            <group position={[-0.088, 0.108, -0.07]} scale={0.609}>
              <mesh
                castShadow={true}
                geometry={nodes.Circle015_1.geometry}
                material={materials['Black.001']}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle015_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <group position={[0.154, 0.11, -0.169]}>
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_1.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <group position={[0.154, 0.11, -0.116]}>
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_1.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <group position={[0.181, 0.11, -0.142]} rotation={[0, -1.571, 0]}>
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_1.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <group position={[0.128, 0.11, -0.142]} rotation={[0, -1.571, 0]}>
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_1.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle012_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <mesh
              castShadow={true}
              geometry={nodes.Plane078.geometry}
              material={materials.White}
              position={[0, 0.005, 0]}
              receiveShadow={true}
            />
            <group position={[-0.157, 0.109, -0.14]}>
              <mesh
                castShadow={true}
                geometry={nodes.Plane032_1.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Plane032_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <group position={[-0.157, 0.109, -0.14]} rotation={[0, 1.571, 0]}>
              <mesh
                castShadow={true}
                geometry={nodes.Plane033_1.geometry}
                material={materials.White}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Plane033_2.geometry}
                material={materials['light.002']}
                receiveShadow={true}
              />
            </group>
            <mesh
              castShadow={true}
              geometry={nodes.Plane081.geometry}
              material={nodes.Plane081.material}
              position={[0, -0.068, 0]}
              receiveShadow={true}
            />
          </group>
        </group>
        {/* Shelf Star Wars */}
        <mesh
          castShadow={true}
          geometry={nodes.Shelf002.geometry}
          material={materials['Black']}
          position={[-4, 2.517, -3.116]}
          receiveShadow={true}
        >
          <mesh
            castShadow={true}
            geometry={nodes.Circle034.geometry}
            material={materials['Black']}
            position={[0.327, 0.163, 0.37]}
            receiveShadow={true}
            scale={0.858}
          >
            <mesh
              castShadow={true}
              geometry={nodes.Circle038.geometry}
              material={nodes.Circle038.material}
              position={[0, 0.043, 0]}
              receiveShadow={true}
              rotation={[0, 1.571, 0]}
              scale={0.369}
            >
              <group position={[0, 3.26, 0]}>
                <mesh
                  castShadow={true}
                  geometry={nodes.Circle020_1.geometry}
                  material={materials.White}
                  receiveShadow={true}
                />
                <mesh
                  castShadow={true}
                  geometry={nodes.Circle020_2.geometry}
                  material={materials['Black']}
                  receiveShadow={true}
                />
              </group>
              <mesh
                castShadow={true}
                geometry={nodes.Circle036.geometry}
                material={materials['Black.001']}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle037.geometry}
                material={nodes.Circle037.material}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle039.geometry}
                material={nodes.Circle039.material}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle040.geometry}
                material={nodes.Circle040.material}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle041.geometry}
                material={nodes.Circle041.material}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle042.geometry}
                material={nodes.Circle042.material}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle043.geometry}
                material={nodes.Circle043.material}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle044.geometry}
                material={nodes.Circle044.material}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle045.geometry}
                material={nodes.Circle045.material}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle046.geometry}
                material={nodes.Circle046.material}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Circle047.geometry}
                material={nodes.Circle047.material}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Cylinder009.geometry}
                material={materials['Black']}
                position={[-0.917, 1.657, 0.397]}
                receiveShadow={true}
                rotation={[2.831, -0.047, 1.913]}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Cylinder010.geometry}
                material={nodes.Cylinder010.material}
                position={[-0.004, 2.167, -0.213]}
                receiveShadow={true}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Plane065.geometry}
                material={nodes.Plane065.material}
                position={[0.005, 2.772, -0.205]}
                receiveShadow={true}
                rotation={[-1.491, 0, 0]}
              />
            </mesh>
          </mesh>
          <pointLight
            castShadow={true}
            color={ambiantLight}
            decay={2}
            intensity={0.35}
            position={[0.196, 1.188, -0.01]}
            ref={shelfLightRef}
            rotation={[-Math.PI / 2, 0, 0]}
            shadow-mapSize-height={4096}
            shadow-mapSize-width={4096}
          />
        </mesh>
        {/* Shelf Car */}
        <mesh
          castShadow={true}
          geometry={nodes.Shelf.geometry}
          material={materials['Black']}
          position={[-4, 3.912, -3.116]}
          receiveShadow={true}
        >
          <group position={[0.296, 0.298, 0.163]} rotation={[-Math.PI / 2, 0.003, 0]} scale={0.028}>
            <mesh
              castShadow={true}
              geometry={nodes.Torus001.geometry}
              material={materials['Material.010']}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Torus001_1.geometry}
              material={materials['Material.009']}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Torus001_2.geometry}
              material={materials['Material.011']}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Torus001_3.geometry}
              material={materials['Material.012']}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Torus001_4.geometry}
              material={materials['Material.013']}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Torus001_5.geometry}
              material={materials['Material.014']}
              receiveShadow={true}
            />
          </group>
        </mesh>
        {/* Shelf Plant */}
        <mesh
          castShadow={true}
          geometry={nodes.Shelf001.geometry}
          material={materials['Black']}
          position={[-3.116, 3.21, -4.008]}
          receiveShadow={true}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            castShadow={true}
            geometry={nodes.Circle049.geometry}
            material={materials.White}
            position={[0.378, 0.164, -0.581]}
            receiveShadow={true}
            rotation={[-Math.PI, 0.754, -Math.PI]}
            scale={3.851}
          >
            <mesh
              castShadow={true}
              geometry={nodes.Circle048.geometry}
              material={materials['Black.001']}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Cone.geometry}
              material={materials.Green}
              position={[-0.005, 0.092, 0.007]}
              receiveShadow={true}
              rotation={[0.812, 1.022, -0.814]}
              scale={1.63}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Cone001.geometry}
              material={materials.Green}
              position={[0.011, 0.092, -0.01]}
              receiveShadow={true}
              rotation={[2.636, 0.73, -2.863]}
              scale={1.437}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Cone002.geometry}
              material={materials.Green}
              position={[-0.009, 0.092, -0.021]}
              receiveShadow={true}
              rotation={[2.725, -0.471, 2.869]}
              scale={1.325}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Cone003.geometry}
              material={materials.Green}
              position={[-0.023, 0.092, 0.01]}
              receiveShadow={true}
              rotation={[1.833, -1.188, 1.778]}
              scale={1.134}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Cone004.geometry}
              material={materials.Green}
              position={[0.013, 0.092, 0.006]}
              receiveShadow={true}
              rotation={[0.771, 0.72, -0.784]}
              scale={1.21}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Cone005.geometry}
              material={materials.Green}
              position={[-0.011, 0.092, -0.009]}
              receiveShadow={true}
              rotation={[2.53, -0.891, 2.568]}
              scale={1.743}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Cone006.geometry}
              material={materials.Green}
              position={[-0.02, 0.085, 0.023]}
              receiveShadow={true}
              rotation={[0.975, -0.705, 0.722]}
              scale={0.932}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Cone007.geometry}
              material={materials.Green}
              position={[-0.016, 0.085, -0.015]}
              receiveShadow={true}
              rotation={[1.497, -0.887, 1.435]}
              scale={0.932}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Cone008.geometry}
              material={materials.Green}
              position={[-0.005, 0.085, -0.016]}
              receiveShadow={true}
              rotation={[2.43, 0.263, -2.962]}
              scale={0.932}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Cone009.geometry}
              material={materials.Green}
              position={[0, 0.085, 0.019]}
              receiveShadow={true}
              rotation={[0.775, 0.449, -0.443]}
              scale={0.932}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Cone010.geometry}
              material={materials.Green}
              position={[-0.011, 0.092, -0.009]}
              receiveShadow={true}
              rotation={[2.63, 0.515, -3.085]}
              scale={1.743}
            />
          </mesh>
        </mesh>
        {/* Poster 1 */}
        <mesh
          castShadow={true}
          geometry={nodes.Poster001.geometry}
          material={materials['Black']}
          position={[-0.274, 3.465, -4]}
          receiveShadow={true}
          scale={0.853}
        >
          <mesh
            castShadow={false}
            geometry={nodes.forza.geometry}
            material={materials.forza}
            position={[0, 0, 0.066]}
            receiveShadow={true}
            rotation={[Math.PI / 2, 0, 0]}
            scale={2.201}
          />
        </mesh>
        {/* Poster 2 */}
        <mesh
          castShadow={true}
          geometry={nodes.Poster.geometry}
          material={materials['Black']}
          position={[2.101, 3.465, -4]}
          receiveShadow={true}
          scale={0.853}
        >
          <mesh
            castShadow={false}
            geometry={nodes.halo.geometry}
            material={materials.halo}
            position={[-0.004, 0.006, 0.068]}
            receiveShadow={true}
            rotation={[Math.PI / 2, 0, 0]}
            scale={2.196}
          />
        </mesh>
        {/* Chair */}
        <group position={[0.144, 0, -0.886]} scale={1.049}>
          <mesh castShadow={true} geometry={nodes.Plane071.geometry} material={materials.White} receiveShadow={true} />
          <mesh
            castShadow={true}
            geometry={nodes.Plane071_1.geometry}
            material={materials['Black']}
            receiveShadow={true}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Circle013.geometry}
            material={materials.Metal}
            position={[0, 1.323, 0.211]}
            receiveShadow={true}
            rotation={[0, -0.162, 0]}
          >
            <mesh
              castShadow={true}
              geometry={nodes.Plane033.geometry}
              material={materials.Metal}
              position={[0, -0.938, 0]}
              receiveShadow={true}
              scale={0.67}
            >
              <mesh
                castShadow={true}
                geometry={nodes.Cylinder001.geometry}
                material={materials['Black']}
                position={[1.336, -0.357, 0]}
                receiveShadow={true}
                scale={1.433}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Cylinder002.geometry}
                material={materials.White}
                position={[1.336, -0.357, 0]}
                receiveShadow={true}
                scale={1.433}
              />
            </mesh>
            <mesh
              castShadow={true}
              geometry={nodes.Plane034.geometry}
              material={materials.Metal}
              position={[0, -0.938, 0]}
              receiveShadow={true}
              rotation={[0, Math.PI / 2, 0]}
              scale={0.67}
            >
              <mesh
                castShadow={true}
                geometry={nodes.Cylinder003.geometry}
                material={materials['Black']}
                position={[1.336, -0.357, 0]}
                receiveShadow={true}
                scale={1.433}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Cylinder004.geometry}
                material={materials.White}
                position={[1.336, -0.357, 0]}
                receiveShadow={true}
                scale={1.433}
              />
            </mesh>
            <mesh
              castShadow={true}
              geometry={nodes.Plane035.geometry}
              material={materials.Metal}
              position={[0, -0.938, 0]}
              receiveShadow={true}
              rotation={[Math.PI, 0, Math.PI]}
              scale={0.67}
            >
              <mesh
                castShadow={true}
                geometry={nodes.Cylinder005.geometry}
                material={materials['Black']}
                position={[1.336, -0.357, 0]}
                receiveShadow={true}
                rotation={[0, Math.PI / 2, 0]}
                scale={1.433}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Cylinder006.geometry}
                material={materials.White}
                position={[1.336, -0.357, 0]}
                receiveShadow={true}
                rotation={[0, Math.PI / 2, 0]}
                scale={1.433}
              />
            </mesh>
            <mesh
              castShadow={true}
              geometry={nodes.Plane036.geometry}
              material={materials.Metal}
              position={[0, -0.938, 0]}
              receiveShadow={true}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.67}
            >
              <mesh
                castShadow={true}
                geometry={nodes.Cylinder007.geometry}
                material={materials['Black']}
                position={[1.336, -0.357, 0]}
                receiveShadow={true}
                rotation={[Math.PI, 0, Math.PI]}
                scale={1.433}
              />
              <mesh
                castShadow={true}
                geometry={nodes.Cylinder008.geometry}
                material={materials.White}
                position={[1.336, -0.357, 0]}
                receiveShadow={true}
                rotation={[Math.PI, 0, Math.PI]}
                scale={1.433}
              />
            </mesh>
          </mesh>
          <group position={[0, 1.232, 0.613]} scale={1.128}>
            <mesh
              castShadow={true}
              geometry={nodes.Plane072.geometry}
              material={materials.White}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Plane072_1.geometry}
              material={materials['Black']}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Cube001.geometry}
              material={materials['Black']}
              position={[0, 1.675, 0.277]}
              receiveShadow={true}
              rotation={[0.1, 0, 0]}
              scale={1.314}
            />
          </group>
          <mesh
            castShadow={true}
            geometry={nodes.Plane031.geometry}
            material={materials.Metal}
            position={[0.032, 1.196, 0.588]}
            receiveShadow={true}
            scale={0.918}
          />
          <group position={[0.746, 1.685, 0.023]} scale={0.918}>
            <mesh
              castShadow={true}
              geometry={nodes.Plane074.geometry}
              material={materials.White}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Plane074_1.geometry}
              material={materials['Black']}
              receiveShadow={true}
            />
          </group>
        </group>
        {/* Projector */}
        <group position={[-3.91, 2.881, 0.859]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh
            castShadow={true}
            geometry={nodes.Plane083_1.geometry}
            material={materials.White}
            receiveShadow={true}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Plane083_2.geometry}
            material={materials['Black']}
            receiveShadow={true}
          />
          <mesh
            castShadow={false}
            geometry={nodes.Plane016.geometry}
            material={materials['Material.001']}
            receiveShadow={true}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Plane062.geometry}
            material={materials['Black']}
            position={[-0.318, -0.09, 2.887]}
            receiveShadow={true}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Plane063.geometry}
            material={materials['Black']}
            receiveShadow={true}
          />
          <mesh
            castShadow={false}
            geometry={nodes.Projector.geometry}
            material={materials.Screen}
            position={[0.05, 0.005, 0]}
            receiveShadow={true}
            rotation={[0, 1.571, 0]}
            scale={2.532}
          />
        </group>
        {/* Plant */}
        <group position={[3.682, -0.005, -3.112]} scale={2.144}>
          <mesh castShadow={true} geometry={nodes.Plane088.geometry} material={materials.Black} receiveShadow={true} />
          <mesh
            castShadow={true}
            geometry={nodes.Plane088_1.geometry}
            material={materials['Material.003']}
            receiveShadow={true}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Vert001.geometry}
            material={materials.Green}
            position={[0, 0.232, 0]}
            receiveShadow={true}
            scale={1.025}
          >
            <mesh
              castShadow={true}
              geometry={nodes.Plane066.geometry}
              material={materials.Green}
              position={[0.004, 0.522, 0]}
              receiveShadow={true}
            />
          </mesh>
        </group>
        {/* Wall */}
        <mesh castShadow={false} geometry={nodes.Plane.geometry} material={materials.White} receiveShadow={true} />
        {/* Floor */}
        <mesh castShadow={true} geometry={nodes.Plane_1.geometry} material={materials.Floor} receiveShadow={true} />
        {/* Edge */}
        <mesh
          castShadow={true}
          geometry={nodes.Plane_2.geometry}
          material={materials['Black.002']}
          receiveShadow={true}
        />
      </group>

      <EffectComposer>
        <SelectiveBloom
          lights={[deskLightRef, desktopLightRef, shelfLightRef]}
          luminanceSmoothing={0.025}
          luminanceThreshold={0.9}
          selection={[
            bulbMeshRef,
            fan1MeshRef,
            fan2MeshRef,
            desktop1MeshRef,
            desktop2MeshRef,
            screenMeshRef,
            tvStandMeshRef
          ]}
        />
      </EffectComposer>
    </>
  );
};

useGLTF.preload('/models/room.glb');

export default Room;
