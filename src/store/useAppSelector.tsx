import { useSelector } from 'react-redux';

import type { AppState } from './types';

export function useAppSelector<T = unknown>(selector: (state: AppState) => T) {
  return useSelector<AppState, T>(selector);
}
