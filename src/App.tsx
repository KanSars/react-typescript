import { useEffect } from 'react';
import { Product } from './components/Product';
import { products } from './data/products';

function App() {

  const productList = products.map((product) => <Product key={product.id} product={product}/>);

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
    console.log(response);
  }

  useEffect(() => {

  }, [])

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {productList}
    </div>
  );
}

export default App;
