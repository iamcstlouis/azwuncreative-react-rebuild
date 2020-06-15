import React from 'react'
import './our-values.styles.scss'

function SingleValue({ valueHdr, valueExcerpt }) {
    
    return (
        <li>
            <div className='icn-wrapper'>
                <div className='icn'>
                    <img
                        src={require('../../assets/imgs/home/icn_tick.png')}
                        alt='iPhone'
                        data-aos='fade-right'
                    />
                </div>
            </div>

            <div className='copy-wrapper'>
                <h2 data-aos='fade-left'>{valueHdr}</h2>
                <p data-aos='fade-left'>{valueExcerpt}</p>
            </div>

        </li>
    )
}

export default SingleValue
