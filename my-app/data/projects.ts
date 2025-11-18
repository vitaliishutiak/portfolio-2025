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
    technologies: ['MaterialUI', 'React', 'GSAP', 'JavaScript'],
    description: 'Сайт портфоліо IT юриста і не тільки',
    liveUrl: 'https://www.lawgorithm.co/',
    category: 'ukrainian',
    images: [
      '/projects-images/project-image-1.png',
      '/projects-images/project-image-2.png',
      '/projects-images/project-image-3.png'
    ],
    longDescription: 'Lawgorithm - це професійний веб-сайт портфоліо для IT юриста, який демонструє експертизу в галузі технологічного права та юридичних послуг для IT-компаній. Сайт створений з акцентом на сучасний дизайн, зручну навігацію та ефективну презентацію послуг. Платформа включає детальну інформацію про юридичні послуги, кейси роботи та контактну інформацію для потенційних клієнтів.',
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
      'Покращення SEO показників',
      'Швидке завантаження сторінки',
      'Адаптивний дизайн для всіх пристроїв'
    ],
    duration: '6 місяців',
    role: 'Frontend Developer',
    client: 'Констянтин Белінський'
  },
  {
    id: 2,
    img: '/projects-images/project-image-5.png', 
    title: 'Creative Factory Victoria',
    technologies: ['React', 'Material UI', 'React Router', 'i18n'],
    description: 'Багатосторінковий сайт для компанії з реставрації пам\'яток',
    liveUrl: 'https://www.creativefactoryviktoria.com/',
    category: 'ukrainian',
    images: [
      '/projects-images/project-image-5.png',
      '/projects-images/project-image-6.png',
      '/projects-images/project-image-7.jpg'
    ],
    longDescription: 'Creative Factory Victoria - це професійна компанія, що спеціалізується на реставрації та відновленні архітектурних пам\'яток, історичних церков та австрійських будинків. Веб-сайт створений для презентації послуг компанії, демонстрації виконаних проектів та залучення нових клієнтів. Платформа включає детальну інформацію про напрямки роботи, портфоліо реставраційних проектів, історичну довідку та контактну інформацію.',
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
      'Структурована багатосторінкова архітектура',
      'Зручна навігація між розділами',
      'Мультимовна підтримка для міжнародної аудиторії',
      'Оптимізована продуктивність для великих обсягів контенту'
    ],
    duration: '4 місяці',
    role: 'Frontend Developer',
    client: 'Creative Factory Victoria'
  },
  {
    id: 3,
    img: '/projects-images/project-image-4.png',
    title: 'Lnq hub',
    technologies: ['React', 'TypeScript', 'React Query', 'React Hook Form', 'Material UI', 'Zustand'],
    description: 'Платформа для вакансій з системою реферальних бонусів для рекрутерів',
    liveUrl: 'https://www.lnqhub.com/',
    category: 'international',
    images: [
      '/projects-images/project-image-4.png',
      '/projects-images/project-image-1.png',
      '/projects-images/project-image-2.png'
    ],
    longDescription: 'LNQ Hub - це інноваційна платформа для пошуку талантів, яка з\'єднує компанії з кваліфікованими кандидатами через систему рефералів. Платформа дозволяє рекрутерам знаходити відкриті вакансії, призначати рекомендованих кандидатів зі своєї мережі та отримувати бонусні винагороди за успішне працевлаштування. Система спрощує процес найму, зменшуючи витрати компаній та забезпечуючи доступ до перевірених кандидатів через довірені зв\'язки.',
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
      'Ефективна система управління рефералами',
      'Оптимізований процес найму для компаній',
      'Зручний інтерфейс для рекрутерів та кандидатів',
      'Автоматизована система виплати бонусів'
    ],
    duration: '8 місяців',
    role: 'Frontend Developer',
    client: 'Lnq Technologies Inc.'
  },
  {
    id: 4,
    img: '/projects-images/project-image-3.png',
    title: 'Teplofasad Lviv',
    technologies: ['React', 'Material UI', 'JavaScript'],
    description: 'Веб-сайт для компанії з ремонту дахів та фасадів',
    liveUrl: 'https://www.teplofasad.lviv.ua/',
    category: 'ukrainian',
    images: [
      '/projects-images/project-image-3.png',
      '/projects-images/project-image-4.png',
      '/projects-images/project-image-5.png'
    ],
    longDescription: 'Teplofasad Lviv - це професійна компанія, що спеціалізується на ремонті та утепленні дахів, фасадів будинків та комплексному обслуговуванні будівель. Веб-сайт створений для презентації послуг компанії, демонстрації виконаних проектів та залучення нових клієнтів. Платформа включає детальну інформацію про послуги з ремонту дахів, утеплення фасадів, галерею робіт, калькулятор вартості та зручну систему замовлень для потенційних клієнтів.',
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
      'Зручний інтерфейс для розрахунку вартості послуг',
      'Ефективна презентація портфоліо робіт',
      'Покращення конверсії завдяки онлайн калькулятору',
      'Адаптивний дизайн для всіх пристроїв'
    ],
    duration: '3 місяці',
    role: 'Frontend Developer',
    client: 'Teplofasad Lviv'
  },
  {
    id: 5,
    img: '/projects-images/project-image-2.png',
    title: 'Botteleck deal',
    technologies: ['React', 'JavaScript', 'Material UI', 'Admin Template', 'Axios', 'Redux', 'React Router'],
    description: 'Лендінг сторінка та CRM система для укладання договорів B2B та B2C',
    liveUrl: 'https://www.bottleneck.deal/',
    category: 'international',
    images: [
      '/projects-images/project-image-2.png',
      '/projects-images/project-image-3.png',
      '/projects-images/project-image-4.png'
    ],
    longDescription: 'Bottleneck Deal - це комплексна платформа, що поєднує лендінг сторінку та CRM систему для управління договорами в сегментах B2B та B2C. Система дозволяє компаніям ефективно керувати процесом укладання договорів, відстежувати статуси угод, автоматизувати комунікації з клієнтами та партнерами. Платформа включає інтуїтивний інтерфейс для створення та редагування договорів, систему нотифікацій, аналітику угод та інтеграції для спрощення бізнес-процесів.',
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
      'Ефективна система управління договорами B2B та B2C',
      'Автоматизація процесу укладання угод',
      'Зручний інтерфейс для роботи з клієнтами та партнерами',
      'Оптимізована CRM система для відстеження угод'
    ],
    duration: '10 місяців',
    role: 'Frontend Developer',
    client: 'Botteleck Technologies'
  },
  {
    id: 6,
    img: '/projects-images/project-image-6.png',
    title: 'GigaTrump coin',
    technologies: ['React', 'JavaScript', 'WebHooks', 'CSS'],
    description: 'Реліз мем монетки на біржі Dexscreener',
    category: 'international',
    images: [
      '/projects-images/project-image-6.png',
      '/projects-images/project-image-7.jpg',
      '/projects-images/project-image-8.png'
    ],
    longDescription: 'GigaTrump Coin - це проект релізу мем монетки на децентралізованій біржі Dexscreener. Платформа була розроблена для запуску та просування криптовалютного токену з інтеграцією з біржею, відстеженням ціни в реальному часі через WebHooks та інтерактивним інтерфейсом для трейдерів. Проект включав створення лендінг сторінки, інтеграцію з Dexscreener API для відображення даних про торгівлю та реалізацію системи моніторингу ринку.',
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
      'Успішний реліз токену на Dexscreener',
      'Реалізація інтеграції з біржею через WebHooks',
      'Інтерактивний інтерфейс для відстеження торгівлі',
      'Оптимізована продуктивність для реального часу'
    ],
    duration: '7 місяців',
    role: 'Frontend Developer',
    client: 'GigaTrump Media'
  },
  {
    id: 7,
    img: '/projects-images/project-image-7.jpg',
    title: 'LDS admin panel',
    technologies: ['React', 'Redux', 'JavaScript', 'Material UI', 'Admin Template'],
    description: 'CRM система для автоматичного розподілу лідів між баєрами',
    category: 'international',
    images: [
      '/projects-images/project-image-7.jpg',
      '/projects-images/project-image-8.png',
      '/projects-images/project-image-1.png'
    ],
    longDescription: 'LDS Admin Panel - це CRM система для автоматичного розподілу лідів між баєрами. Система отримує ліди через WebHooks та автоматично розподіляє їх між баєрами відповідно до налаштувань: країна, час роботи, навантаження та інші параметри. Платформа включає адмін панель для управління розподілом, систему налаштувань баєрів, графіки та аналітику розподілу лідів, моніторинг продуктивності та автоматизовану систему призначення лідів на основі правил та фільтрів.',
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
      'Автоматизований розподіл лідів за налаштуваннями баєрів',
      'Ефективна система фільтрації та призначення лідів',
      'Детальна аналітика та графіки розподілу',
      'Оптимізація навантаження між баєрами'
    ],
    duration: '5 місяців',
    role: 'Frontend Developer',
    client: 'LDS Logistics'
  }
]
