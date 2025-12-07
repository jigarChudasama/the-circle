import { StaticImageData } from "next/image";

// project images
import p_1 from "@/assets/img/home-01/project/project-1-1.jpg";
import p_2 from "@/assets/img/home-01/project/project-1-2.jpg";
import p_3 from "@/assets/img/home-01/project/project-1-3.jpg";
import p_4 from "@/assets/img/home-01/project/project-1-4.jpg";
import p_5 from "@/assets/img/home-01/project/project-1-5.jpg";
import p_6 from "@/assets/img/home-01/project/project-1-6.jpg";

// detail images
import full_image from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-1.jpg';
import full_image_2 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-2.jpg';
import port_img_1 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-3.jpg';
import port_img_2 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-4.jpg';
import port_img_3 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-5.jpg';
import port_img_4 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-6.jpg';
import port_img_5 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-7.jpg';

export interface IPortfolio {
    id: number;
    slug: string;
    img: StaticImageData;
    title: string;
    cls: string;
    cls_2: string;
    category: string;
    // Detail fields
    detail_title: string;
    detail_desc_1: string;
    detail_desc_2: string;
    detail_images: StaticImageData[];
    slider_images: StaticImageData[];
}

const portfolio_data: IPortfolio[] = [
    {
        id: 1,
        slug: "mockups-google-pixel",
        img: p_1,
        title: "Mockups Google Pixel",
        cls: "tp-project-mr",
        cls_2: "height-1",
        category: "Design",
        detail_title: "Mockups Google Pixel",
        detail_desc_1: "Liko website was using a generic template, felt quite outdated and not in-line with the quality of his work. The main goal was to translate his high-end photography into a digital experience that would honor and present his work in a memorable and contemporary way.",
        detail_desc_2: "Each case study gets its own identity through the styling options in the custom content management system. The styling options are pre-defined",
        detail_images: [full_image, full_image_2, port_img_1, port_img_2],
        slider_images: [port_img_3, port_img_4, port_img_5, port_img_4]
    },
    {
        id: 2,
        slug: "daring-colors",
        img: p_2,
        title: "Daring Colors",
        cls: "text-end",
        cls_2: "height-2 d-inline-flex justify-content-end",
        category: "Branding",
        detail_title: "Daring Colors",
        detail_desc_1: "Bold and vibrant colors were chosen to represent the energy and dynamism of the brand. We focused on creating a visual identity that stands out and captures attention immediately.",
        detail_desc_2: "The color palette is used consistently across all brand touchpoints to reinforce recognition.",
        detail_images: [full_image, full_image_2, port_img_1, port_img_2], // Reusing for demo
        slider_images: [port_img_3, port_img_4, port_img_5, port_img_4]
    },
    {
        id: 3,
        slug: "graphic-design",
        img: p_3,
        title: "Graphic Design",
        cls: "tp-project-mr",
        cls_2: "height-3",
        category: "Design",
        detail_title: "Graphic Design Masterpiece",
        detail_desc_1: "We create your graphic designs according to your budget and your needs. Reveal your brand image and capture your audience.",
        detail_desc_2: "From logos to marketing materials, our designs are crafted with precision and creativity.",
        detail_images: [full_image, full_image_2, port_img_1, port_img_2],
        slider_images: [port_img_3, port_img_4, port_img_5, port_img_4]
    },
    {
        id: 4,
        slug: "web-development",
        img: p_4,
        title: "Web Development",
        cls: "",
        cls_2: "height-4",
        category: "Development",
        detail_title: "Sleek Web Development",
        detail_desc_1: "Our web development team builds robust and scalable websites using the latest technologies. We ensure high performance and security.",
        detail_desc_2: "Custom solutions tailored to your specific business requirements.",
        detail_images: [full_image, full_image_2, port_img_1, port_img_2],
        slider_images: [port_img_3, port_img_4, port_img_5, port_img_4]
    },
    {
        id: 5,
        slug: "mobile-app",
        img: p_5,
        title: "Mobile App",
        cls: "tp-project-ml",
        cls_2: "height-5",
        category: "App",
        detail_title: "Innovative Mobile App",
        detail_desc_1: "We design and develop mobile applications that provide seamless user experiences. Available for both iOS and Android platforms.",
        detail_desc_2: "Feature-rich apps that help you connect with your customers on the go.",
        detail_images: [full_image, full_image_2, port_img_1, port_img_2],
        slider_images: [port_img_3, port_img_4, port_img_5, port_img_4]
    },
    {
        id: 6,
        slug: "seo-optimization",
        img: p_6,
        title: "SEO Optimization",
        cls: "",
        cls_2: "height-6",
        category: "Marketing",
        detail_title: "SEO Optimization Strategy",
        detail_desc_1: "Improve your search engine rankings with our expert SEO services. We optimize your website to attract more organic traffic.",
        detail_desc_2: "Long-term strategies that deliver sustainable results.",
        detail_images: [full_image, full_image_2, port_img_1, port_img_2],
        slider_images: [port_img_3, port_img_4, port_img_5, port_img_4]
    },
];

export default portfolio_data;
