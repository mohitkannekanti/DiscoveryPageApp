import React from 'react';
import './styles.css'

const Link = ({ url, text }) => {
    console.log(text, "linkssss")
    return (
        <a href={url} className="nav-link">{text}</a>
    )
}
export default Link