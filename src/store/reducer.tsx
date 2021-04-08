import { combineReducers } from '@reduxjs/toolkit';

import { rocket } from './rocket';
import { space } from './space';

const reducer = combineReducers({
  rocket,
  space,
});

export default reducer;
