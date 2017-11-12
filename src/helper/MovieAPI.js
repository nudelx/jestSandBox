// import axios from 'axios'

// const MovieAPI = {
//   fetch: url => {
//     if (window.fetch) {
//       return axios.get(url)
//         .then( response =>  response)
//         .catch(function (error) {
//           console.log(error);
//         });
//     }
//     return Promise.reject(new Error('oops'))
//   }
// }

const MovieAPI = {
  fetch: url => {
    if (window.fetch) {
      return window.fetch(url)
        .then( resp =>  resp.json())
        .then(resp => resp)
    }
    return Promise.reject(new Error('oops'))
  }
}


export default MovieAPI
