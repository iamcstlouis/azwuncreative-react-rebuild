import uiUxDesignImage from '../../../../../assets/imgs/home/icn_ux-ui_2.svg'
import webDesignImage from '../../../../../assets/imgs/home/icn_web-design_2.svg'
import webDevImage from '../../../../../assets/imgs/home/icn_web-dev_2.svg'
import contentWritingImage from '../../../../../assets/imgs/home/icn_content-writing_2.png'
import maintenanceImage from '../../../../../assets/imgs/home/icn_maintenance.png'

const OurServicesData = {
    servicesGroup1: [
        {
            serviceIcn: uiUxDesignImage,
            alt: 'Azwun Creative UI/UX Icon',
            serviceHdr: 'UI / UX Design',
            serviceExcerpt:
                'User friendly creative solutions that guarantee your customers are able to navigate through your site with ease.',
            id: 'ui-ux-design'
        },
        {
            serviceIcn: webDesignImage,
            alt: 'Azwun Creative Web Design Icon',
            serviceHdr: 'Web Design',
            serviceExcerpt:
                'Providing beautiful web designs that engage and increase sales and truly represent your brand.',
            id: 'web-design'
        },
        {
            serviceIcn: webDevImage,
            alt: 'Azwun Creative Web Development Icon',
            serviceHdr: 'Web Development',
            serviceExcerpt:
                'Building fully responsive websites that are available to anyone, anywhere, on any device.',
            id: 'web-development'
        }
    ],
    servicesGroup2: [
        {
            serviceIcn: contentWritingImage,
            alt: 'Azwun Creative Content Writing Icon',
            serviceHdr: 'Content Writing',
            serviceExcerpt:
                'Finding the right words to ensure your customers are crystal clear on the service you provide.',
            id: 'content-writing'
        },
        {
            serviceIcn: maintenanceImage,
            alt: 'Azwun Creative Maintenance Icon',
            serviceHdr: 'Maintenance',
            serviceExcerpt:
                'Building your website is just the start. We’ll ensure your site remains compatible across all browsers and devices.',
            id: 'maintenance'
        }
    ]
}

export default OurServicesData;
