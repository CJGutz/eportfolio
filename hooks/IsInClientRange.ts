import { useState, useEffect, RefObject } from 'react';

const useIsInClientRange = (ref: RefObject<Element>) => {
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      return setIntersecting(intersecting ? true : entry.isIntersecting);
    });

    observer.observe(ref.current!!);
    return () => {
      observer.disconnect();
    };
  }, [ref, intersecting]);

  return intersecting;
};

export default useIsInClientRange;
