const dato = "Hello";

const fn = () => {
  console.log(dato);
};

fn();

if (true) {
  console.log(dato);
}

const miFun = () => {
  const holi = "Holii";
  return holi;
};

console.log(holi);
console.log(miFun());

function prueba() {
  const test = "Hola";
  console.log(tost);
  {
    const tost = "Hola";
    console.log(tost, test);
  }
}

prueba();
