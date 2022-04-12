import i18next from 'i18next'
import { injectable } from 'inversify'
import { isError } from 'lodash'
import { AppError } from './AppError'

@injectable()
export class ErrorParser {
  static readonly KEY_IOC = Symbol.for('ErrorParser')

  parse = (error: unknown): AppError => ({
    message: isError(error)
      ? error.message
      : i18next.t('error.unknown'),
  })
}
