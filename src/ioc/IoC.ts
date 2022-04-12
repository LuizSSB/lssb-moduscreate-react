import { Container } from 'inversify'
import { isSymbol } from 'lodash'
import { DefaultContainerLoader } from './DefaultContainerLoader'

export type InjectableType<T = any> = {
    new(): T
    readonly KEY_IOC: symbol
}

export interface PlatformContainerLoader {
  load(): Container
}

let loadedContainer: Container | undefined

export const IoC = {
  load: (loader: PlatformContainerLoader = new DefaultContainerLoader()) => {
    const container = loader.load()
    loadedContainer = container
    return container
  },
  get<T>(type: symbol | InjectableType<T>): T {
    if (!loadedContainer) {
        throw new Error('Trying to access loaded container before loading it')
    }
    const key = isSymbol(type) ? type : type.KEY_IOC
    return loadedContainer!.get(key)
  },
}
