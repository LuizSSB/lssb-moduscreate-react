export type Paging = {
  page: number
  size: number
}

export const PagingEx = {
  start(paging: Paging): number {
    return paging.page * paging.size
  },
  end(paging: Paging): number {
    return paging.page * paging.size + paging.size
  },
  next(paging: Paging): Paging {
    return {
      ...paging,
      page: paging.page + 1,
    }
  },
}

export type EntryPage<T> = {
  nextPage: Paging | undefined
  page: number
  entries: T[]
}
