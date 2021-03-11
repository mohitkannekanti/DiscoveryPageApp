import React from 'react'
import Card from '../../atoms/Card'
import './styles.css'

const CardsList = () => {
    const cardDetail = {
        location: ['adventure.jpg', 'animals.jpg', 'auto.jpg', 'food.jpg', 'lifeStyle.jpg', 'nature.jpg'],
        cardText: ['Adventure', 'Animals', 'Auto', 'Food', 'Life Style', 'Nature']

    }

    return (

        <div className="cards">
            {cardDetail.location.map((location, index) => {
                return (
                    <Card cardImage={location} key={index} cardContent={cardDetail.cardText[index]} imageWidth="200" cardImageClass="card-image" />
                )
            })}
        </div>

    )
}

export default CardsList
