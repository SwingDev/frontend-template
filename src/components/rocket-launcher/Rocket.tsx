import React from 'react';

import { useRocketLauncher } from './useRocketLauncher';

export const Rocket: React.FC = () => {
  const { fire, isFired } = useRocketLauncher();

  return (
    <div
      className='rocket'
      onClick={fire}
    >
      {isFired ? '🔥' : '🚀'}
    </div>
  );
};
