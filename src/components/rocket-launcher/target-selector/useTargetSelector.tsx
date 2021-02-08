import { useCallback } from 'react';

import { setRocketTarget } from '~/store/rocket';
import useAppDispatch from '~/store/useAppDispatch';
import { useAppSelector } from '~/store/useAppSelector';

export const useTargetSelector = () => {
  const { bodies, isFetching } = useAppSelector(({ space }) => ({
    bodies: space.data,
    isFetching: space.isFetching,
  }));

  const { dispatch } = useAppDispatch();

  const handleChangeSelect = useCallback<
    React.ChangeEventHandler<HTMLSelectElement>
  >(
    (event) => {
      dispatch(setRocketTarget(event.currentTarget.value));
    },
    [dispatch]
  );

  return {
    bodies,
    handleChangeSelect,
    isFetching,
  };
};
