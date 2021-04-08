import type { SpaceBody } from '~/store/space/types';

import { default as response } from './__mocks__/response.json';

export const getBodies = (): Promise<SpaceBody[]> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(response), 1500);
  });
