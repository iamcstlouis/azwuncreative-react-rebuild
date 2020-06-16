import React, { useState } from 'react'
import SingleCard from './single-card'

const Cards = () => {
  // const [cards, setCards] = useState ([
  const [cards] = useState([
    {
      icn: require('../../assets/imgs/home/icn_design_pink.png'),
      alt: 'Azwun design icon',
      hdr: 'Design.',
      excerpt:
        'Let’s build something beautiful, something that enhaces and takes your business to the next level.',
      id: 'Design Card'
    },
    {
      icn: require('../../assets/imgs/home/icn_develop_pink.png'),
      alt: 'Azwun develop icon',
      hdr: 'Develop.',
      excerpt:
        'Building and testing our code, to ensure that your site is fully responsive and looks great across all browsers and devices.',
      id: 'Develop Card'
    },
    {
      icn: require('../../assets/imgs/home/icn_deploy_pink.png'),
      alt: 'Azwun design icon',
      hdr: 'Deploy.',
      excerpt:
        'The hand over. You’re ready to go live!… With a brand new site that truly meets the needs of your customers.',
      id: 'Deploy Card'
    }
  ])

  return (
    <>
      {cards.map(card => (
        <SingleCard cardIcn={card.icn} alt={card.alt} hdr={card.hdr} excerpt={card.excerpt} key={card.id} />
      ))}
    </>
  )
}

export default Cards