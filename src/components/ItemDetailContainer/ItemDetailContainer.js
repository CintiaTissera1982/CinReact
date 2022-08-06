import './ItemDetailContainer.css'
import { useState, useEffect} from 'react'
import { getProductosById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const { productId } = useParams()

    useEffect(() => {
        getProductosById(productId)
            .then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
            })
    }, [productId])

    return (
        <div className='ItemDetailContainer'>
            <h1 className='h1class'>Detalle del Producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer