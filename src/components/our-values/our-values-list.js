import React, { useState } from 'react'
import SingleValue from './single-value.component'


const OurValuesList = () => {

    const [values, setValue] = useState([

        {
            value: "Efficiency",
            valueExcerpt:
                "Going above and beyond to deliver a product that exceeds your expectations.",
            id: 1
        },
        {
            value: "Collaboration",
            valueExcerpt:
                "Working with you every step of the way to ensure that our creative solutions align perfectly with your business goals.",
            id: 2
        },
        {
            value: "Commitment",
            valueExcerpt:
                "Committed to providing you with a final product that engages and connects with your customers.",
            id: 3
        },
        {
            value: "Strategy",
            valueExcerpt:
                "Approaching the process with a strategic mindset, to provide a product that keeps you ahead of your competition.",
            id: 4
        },
        {
            value: "Transparency",
            valueExcerpt: "An open and honest approach to your creative problems.",
            id: 5
        },
        {
            value: "Attention To Detail",
            valueExcerpt:
                "Exploring every aspect of bringing your vision to life, right down to the smallest detail.",
            id: 6
        },
        {
            value: "Reliable",
            valueExcerpt:
                "Providing High quality, high performing, functional solutions, perfectly tailored to you and your brand.",
            id: 7
        }
    ])

    return (
        <>
            {values.map(value => (
                <SingleValue valueHdr={value.value} valueExcerpt={value.valueExcerpt} key={value.id} />
            ))}
        </>
    )
}

export default OurValuesList;