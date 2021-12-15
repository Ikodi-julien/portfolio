export const pageBackground = `rgba( 10, 10, 20, 1)`;
const primaryColor = `rgba(93,0,133,1)`;
const secondaryColor = `rgba(0,49,97,1)`;

const darkTheme = {
  colors: {
    pageBackground,
    cardBackground: "rgba(15,15,25,1)",
    footerBackground: "black",
    primary: primaryColor,
    secondary: secondaryColor,
    buttonBack: `linear-gradient(90deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
    font: `#d9e4fa`,
    fontInverted: `#474747`,
  },
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

export default darkTheme;
