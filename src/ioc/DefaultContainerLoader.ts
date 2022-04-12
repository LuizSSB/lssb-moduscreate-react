import { Container } from 'inversify'
import { InjectableType, PlatformContainerLoader } from './IoC'

export class DefaultContainerLoader implements PlatformContainerLoader {
  load = () => {
    const container = new Container()

    this.singletonMappings.forEach((type) => {
      container.bind(type.KEY_IOC).to(type).inSingletonScope()
    })

    return container
  }

  protected readonly singletonMappings: InjectableType[] = [
  ]
}
