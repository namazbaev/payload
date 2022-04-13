export const MIN_MOBILE_WIDTH = 400;
export const MAX_MOBILE_WIDTH = 709;
export const MIN_TABLET_WIDTH = 710;
export const MAX_TABLET_WIDTH = 800;
export const MAX_DESKTOP_WIDTH = 1280;

export const device = {
  mobile: `(min-width: ${MIN_MOBILE_WIDTH}px) and (max-width: ${MAX_MOBILE_WIDTH}px)`,
  tablet: `(min-width: ${MIN_TABLET_WIDTH}px) and (max-width: ${MAX_TABLET_WIDTH}px)`,
  desktop: `(max-width: ${MAX_DESKTOP_WIDTH}px)`,
};