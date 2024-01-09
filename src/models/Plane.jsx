import { useEffect, useRef } from 'react';

import planeScene from '../assets/3d/plane.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = scene && animations ? useAnimations(animations, ref) : {};

  useEffect(() => {
    if (isRotating && actions && actions['Take 001']) {
      actions['Take 001'].play();
    } else if (actions && actions['Take 001']) {
      actions['Take 001'].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      {scene && <primitive object={scene} />}
    </mesh>
  );
};

export default Plane;
