import React, { useState } from 'react';

import Group1Service from './group1-service.component';

const ServicesGroup1Data = () => {
    // const [services, setServices] = useState([
    const [services] = useState([
        {
            serviceIcn: require('../../assets/imgs/home/icn_ux-ui_2.svg'),
            alt: 'Azwun Creative UI/UX Icon',
            serviceHdr: 'UI / UX Design',
            serviceExcerpt:
                'User friendly creative solutions that guarantee your customers are able to navigate through your site with ease.',
            id: 'UI / UX Design'
        },
        {
            serviceIcn: require('../../assets/imgs/home/icn_web-design_2.svg'),
            alt: 'Azwun Creative Web Design Icon',
            serviceHdr: 'Web Design',
            serviceExcerpt:
                'Providing beautiful web designs that engage and increase sales and truly represent your brand.',
            id: 'Web Design'
        },
        {
            serviceIcn: require('../../assets/imgs/home/icn_web-dev_2.svg'),
            alt: 'Azwun Creative Web Development Icon',
            serviceHdr: 'Web Development',
            serviceExcerpt:
                'Building fully responsive websites that are available to anyone, anywhere, on any device.',
            id: 'Web Development'
        }
    ])

    return (
        <div>
            {services.map(service => (
                <Group1Service serviceIcn={service.serviceIcn} alt={service.alt} serviceHdr={service.serviceHdr} serviceExcerpt={service.serviceExcerpt} key={service.id} />
            ))}
        </div>
    );
}

export default ServicesGroup1Data;