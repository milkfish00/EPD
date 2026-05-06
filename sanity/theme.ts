import { buildLegacyTheme } from "sanity";

const brand = "#4d4032";
const bg = "#f7f7f7";
const bgDark = "#ede8de";
const white = "#f7f7f7";
const black = "#1a1614";
const muted = "#8a7e76";
const success = "#5a8a6a";
const warning = "#c27a2a";
const danger = "#c0392b";

export const theme = buildLegacyTheme({
  /* Base */
  "--black": black,
  "--white": white,

  "--gray": muted,
  "--gray-base": muted,

  /* Component surfaces */
  "--component-bg": bg,
  "--component-text-color": brand,

  /* Brand */
  "--brand-primary": brand,

  /* Buttons */
  "--default-button-color": brand,
  "--default-button-primary-color": brand,
  "--default-button-warning-color": warning,
  "--default-button-danger-color": danger,

  /* State */
  "--state-info-color": brand,
  "--state-success-color": success,
  "--state-warning-color": warning,
  "--state-danger-color": danger,

  /* Top navigation bar */
  "--main-navigation-color": brand,
  "--main-navigation-color--inverted": bg,

  /* Focus ring */
  "--focus-color": brand,
});
