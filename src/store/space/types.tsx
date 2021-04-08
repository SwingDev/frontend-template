import type { SerializedError } from '@reduxjs/toolkit';

export type SpaceBody = {
  id: string;
  name: string;
};

export type SpaceState = {
  data?: SpaceBody[];
  error?: SerializedError;
  isFetching?: boolean;
};
