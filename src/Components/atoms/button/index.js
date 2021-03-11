import React from 'react';
import './styles.css'

const Button = ({ name, type, color, value }) => {
    return (
        <button type={type} className={`btn`} name={name}>{value}</button>
    )
}
Button.defaultProps = {
    variant: "contained",

}
export default Button
