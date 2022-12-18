import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/types';

/**
 * The hook that provides a convenient typed redux dispatch
 * @returns ThunkDispatch
 */
export const useAppDispatch = useDispatch<AppDispatch>;

/**
 * The hook that provides a convenient typed redux selector
 * @returns TypedUseSelectorHook
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
