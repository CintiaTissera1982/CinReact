import './App.css';
import Navbar from './components/Navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
/* import ItemCounter from './components/Counter/ItemCounter'; */
function App() {

/*   const handleOnAdd = (quantity) => {
    console.log(`la cantidad agregada es: ${quantity}`)
  } */
  
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting='Nuestros Productos'/>
      {/* <ItemCounter stock={10} onAdd={handleOnAdd}/> */}
    </div>
  );
}

export default App;
