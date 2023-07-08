import { CreateProduct } from './components/CreateProduct';
import { ErrorMessage } from './components/ErrorMessage';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal';
import { Products } from './components/Products';
import { useProducts } from './hooks/useProducts';

function App() {
  const { loading, error, products} = useProducts();

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      <Products products={products}/>
      {error && <ErrorMessage error={error}/>}

      <Modal title='Create new product'>
        <CreateProduct />
      </Modal>
    </div>
  );
}

export default App;
