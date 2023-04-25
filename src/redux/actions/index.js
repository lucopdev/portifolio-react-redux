import { MAKE_REF } from '../types/types';

export const makeRef = (ref) => ({
  type: MAKE_REF,
  payload: ref,
});
