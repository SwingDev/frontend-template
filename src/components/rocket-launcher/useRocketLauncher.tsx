import {
  useCallback, useMemo,
} from 'react';

import {
  fireRocket, resetRocket, setRocketTarget,
} from '~/store/rocket';
import { fetchBodies } from '~/store/space/actions';
import useAppDispatch from '~/store/useAppDispatch';
import { useAppSelector } from '~/store/useAppSelector';

export const useRocketLauncher = () => {
  const { dispatch } = useAppDispatch();

  const { isFired, targetId, bodies } = useAppSelector(({ rocket, space }) => ({
    ...rocket,
    bodies: space.data,
    targetId: rocket.targetId,
  }));

  const setTarget = useCallback(
    (targetId: string) => {
      dispatch(setRocketTarget(targetId));
    },
    [dispatch]
  );

  const fire = useCallback(() => {
    dispatch(fireRocket());
  }, [dispatch]);

  const reset = useCallback(() => {
    dispatch(resetRocket());
  }, [dispatch]);

  const targetName = useMemo(() => {
    const body = targetId
      ? bodies?.find(({ id }) => id === targetId)
      : undefined;

    return body?.name;
  }, [bodies, targetId]);

  const fetchData = useCallback(() => {
    void dispatch(fetchBodies());
  }, [dispatch]);

  return {
    fetchData,
    fire,
    isFired,
    reset,
    setTarget,
    targetId,
    targetName,
  };
};
