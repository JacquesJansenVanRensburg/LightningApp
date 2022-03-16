const apiKey = '62c3d2f511ca70a33ec034735f97f86b'
const baseURL = 'https://api.themoviedb.org/3'

// const getMovies = async () => {
//   const result = await fetch(
//     baseURL + '/movie/upcoming?api_key=' + apiKey + '&language=en-US&page=1'
//   )

//   return result.json
// }

// export { getMovies }

const getMovies = async () => {
  const result = await fetch(
    'https://api.themoviedb.org/3/movie/upcoming?api_key=62c3d2f511ca70a33ec034735f97f86b&language=en-US&page=1'
  )

  return result.json()
}

const getSimilarMovies = async movieID => {
  const result = await fetch(
    'https://api.themoviedb.org/3/movie/' +
      movieID +
      '/similar?api_key=62c3d2f511ca70a33ec034735f97f86b&language=en-US&page=1'
  )
  console.log('fetch movie with ID ' + movieID)
  return result.json()
}

export { getMovies }
export { getSimilarMovies }
