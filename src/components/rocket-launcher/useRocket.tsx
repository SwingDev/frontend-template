import {
  useCallback, useState,
} from 'react';

export const useRocket = () => {
  const [isFired, setIsFired] = useState(false);

  const fire = useCallback(() => {
    setIsFired(true);
  }, []);

  return { fire, isFired };
};
