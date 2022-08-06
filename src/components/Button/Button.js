/* import './Button.css'

const Button = ({ handleClick, children }) => {
    

    return (
        <button className='Button' onClick={handleClick}>
            {children}
        </button>
    )
}

export default Button */
import './Button.css'
import React, { useEffect } from 'react'

const Button = () => {

    const handleClick = () => {
        //console.log('hola')
    }

    useEffect(() => {
        const button = document.getElementById('button')
        
        button.addEventListener('click', handleClick)

        return () => {
            button.removeEventListener('click', handleClick)
        }
    }, [])

 

    return (
        <button className='Button' id='button'>Button</button>
    )
}

export default Button