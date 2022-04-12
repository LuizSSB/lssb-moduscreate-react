import axios, { AxiosResponse } from 'axios'
import { injectable } from 'inversify'
import { inRange } from 'lodash'
import { Configurations } from '../Configurations'

@injectable()
export class Requester {
  static readonly KEY_IOC = Symbol.for('Requester')

  constructor(private readonly baseURL: string = Configurations.uris.SERVICE) { }

  private readonly axios = axios.create({
    baseURL: this.baseURL,
  })

  private handleResponse = <T>(response: AxiosResponse<T>): T => {
    if (!inRange(response.status, 200, 300)) {
      throw new Error(response.statusText)
    }

    return response.data
  }

  get = <T>(route: string): Promise<T> => this.axios.get(route).then(this.handleResponse)
}
