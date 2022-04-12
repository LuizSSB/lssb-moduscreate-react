import { injectable } from 'inversify'
import { EntryPage, Paging } from '../model/Paging'
import { Product } from '../model/Product'

@injectable()
export class ProductService {
  static readonly KEY_IOC = Symbol.for('ProductService')

  getProducts = async (paging: Paging): Promise<EntryPage<Product>> => ({
    entries: [],
    nextPage: undefined,
    page: paging.page,
  })
}
