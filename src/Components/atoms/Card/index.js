import React from 'react';
import Images from '../images/index'

const Card = ({ cardImage, cardContent }) => {
    return (
        <>
            <div className="card-outer">
                <Images location={cardImage} width="250" className="card-image" />
                <div className="card-content">{cardContent}</div>
            </div>
        </>
    )
}

export default Card;