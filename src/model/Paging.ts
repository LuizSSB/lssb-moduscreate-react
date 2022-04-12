export type Paging = {
  page: number
  size: number
}

export type EntryPage<T> = {
  nextPage: Paging | undefined
  page: number
  entries: T[]
}
