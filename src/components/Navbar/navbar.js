import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget' 
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="Navbar">

             <h1 class="dark-text"><strong>DISTRIBUIDORA OMMI</strong></h1>
             <h3 class="dark-text"><strong>Distribuidora de Bebidas</strong></h3>


            <div className="divclass">
                <NavLink to='/category/VINOS' className="Option">VINOS</NavLink>
                <NavLink to='/category/JUGOS' className="Option">JUGOS</NavLink>
                <NavLink to='/category/BEBIDAS BLANCAS' className="Option">BEBIDAS BLANCAS</NavLink>
                <NavLink to='/category/COMESTIBLES' className="Option">COMESTIBLES</NavLink>
                <NavLink to='/' className="Option">TODOS LOS PRODUCTOS</NavLink>
            </div>
            <CartWidget />
            
        </nav>
    )
}

export default Navbar