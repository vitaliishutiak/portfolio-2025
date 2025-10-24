export interface Project {
  id: number
  img: string
  title: string
  technologies: string[]
  description?: string
  githubUrl?: string
  liveUrl?: string
  category: 'ukrainian' | 'international'
  images: string[]
  longDescription: string
  features: string[]
  challenges: string[]
  results: string[]
  duration: string
  role: string
  client?: string
}

export const projects: Project[] = [
  {
    id: 1,
    img: '/projects-images/project-image-1.png',
    title: 'Lawgorithm',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    description: 'Full-stack e-commerce solution with modern UI/UX',
    githubUrl: 'https://github.com/example/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    category: 'ukrainian',
    images: [
      '/projects-images/project-image-1.png',
      '/projects-images/project-image-2.png',
      '/projects-images/project-image-3.png'
    ],
    longDescription: 'Lawgorithm - це інноваційна платформа для юридичних послуг, яка об\'єднує клієнтів з кваліфікованими юристами. Проект включає повноцінну систему управління справами, онлайн консультації та автоматизовані правові рішення.',
    features: [
      'Система онлайн консультацій',
      'Автоматизований підбір юристів',
      'Управління справами',
      'Платежна система',
      'Мобільний додаток'
    ],
    challenges: [
      'Складність інтеграції з юридичними базами даних',
      'Забезпечення конфіденційності клієнтів',
      'Оптимізація для мобільних пристроїв'
    ],
    results: [
      'Збільшення клієнтської бази на 300%',
      'Скорочення часу обробки запитів на 50%',
      'Високий рівень задоволеності клієнтів'
    ],
    duration: '6 місяців',
    role: 'Frontend Developer',
    client: 'Lawgorithm LLC'
  },
  {
    id: 2,
    img: '/projects-images/project-image-5.png', 
    title: 'Creative Factory Victoria',
    technologies: ['Next.js', 'Material-UI', 'Framer Motion'],
    description: 'Responsive portfolio with smooth animations',
    githubUrl: 'https://github.com/example/portfolio',
    liveUrl: 'https://portfolio-demo.com',
    category: 'ukrainian',
    images: [
      '/projects-images/project-image-5.png',
      '/projects-images/project-image-6.png',
      '/projects-images/project-image-7.jpg'
    ],
    longDescription: 'Creative Factory Victoria - це креативна агенція, що спеціалізується на брендингу та дизайні. Сайт демонструє портфоліо робіт з інтерактивними елементами та плавними анімаціями.',
    features: [
      'Інтерактивне портфоліо',
      '3D анімації',
      'Система управління контентом',
      'Мультимовна підтримка',
      'SEO оптимізація'
    ],
    challenges: [
      'Створення складних 3D анімацій',
      'Оптимізація продуктивності',
      'Адаптивність для всіх пристроїв'
    ],
    results: [
      'Збільшення конверсії на 40%',
      'Покращення SEO показників',
      'Високі оцінки від клієнтів'
    ],
    duration: '4 місяці',
    role: 'Full-stack Developer',
    client: 'Creative Factory Victoria'
  },
  {
    id: 3,
    img: '/projects-images/project-image-4.png',
    title: 'Lnq hub',
    technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
    description: 'Real-time collaborative task management platform',
    githubUrl: 'https://github.com/example/taskapp',
    liveUrl: 'https://taskapp-demo.com',
    category: 'international',
    images: [
      '/projects-images/project-image-4.png',
      '/projects-images/project-image-1.png',
      '/projects-images/project-image-2.png'
    ],
    longDescription: 'Lnq Hub - це глобальна платформа для управління проектами та командної роботи. Система підтримує реальний час співпраці, інтеграції з популярними сервісами та розширену аналітику.',
    features: [
      'Реальний час співпраці',
      'Інтеграції з третіми сервісами',
      'Розширена аналітика',
      'Мобільні додатки',
      'API для розробників'
    ],
    challenges: [
      'Масштабування для великих команд',
      'Синхронізація в реальному часі',
      'Безпека даних'
    ],
    results: [
      'Підтримка команд до 1000 користувачів',
      'Зменшення часу на управління проектами на 60%',
      'Високий рівень задоволеності користувачів'
    ],
    duration: '8 місяців',
    role: 'Senior Frontend Developer',
    client: 'Lnq Technologies Inc.'
  },
  {
    id: 4,
    img: '/projects-images/project-image-3.png',
    title: 'Teplofasad Lviv',
    technologies: ['React', 'Chart.js', 'OpenWeather API'],
    description: 'Interactive weather dashboard with data visualization',
    githubUrl: 'https://github.com/example/weather',
    liveUrl: 'https://weather-demo.com',
    category: 'ukrainian',
    images: [
      '/projects-images/project-image-3.png',
      '/projects-images/project-image-4.png',
      '/projects-images/project-image-5.png'
    ],
    longDescription: 'Teplofasad Lviv - це компанія з утеплення фасадів, яка потребувала сучасного веб-сайту для демонстрації послуг, калькулятора вартості та системи замовлень.',
    features: [
      'Калькулятор вартості робіт',
      'Галерея виконаних проектів',
      'Система онлайн замовлень',
      'Інтеграція з Google Maps',
      'Мобільна версія'
    ],
    challenges: [
      'Створення точного калькулятора',
      'Оптимізація зображень',
      'Інтеграція з платіжними системами'
    ],
    results: [
      'Збільшення замовлень на 250%',
      'Скорочення часу розрахунку на 80%',
      'Покращення користувацького досвіду'
    ],
    duration: '3 місяці',
    role: 'Frontend Developer',
    client: 'Teplofasad Lviv'
  },
  {
    id: 5,
    img: '/projects-images/project-image-2.png',
    title: 'Botteleck deal',
    technologies: ['React Native', 'Firebase', 'Redux'],
    description: 'Mobile social media application',
    githubUrl: 'https://github.com/example/social',
    liveUrl: 'https://social-demo.com',
    category: 'international',
    images: [
      '/projects-images/project-image-2.png',
      '/projects-images/project-image-3.png',
      '/projects-images/project-image-4.png'
    ],
    longDescription: 'Botteleck Deal - це міжнародна платформа для торгівлі криптовалютами з розширеними аналітичними інструментами та автоматизованими торговими стратегіями.',
    features: [
      'Торгівля криптовалютами',
      'Автоматизовані стратегії',
      'Розширена аналітика',
      'Мобільний додаток',
      'API для трейдерів'
    ],
    challenges: [
      'Забезпечення безпеки транзакцій',
      'Обробка великих обсягів даних',
      'Реалізація в реальному часі'
    ],
    results: [
      'Безпечність 99.9%',
      'Швидкість обробки < 100ms',
      'Підтримка мільйонів транзакцій'
    ],
    duration: '10 місяців',
    role: 'Lead Frontend Developer',
    client: 'Botteleck Technologies'
  },
  {
    id: 6,
    img: '/projects-images/project-image-6.png',
    title: 'GigaTrump coin',
    technologies: ['Next.js', 'Sanity CMS', 'Tailwind CSS'],
    description: 'Modern blog platform with CMS integration',
    githubUrl: 'https://github.com/example/blog',
    liveUrl: 'https://blog-demo.com',
    category: 'international',
    images: [
      '/projects-images/project-image-6.png',
      '/projects-images/project-image-7.jpg',
      '/projects-images/project-image-8.png'
    ],
    longDescription: 'GigaTrump Coin - це інформаційна платформа про криптовалюти з новинами, аналітикою та спільнотою ентузіастів. Сайт включає блог, форум та інструменти для аналізу ринку.',
    features: [
      'Система управління контентом',
      'Форум спільноти',
      'Аналітичні інструменти',
      'Мобільна версія',
      'API для розробників'
    ],
    challenges: [
      'Обробка великих обсягів контенту',
      'Модерація форуму',
      'Оптимізація для пошукових систем'
    ],
    results: [
      '100,000+ активних користувачів',
      'Покращення SEO на 300%',
      'Високий рівень залучення'
    ],
    duration: '7 місяців',
    role: 'Full-stack Developer',
    client: 'GigaTrump Media'
  },
  {
    id: 7,
    img: '/projects-images/project-image-7.jpg',
    title: 'LDS admin panel',
    technologies: ['Next.js', 'Sanity CMS', 'Tailwind CSS'],
    description: 'Modern blog platform with CMS integration',
    githubUrl: 'https://github.com/example/blog',
    liveUrl: 'https://blog-demo.com',
    category: 'ukrainian',
    images: [
      '/projects-images/project-image-7.jpg',
      '/projects-images/project-image-8.png',
      '/projects-images/project-image-1.png'
    ],
    longDescription: 'LDS Admin Panel - це система управління для логістичної компанії з відстеженням вантажів, управлінням складом та аналітикою доставки.',
    features: [
      'Відстеження вантажів',
      'Управління складом',
      'Аналітика доставки',
      'Мобільний додаток',
      'Інтеграція з кур\'єрськими службами'
    ],
    challenges: [
      'Інтеграція з різними кур\'єрськими службами',
      'Обробка великих обсягів даних',
      'Забезпечення точності відстеження'
    ],
    results: [
      'Скорочення часу обробки замовлень на 40%',
      'Покращення точності доставки на 95%',
      'Збільшення задоволеності клієнтів'
    ],
    duration: '5 місяців',
    role: 'Full-stack Developer',
    client: 'LDS Logistics'
  },
  {
    id: 8,
    img: '/projects-images/project-image-8.png',
    title: 'Bottleck deal admin panel',
    technologies: ['Next.js', 'Sanity CMS', 'Tailwind CSS'],
    description: 'Modern blog platform with CMS integration',
    githubUrl: 'https://github.com/example/blog',
    liveUrl: 'https://blog-demo.com',
    category: 'international',
    images: [
      '/projects-images/project-image-8.png',
      '/projects-images/project-image-1.png',
      '/projects-images/project-image-2.png'
    ],
    longDescription: 'Bottleck Deal Admin Panel - це адміністративна панель для управління криптовалютною біржею з моніторингом транзакцій, управлінням користувачами та аналітикою ринку.',
    features: [
      'Моніторинг транзакцій',
      'Управління користувачами',
      'Аналітика ринку',
      'Система безпеки',
      'API управління'
    ],
    challenges: [
      'Забезпечення високої безпеки',
      'Обробка мільйонів транзакцій',
      'Реалізація в реальному часі'
    ],
    results: [
      '99.99% uptime',
      'Обробка 1M+ транзакцій на день',
      'Високий рівень безпеки'
    ],
    duration: '9 місяців',
    role: 'Senior Full-stack Developer',
    client: 'Bottleck Technologies'
  }
]
