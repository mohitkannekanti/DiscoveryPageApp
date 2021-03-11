import React from 'react';
import CardsList from '../molecules/CardsList';
import Header from '../organisms/Header/index'

const Template = ({ content }) => {
    return (
        <div className="template-main">
            <Header />
            <CardsList />
        </div>
    )
}

export default Template;