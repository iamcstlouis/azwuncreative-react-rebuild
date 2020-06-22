import React from 'react'

import TickIcon from '../../../../../images/home/icn_tick.png';

function SingleValue({ valueHdr, valueExcerpt }) {

    return (
        <li className='value'>
            <div className='icn-wrapper'>
                <div className='icn'>
                    <img
                        src={TickIcon}
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
