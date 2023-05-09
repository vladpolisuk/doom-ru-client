import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/types';

/** ## App Selector Hook
 * The hook that provides a convenient typed redux selector
 * @returns TypedUseSelectorHook
 */
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default useAppSelector;
