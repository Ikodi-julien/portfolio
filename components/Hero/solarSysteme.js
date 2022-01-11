export const solarSystem = {
  sun: {},
  earth: {},
  moon: {},
  init: () => {
    const canvas = document.getElementById("canvas");

    canvas.style.display = "block";
    canvas.style.width = "300px";
    canvas.style.height = "300px";
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    solarSystem.sun = new Image();
    solarSystem.moon = new Image();
    solarSystem.earth = new Image();

    solarSystem.sun.src = "assets/canvas_sun.png";
    solarSystem.moon.src = "assets/canvas_moon.png";
    solarSystem.earth.src = "assets/canvas_earth.png";

    window.requestAnimationFrame(solarSystem.draw);
  },

  draw: () => {
    const ctx = document.getElementById("canvas").getContext("2d");

    ctx.globalCompositeOperation = "destination-over";
    ctx.clearRect(0, 0, 300, 300); // effacer le canvas

    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.strokeStyle = "rgba(0,153,255,0.4)";
    ctx.save();
    ctx.translate(150, 150);

    // Terre
    const time = new Date();
    ctx.rotate(
      ((2 * Math.PI) / 60) * time.getSeconds() +
        ((2 * Math.PI) / 60000) * time.getMilliseconds()
    );
    ctx.translate(105, 0);
    ctx.fillRect(0, -12, 50, 24); // Ombre
    ctx.drawImage(solarSystem.earth, -12, -12);

    // Lune
    ctx.save();
    ctx.rotate(
      ((2 * Math.PI) / 6) * time.getSeconds() +
        ((2 * Math.PI) / 6000) * time.getMilliseconds()
    );
    ctx.translate(0, 28.5);
    ctx.drawImage(solarSystem.moon, -3.5, -3.5);
    ctx.restore();

    ctx.restore();

    ctx.beginPath();
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Orbite terrestre
    ctx.stroke();

    ctx.drawImage(solarSystem.sun, 0, 0, 300, 300);

    window.requestAnimationFrame(solarSystem.draw);
  },
};
