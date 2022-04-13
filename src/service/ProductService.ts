import { inject, injectable } from 'inversify'
import { EntryPage, Paging, PagingEx } from '../model/Paging'
import { Product } from '../model/Product'
import { Requester } from './Requester'

@injectable()
export class ProductService {
  static readonly KEY_IOC = Symbol.for('ProductService')

  @inject(Requester.KEY_IOC)
  private readonly requester!: Requester

  // luizssb: simulates pagination
  getProducts = async (paging: Paging): Promise<EntryPage<Product>> => {
    const allProducts: Product[] = await this.requester.get('')

    const pageEnd = PagingEx.end(paging)
    const selected = allProducts.slice(PagingEx.start(paging), pageEnd)
    return {
      entries: selected,
      nextPage: pageEnd < allProducts.length ? PagingEx.next(paging) : undefined,
      page: paging.page,
    }
  }
}
