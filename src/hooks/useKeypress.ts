import { useEffect } from "react";

const useKeypress = (callback: (event: KeyboardEvent) => void) => {
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      callback(event);
    };

    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [callback]);
};

export default useKeypress;
