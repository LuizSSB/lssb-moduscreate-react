import { isEqual } from 'lodash'
import { useSelector } from 'react-redux'
import { AppStoreState } from '../store/AppStore'

export function useAppSelector<T>(
  selector: (s: AppStoreState) => T,
  equalityFn: (p: T, n: T) => boolean = isEqual,
): T {
  return useSelector(selector, equalityFn)
}
