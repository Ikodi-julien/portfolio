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
  "/assets/logo_docker.png",
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
    this.container = document.getElementById(eltId);
    this.interval = 0;
    this.timeOut = 0;
  }

  getRadian(deg) {
    return deg * (Math.PI / 180);
  }

  wait(duration) {
    return new Promise(
      (resolve) => (this.timeOut = setTimeout(() => resolve(true), duration))
    );
  }

  setPositions(elt, angle, radius) {
    let top = Math.round(Math.sin(this.getRadian(angle)) * radius + radius);
    let left = Math.round(Math.cos(this.getRadian(angle)) * radius + radius);

    elt.style.top = `${top}px`;
    elt.style.left = `${left}px`;
    return elt;
  }

  resetPosition(elt) {
    elt.style.top = 0;
    elt.style.left = 0;
    return elt;
  }
  // This is to display logos on place at the beginning
  positionLogos(container) {
    return new Promise(async (resolve) => {
      for (const elt of this.logoElts) {
        this.setPositions(elt, this.angle, this.radius);
        this.angle += this.increment;

        container.appendChild(elt);
        await this.wait(150);
      }
      resolve(true);
    });
  }

  // When logos are placed, this sets new top and left value for each logo every given interval .
  moveElts() {
    this.angle += Math.floor(
      Math.random() * this.increment * this.logoElts.length + 1
    );

    for (const elt of this.logoElts) {
      this.setPositions(elt, this.angle, this.radius);
      this.angle += this.increment;
    }
  }

  cleanUp() {
    clearInterval(this.interval);
    clearTimeout(this.timeOut);
    this.logoElts = this.logoElts.map((element) => this.resetPosition(element));
    this.container.innerHTML = "";
    this.angle = 0;
  }

  async init() {
    await this.positionLogos(this.container);
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
      lg1.cleanUp();
      isRunning1 = false;
    }
  }, options);

  let observer2 = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting && !isRunning2) {
      lg2.init();
      isRunning2 = true;
    }
    if (!entries[0].isIntersecting) {
      lg2.cleanUp();
      isRunning2 = false;
    }
  }, options);

  observer1.observe(document.querySelector("#logoanimation1"));
  observer2.observe(document.querySelector("#logoanimation2"));
};
export { setAboutAnimation };
