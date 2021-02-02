function test() {
  const test = 10;
  function test2() {
    function test3() {
      console.log(test);
    }
    test3();
  }
  test2();
}

test();

const miAlcancia = (n) => {
  let plataEnMiAlcancia = n;

  const meterPlata = (dineroAMeter) => {
    plataEnMiAlcancia += dineroAMeter;
    console.log(plataEnMiAlcancia);
  };

  return meterPlata;
};

const miChonchito = miAlcancia(100);

miChonchito(10);

const myCounter = (startCount) => {
  let counter = startCount;

  const modifyCounter = (n) => {
    counter += n;
    console.log(counter);
  };
  return {
    increase: function () {
      modifyCounter(1);
    },
    decrease: function () {
      modifyCounter(-1);
    },
  };
};

const joseCounter = myCounter(10);

function bienvenidoPersona(callback) {
  const nombre = prompt('¿Como es tu nombre?')
  callback(nombre)
}

function saludarPersona(nombre) {
  alert('Hola! señor ' + nombre)
}

bienvenidoPersona(saludarPersona)
