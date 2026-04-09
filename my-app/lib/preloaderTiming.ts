/** Тривалість виїзду прелоадера (CSS transition). */
export const PRELOADER_EXIT_DURATION_MS = 820;

/**
 * Коли під час exit викликається старт GSAP на hero: частка від 0 до 1 від тривалості exit.
 * `0` = з першого кадру виїзду (раніше), без прискорення самої анімації.
 */
export const PRELOADER_HERO_START_AT_EXIT_RATIO = 0;

/** Тривалість tween hero (коротше за exit прелоадера — не «занадто плавно»). */
export const PRELOADER_HERO_ENTER_DURATION_MS = 820;
