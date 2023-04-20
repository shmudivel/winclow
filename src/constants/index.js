import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  dictionary,
  inProgress,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "ABOUT",
  },
  {
    id: "work",
    title: "WORK",
  },
  {
    id: "contact",
    title: "CONTACT",
  },
];

const services = [
  {
    title: "Web design",
    icon: web,
  },
  {
    title: "Development",
    icon: mobile,
  },
  {
    title: "Brand&Strategy",
    icon: backend,
  },
  {
    title: "Marketing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Business",
    company_name: "Initium",
    icon: starbucks,
    iconBg: "#000",
    date: "Quick, affordable, straightforward.",
    points: [
      "1. Hosting and Domain",
      "2. Incredible Web design",
      "3. Copyright and Content",
      "4. Fast Development",
      "5. Social Media Business Pages",
    ],
  },
  {
    title: "Increase sales",
    company_name: "Profectus",
    icon: tesla,
    iconBg: "#000",
    date: "Agile, competitive, customer-centric.",
    points: [
      "1. Hosting and Domain",
      "2. Incredible Web design",
      "3. Copyright and Content",
      "4. Fast Development",
      "5. Social Media Business Pages",
      "6. SEO optimization",
      "7. Facebook / instagram ads",
    ],
  },
  {
    title: "Maximum revenue",
    company_name: "Excellentia",
    icon: shopify,
    iconBg: "#000",
    date: "Upgrade, amplify, succeed.",
    points: [
      "1. Hosting and Domain",
      "2. Incredible Web design",
      "3. Copyright and Content",
      "4. Fast Development",
      "5. Social Media Business Pages",
      "6. SEO optimization",
      "7. Full Funnel Advertising",
      "8. Social Media Handled ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Winclow for their impressive attention to detail, innovative ideas, unique pricing structure, and measurable results. I will work with them again for my next venture.",
    name: "Fara Lee",
    designation: "CFO",
    company: "Costa Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Working with Winclow was a pleasure. They efficiently transformed my complex idea into a high-quality web responsive app in record time. Special thanks to Al for the excellent support. Winclow also helped with promotion, helping me achieve my financial goals earlier than expected.",
    name: "Chris Sherlov",
    designation: "COO",
    company: "Devan Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Winclow team exceeded our expectations by providing exceptional website development services and valuable insights into internet marketing strategy. Our new website, a key point of introduction for new clients, has transformed our firm's image. We highly recommend their exceptional work.",
    name: "Lil Wang",
    designation: "CTO",
    company: "CatInspections Inc",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "eCommerce website",
    description:
      "Next.js and Stripe integration for payment processing. Sanity.io database for eCommerce data management. Customizable and user-friendly interface with advanced inventory and order management capabilities.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "yellow-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/shmudivel/sanity-vdohKz",
    demo_link: "https://vdoh.vercel.app/",
  },
  {
    name: "Time Zones Scheduler",
    description:
      "Time Zones Scheduler is a simple app that helps you to schedule meetings with people from different time zones. It is a simple and easy to use app that helps you to schedule meetings with people from different time zones.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "i18next",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/shmudivel/TimeZones",
    demo_link: "https://shmudivel.github.io/TimeZones/",
  },
  {
    name: "Cargo Calculator",
    description:
      "Use as simple box and pipes volume calculator on-the-go! This app has got everything you need to calculate right volume of boxes and pipes. It also provide 3 languages, this calculator is for everyone.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "i18next",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/shmudivel/cargo-calculator",
    demo_link: "https://shmudivel.github.io/cargo-calculator/",
  },
  {
    name: "Shaft Dictionary CN-RU-EN",
    description:
      "Mining Dictionary for technical translators. Accessible in 3 languages, Chinese, English and Russian. Useful for technical translators.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "i18next",
        color: "pink-text-gradient",
      },
    ],
    image: dictionary,
    source_code_link:
      "https://github.com/shmudivel/dictionary-cn-ru-en-firebase",
    demo_link: "https://shmudivel.github.io/dictionary-cn-ru-en-firebase/",
  },
  {
    name: "Website for spa salon",
    description:
      "It will be a simple landing page with various descriptions of spa procedures and their corresponding prices.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "i18next",
        color: "pink-text-gradient",
      },
    ],
    image: inProgress,
    source_code_link: "https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=80s",
    demo_link: "https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=80s",
  },
  {
    name: "Accounting software",
    description:
      "Our upcoming pet project simplifies financial management for small business owners. It features a user-friendly interface for tracking income and expenses, creating invoices, managing inventory, and generating financial reports.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "i18next",
        color: "pink-text-gradient",
      },
    ],
    image: inProgress,
    source_code_link: "https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=80s",
    demo_link: "https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=80s",
  },
];

export { services, technologies, experiences, testimonials, projects };
