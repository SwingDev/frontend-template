import React, { useEffect } from 'react';

import { Launcher } from './Launcher';
import { Rocket } from './Rocket';
import { TargetSelector } from './target-selector/TargetSelector';
import { useRocketLauncher } from './useRocketLauncher';

export const RocketLauncher: React.FC = () => {
  const { isFired, reset, targetName, fetchData } = useRocketLauncher();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Rocket />
      {!isFired && (
        <>
          <TargetSelector />
          <Launcher />
        </>
      )}
      {isFired && (
        <>
          <div>Rocket sent to {targetName}</div>
          <button
            type='button'
            onClick={reset}
          >
            Send another
          </button>
        </>
      )}
    </>
  );
};
