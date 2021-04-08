import { createAsyncThunk } from '@reduxjs/toolkit';

import { getBodies } from '~/services/apiService';

import type { SpaceBody } from './types';

export const fetchBodies = createAsyncThunk<SpaceBody[]>(
  'rocket/fetchTargets',
  async () => {
    const bodies = await getBodies();

    return bodies.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
);
