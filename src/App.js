import { useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Products } from './pages/Productss';
import { Product } from './pages/Product';
import { Footer } from './components/Footer'
import Navbar from './components/Navbar';
import { addProduct } from './store/actions';
import { reducer, initialState } from './store/reducer';
import Context from './store/context';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
  };

  return (
    <Context.Provider value={{ products: state.products, addProduct: handleAddProduct }}>
      <Navbar />
      <div className='routes-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </Context.Provider>
  );
}
