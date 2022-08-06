import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget' 
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="Navbar">

            <h1 className='h1class'>DISTRIBUIDORA OMMI</h1>
            <p className='pclass'>Tu Distribuidora amiga</p>

            <div className="divclass">
                <Link to='/category/VINOS' className="Option">VINOS</Link>
                <Link to='/category/JUGOS' className="Option">JUGOS</Link>
                <Link to='/category/BEBIDAS BLANCAS' className="Option">BEBIDAS BLANCAS</Link>
                <Link to='/category/COMESTIBLES' className="Option">COMESTIBLES</Link>
                <Link to='/' className="Option">TODOS LOS PRODUCTOS</Link>
            </div>
            <CartWidget />
            
        </nav>
    )
}

export default Navbar