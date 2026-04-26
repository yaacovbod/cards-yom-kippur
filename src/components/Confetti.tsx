import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export function Confetti({ trigger }: { trigger: boolean }) {
  useEffect(() => {
    if (!trigger) return;
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#B8954A', '#C9A961', '#F4E8D0', '#6B7F3A', '#4A1F1F'],
    });
  }, [trigger]);

  return null;
}
