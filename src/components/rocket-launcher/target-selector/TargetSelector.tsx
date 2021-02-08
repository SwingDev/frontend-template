import React from 'react';

import { useRocketLauncher } from '../useRocketLauncher';

import { useTargetSelector } from './useTargetSelector';

export const TargetSelector = () => {
  const { isFetching, bodies, handleChangeSelect } = useTargetSelector();

  const { targetId } = useRocketLauncher();

  return (
    <div className='target-selector'>
      {isFetching && 'Fetching space bodies…'}
      {!isFetching && (
        <>
          {bodies && (
            <select
              value={targetId ?? ''}
              onChange={handleChangeSelect}
            >
              {!targetId && (
                <option
                  disabled
                  hidden
                  value=''
                >Please select</option>
              )}
              {bodies.map(({ id, name }) => (
                <option
                  key={id}
                  value={id}
                >
                  {name}
                </option>
              ))}
            </select>
          )}
        </>
      )}
    </div>
  );
};
