import { useEffect, useState } from "react";

export function useForceModal(breakpoint: number = 640): boolean | null {
  const [forceModal, setForceModal] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => {
      setForceModal(window.innerWidth <= breakpoint);
    };

    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [breakpoint]);

  return forceModal;
}
