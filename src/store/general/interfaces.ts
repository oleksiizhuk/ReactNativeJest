import {CLEAR_STORE, TOGGLE_LOADER} from './types';

export interface IToggleLoader {
  type: typeof TOGGLE_LOADER;
}

export interface IClearStore {
  type: typeof CLEAR_STORE;
}

export type IGeneralActionTypes = IToggleLoader | IClearStore;
