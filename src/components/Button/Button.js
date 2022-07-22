import './Button.css'

const Button = ({ handleClick, children }) => {
    

    return (
        <button className='Button' onClick={handleClick}>
            {children}
        </button>
    )
}

export default Button