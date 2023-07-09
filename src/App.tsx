import { CreateProduct } from './components/CreateProduct';
import { ErrorMessage } from './components/ErrorMessage';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal';
import { Products } from './components/Products';
import { ModalContext } from './context/ModalContext';
import { useProducts } from './hooks/useProducts';
import { useContext } from 'react';

function App() {
  const { loading, error, products } = useProducts();
  const { modal, openModal, closeModal } = useContext(ModalContext);

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      { loading && <Loader /> }
      { error && <ErrorMessage error={error} /> }

      <Products products={products} />

      { modal && <Modal title='Create new product' onClose={closeModal}>
        <CreateProduct onCreate={closeModal} />
      </Modal> }

      <button className='fixed top-5 right-5 rounded-full bg-green-700 text-white text-1xl px-4 py-2'
        onClick={openModal}>
        Добавить товар
      </button>
    </div>
  );
}

export default App;
