import { StaticImageData } from "next/image";

// images
import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";
import s_4 from "@/assets/img/home-01/service/service-icon-4.png"; // Assuming there might be a 4th icon or reusing one

// detail images
import sv_1 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_2 from "@/assets/img/inner-service/sercive-details/sv-details-2.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";

// service six images
import ser_img_1 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/service-4.jpg";


export interface IService {
    id: number;
    slug: string;
    title: string;
    icon: StaticImageData;
    desc: string;
    detail_subtitle: string;
    detail_title: string;
    detail_desc_1: string;
    detail_desc_2?: string;
    features: string[];
    images: StaticImageData[];
    service_six_img?: StaticImageData;
}

const service_data: IService[] = [
    {
        id: 1,
        slug: "branding",
        title: "Branding",
        icon: s_2,
        desc: "Branding is one of the most important ingredients for the success of any business.",
        detail_subtitle: "Design Studio",
        detail_title: "Logo and branding",
        detail_desc_1: "Branding is essential to establish yourself in the market in a unique and permanent way. At Riveal, we attach great importance. We seek to understand your business to better convey your values ​​and your talent through your brand image. Explore our achievements and let yourself be convinced! Your logo is at the heart of your identity. An impactful design, tailor-made and in line with your activity will allow you to differentiate yourself and mark your audience.",
        features: [
            "Graphic research and production",
            "Presentation of your logo on different media",
            "Advice on the graphic orientation of your logo or its redesign",
            "Delivery of your logo in professional formats"
        ],
        images: [sv_1, sv_2, sv_3],
        service_six_img: ser_img_1
    },
    {
        id: 2,
        slug: "website-design",
        title: "Website design",
        icon: s_1,
        desc: "The perfect cocktail should still look and taste perfect no matter the size of the glass you serve it in.",
        detail_subtitle: "Design Studio",
        detail_title: "Website Design",
        detail_desc_1: "A website is your digital storefront. We design websites that are not only visually stunning but also functional and user-friendly. We ensure that your website represents your brand effectively and provides a seamless experience for your users.",
        features: [
            "Responsive design",
            "User experience (UX) optimization",
            "Custom layout and graphics",
            "SEO friendly structure"
        ],
        images: [sv_1, sv_2, sv_3],
        service_six_img: ser_img_2
    },
    {
        id: 3,
        slug: "marketing",
        title: "Marketing",
        icon: s_3,
        desc: "We take that same approach with the apps & websites we create. you go there because of the overall experience.",
        detail_subtitle: "Digital Marketing",
        detail_title: "Marketing Strategy",
        detail_desc_1: "Effective marketing is key to reaching your target audience. We develop comprehensive marketing strategies that include social media, content marketing, and paid advertising to boost your brand visibility and engagement.",
        features: [
            "Social media management",
            "Content strategy and creation",
            "Paid advertising campaigns",
            "Analytics and reporting"
        ],
        images: [sv_1, sv_2, sv_3],
        service_six_img: ser_img_3
    },
    {
        id: 4,
        slug: "web-analytics",
        title: "Web Analytics",
        icon: s_3, // Reusing icon for now
        desc: "We create your graphic designs according to your budget and your needs. Reveal your brand image and capture your audience.",
        detail_subtitle: "Design Studio",
        detail_title: "Web Analytics",
        detail_desc_1: "Understanding your data is crucial for growth. We provide in-depth web analytics services to help you track performance, understand user behavior, and make data-driven decisions.",
        features: [
            "Traffic analysis",
            "User behavior tracking",
            "Conversion rate optimization",
            "Custom reporting"
        ],
        images: [sv_1, sv_2, sv_3], // Reusing detail images
        service_six_img: ser_img_4
    }
];

export default service_data;
