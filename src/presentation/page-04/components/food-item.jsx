import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const FoodItem = ({ model, page, ...props }) => {
  const gltf = useGLTF(model);
  const viewport = useThree((state) => state.viewport);
  return (
    <group>
      <primitive
        object={gltf.scene}
        position={[0, -viewport.height * page, 0]}
        {...props}
      />
    </group>
  );
};

export default FoodItem;
