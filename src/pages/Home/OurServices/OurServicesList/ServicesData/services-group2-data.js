import React, { useState } from 'react';

import Group2Service from '../SingleService/group2-service.component';

const ServicesGroup2Data = () => {
    // const [services, setServices] = useState([
    const [services] = useState([
        {
            serviceIcn: require('../../../../../assets/imgs/home/icn_content-writing_2.png'),
            alt: 'Azwun Creative Content Writing Icon',
            serviceHdr: 'Content Writing',
            serviceExcerpt:
                'Finding the right words to ensure your customers are crystal clear on the service you provide.',
            id: 'Content Writing'
        },
        {
            serviceIcn: require('../../../../../assets/imgs/home/icn_maintenance.png'),
            alt: 'Azwun Creative Maintenance Icon',
            serviceHdr: 'Maintenance',
            serviceExcerpt:
                'Building your website is just the start. We’ll ensure your site remains compatible across all browsers and devices.',
            id: 'Maintenance'
        }
    ])

    return (
        <div>
            {services.map(service => (
                <Group2Service serviceIcn={service.serviceIcn} alt={service.alt} serviceHdr={service.serviceHdr} serviceExcerpt={service.serviceExcerpt} key={service.id} />
            ))}
        </div>
    );
}

export default ServicesGroup2Data;