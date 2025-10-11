import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Перевіряє чи пристрій мобільний
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(max-width: 768px)').matches;
};

/**
 * Анімація Hero блоку
 */
export const animateHeroBlock = (
  titleTopRef: HTMLElement,
  titleBottomRef: HTMLElement,
  descriptionRef: HTMLElement,
  imageRef: HTMLElement,
  heroBlockRef: HTMLElement
) => {
  const isMobile = isMobileDevice();
  
  // Створюємо timeline для послідовних анімацій
  const tl = gsap.timeline({ delay: 0.3 });

  // Анімації заголовків одночасно
  tl.fromTo(titleTopRef, {
    opacity: 0,
    x: -200
  }, {
    opacity: 0.1,
    x: 0,
    duration: 1.2,
    ease: 'power3.out',
  }, 0)
  
  .fromTo(titleBottomRef, {
    opacity: 0,
    x: 200
  }, {
    opacity: 0.1,
    x: 0,
    duration: 1.2,
    ease: 'power3.out',
  }, 0)

  // Анімація зображення
  .fromTo(imageRef, {
    scale: 1.2,
  }, {
    scale: 1,
    duration: 1.5,
    ease: 'power3.out',
  }, 0) 

  // Анімація опису
  .fromTo(descriptionRef, {
    opacity: 0,
    y: 30
  }, {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: 'power2.out',
  });

  // Паралакс ефект - картинка їде вниз при скролі (спрощений на мобільних)
  gsap.fromTo(imageRef, 
    { y: 0 },
    {
      yPercent: isMobile ? 15 : 30,
      scrollTrigger: {
        trigger: heroBlockRef,
        start: 'top top',
        end: 'bottom top',
        scrub: isMobile ? 0.5 : true,
      }
    }
  );
  
  // Паралакс для заголовків (вимкнений на мобільних)
  if (!isMobile) {
    gsap.fromTo(titleTopRef,
      { x: 0, y: 0 },
      {
        y: -100,
        x: 100,
        scrollTrigger: {
          trigger: heroBlockRef,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
    
    gsap.fromTo(titleBottomRef,
      { x: 0, y: 0 },
      {
        y: -100,
        x: -100,
        scrollTrigger: {
          trigger: heroBlockRef,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }
};

/**
 * Анімація Header
 */
export const animateHeader = (headerRef: HTMLElement) => {
  const tl = gsap.timeline();

  tl.fromTo(headerRef, {
    opacity: 0,
    y: -100,
    delay: 0.5,
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
  }, 2);
};

/**
 * Анімація Projects блоку - з 3D ефектами на всіх пристроях
 */
export const animateProjectsBlock = (
  firstRowCards: Element[],
  secondRowCards: Element[],
  projectsBlockRef: HTMLElement
) => {
  const isMobile = isMobileDevice();

  // Встановлюємо початковий стан для першого ряду
  // На мобільних: легша анімація (менший rotationX і scale)
  gsap.set(firstRowCards, {
    opacity: 0,
    y: isMobile ? -50 : -100,
    rotationX: isMobile ? 45 : 90,
    transformOrigin: "center bottom",
    scale: isMobile ? 0.9 : 0.8,
  });

  // Анімація появи першого ряду
  gsap.to(firstRowCards, {
    opacity: 1,
    y: 0,
    rotationX: 0,
    scale: 1,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: projectsBlockRef,
      start: isMobile ? 'top 80%' : 'top center',
      end: isMobile ? 'top 60%' : 'top 30%',
      scrub: isMobile ? 0.5 : 1, // На мобільних - легкий scrub
    }
  });

  // Встановлюємо початковий стан для другого ряду
  gsap.set(secondRowCards, {
    opacity: 0,
    y: isMobile ? -50 : -100,
    rotationX: isMobile ? 45 : 90,
    transformOrigin: "center bottom",
    scale: isMobile ? 0.9 : 0.8,
  });

  // Анімація появи другого ряду
  gsap.to(secondRowCards, {
    opacity: 1,
    y: 0,
    rotationX: 0,
    scale: 1,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: projectsBlockRef,
      start: isMobile ? 'top 80%' : 'top center',
      end: isMobile ? 'top 60%' : 'top 30%',
      scrub: isMobile ? 0.5 : 1, // На мобільних - легкий scrub
    }
  });
};

/**
 * Анімація How It Works блоку
 */
export const animateHowItWorksBlock = (
  textBlockRef: HTMLElement,
  sectionRef: HTMLElement
) => {
  const isMobile = isMobileDevice();
  
  // Вимикаємо паралакс на мобільних для кращої продуктивності
  if (!isMobile) {
    gsap.fromTo(
      textBlockRef,
      {
        yPercent: 0,
      },
      {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      }
    );
  }
};

/**
 * Проста анімація появи для тайтлів
 */
export const animateTitle = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
};

/**
 * Анімація з ефектом масштабування (scale від 0 до 1)
 */
export const animateScaleUp = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: 0.5,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'back.out(1.7)', // пружинний ефект
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
};

/**
 * Анімація FAQ блоку з паралакс ефектом
 */
export const animateFaqBlock = (
  textBlockRef: HTMLElement,
  sectionRef: HTMLElement
) => {
  const isMobile = isMobileDevice();
  
  // Вимикаємо паралакс на мобільних для кращої продуктивності
  if (!isMobile) {
    gsap.fromTo(
      textBlockRef,
      {
        yPercent: 0,
      },
      {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      }
    );
  }
};

/**
 * Анімація FAQ accordion елементів
 */
export const animateFaqAccordions = (containerRef: HTMLElement) => {
  const accordions = containerRef.querySelectorAll('.faq-accordion');
  
  accordions.forEach((accordion) => {
    gsap.fromTo(
      accordion,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: accordion,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
};

/**
 * Анімація появи карток (універсальна для Experience, Skills тощо)
 */
export const animateCard = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
};

