import { renderHook } from '@testing-library/react-hooks/native';
import { expect } from 'chai';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';

import store from '~/store/store';

import { useRocketLauncher } from '../useRocketLauncher';

describe('useRocket', () => {
  it('fires a rocket', () => {
    const { result } = renderHook(() => useRocketLauncher(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    expect(result.current.isFired).to.be.false;

    act(() => result.current.setTarget('test-id'));

    expect(result.current.targetId).to.equal('test-id');

    act(() => result.current.fire());

    expect(result.current.isFired).to.be.true;
  });
});
