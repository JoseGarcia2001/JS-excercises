// // Callbacks
// function fetchData(url, callback) {
//   const xhttp = new XMLHttpRequest();
//   xhttp.open("GET", url, true);
//   xhttp.onreadystatechange = function (event) {
//     if (xhttp.readyState === 4) {
//       if (xhttp.status === 200) {
//         callback(null, JSON.parse(xhttp.responseText));
//       } else {
//         const error = new Error(url);
//         callback(error, null);
//       }
//     }
//   };
//   xhttp.send();
// }

// const api = "https://rickandmortyapi.com/api/character";

// fetchData(api, function (error, data) {
//   if (error) console.log(error);
//   console.log(data.results);
//   fetchData(data.results[0].location.url, function (error, data) {
//     console.log(data.name);
//     fetchData(api, function (error, data) {
//       console.log(data);
//     });
//   });
// });

// Promesas

const API = "https://rickandmortyapi.com/api/character";

const fetchWithPromises = (API) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onreadystatechange = function (event) {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          resolve(JSON.parse(xhttp.responseText));
        } else {
          const error = new Error();
          reject(error, null);
        }
      }
    };
    xhttp.send();
  });
};

// Con XMLHttpRequest y promesas

// fetchWithPromises(API)
//   .then((data) => {
//     console.log(data.info.count);
//     return data.results;
//   })
//   .then((data) => {
//     console.log(data[0].name);
//     return fetchWithPromises(data[0].origin.url);
//   })
//   .then((data) => console.log(data.name));

// // Con Fetch

// fetch(API)
//   .then((data) => data.json())
//   .then((data) => {
//     console.log(data.info.count);
//     return data.results;
//   })
//   .then((data) => {
//     console.log(data[0].name);
//     return fetch(data[0].origin.url);
//   })
//   .then((data) => data.json())
//   .then((data) => console.log(data.name));

// Ahora con Async Await

const resolveFetch = async (API) => {
  try {
    const data = await (await fetch(API)).json();
    const infoRick = (await fetch(data.results[0].origin.url)).json();
    const planetaRick = await infoRick;

    console.log(data.info.count);
    console.log(data.results[0].name);
    console.log(planetaRick.name);
  } catch {
    console.log("error");
  }
};

resolveFetch(API);
