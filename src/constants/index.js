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
    iconBg: "#383E56",
    date: " Here should be the link to contact me 'Lets talk about it'",
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
    iconBg: "#E6DEDD",
    date: "Jan 2015 - Nov 2020",
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
    title:
      "Administrative assistant-translator & Software Solutions Developer ",
    company_name: "KAZ Minerals",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dec 2020 - Feb 2022",
    points: [
      "Perform technical translation in Russian-English-Chinese in written and verbal form",
      "Prepare and coordinate important technical documents (budget, planning, contract, equipment, etc.)",
      "Automate and optimize translation by creating a technical dictionary (Air-supply shaft system), reducing training time for new translators",
      "Administer and manage internal and external meetings, organize phone calls and interviews, and plan, coordinate, and adjust the agenda for top management",
      "Perform various administrative functions such as receiving and filing documents, arranging discussions, and facilitating negotiations with stakeholders",
      "Assist management with formal tasks such as preparation of presentations, processing of timesheets, and organization of visits",
      "Control the flow of documents sent for approval or review by management, identify necessary documents and responsible persons, and manage responses to/from responsible employees",
      "Manage correspondence and ensure timely delivery",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Self-employed",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Present",
    points: [
      "The focus of my career has shifted to Web Development, driven by a desire for a more creative work environment and the vast opportunities presented by software development",
      "As a self-taught coding enthusiast, my portfolio includes projects such as a package calculator, technical dictionary for the mining industry, and time zones scheduler",
      "Through attending local meet-up events in the US, I was able to network with some of the most skilled IT specialists in the industry. These experiences helped me stay current with the latest trends and be more involved in the field",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Darkhan is like a ninja. He can stealthily fix bugs and optimize code without anyone ever knowing they were there.",
    name: "Fara Lee",
    designation: "CFO",
    company: "Costa Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Darkhan does.",
    name: "Chris Sherlov",
    designation: "COO",
    company: "Devan Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Darkhan is like a rockstar, but instead of shredding on a guitar, he is shredding our website's loading times to pieces.",
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
