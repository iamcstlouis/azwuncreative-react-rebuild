import React from 'react'
import CardsData from './CardsData'
import SingleCard from './SingleCard'

import './styles.scss'

const Cards = () => {
    return (
        <div className='cards'>
            <ul className='cards-list'>
                {
                    CardsData.map((card) => (
                        <SingleCard icn={card.icn} alt={card.alt} hdr={card.hdr} excerpt={card.excerpt} />
                    ))
                }
            </ul>
        </div>
    )
}

export default Cards
