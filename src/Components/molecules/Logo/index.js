import React from 'react';
import Images from '../../atoms/images';
import './styles.css'

const Logo = ({ content }) => {
    console.log({ content }, "logo")
    return (
        <div className="logo-section">
            <Images location={content.location[0]} alt={content.alt[0]} imageWidth="20" />
            <Images location={content.location[1]} alt={content.alt[1]} imageWidth="200px" />
        </div>
    )
}

export default Logo
