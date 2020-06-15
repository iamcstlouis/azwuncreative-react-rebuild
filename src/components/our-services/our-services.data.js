// const OurServicesData = [
//     // {
//         // services1: [
//             {
//                 serviceIcn: require('../../assets/imgs/home/icn_ux-ui_2.svg'),
//                 alt: 'Azwun Creative UI/UX Icon',
//                 serviceHdr: 'UI / UX Design',
//                 serviceExcerpt:
//                     'User friendly creative solutions that guarantee your customers are able to navigate through your site with ease.'
//             },
//             {
//                 serviceIcn: require('../../assets/imgs/home/icn_web-design_2.svg'),
//                 alt: 'Azwun Creative Web Design Icon',
//                 serviceHdr: 'Web Design',
//                 serviceExcerpt:
//                     'Providing beautiful web designs that engage and increase sales and truly represent your brand.'
//             },
//             {
//                 serviceIcn: require('../../assets/imgs/home/icn_web-dev_2.svg'),
//                 alt: 'Azwun Creative Web Development Icon',
//                 serviceHdr: 'Web Development',
//                 serviceExcerpt:
//                     'Building fully responsive websites that are available to anyone, anywhere, on any device.'
//             },
//         // ]
//     // },
//     {
//         // services2: [
//             // {
//                 serviceIcn: require('../../assets/imgs/home/icn_content-writing_2.png'),
//                 alt: 'Azwun Creative Content Writing Icon',
//                 serviceHdr: 'Content Writing',
//                 serviceExcerpt:
//                     'Finding the right words to ensure your customers are crystal clear on the service you provide.'
//             },
//             {
//                 serviceIcn: require('../../assets/imgs/home/icn_maintenance.png'),
//                 alt: 'Azwun Creative Maintenance Icon',
//                 serviceHdr: 'Maintenance',
//                 serviceExcerpt:
//                     'Building your website is just the start. We’ll ensure your site remains compatible across all browsers and devices.'
//             // }
//         // ]
//     }
// ]

// export default OurServicesData;


import React, { useState } from 'react';

import Service from './group-1-service.component';

const OurServicesData = () => {
    const [services, setServices] = useState([
        {
            serviceIcn: require('../../assets/imgs/home/icn_ux-ui_2.svg'),
            alt: 'Azwun Creative UI/UX Icon',
            serviceHdr: 'UI / UX Design',
            serviceExcerpt:
                'User friendly creative solutions that guarantee your customers are able to navigate through your site with ease.',
            id: 1
        },
        {
            serviceIcn: require('../../assets/imgs/home/icn_web-design_2.svg'),
            alt: 'Azwun Creative Web Design Icon',
            serviceHdr: 'Web Design',
            serviceExcerpt:
                'Providing beautiful web designs that engage and increase sales and truly represent your brand.',
            id: 2
        },
        {
            serviceIcn: require('../../assets/imgs/home/icn_web-dev_2.svg'),
            alt: 'Azwun Creative Web Development Icon',
            serviceHdr: 'Web Development',
            serviceExcerpt:
                'Building fully responsive websites that are available to anyone, anywhere, on any device.',
            id: 3
        },
        {
            serviceIcn: require('../../assets/imgs/home/icn_content-writing_2.png'),
            alt: 'Azwun Creative Content Writing Icon',
            serviceHdr: 'Content Writing',
            serviceExcerpt:
                'Finding the right words to ensure your customers are crystal clear on the service you provide.',
            id: 4
        },
        {
            serviceIcn: require('../../assets/imgs/home/icn_maintenance.png'),
            alt: 'Azwun Creative Maintenance Icon',
            serviceHdr: 'Maintenance',
            serviceExcerpt:
                'Building your website is just the start. We’ll ensure your site remains compatible across all browsers and devices.',
            id: 5
        }
    ])

    return (
        <div>
            {services.map(service => (
                
                    <Service serviceIcn={service.serviceIcn} alt={service.alt} serviceHdr={service.serviceHdr} serviceExcerpt={service.serviceExcerpt} key={service.id} />
            ))}
        </div>
    );
}

export default OurServicesData;
