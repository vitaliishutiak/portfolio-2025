export interface Project {
  id: number
  img: string
  title: string
  technologies: string[]
  description?: string
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    img: '/projects-images/project-image-1.png',
    title: 'Lawgorithm',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    description: 'Full-stack e-commerce solution with modern UI/UX',
    githubUrl: 'https://github.com/example/ecommerce',
    liveUrl: 'https://ecommerce-demo.com'
  },
  {
    id: 2,
    img: '/projects-images/project-image-5.png', 
    title: 'Creative Factory Victoria',
    technologies: ['Next.js', 'Material-UI', 'Framer Motion'],
    description: 'Responsive portfolio with smooth animations',
    githubUrl: 'https://github.com/example/portfolio',
    liveUrl: 'https://portfolio-demo.com'
  },
  {
    id: 3,
    img: '/projects-images/project-image-4.png',
    title: 'Lnq hub',
    technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
    description: 'Real-time collaborative task management platform',
    githubUrl: 'https://github.com/example/taskapp',
    liveUrl: 'https://taskapp-demo.com'
  },
  {
    id: 4,
    img: '/projects-images/project-image-3.png',
    title: 'Teplofasad Lviv',
    technologies: ['React', 'Chart.js', 'OpenWeather API'],
    description: 'Interactive weather dashboard with data visualization',
    githubUrl: 'https://github.com/example/weather',
    liveUrl: 'https://weather-demo.com'
  },
  {
    id: 5,
    img: '/projects-images/project-image-2.png',
    title: 'Botteleck deal',
    technologies: ['React Native', 'Firebase', 'Redux'],
    description: 'Mobile social media application',
    githubUrl: 'https://github.com/example/social',
    liveUrl: 'https://social-demo.com'
  },
  {
    id: 6,
    img: '/projects-images/project-image-6.png',
    title: 'GigaTrump coin',
    technologies: ['Next.js', 'Sanity CMS', 'Tailwind CSS'],
    description: 'Modern blog platform with CMS integration',
    githubUrl: 'https://github.com/example/blog',
    liveUrl: 'https://blog-demo.com'
  },
  {
    id: 7,
    img: '/projects-images/project-image-7.jpg',
    title: 'LDS admin panel',
    technologies: ['Next.js', 'Sanity CMS', 'Tailwind CSS'],
    description: 'Modern blog platform with CMS integration',
    githubUrl: 'https://github.com/example/blog',
    liveUrl: 'https://blog-demo.com'
  },
  {
    id: 8,
    img: '/projects-images/project-image-8.png',
    title: 'Bottleck deal admin panel',
    technologies: ['Next.js', 'Sanity CMS', 'Tailwind CSS'],
    description: 'Modern blog platform with CMS integration',
    githubUrl: 'https://github.com/example/blog',
    liveUrl: 'https://blog-demo.com'
  },

]
