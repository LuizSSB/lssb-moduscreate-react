import { inject, injectable } from 'inversify'
import { Paging } from '../model/Paging'
import { ProductService } from '../service/ProductService'

@injectable()
export class ProductRepository {
  static readonly KEY_IOC = Symbol.for('ProductRepository')

  @inject(ProductService.KEY_IOC)
  private readonly service!: ProductService

  getProducts = (paging: Paging) => this.service.getProducts(paging)
}
