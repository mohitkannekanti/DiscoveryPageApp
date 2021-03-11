import React from 'react';

const Images = ({ location, imageWidth, imageClass, alt, imgHeight }) => {
    return (
        <img src={location} alt={alt} width={imageWidth} height={imgHeight} className={imageClass} />
    )
}

export default Images
