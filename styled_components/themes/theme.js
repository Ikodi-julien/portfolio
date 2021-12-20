const primaryColor = `rgba(93,0,133,1)`;
const secondaryColor = `rgba(0,49,97,1)`;

export const shared = {
  linkHovered: `rgba(0,85,173,1)`,
  fonts: {
    main: "'Raleway', sans-serif",
    title: "'Jura', sans-serif",
  },
  breakPoints: {
    /* Smartphones (portrait) ----------- */
    sp: "@media screen and (max-width : 380px)",
    /* iPads ----------- */
    ip: "@media screen and (max-width : 768px)",
    /* Desktops and laptops ----------- */
    dt: "@media screen and (max-width : 1224px)",
    /* Large screens ----------- */
    ls: "@media screen and (max-width : 1824px)",
  },
};

export const dark = {
  primary: primaryColor,
  secondary: secondaryColor,
  buttonBack: `linear-gradient(90deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
  buttonBorder: `#d9e4fa`,

  pageBackground: `rgba( 10, 10, 20, 1)`,
  cardBackground: "rgba(15,15,25,1)",
  footerBackground: "black",
  font: `#d9e4fa`,
  fontInverted: `#474747`,
};

const lightPColor = `rgba(152,201,255,1)`;
const lightSColor = `rgba(255,192,152,1)`;

export const light = {
  primary: lightPColor,
  secondary: lightSColor,
  buttonBack: `linear-gradient(90deg, ${lightPColor} 0%, ${lightSColor} 100%)`,
  buttonBorder: `white`,
  pageBackground: `rgba(247,246,240,1)`,
  cardBackground: `rgba(241,239,231,1)`,
  footerBackground: `rgba(206,205,196,1)`,
  font: `rgba(20,20,19,1)`,
  fontInverted: `rgba(247,246,240,1)`,
};
