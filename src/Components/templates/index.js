import React from 'react';
import CardsList from '../molecules/CardsList';
import CarouselSlider from '../organisms/CarouselSlider';
import Header from '../organisms/Header/index'

const Template = ({ content }) => {
    return (
        <div className="template-main">
            <Header />
            <CarouselSlider />
            <CardsList />
        </div>
    )
}

export default Template;