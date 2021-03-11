import React from 'react';
import Images from '../../atoms/images';
import Link from '../../atoms/Link'

const CarouselIndicators = ({ url, location, imageWidth, imgHeight, imageClass }) => {
    return (
        <>
            <Link url={url} active={imageClass} text={<Images location={location} imgHeight={imgHeight} imageWidth={imageWidth} imageClass={imageClass} />} />
        </>
    )
}

export default CarouselIndicators
