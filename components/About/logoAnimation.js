export const logosDev = [
  "/assets/logo_aws.png",
  "/assets/logo_mongodb.png",
  "/assets/logo_next.png",
  "/assets/logo_node.png",
  "/assets/logo_php.png",
  "/assets/logo_psql.png",
  "/assets/logo_react.png",
  "/assets/logo_redis.png",
  "/assets/logo_vue.png",
];

export const logosPast = [
  "/assets/logo_care.png",
  "/assets/logo_chemist.png",
  "/assets/logo_improvement.png",
  "/assets/logo_iso.png",
  "/assets/logo_plant.png",
  "/assets/logo_vqr.png",
];

export const createLogoAnimation = (logos, id) => {
  const parentContainer = document.getElementById(id);
  const container = document.createElement("div");
  container.style.position = "relative";
  container.style.width = "250px";
  container.style.height = "280px";
  let increment = 360 / logos.length;
  let angle = 0;
  let radius = 100;
  let elts = [];

  function radian(deg) {
    return deg * (Math.PI / 180);
  }

  const wait = (duration) =>
    new Promise((resolve) => setTimeout(() => resolve(true), duration));

  (async () => {
    parentContainer.appendChild(container);

    for (const logoUrl of logos) {
      const newLogo = document.createElement("img");

      newLogo.src = logoUrl;
      newLogo.style.position = "absolute";
      newLogo.style.width = "50px";
      newLogo.style.height = "50px";

      let top = Math.sin(radian(angle)) * radius + radius;
      let left = Math.cos(radian(angle)) * radius + radius;
      angle += increment;

      newLogo.style.top = `${top}px`;
      newLogo.style.left = `${left}px`;

      elts.push(newLogo);
    }

    // Faire async/await ici
    for (const elt of elts) {
      container.appendChild(elt);

      await wait(300);
    }

    // Quand les éléments sont placés, on les fait tourner avec un setInterval
  })();
};
