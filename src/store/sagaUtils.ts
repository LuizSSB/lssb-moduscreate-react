import { put } from 'typed-redux-saga'
import { AppError } from '../error/AppError'
import { ErrorParser } from '../error/ErrorParser'
import { IoC } from '../ioc/IoC'

export function putError(
  action: (error: AppError) => any,
  error: unknown,
) {
  const errorParser = IoC.get(ErrorParser)
  return put(action(errorParser.parse(error)))
}
