// hooks.ts
import { TypedUseSelectorHook, useSelector as selectorHook, useDispatch as dispatchHook, } from 'react-redux';
import { RootState, AppDispatch } from '../index';
import type {} from "redux-thunk/extend-redux";

export const useDispatch: () => AppDispatch = dispatchHook;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;