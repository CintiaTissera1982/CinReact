import './CartItem.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import NotificationContext from '../../notification/Notification'

const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const handleRemove = (id) => {
        removeItem(id)
        setNotification('warning', `Se quitó el producto:  ${name}`)
    }

    return (
        <article className='CardCartItem'>
            <header className="HeaderCartItem">
                <h2 className="ItemHeaderCartItem">
                    {name}
                </h2>
            </header>
            <section className='ContainerItemCartItem'>
                <p className="InfoCartItem">
                    Cantidad: {quantity}
                </p>
                <p className="InfoCartItem">
                    Precio x Unidad: ${price}
                </p>
            </section>           
            <footer className='ItemFooterCartItem'>
                 <p className="InfoCartItem">
                     Subtotal: ${price * quantity}
                 </p>
                 <button className='ButtonCartItem' onClick={() => handleRemove(id)}>X</button>
            </footer>
        </article>
    )
}

export default CartItem