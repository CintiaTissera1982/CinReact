import './App.css';
import Navbar from './components/Navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import { NotificationProvider } from './notification/Notification'

function App() {

  return (
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting='Todos nuestros Productos'/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado filtrado : '/>} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />  
              <Route path='/cart' element={<Cart />}/>  
              <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
