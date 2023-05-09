import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/types';

/** ## App Dispatch Hook
 * The hook that provides a convenient typed redux dispatch
 * @returns ThunkDispatch
 */
const useAppDispatch = useDispatch<AppDispatch>;
export default useAppDispatch;
