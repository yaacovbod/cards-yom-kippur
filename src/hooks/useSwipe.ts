import { useCallback, useRef, useState } from 'react';

export function useSwipe(onLeft: () => void, onRight: () => void, threshold = 80) {
  const startX = useRef<number | null>(null);
  const latestDx = useRef(0);
  const [dragX, setDragX] = useState(0);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLElement>) => {
    startX.current = e.clientX;
    latestDx.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    latestDx.current = dx;
    setDragX(dx);
  }, []);

  const release = useCallback(() => {
    if (startX.current === null) return;
    const dx = latestDx.current;
    startX.current = null;
    latestDx.current = 0;
    setDragX(0);
    if (dx > threshold) onRight();
    else if (dx < -threshold) onLeft();
  }, [onLeft, onRight, threshold]);

  return {
    dragX,
    pointerHandlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp: release,
      onPointerCancel: release,
    },
  };
}
