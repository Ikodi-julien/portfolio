const logosDev = [
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

const logosPast = [
  "/assets/logo_care.png",
  "/assets/logo_chemist.png",
  "/assets/logo_improvement.png",
  "/assets/logo_iso.png",
  "/assets/logo_plant.png",
  "/assets/logo_vqr.png",
];

class LogoAnimationCls {
  constructor(logos, eltId) {
    this.logos = logos;
    this.increment = 360 / logos.length;
    this.eltId = eltId;
    this.angle = 0;
    this.radius = 100;
    this.logoElts = logos.map((logoUrl) => {
      const newLogo = document.createElement("img");
      newLogo.src = logoUrl;
      newLogo.style.position = "absolute";
      newLogo.style.width = "50px";
      newLogo.style.height = "50px";
      return newLogo;
    });
    this.parentContainer = document.getElementById(eltId);
    this.interval = 0;
  }

  createContainer(elt) {
    elt.style.position = "relative";
    elt.style.width = "250px";
    elt.style.height = "280px";
    return elt;
  }

  getRadian(deg) {
    return deg * (Math.PI / 180);
  }

  wait(duration) {
    return new Promise((resolve) => setTimeout(() => resolve(true), duration));
  }

  setPositions(elt, angle, radius) {
    let top = Math.round(Math.sin(this.getRadian(angle)) * radius + radius);
    let left = Math.round(Math.cos(this.getRadian(angle)) * radius + radius);

    elt.style.top = `${top}px`;
    elt.style.left = `${left}px`;
    return elt;
  }

  // This is to display logos on place at the beginning
  positionLogos(container) {
    return new Promise(async (resolve) => {
      for (const elt of this.logoElts) {
        this.setPositions(elt, this.angle, this.radius);
        this.angle += this.increment;

        container.appendChild(elt);
        await this.wait(300);
      }
      resolve(true);
    });
  }

  // When logos are placed, this sets new top and left value for each logo every given interval .
  moveElts() {
    this.angle += this.increment;

    for (const elt of this.logoElts) {
      this.setPositions(elt, this.angle, this.radius);
      this.angle += this.increment;
    }
  }

  closeAnimation() {
    clearInterval(this.interval);
    this.parentContainer.innerHTML = "";
    this.angle = 0;
  }

  async init() {
    const container = document.createElement("div");
    const styledContainer = this.createContainer(container);
    this.parentContainer.innerHTML = "";
    this.parentContainer.appendChild(styledContainer);

    await this.positionLogos(styledContainer);

    this.moveElts();
    this.interval = setInterval(() => this.moveElts(), 5000);
  }
}

const setAboutAnimation = () => {
  let isRunning1 = false;
  let isRunning2 = false;
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };
  const lg1 = new LogoAnimationCls(logosDev, "logoanimation1");
  const lg2 = new LogoAnimationCls(logosPast, "logoanimation2");

  let observer1 = new IntersectionObserver((entries, observer) => {
    if (entries[0].intersectionRatio > 0 && !isRunning1) {
      lg1.init();
      isRunning1 = true;
    }
    if (!entries[0].isIntersecting) {
      lg1.closeAnimation();
      isRunning1 = false;
    }
  }, options);

  let observer2 = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting && !isRunning2) {
      lg2.init();
      isRunning2 = true;
    }
    if (!entries[0].isIntersecting) {
      lg2.closeAnimation();
      isRunning2 = false;
    }
  }, options);

  observer1.observe(document.querySelector("#logoanimation1"));
  observer2.observe(document.querySelector("#logoanimation2"));
};
export { setAboutAnimation };
