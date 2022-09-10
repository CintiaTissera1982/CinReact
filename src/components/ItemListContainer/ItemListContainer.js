import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom";
import { getProducts } from '../../services/firebase/firestore'
import { useAsync } from '../../hooks/useAsync'


const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams()

    const getProductsFromFirestore = () => getProducts(categoryId)

    const { data, error, isLoading } = useAsync(getProductsFromFirestore, [categoryId])

    if(isLoading) {
        return <h1>Cargando productos...</h1>
    }

    if(error) {
        return <h1>Hubo un error</h1>
    }

    if(data.length === 0) {
        return categoryId ? <h1>No hay productos en nuestra categoria {categoryId}</h1> : <h1>No hay productos disponibles</h1>
    }

    return (
        <div>
            <h1>{`${greeting} ${categoryId || ''}`}</h1>
            <ItemList productos={data} />
        </div>
    )
}

export default ItemListContainer