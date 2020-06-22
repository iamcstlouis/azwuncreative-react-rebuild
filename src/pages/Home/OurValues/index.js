import React from 'react'
import SingleValue from './OurValuesList/SingleValue'
import OurValuesData from './OurValuesList/OurValuesData'

import './styles.scss'

function OurValues() {
    return (

        <section id='our-values' className='our-values'>
            <div className='container'>
                <div className='content-wrapper'>
                    <h1 data-aos='zoom-in'>
                        Our <span>values.</span>
                    </h1>

                    <div className='values-section'>
                        <ul className='values-list'>
                            {
                                OurValuesData.map((value) => (
                                    <SingleValue valueHdr={value.valueHdr} valueExcerpt={value.valueExcerpt} key={value.id} />
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurValues;
