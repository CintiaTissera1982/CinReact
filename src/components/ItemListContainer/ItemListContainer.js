import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProductos } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

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
        </>
     
    )
}

export default ItemListContainer