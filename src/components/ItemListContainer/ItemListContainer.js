import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProductos,getProductosByCategory  } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {
    const [productos, setProducts] = useState([])
    
    const {categoryId} = useParams()

    useEffect(() => {
        const asynFunction = categoryId ? getProductosByCategory : getProductos
        
        asynFunction(categoryId).then(productos => {
            setProducts(productos)

        }).catch(error =>{
            console.log(error)
        })
        
    }, [categoryId])

    
    return (
        
        <>
            <h1 className='h1class'>{greeting==='Todos nuestros Productos' ? greeting : greeting += categoryId }</h1>
            <ItemList productos={productos}/>
        </>
     
    )
}

export default ItemListContainer