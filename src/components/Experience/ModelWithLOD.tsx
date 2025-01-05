import { useGLTF } from "@react-three/drei";
import LODWrapper from "./LODWrapper";

interface ModelWithLODProps {
  position?: [number, number, number];
  scale?: number;
  modelPath: string;
}

const ModelWithLOD: React.FC<ModelWithLODProps> = ({
  position = [0, 0, 0],
  scale = 1,
  modelPath,
}) => {
  const [lowQuality, highQuality] = useGLTF([modelPath, modelPath]) as any;

  return (
    <LODWrapper distances={[10, 50]}>
      <primitive object={highQuality.scene} position={position} scale={scale} />
      <primitive object={lowQuality.scene} position={position} scale={scale} />
    </LODWrapper>
  );
};

export default ModelWithLOD;
