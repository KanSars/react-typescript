import { useEffect, useState } from 'react';
import { IProduct } from '../models';

const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError('');
      const response: IProduct[] = await fetch('https://fakestoreapi.com/products?limit=5')
        .then(res => res.json())
      setProducts(response);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as Error;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return { products, loading, error }
}

export {
  useProducts,
}