import React from 'react'
import { Link } from 'react-router-dom'

function MainCopy() {
    return (
        <div className='section-copy'>
            <p data-aos='fade-right'>
                Just tell us what it is you have in mind and we’ll begin the process.
                <span>Don’t know what you want?</span>
            </p>
            <p data-aos='fade-left'>No problem, sit back and let us do the work.</p>

            <div className='azwun-btn azwun-btn--accent-border' data-aos='zoom-in'>
                <Link to='/contact'
                    className='azwun-btn__txt azwun-btn__txt--dark'
                >Work With Us</Link>
            </div>
        </div>
    )
}

export default MainCopy
