import './Item.css'

const Item = ({product}) => {
    return (
        <li className='liclass'>
            <h2>{product.name}</h2>
            <img className="sizeimage" src={product.img} alt={product.name}/>
            <h3>PRECIO: $ {product.price}</h3>
            <h4>{product.description}</h4>
        </li>
    )
}

export default Item