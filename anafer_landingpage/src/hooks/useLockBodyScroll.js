// useLockBodyScroll(isLocked) — while true, locks body scroll and pads the right
// edge by the scrollbar width so layout doesn't shift. Used by menus/modals.
import { useEffect } from "react";

export default function useLockBodyScroll(isLocked) {
  useEffect(() => {
    if (!isLocked) return;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [isLocked]);
}
