const MEDIA_TYPE_SCREEN = "only screen";

export const breakpointNames = [`mobile`, `sm`, `md`, `lg`, `xl`, `2xl`] as const

export const breakpoints = {
  mobile: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const minMediaQuery = (breakpoint: Exclude<Breakpoint, "mobile">) => {
  return `${MEDIA_TYPE_SCREEN} and (min-width: ${breakpoints[breakpoint]}px)`;
}

export const laptop = `${minMediaQuery('xl')} and (max-width: 1536px)`;

export const mobile = `${MEDIA_TYPE_SCREEN} and (min-width: 360px) and (max-width: 414px)`;

