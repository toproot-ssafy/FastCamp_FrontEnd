import axios from 'axios'

function fetchMovies() {
  // apikey =  발급받은 키, s = 영화제목
  // https로 요청하기.
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen') // 메소드체이닝으로 작성
    .then(res => { // 콜백
      console.log(res)
      const h1El = document.querySelector('h1')
      const imgEl = document.querySelector('img')
      h1El.textContent = res.data.Search[0].Title
      imgEl.src = res.data.Search[0].Poster
      console.log(res.data.Search[0].Poster)
    })
}
fetchMovies()