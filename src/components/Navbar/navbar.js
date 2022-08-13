import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget' 
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="Navbar">

            <h1 className='h1class'>DISTRIBUIDORA OMMI</h1>
            <p className='pclass'>Tu Distribuidora amiga</p>

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