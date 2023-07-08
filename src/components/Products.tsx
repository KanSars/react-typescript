import { IProduct } from "../models";
import { Product } from "./Product";

interface ProductsProps {
  products: IProduct[]
}

const Products = ({ products }: ProductsProps): JSX.Element => {
  const productList = products.map((product) => <Product key={product.id} product={product} />);
  return (
    <>
      {productList}
    </>
  )
}

export {
  Products,
}