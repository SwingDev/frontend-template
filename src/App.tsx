import React from 'react';
import { Provider } from 'react-redux';

import { RocketLauncher } from './components/rocket-launcher/RocketLauncher';
import store from './store/store';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className='container'>
        <RocketLauncher />
      </div>
    </Provider>
  );
};
