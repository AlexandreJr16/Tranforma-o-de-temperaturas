const btn1 = document.querySelectorAll(".btn1");
const btn2 = document.querySelectorAll(".btn2");
const g = document.querySelector("#graus");
const calc = document.querySelector("#calc");
const resp = document.querySelector("#resp");

function iniciar() {
  calc.onclick = () => {
    transform();
  };
  for (let i = 0; i < btn1.length; i++) {
    btn1[i].onclick = () => {
      for (let j = 0; j < btn1.length; j++) {
        btn1[j].classList.remove("ativo");
      }
      btn1[i].classList.add("ativo");
    };
  }
  for (let i = 0; i < btn2.length; i++) {
    btn2[i].onclick = () => {
      for (let j = 0; j < btn2.length; j++) {
        btn2[j].classList.remove("ativo");
      }
      btn2[i].classList.add("ativo");
    };
  }
}

function transform() {
  let b1 = -1,
    b2 = -1;
  for (let i = 0; i < btn1.length; i++) {
    if (btn1[i].classList.value == "btn1 ativo") {
      b1 = i;
    }
    if (b1 != -1) {
      break;
    }
  }

  for (let i = 0; i < btn2.length; i++) {
    if (btn2[i].classList.value == "btn2 ativo") {
      b2 = i;
    }
    if (b2 != -1) {
      break;
    }
  }
  if (b1 == 0 && b2 == 0) {
    resp.innerHTML = `${parseInt(g.value)} ºC`;
  }
  if (b1 == 0 && b2 == 1) {
    let n = parseInt(g.value);
    let result = n * 1.8 + 32;
    result = result.toFixed(2);
    resp.innerHTML = `${result} ºF`;
  }
  if (b1 == 0 && b2 == 2) {
    let n = parseInt(g.value);
    let result = n + 273;
    result = result.toFixed(2);
    resp.innerHTML = `${result} K`;
  }

  if (b1 == 1 && b2 == 1) {
    resp.innerHTML = `${parseInt(g.value)} ºF`;
  }
  if (b1 == 1 && b2 == 0) {
    let n = parseInt(g.value);
    let result = (n - 32) / 1.8;
    result = result.toFixed(2);
    resp.innerHTML = `${result} ºC`;
  }
  if (b1 == 1 && b2 == 2) {
    let n = parseInt(g.value);
    let result = ((n - 32) * 5) / 9 + 273;
    result = result.toFixed(2);
    resp.innerHTML = `${result} K`;
  }

  if (b1 == 2 && b2 == 2) {
    resp.innerHTML = `${parseInt(g.value)} K`;
  }
  if (b1 == 2 && b2 == 1) {
    let n = parseInt(g.value);
    let result = (n - 273) * 1.8 + 32;
    result = result.toFixed(2);
    resp.innerHTML = `${result} ºF`;
  }
  if (b1 == 2 && b2 == 0) {
    let n = parseInt(g.value);
    let result = n - 273;
    result = result.toFixed(2);
    resp.innerHTML = `${result} ºC`;
  }
}

iniciar();
