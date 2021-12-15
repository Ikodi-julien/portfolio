const logoList = [
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

export const logoAnimation = () => {
  const container = document.getElementById("logoanimationcontainer");
  const logoElt = [];
  let increment = 360 / 9;
  let angle = 0;

  function radian(deg) {
    return deg * (Math.PI / 180);
  }

  (() => {
    for (const logoUrl of logoList) {
      const newLogo = document.createElement("img");

      //--------------------------------------------

      newLogo.src = logoUrl;
      newLogo.style.position = "absolute";
      newLogo.style.width = "80px";
      newLogo.style.height = "80px";

      let top = Math.sin(radian(angle)) * 250 + 250;
      let left = Math.cos(radian(angle)) * 250 + 250;
      angle += increment;

      newLogo.style.top = `${top}px`;
      newLogo.style.left = `${left}px`;

      container.appendChild(newLogo);
    }
  })();
};
