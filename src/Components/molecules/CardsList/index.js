import React from 'react'
import Card from '../../atoms/Card'

const CardsList = () => {
    const cardDetail = {
        location: ["adventure.jpg", "adventure.jpg", "adventure.jpg", "adventure.jpg", "adventure.jpg"],
        cardText: ["Test 1", "Test 2", "Test 3", "Test 4", "Test 5"]

    }

    console.log(cardDetail, "card details")

    return (
        <>
            {/* {cardDetail.map((cardContent, index) => {
                return (
                    { cardContent }
                )
            })} */}
            {/* {cardImages && cardImages.map((cardImg, index) => {

                // return (

                //     <Card cardImage={cardImg} key={index} />
                // )

            })} */}
        </>

    )
}

export default CardsList
