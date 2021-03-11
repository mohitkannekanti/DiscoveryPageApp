import React from 'react'
import Images from '../../atoms/images'
import Button from '../../atoms/button/index'
import './styles.css'

const CarouselContent = ({ heading, content, type, name, value }) => {
    return (
        <div className="carousel-div">
            <h1>{heading}</h1>
            <p>{content}</p>
            <Button type={type} name={name} value={value} />
            <div className="play-btn">
                <Images location="play.svg" alt="play-btn" />
            </div>
        </div>
    )
}

export default CarouselContent
