const MIN_MOBILE_WIDTH = 400;
const MAX_MOBILE_WIDTH = 709;
const MIN_TABLET_WIDTH = 710;
const MAX_TABLET_WIDTH = 800;
const MIN_TABLET1_WIDTH = 800;
const MAX_TABLET1_WIDTH = 1100;
const MAX_DESKTOP_WIDTH = 1280;

export const device = {
  mobile: `(min-width: ${MIN_MOBILE_WIDTH}px) and (max-width: ${MAX_MOBILE_WIDTH}px)`,
  tablet: `(min-width: ${MIN_TABLET_WIDTH}px) and (max-width: ${MAX_TABLET_WIDTH}px)`,
  tablet1: `(min-width: ${MIN_TABLET1_WIDTH}px) and (max-width: ${MAX_TABLET1_WIDTH}px)`,
  desktop: `(max-width: ${MAX_DESKTOP_WIDTH}px)`,
};