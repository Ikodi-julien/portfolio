const darkTheme = {
  colors: {
    pageBackground: "rgba(1,1,20,1)",
    cardBackground: "black",
    footerBackground: "black",
    divider: "white",
    buttonBack:
      "linear-gradient(90deg, rgba(172,38,143,1) 0%, rgba(38,142,172,1) 100%)",
    font: "#d9e4fa",
    fontInverted: "#474747",
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
