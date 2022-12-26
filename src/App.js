import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import { DataDetails } from './Components/DataDetails.js';
import Watches from './Components/Watches/Watches';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Pages from './Pages/Pages';
import ChooseSexWatches from './Components/ChooseSexWatches/ChooseSexWatches';
import { useEffect, useState } from 'react';
import Jewelry from './Components/Jewelry/Jewelry';
import ChooseSexJewelry from './Components/ChooseSexJewelry/ChooseSexJewelry';
import ChooseSexSunglasse from './Components/ChooseSexSunglasse/ChooseSexSunglasse';
import Sunglasse from './Components/Sunglasse/Sunglasse';
import Footer from './Components/Footer/Footer';

function App() {
  const { productDataDetails } = DataDetails
  const [cartItem, setCartItem] = useState([])

  useEffect(() => {
    if (localStorage.getItem('cartItem') != null) {
      setCartItem(JSON.parse(localStorage.getItem('cartItem')))
    }
    else {
      setCartItem([])
    }
  }, [])



  function addToCart(product) {
    const productExit = cartItem.find((item) => item.id === product.id && item.sex === product.sex)

    if (productExit) {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
      localStorage.setItem('cartItem', JSON.stringify(cartItem))
    }
    else {
      setCartItem([...cartItem, { ...product, qty: 1 }])
      localStorage.setItem('cartItem', JSON.stringify(cartItem))
    }
  }

  function decreaseQty(product) {
    const productExit = cartItem.find((item) => item.id === product.id)

    if (product.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
      localStorage.setItem('cartItem', JSON.stringify(cartItem))
    }
    else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
      localStorage.setItem('cartItem', JSON.stringify(cartItem))
    }
  }



  return (
    <>
      <Header cartItem={cartItem} decreaseQty={decreaseQty} addToCart={addToCart} />
      <Routes>
        <Route path='/' element={<Pages />} />
        <Route path='/watches' element={<ChooseSexWatches />} />
        <Route path='/watches' element={<Watches cartItem={cartItem} />} >
          <Route path=':sex' element={<Watches />} />
        </Route>

        <Route path='/jewelry' element={<ChooseSexJewelry />} />
        <Route path='/jewelry' element={<Jewelry cartItem={cartItem} />} >
          <Route path=':sex' element={<Jewelry />} />
        </Route>

        <Route path='/eyewear' element={<ChooseSexSunglasse />} />
        <Route path='/eyewear' element={<Sunglasse cartItem={cartItem} />} >
          <Route path=':sex' element={<Sunglasse />} />
        </Route>

        <Route path='/watches' element={<ProductDetails productDataDetails={productDataDetails} addToCart={addToCart} cartItem={cartItem} />}>
          <Route path=':product'>
            <Route path=':sex' element={<ProductDetails />} >
              <Route path=':id' element={<ProductDetails />} />
            </Route>
          </Route>
        </Route>

        <Route path='/eyewear' element={<ProductDetails productDataDetails={productDataDetails} addToCart={addToCart} cartItem={cartItem} />}>
          <Route path=':product'>
            <Route path=':sex' element={<ProductDetails />} >
              <Route path=':id' element={<ProductDetails />} />
            </Route>
          </Route>
        </Route>

        <Route path='/jewelry' element={<ProductDetails productDataDetails={productDataDetails} addToCart={addToCart} cartItem={cartItem} />}>
          <Route path=':product'>
            <Route path=':sex' element={<ProductDetails />} >
              <Route path=':id' element={<ProductDetails />} />
            </Route>
          </Route>
        </Route>

      </Routes>
      <Footer />
    </>
  );
}

export default App;
