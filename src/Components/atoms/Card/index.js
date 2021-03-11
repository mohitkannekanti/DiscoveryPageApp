import React from 'react';
import Images from '../images/index'

const Card = ({ cardImage, cardContent, cardImageClass, imageWidth }) => {
    return (
        <>
            <div className="card-outer">
                <Images location={cardImage} imageWidth={imageWidth} className={cardImageClass} />
                <div className="card-content">{cardContent}</div>
            </div>
        </>
    )
}

export default Card;