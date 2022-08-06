import './App.css';
import Navbar from './components/Navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Todos nuestros Productos'/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado filtrado : '/>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />  
          <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
