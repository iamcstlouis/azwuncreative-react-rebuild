import React from 'react'
// import './our-approach.styles.scss'

function SingleCard({cardIcn, alt, hdr, excerpt}) {
    return (
        <li data-aos='zoom-in-down'>
            <div className='icn-hdr-wrapper'>
                <div className='content-wrapper'>
                    <div className='icn-wrapper'>
                        <img src={cardIcn} alt={alt} />
                    </div>
                    
                    <div className='icn-hdr'>
                        <h2>{hdr}</h2>
                    </div>
                </div>
            </div>

            <div className='copy-wrapper'>
                <p data-aos='fade-up'>{excerpt}</p>
            </div>
        </li>
    )
}

export default SingleCard
