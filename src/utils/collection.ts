import { isEqual, isNil, isString } from 'lodash'

export function includesEqual(haystack: string | undefined | null, needle: string): boolean
export function includesEqual<T>(
  haystack: T[] | undefined | null, needle: T | undefined | null,
): boolean
export function includesEqual(
  haystack: unknown[] | string | undefined | null,
  needle: any,
): boolean {
  if (isNil(haystack)) {
    return false
  }

  return isString(haystack)
    ? haystack.indexOf(needle) > -1
    : haystack.some((value) => isEqual(value, needle))
}

export function includesAny<T>(haystack: T[], ...needles: T[]): boolean {
  return needles.find((needle) => includesEqual(haystack, needle)) !== undefined
}

export function pushIdempotent<T>(arr: T[], value: T) {
  if (!includesEqual(arr, value)) {
    arr.push(value)
  }
}

export function insertIndempotent<T>(arr: T[], value: T, index: number) {
  if (!includesEqual(arr, value)) {
    arr.splice(index, 0, value)
  }
}

// luizssb: not the cleanest or most functional implementation, but I am trying
// to replicate the behavior of Array.splice and afaics this offers the best
// O(n) performance
export function spliceValue<T>(arr: T[], value: T): number[] {
  const indices: number[] = []
  arr.forEach((aValue, idx) => {
    if (isEqual(aValue, value)) {
      indices.push(idx)
    }
  })
  indices.forEach((index, indexIdx) => {
    arr.splice(index - indexIdx, 1)
  })
  return indices
}
