import React from 'react';
import Images from '../../atoms/images'

const CarouselImages = ({ location, alt, imageWidth, imgHeight }) => {
    return (
        <>
            <Images location={location} alt={alt} imageWidth={imageWidth} imgHeight={imgHeight} />
        </>
    )
}
export default CarouselImages