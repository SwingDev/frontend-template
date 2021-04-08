import React from 'react';

import { useRocketLauncher } from './useRocketLauncher';

export const Launcher: React.FC = () => {
  const { fire, targetId } = useRocketLauncher();

  return (
    <div className='launcher'>
      <button
        disabled={!targetId}
        onClick={fire}
      >
        Fire
      </button>
    </div>
  );
};
