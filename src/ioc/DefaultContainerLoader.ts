import { Container } from 'inversify'
import { ErrorParser } from '../error/ErrorParser'
import { ProductRepository } from '../repository/ProductRepository'
import { ProductService } from '../service/ProductService'
import { Requester } from '../service/Requester'
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
    // luizssb: services
    Requester,
    ProductService,

    // luizssb: repositories
    ProductRepository,

    // luizssb: misc
    ErrorParser,
  ]
}
