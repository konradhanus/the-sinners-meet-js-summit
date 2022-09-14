import {useEffect} from "react";

const addEventListener = (handleUserKeyDownPress, handleUserKeyUpPress) => {
    window.addEventListener("keydown", handleUserKeyDownPress);
    window.addEventListener("keyup", handleUserKeyUpPress);
}

const removeEventListener = (handleUserKeyDownPress, handleUserKeyUpPress) => {
    window.removeEventListener("keydown", handleUserKeyDownPress);
    window.removeEventListener("keyup", handleUserKeyUpPress);
}

const useEventListener = (handleUserKeyDownPress, handleUserKeyUpPress, player) => {
  useEffect(() => {
    addEventListener(handleUserKeyDownPress, handleUserKeyUpPress)
    return () => {
      removeEventListener(handleUserKeyDownPress, handleUserKeyUpPress);
    };
  }, [player]);

};
export default useEventListener;
