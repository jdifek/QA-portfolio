import { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

interface LODWrapperProps {
  distances: number[];
  children: React.ReactNode;
}

const LODWrapper: React.FC<LODWrapperProps> = ({ distances, children }) => {
  const ref = useRef<THREE.LOD>(new THREE.LOD());
  const { scene } = useThree();

  useEffect(() => {
    if (ref.current) {
      distances.forEach((distance, index) => {
        const child = ref.current.children[index];
        if (child) ref.current.addLevel(child, distance);
      });
      scene.add(ref.current);
    }

    return () => {
      if (ref.current) {
        scene.remove(ref.current);
      }
    };
  }, [distances, scene]);

  return <primitive object={ref.current}>{children}</primitive>;
};

export default LODWrapper;
