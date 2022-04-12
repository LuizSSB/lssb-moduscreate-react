export type Product = {
  id: string
  title: string
  category: string
  decription: string
  images: string[]
  price: string
  tags: string[]
  variants: {
    id: string
    quatity: number
    title: string
    sku: string
  }[]
}
