import { useDispatch } from 'react-redux';

import type { AppDispatch } from './types';

const useAppDispatch = () => ({ dispatch: useDispatch<AppDispatch>() });

export default useAppDispatch;
