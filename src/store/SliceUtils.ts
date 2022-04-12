import { PayloadAction } from '@reduxjs/toolkit'
import { pushIdempotent, spliceValue } from '../utils/collection'

export type ErrorAction = PayloadAction<string>

export type LoadableState<TTag> = {
  loadingTags: TTag[]
  latestError?: {
    error: string
    tag: TTag
  }
}

export const LoadableStateEx = {
  default<TTag>(): LoadableState<TTag> {
    return { loadingTags: [] }
  },
  reducer: {
    startLoading<TState extends LoadableState<any>>(
      tag: TState['loadingTags'][number],
    ): (state: TState) => void {
      return (state) => pushIdempotent(state.loadingTags, tag)
    },
    stopLoading<TState extends LoadableState<any>>(
      tag: TState['loadingTags'][number],
    ): (state: TState) => void {
      return (state) => spliceValue(state.loadingTags, tag)
    },
    receiveValue<TState extends LoadableState<any>, TKey extends keyof TState>(
      tag: TState['loadingTags'][number],
      key: TKey,
    ): (state: TState, action: PayloadAction<TState[TKey]>) => void {
      return (state, { payload }: PayloadAction<TState[TKey]>) => {
        spliceValue(state.loadingTags, tag)
        state[key] = payload
      }
    },
    receiveError<TState extends LoadableState<any>>(
      tag: TState['loadingTags'][number],
    ): (state: TState, action: ErrorAction) => void {
      return (state, { payload }) => {
        spliceValue(state.loadingTags, tag)
        state.latestError = {
          error: payload,
          tag,
        }
      }
    },
  },
}
