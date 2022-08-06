import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({productos}) => {
    return(
        <div className='ItemList'>
            {productos.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>      
    )
}

export default ItemList