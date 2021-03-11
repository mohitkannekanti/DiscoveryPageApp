import React from 'react';
import './styles.css'

const Link = ({ url, text, active }) => {
    console.log(text, "linkssss")
    return (
        <a href={`/${url}`} className={`text-link ${active}`}>{text}</a>
    )
}
export default Link