import { createRef, useCallback, useEffect } from "react";
import { usePointToPointConstraint } from "@react-three/cannon";
import { Vector3 } from "three";

export const cursor = createRef();

let grabbingPointerId = undefined;
const grabbedPosition = new Vector3();
export function useDragConstraint(child) {
  const [, , api] = usePointToPointConstraint(cursor, child, {
    pivotA: [0, 0, 0],
    pivotB: [0, 0, 0],
  });
  useEffect(() => void api.disable(), []);
  const onPointerUp = useCallback((e) => {
    if (grabbingPointerId == null) {
      return;
    }
    grabbingPointerId = undefined;
    document.body.style.cursor = "grab";
    e.target.releasePointerCapture(e.pointerId);
    api.disable();
  }, []);
  const onPointerDown = useCallback((e) => {
    if (grabbingPointerId != null) {
      return;
    }
    grabbingPointerId = e.pointerId;
    grabbedPosition.copy(e.point);
    document.body.style.cursor = "grabbing";
    e.stopPropagation();
    e.target.setPointerCapture(e.pointerId);
    api.enable();
  }, []);
  const onPointerMove = useCallback((e) => {
    if (grabbingPointerId != e.pointerId) {
      return;
    }
    grabbedPosition.copy(e.point);
  });
  return { onPointerUp, onPointerMove, onPointerDown };
}
