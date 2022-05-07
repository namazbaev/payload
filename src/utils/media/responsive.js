export const MIN_MOBILE_WIDTH = 400;
export const MAX_MOBILE_WIDTH = 709;
export const MIN_TABLET_WIDTH = 710;
export const MAX_TABLET_WIDTH = 800;
export const MIN_TABLET1_WIDTH = 800;
export const MAX_TABLET1_WIDTH = 1100;
export const MAX_TABLET2_WIDTH = 1230;
export const MAX_DESKTOP_WIDTH = 1280;

export const device = {
  mobile: `(min-width: ${MIN_MOBILE_WIDTH}px) and (max-width: ${MAX_MOBILE_WIDTH}px)`,
  tablet: `(min-width: ${MIN_TABLET_WIDTH}px) and (max-width: ${MAX_TABLET_WIDTH}px)`,
  tablet1: `(min-width: ${MIN_TABLET1_WIDTH}px) and (max-width: ${MAX_TABLET1_WIDTH}px)`,
  desktop: `(max-width: ${MAX_DESKTOP_WIDTH}px)`,
};