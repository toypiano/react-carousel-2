import { useState, useContext, useEffect } from "react";
import { StateContext } from "../../store/store";
import vars from "../../common/vars";

const useProgress = () => {
  const { state } = useContext(StateContext);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (state.isPlaying) {
      let start = null;
      let rafId = null;
      const step = timestamp => {
        // Init 'start' with initial timestamp when rAF is called the first time.
        if (!start) start = timestamp;
        const progress = timestamp - start;
        setProgress(progress);
        if (progress < vars.SLIDE_DURATION) {
          rafId = requestAnimationFrame(step);
        }
      };
      rafId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(rafId);
    }
  }, [state.isPlaying, state.currentIndex]);

  return state.isPlaying ? progress / vars.SLIDE_DURATION : 0;
};

export default useProgress;
