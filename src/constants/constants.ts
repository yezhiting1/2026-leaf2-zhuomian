export const PAGE_SIZE = 8;

export const LIGHT_MODE = "light",
  DARK_MODE = "dark",
  AUTO_MODE = "auto";
export const DEFAULT_THEME = AUTO_MODE;

// Banner height unit: vh
export const BANNER_HEIGHT = 35;
export const BANNER_HEIGHT_EXTEND = 30;
export const BANNER_HEIGHT_HOME = BANNER_HEIGHT + BANNER_HEIGHT_EXTEND;

// The height the main panel overlaps the banner, unit: rem
export const MAIN_PANEL_OVERLAPS_BANNER_HEIGHT = 3.5;

// Page width: rem
export const PAGE_WIDTH = 75;

/** 计算 banner 延伸高度（像素），用于 CSS 变量 --banner-height-extend */
export function calcBannerHeightExtend(innerHeight: number): number {
  let offset = Math.floor(innerHeight * (BANNER_HEIGHT_EXTEND / 100));
  return offset - (offset % 4);
}
