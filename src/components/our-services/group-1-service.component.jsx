// import React, { Component } from 'react';
// import OurServicesData from './our-services.data';

// // import './our-services.styles.scss'

// class Service extends Component {
//     // constructor() {
//     //     super(props);

//     //     this.state = {
//     //         services: OurServicesData
//     //     }
//     // }

//     render() {
//         // const { services } = this.state;
//         return (
//             <div className='service'>
//             {OurServicesData.map((service) => (
//                     // <div className='img-wrapper'>
//                     //     {/* <img data-aos='fade-left' /> */}
//                     // </div>

//                     <div className='copy-wrapper'>
//                         <h2 data-aos='fade-right'>{OurServicesData.serviceHdr}</h2>
//                         <p data-aos='fade-left'>{}</p>
//                     </div>
//             ))}
//             </div>
//         );
//     }
// }

// export default Service;

import React from 'react';
import './our-services.styles.scss'

const Service = ({ serviceIcn, alt, serviceHdr, serviceExcerpt }) => {
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

export default Service;



