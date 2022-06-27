import { useEffect } from "react";

function useDisableScroll(shouldDisable: boolean) {
  useEffect(() => {
    shouldDisable &&
      document
        .getElementsByTagName("html")[0]
        .classList.add("h-full", "overflow-hidden");
    !shouldDisable &&
      document
        .getElementsByTagName("html")[0]
        .classList.remove("h-full", "overflow-hidden");
  }, [shouldDisable]);
}

export { useDisableScroll };
