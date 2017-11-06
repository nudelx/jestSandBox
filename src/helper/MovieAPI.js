// fetch('https://swapi.co/api/films/1/', {
//   mode: "no-cors",
//   method: "GET",
//   headers: {
//     "Accept": "application/json"
//   }
// })
// .then(response => response.json()).then(data => console.log(data)
import axios from 'axios'
const MovieAPI = {
  fetch: url => {
    if (window.fetch) {
      // window.fetch('https://swapi.co/api/films/1', {mode: 'no-cors'}).then(res => res.json()).then(data => console.log(data))
      // window.fetch('https://swapi.co/api/films/1', {mode: 'no-cors'}).then(res => res.json()).then(data => console.log(data))
      return axios.get('https://swapi.co/api/films/1')
        .then( response =>  response)
        .catch(function (error) {
          console.log(error);
        });
    }
    return Promise.reject(new Error('jopa'))
  }
}

export default MovieAPI
