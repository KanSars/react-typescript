import { CreateProduct } from './components/CreateProduct';
import { ErrorMessage } from './components/ErrorMessage';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal';
import { Products } from './components/Products';
import { useProducts } from './hooks/useProducts';
import { useState } from 'react';

function App() {
  const { loading, error, products } = useProducts();
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      { loading && <Loader /> }
      { error && <ErrorMessage error={error} /> }

      <Products products={products} />

      { modal && <Modal title='Create new product' onClose={() => setModal(false)}>
        <CreateProduct onCreate={() => setModal(false)} />
      </Modal> }

      <button className='fixed top-5 right-5 rounded-full bg-green-700 text-white text-1xl px-4 py-2'
        onClick={() => setModal(prev => !prev)}>
        Добавить товар
      </button>
    </div>
  );
}

export default App;
