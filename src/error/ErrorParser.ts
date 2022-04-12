import { injectable } from 'inversify'
import { isError } from 'lodash'
import { AppError } from './AppError'

@injectable()
export class ErrorParser {
  static readonly KEY_IOC = Symbol.for('ErrorParser')

  parse = (error: unknown): AppError => ({
    message: isError(error)
      ? error.message
      : 'TODO Error message',
  })
}
