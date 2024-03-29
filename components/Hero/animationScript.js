import { solarSystem } from "./solarSysteme";
let refSetInterval;

export const createAnimation = () => {
  // console.clear();
  const pathname = document.location.pathname;
  const isLight = /(?:theme-light)/.test(pathname);
  const N = isLight ? 20 : 50; // n triangles

  const pageBackground = isLight
    ? `rgba(247,246,240,1)`
    : `rgba( 10, 10, 20, 1)`;
  const triangleColor = isLight
    ? [0, 22 / 255, 62 / 255, 0.4]
    : [255, 255, 255, 0.05];

  const [r, g, b, a] = pageBackground
    .replace(" ", "")
    .split("(")[1]
    .split(")")[0]
    .split(",");

  const canvas = document.getElementById("canvas");
  const gl = canvas.getContext("webgl2");

  canvas.style.display = "block";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const vss = `#version 300 es
    in vec2 p;
    void main() {
      gl_Position = vec4(p, 0.0, 1.0);
    }
    `;
  const fss = `#version 300 es
    precision mediump float;
    out vec4 o;
    uniform vec4 c;
    void main() {
      o = c;
    }
    `;
  // Create shader program
  // # should query both shader logs and program logs
  // #  only if program link's status is false.
  //
  // Here's the antipattern .. keep for ref
  //
  const vs = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vs, vss);
  gl.compileShader(vs);
  if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(vs));
    throw 1;
  }
  const fs = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fs, fss);
  gl.compileShader(fs);
  if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(fs));
    throw 2;
  }
  const prg = gl.createProgram();
  gl.attachShader(prg, vs);
  gl.attachShader(prg, fs);
  gl.linkProgram(prg);
  if (!gl.getProgramParameter(prg, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(prg));
    throw 3;
  }
  gl.detachShader(prg, vs);
  gl.deleteShader(vs);
  gl.detachShader(prg, fs);
  gl.deleteShader(fs);
  // ---- End of antipattern ----
  const $p = gl.getAttribLocation(prg, "p");
  const $c = gl.getUniformLocation(prg, "c");
  const va = gl.createVertexArray();
  gl.bindVertexArray(va);
  let ps;
  {
    ps = new Float32Array(2 + N * 2 * 2);
    ps[0] = 0; // clip space center
    ps[1] = 0;
    let j = 2;
    for (let i = 0; i < N; ++i) {
      ps[j++] = Math.random() * 2 - 1; //x
      ps[j++] = Math.random() * 2 - 1; //y
      ps[j++] = Math.random() * 2 - 1; //x
      ps[j++] = Math.random() * 2 - 1; //y
    }
  }
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, ps, gl.DYNAMIC_DRAW);
  gl.enableVertexAttribArray($p);
  gl.vertexAttribPointer(
    $p,
    2,
    gl.FLOAT, // two 32b-float (8bytes)
    false,
    0, // skip n byte to fetch next
    0 // skip n byte to fetch first
  );
  let idxs;
  {
    idxs = new Uint16Array(3 * N);
    let j = 0;
    for (let i = 0; i < N; ++i) {
      idxs[j++] = 0;
      idxs[j++] = 1 + i * 2;
      idxs[j++] = 2 + i * 2;
    }
  }
  const ibuf = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, idxs, gl.STATIC_DRAW);
  gl.bindVertexArray(null);
  //----- render
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  gl.clearColor(r / 255, g / 255, b / 255, a);
  // gl.clearColor(1 - r / 255, 1 - g / 255, 1 - b / 255, a);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  gl.enable(gl.BLEND);
  gl.disable(gl.CULL_FACE);
  gl.useProgram(prg);
  gl.bindVertexArray(va);
  function f() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform4fv($c, triangleColor);
    gl.drawElements(
      gl.TRIANGLES,
      idxs.length, // n indices
      gl.UNSIGNED_SHORT, // ui16
      0 // skip n bytes to fetch first
    );
  }
  f();
  // ---
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  const moveFocus = (e) => {
    ps[0] = 2 * (e.clientX / window.innerWidth) - 1;
    ps[1] = -2 * (e.clientY / window.innerHeight) + 1;
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, ps.slice(0, 2)); // that's why DYNAMIC_DRAW
    f();
  };
  const moveRandomFocus = (a, b) => {
    // ps[0] = 2 * Math.random() - 1;
    // ps[1] = 2 * Math.random() - 1;
    ps[0] = a;
    ps[1] = b;
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, ps.slice(0, 2)); // that's why DYNAMIC_DRAW
    f();
  };
  if (canvas.width >= 768) {
    document.body.onmousemove = moveFocus;
  } else {
    const start = [-0.9, 0.3];
    const end = [0.9, 0.4];
    const coordinate = [start[0], start[1]];
    let forward = true;
    let backward = false;
    refSetInterval = setInterval(() => {
      if (forward && coordinate[0] < end[0]) coordinate[0] += 0.01;
      if (forward && coordinate[0] >= end[0]) {
        backward = true;
        forward = false;
      }
      if (backward && coordinate[0] > start[0]) coordinate[0] -= 0.01;
      if (backward && coordinate[0] <= start[0]) {
        forward = true;
        backward = false;
      }
      moveRandomFocus(coordinate[0], start[1]);
    }, 50);
  }
};
export const cleanUp = () => clearInterval(refSetInterval);
