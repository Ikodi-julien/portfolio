const pageBackground = `rgba( 10, 10, 20, 1)`;
const [r, g, b, a] = pageBackground
  .replace(" ", "")
  .split("(")[1]
  .split(")")[0]
  .split(",");

console.log(r, g, b, a);
