import './App.css';
import Navbar from './components/Navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting='Nuestros Productos'/>
    </div>
  );
}

export default App;
