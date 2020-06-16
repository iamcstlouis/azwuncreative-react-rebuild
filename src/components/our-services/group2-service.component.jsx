import React from 'react';
import './our-services.styles.scss'

const Group2Service = ({ serviceIcn, alt, serviceHdr, serviceExcerpt }) => {
    return (
        <div className='content-wrapper'>
            <div className='service'>
                <div className='img-wrapper'>
                    <img src={serviceIcn} alt={alt} data-aos='fade-left' />
                </div>

                <div className='copy-wrapper'>
                    <h2 data-aos='fade-right'>{serviceHdr}</h2>
                    <p data-aos='fade-left'>{serviceExcerpt}</p>
                </div>
            </div>
        </div>
    );
}

export default Group2Service;