import { IMenuDT } from "@/types/menu-d-t";


const menu_data: IMenuDT[] = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'SERVICES',
    link: '/service',
  },
  {
    id: 3,
    title: 'Portfolio',
    link: '/portfolio',
  },
  {
    id: 4,
    title: 'Blog',
    link: '/blog-list',
  },
  {
    id: 5,
    title: 'Contact',
    link: '/contact',
  },
  {
    id: 6,
    title: 'ABOUT US',
    link: '/about-us',
  },
];



export default menu_data;

// mobile menus 
export const mobile_menu_data: {
  id: number;
  title: string;
  link: string;
}[] = [
    {
      id: 1,
      title: 'Home',
      link: '/',
    },
    {
      id: 2,
      title: 'SERVICES',
      link: '/service',
    },
    {
      id: 3,
      title: 'Portfolio',
      link: '/portfolio',
    },
    {
      id: 4,
      title: 'Blog',
      link: '/blog-list',
    },
    {
      id: 5,
      title: 'Contact',
      link: '/contact',
    },
    {
      id: 6,
      title: 'ABOUT US',
      link: '/about-us',
    },
  ]