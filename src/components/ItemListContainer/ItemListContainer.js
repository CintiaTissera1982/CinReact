import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProductos } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import ItemCounter from '../Counter/ItemCounter';


 const handleOnAdd = (quantity) => {
    //console.log(`la cantidad agregada es: ${quantity}`)
  } 

const ItemListContainer = ({ greeting }) => {
    const [productos, setProducts] = useState([])

    useEffect(() => {
        getProductos().then(productos => {
            setProducts(productos)
        })
    }, [])

    
    return (
        
        <>
            <h1>{greeting}</h1>
            <ItemList productos={productos}/>
            <ItemCounter stock={10} onAdd={handleOnAdd}/>
           {/*  <ItemCounter onAdd={handleOnAdd}/> */}
        </>
     
    )
}

export default ItemListContainer