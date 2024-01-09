import { meta, shopify, starbucks, tesla } from '../assets/images';
import {
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nodejs,
  react,
  snapgram,
  tailwindcss,
  calculator,
  typescript,
  java,
  python,
  django,
  linux,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: mui,
    name: 'Material-UI',
    type: 'Frontend',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
  {
    imageUrl: java,
    name: 'java',
    type: 'Backend',
  },
  {
    imageUrl: python,
    name: 'Python',
    type: 'Backend',
  },
  {
    imageUrl: django,
    name: 'Django',
    type: 'Database',
  },
  {
    imageUrl: linux,
    name: 'Linux',
    type: 'Operating System',
  },
];

export const experiences = [
  // {
  //   title: 'React Native Developer',
  //   company_name: 'Tesla',
  //   icon: tesla,
  //   iconBg: '#fbc3bc',
  //   date: 'Jan 2021 - Feb 2022',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/SharuSiv',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/sharujan-sivanandam/',
  },
];

export const projects = [
  {
    iconUrl: snapgram,
    theme: 'btn-back-red',
    name: 'Python Automated Instagram Bot',
    description:
      'Built an automated instagram bot that automatically replies to messages and follows user given an account, and a set of messages.',
    link: 'https://github.com/SharuSiv/SeleniumAutomatedInstaBot',
  },
  {
    iconUrl: calculator,
    theme: 'btn-back-pink',
    name: 'Number Systems Programmer Calculator',
    description:
      'A Number Systems Converter Calculator. Can interchangeably convert Binary, Hexadecimal, Octal, and Decimal Numbers.',
    link: 'https://github.com/SharuSiv/c--programming-calculator',
  },
];
