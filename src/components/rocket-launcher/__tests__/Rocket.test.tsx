import { render } from '@testing-library/react';
import { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';

import store from '~/store/store';

import { Rocket } from '../Rocket';

describe('Rocket', () => {
  it('renders rocket', () => {
    const result = render(
      <Provider store={store}>
        <Rocket />
      </Provider>
    );

    const rocket = result.getByText('🚀');

    expect(rocket).to.exist;
  });
});
