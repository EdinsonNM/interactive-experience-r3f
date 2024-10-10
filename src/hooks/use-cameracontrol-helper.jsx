import { button, useControls } from "leva";
import { Vector3 } from "three";

function useCameraControlHelper(cameraControls) {
  useControls("Helper", {
    getLookAt: button(() => {
      const position = cameraControls?.current?.getPosition(new Vector3());
      const target = cameraControls?.current?.getTarget(new Vector3());
      console.log([...position, ...target]);
    }),
  });
}
export default useCameraControlHelper;
