import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Очищає всі ScrollTrigger анімації для елемента
 */
const cleanupScrollTriggers = (element: HTMLElement | Element | Element[]) => {
  const elements = Array.isArray(element) ? element : [element];
  elements.forEach((el) => {
    ScrollTrigger.getAll().forEach((trigger) => {
      // Перевіряємо чи trigger пов'язаний з цим елементом
      if (trigger.trigger === el || trigger.vars?.trigger === el) {
        trigger.kill();
      }
    });
  });
};

/**
 * Перевіряє чи пристрій мобільний
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 768px)").matches;
};

/**
 * Анімація Hero блоку
 * Повертає cleanup функцію для правильного видалення анімацій
 */
export const animateHeroBlock = (
  titleTopRef: HTMLElement,
  titleBottomRef: HTMLElement,
  descriptionRef: HTMLElement,
  imageRef: HTMLElement,
  heroBlockRef: HTMLElement
) => {
  // Очищаємо попередні анімації
  cleanupScrollTriggers([titleTopRef, titleBottomRef, imageRef, heroBlockRef]);

  const isMobile = isMobileDevice();

  // Використовуємо gsap.context для правильного cleanup
  const ctx = gsap.context(() => {
    // Встановлюємо початковий стан для зображення (центрування)
    gsap.set(imageRef, { xPercent: -50 });

    // Створюємо timeline для послідовних анімацій
    const tl = gsap.timeline({ delay: 0.3 });

    // Анімації заголовків одночасно
    tl.fromTo(
      titleTopRef,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 0.1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      0
    )

      .fromTo(
        titleBottomRef,
        {
          opacity: 0,
          x: 200,
        },
        {
          opacity: 0.1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        0
      )

      // Анімація зображення
      .fromTo(
        imageRef,
        {
          scale: 1.2,
          xPercent: -50, // Центрування зображення
        },
        {
          scale: 1,
          xPercent: -50, // Зберігаємо центрування
          duration: 1.5,
          ease: "power3.out",
        },
        0
      )

      // Анімація опису
      .fromTo(
        descriptionRef,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
        }
      );

    // Паралакс ефект - картинка їде вниз при скролі (спрощений на мобільних)
    gsap.fromTo(
      imageRef,
      {
        y: 0,
        xPercent: -50, // Зберігаємо центрування
      },
      {
        yPercent: isMobile ? 15 : 30,
        xPercent: -50, // Зберігаємо центрування під час скролу
        scrollTrigger: {
          trigger: heroBlockRef,
          start: "top top",
          end: "bottom top",
          scrub: isMobile ? 0.5 : true,
        },
      }
    );

    // Паралакс для заголовків (вимкнений на мобільних)
    if (!isMobile) {
      gsap.fromTo(
        titleTopRef,
        { x: 0, y: 0 },
        {
          y: -100,
          x: 100,
          scrollTrigger: {
            trigger: heroBlockRef,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        titleBottomRef,
        { x: 0, y: 0 },
        {
          y: -100,
          x: -100,
          scrollTrigger: {
            trigger: heroBlockRef,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }
  });

  // Оновлюємо ScrollTrigger після створення анімацій
  ScrollTrigger.refresh();

  // Повертаємо cleanup функцію
  return () => {
    ctx.revert();
    cleanupScrollTriggers([
      titleTopRef,
      titleBottomRef,
      imageRef,
      heroBlockRef,
    ]);
  };
};

/**
 * Анімація Header
 */
export const animateHeader = (headerRef: HTMLElement) => {
  const tl = gsap.timeline();

  tl.fromTo(
    headerRef,
    {
      opacity: 0,
      y: -100,
      delay: 0.5,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    },
    2
  );
};

/**
 * Анімація Projects блоку - з 3D ефектами на всіх пристроях
 * Повертає cleanup функцію для правильного видалення анімацій
 */
export const animateProjectsBlock = (
  firstRowCards: Element[],
  secondRowCards: Element[],
  projectsBlockRef: HTMLElement
) => {
  // Очищаємо попередні анімації
  cleanupScrollTriggers([
    ...firstRowCards,
    ...secondRowCards,
    projectsBlockRef,
  ]);

  const isMobile = isMobileDevice();

  // Використовуємо gsap.context для правильного cleanup
  const ctx = gsap.context(() => {
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
      ease: "power3.out",
      scrollTrigger: {
        trigger: projectsBlockRef,
        start: isMobile ? "top 80%" : "top center",
        end: isMobile ? "top 60%" : "top 30%",
        scrub: isMobile ? 0.5 : 1, // На мобільних - легкий scrub
      },
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
      ease: "power3.out",
      scrollTrigger: {
        trigger: projectsBlockRef,
        start: isMobile ? "top 80%" : "top center",
        end: isMobile ? "top 60%" : "top 30%",
        scrub: isMobile ? 0.5 : 1, // На мобільних - легкий scrub
      },
    });
  });

  // Оновлюємо ScrollTrigger після створення анімацій
  ScrollTrigger.refresh();

  // Повертаємо cleanup функцію
  return () => {
    ctx.revert();
    cleanupScrollTriggers([
      ...firstRowCards,
      ...secondRowCards,
      projectsBlockRef,
    ]);
  };
};

/**
 * Анімація How It Works блоку
 * Повертає cleanup функцію для правильного видалення анімацій
 */
export const animateHowItWorksBlock = (
  textBlockRef: HTMLElement,
  sectionRef: HTMLElement
) => {
  // Очищаємо попередні анімації
  cleanupScrollTriggers([textBlockRef, sectionRef]);

  const isMobile = isMobileDevice();

  // Використовуємо gsap.context для правильного cleanup
  const ctx = gsap.context(() => {
    // Вимикаємо паралакс на мобільних для кращої продуктивності
    if (!isMobile) {
      gsap.fromTo(
        textBlockRef,
        {
          yPercent: 0,
        },
        {
          yPercent: 50,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    }
  });

  // Оновлюємо ScrollTrigger після створення анімацій
  ScrollTrigger.refresh();

  // Повертаємо cleanup функцію
  return () => {
    ctx.revert();
    cleanupScrollTriggers([textBlockRef, sectionRef]);
  };
};

/**
 * Проста анімація появи для тайтлів
 * Повертає cleanup функцію для правильного видалення анімацій
 */
export const animateTitle = (element: HTMLElement) => {
  // Очищаємо попередні анімації
  cleanupScrollTriggers(element);

  // Використовуємо gsap.context для правильного cleanup
  const ctx = gsap.context(() => {
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
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Оновлюємо ScrollTrigger після створення анімацій
  ScrollTrigger.refresh();

  // Повертаємо cleanup функцію
  return () => {
    ctx.revert();
    cleanupScrollTriggers(element);
  };
};

/**
 * Анімація з ефектом масштабування (scale від 0 до 1)
 * Повертає cleanup функцію для правильного видалення анімацій
 */
export const animateScaleUp = (element: HTMLElement) => {
  // Очищаємо попередні анімації
  cleanupScrollTriggers(element);

  // Використовуємо gsap.context для правильного cleanup
  const ctx = gsap.context(() => {
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
        ease: "back.out(1.7)", // пружинний ефект
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Оновлюємо ScrollTrigger після створення анімацій
  ScrollTrigger.refresh();

  // Повертаємо cleanup функцію
  return () => {
    ctx.revert();
    cleanupScrollTriggers(element);
  };
};

/**
 * Анімація FAQ блоку з паралакс ефектом
 * Повертає cleanup функцію для правильного видалення анімацій
 */
export const animateFaqBlock = (
  textBlockRef: HTMLElement,
  sectionRef: HTMLElement
) => {
  // Очищаємо попередні анімації
  cleanupScrollTriggers([textBlockRef, sectionRef]);

  const isMobile = isMobileDevice();

  // Використовуємо gsap.context для правильного cleanup
  const ctx = gsap.context(() => {
    // Вимикаємо паралакс на мобільних для кращої продуктивності
    if (!isMobile) {
      gsap.fromTo(
        textBlockRef,
        {
          yPercent: 0,
        },
        {
          yPercent: 50,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    }
  });

  // Оновлюємо ScrollTrigger після створення анімацій
  ScrollTrigger.refresh();

  // Повертаємо cleanup функцію
  return () => {
    ctx.revert();
    cleanupScrollTriggers([textBlockRef, sectionRef]);
  };
};

/**
 * Анімація FAQ accordion елементів
 * Повертає cleanup функцію для правильного видалення анімацій
 */
export const animateFaqAccordions = (containerRef: HTMLElement) => {
  const accordions = containerRef.querySelectorAll(".faq-accordion");

  // Очищаємо попередні анімації
  cleanupScrollTriggers(Array.from(accordions));

  // Використовуємо gsap.context для правильного cleanup
  const ctx = gsap.context(() => {
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
          ease: "power2.out",
          scrollTrigger: {
            trigger: accordion,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  });

  // Оновлюємо ScrollTrigger після створення анімацій
  ScrollTrigger.refresh();

  // Повертаємо cleanup функцію
  return () => {
    ctx.revert();
    cleanupScrollTriggers(Array.from(accordions));
  };
};

/**
 * Анімація появи карток (універсальна для Experience, Skills тощо)
 * Повертає cleanup функцію для правильного видалення анімацій
 */
export const animateCard = (element: HTMLElement) => {
  // Очищаємо попередні анімації
  cleanupScrollTriggers(element);

  // Використовуємо gsap.context для правильного cleanup
  const ctx = gsap.context(() => {
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
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Оновлюємо ScrollTrigger після створення анімацій
  ScrollTrigger.refresh();

  // Повертаємо cleanup функцію
  return () => {
    ctx.revert();
    cleanupScrollTriggers(element);
  };
};
