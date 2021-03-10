import React from 'react';
import logo from './logo.png';
import navImage from './hamburgerIcon.svg';

const Images = () => {
    return (
        <>
            <img src={navImage} alt="nav_icon" />
            <img src={logo} alt="dummy_image" width="200px" />
        </>
    )
}

export default Images
