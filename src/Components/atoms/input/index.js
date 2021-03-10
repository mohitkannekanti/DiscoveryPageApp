import React from 'react';
import './styles.css';

const Input = ({ name, placeholder, type }) => {
    return (
        <input name={name} className='input' placeholder={placeholder} type={type} />
    )
}
Input.defaultProps = {

}
export default Input;