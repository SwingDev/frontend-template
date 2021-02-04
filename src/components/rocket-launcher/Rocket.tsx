import React from 'react';

import { useRocket } from './useRocket';

export const Rocket: React.FC = () => {
  const { fire, isFired } = useRocket();

  return (
    <div
      className='rocket'
      onClick={fire}
    >
      {isFired ? '🔥' : '🚀'}
    </div>
  );
};
