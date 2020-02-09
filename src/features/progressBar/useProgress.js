import { useState, useEffect } from "react";

const useProgress = (isAnimating, duration) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isAnimating) {
      let startTime = null;
      let rafId = null;

      const step = timestamp => {
        // Init 'start' with initial timestamp when rAF is called the first time.
        if (!startTime) {
          startTime = timestamp;
        }
        let timeDelta = timestamp - startTime;
        setProgress(timeDelta);
        if (timeDelta < duration) {
          rafId = requestAnimationFrame(step);
        }
      };
      rafId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(rafId);
    }
  }, [isAnimating, duration]);

  // prevent progress/ duration becoming very large when duration < 1
  return isAnimating ? Math.min(progress / duration, duration) : 0;
};

export default useProgress;
