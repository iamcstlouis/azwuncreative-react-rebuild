import React from 'react'
// import SingleValue from './single-value.component'
import OurValuesList from './our-values-list'

import './our-values.styles.scss'

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
                         <OurValuesList />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurValues;
