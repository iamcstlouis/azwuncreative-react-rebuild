import React, { useState } from 'react'
import SingleValue from './single-value.component'


const OurValuesList = () => {

    // const [values, setValue] = useState([
    const [values] = useState([

        {
            value: 'Efficiency',
            valueExcerpt:
                'Going above and beyond to deliver a product that exceeds your expectations.',
            id: 'Efficiency'
        },
        {
            value: 'Collaboration',
            valueExcerpt:
                'Working with you every step of the way to ensure that our creative solutions align perfectly with your business goals.',
            id: 'Collaboration'
        },
        {
            value: 'Commitment',
            valueExcerpt:
                'Committed to providing you with a final product that engages and connects with your customers.',
            id: 'Commitment'
        },
        {
            value: 'Strategy',
            valueExcerpt:
                'Approaching the process with a strategic mindset, to provide a product that keeps you ahead of your competition.',
            id: 'Strategy'
        },
        {
            value: 'Transparency',
            valueExcerpt: 'An open and honest approach to your creative problems.',
            id: 'Transparency'
        },
        {
            value: 'Attention To Detail',
            valueExcerpt:
                'Exploring every aspect of bringing your vision to life, right down to the smallest detail.',
            id: 'Attention To Detail'
        },
        {
            value: 'Reliable',
            valueExcerpt:
                'Providing High quality, high performing, functional solutions, perfectly tailored to you and your brand.',
            id: 'Reliable'
        }
    ])

    return (
        <React.Fragment>
            {values.map(value => (
                <SingleValue valueHdr={value.value} valueExcerpt={value.valueExcerpt} key={value.id} />
            ))}
        </React.Fragment>
    )
}

export default OurValuesList;