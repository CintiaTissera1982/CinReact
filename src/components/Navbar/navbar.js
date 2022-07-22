import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget' 

const Navbar = () => {

    return (
        <nav className="Navbar">
            <div>
                <h1 className='h1class'>DISTRIBUIDORA OMMI</h1>
                <p className='pclass'>Tu Distribuidora amiga</p>
            </div>
            <div className='divclass'>
                <Button>VINOS</Button>
                <Button>JUGOS</Button>
                <Button>BEBIDAS BLANCAS</Button>
                <Button>COMESTIBLES</Button>
                <Button>LOGIN</Button>
                <CartWidget />
            </div>
            
        </nav>
    )
}

export default Navbar