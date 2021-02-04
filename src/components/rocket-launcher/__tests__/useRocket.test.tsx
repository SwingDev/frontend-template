import { renderHook } from '@testing-library/react-hooks/native';
import { expect } from 'chai';
import { act } from 'react-dom/test-utils';

import { useRocket } from '../useRocket';

describe('useRocket', () => {
  it('fires a rocket', () => {
    const { result } = renderHook(() => useRocket());

    expect(result.current.isFired).to.be.false;

    act(() => result.current.fire());

    expect(result.current.isFired).to.be.true;
  });
});
