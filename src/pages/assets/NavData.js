import { AiOutlineHome, AiOutlineSafetyCertificate } from 'react-icons/ai';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { TfiControlForward } from 'react-icons/tfi';
import { RxDashboard } from 'react-icons/rx';

const my_navbar_data = [
  {
    index: 1,
    nav_link: `/#home_page`,
    navbar_name: 'Accueil',
    nav__icon: AiOutlineHome,
    bc: '#00a5ee',
  },
  {
    index: 2,
    nav_link: `/#about_myself`,
    navbar_name: 'À propos',
    nav__icon: TfiControlForward,
  },
  {
    index: 3,
    nav_link: `/tech/#my_skill`,
    navbar_name: 'Skills',
    nav__icon: RiCodeSSlashLine,
    another_page: true,
  },
  {
    index: 4,
    nav_link: '/education_and_certifications/#my-background',
    navbar_name: 'Éducation',
    nav__icon: AiOutlineSafetyCertificate,
    another_page: true,
  },
  {
    index: 5,
    nav_link: '/projects_and_experiences/#my-work',
    navbar_name: 'Projets et expériences',
    nav__icon: RxDashboard,
  },
];

export default my_navbar_data;
