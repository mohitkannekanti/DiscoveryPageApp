import React from 'react'
import CarouselContent from '../../molecules/CarouselContent';
import CarouselImages from '../../molecules/CarouselImages'
import CarouselIndicators from '../../molecules/CarouselIndicators';
import './styles.css'

const CarouselSlider = () => {
    const CarouselData = {
        location: ['leftArrow.svg', 'rightArrow.svg'],
        carosuelContent: {
            imgLocation: 'banner1.jpg',
            heading: "Britney Spears",
            content: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
            btnValue: ['click', 'check', 'Watch Now']
        }
    }

    return (
        <div className="carousel-slider">
            <CarouselIndicators location={CarouselData.location[0]} imgHeight="10" imageClass="carousel-indicators" />
            <CarouselContent heading={CarouselData.carosuelContent.heading} content={CarouselData.carosuelContent.content} value={CarouselData.carosuelContent.btnValue[2]} type={CarouselData.carosuelContent.btnValue[0]} name={CarouselData.carosuelContent.btnValue[2]} />
            <CarouselImages location={CarouselData.carosuelContent.imgLocation} imageWidth="100%" />
            <CarouselIndicators location={CarouselData.location[1]} imgHeight="10" imageClass="carousel-indicators" />
        </div>
    )
}

export default CarouselSlider
