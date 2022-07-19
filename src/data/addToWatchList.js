import { FaStar } from 'react-icons/fa'
import { FaMinusCircle } from 'react-icons/fa'
export const addToWatchList = async (movie) => {
  console.log(movie.id)
  const res = await fetch(
    'https://watchlist-creator-default-rtdb.firebaseio.com/watchlist.json',
    {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  return res
}
export const fetchMoviesHandler = async () => {
  try {
    const response = await fetch(
      'https://watchlist-creator-default-rtdb.firebaseio.com/watchlist.json'
    )
    if (!response.ok) {
      console.log(response)
    }
    const data = await response.json()
    const loadedMovies = []
    for (const key in data) {
      loadedMovies.push({
        id: key,
        title: data[key].title,
        rate: data[key].rate,
        runtime: data[key].runtime,
        genre: data[key].genre,
        plot: data[key].plot,
        img: data[key].img,
        ratingIcon: <FaStar color="#FEC654" />,
        btnIcon: <FaMinusCircle color="#fff" />,
      })
    }
    return loadedMovies
  } catch (error) {
    console.log(error)
  }
}
export const removeItem = async (id) => {
  console.log(id)
  const res = await fetch(
    `https://watchlist-creator-default-rtdb.firebaseio.com/watchlist/${id}.json`,
    {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    }
  )
  const data = await res.json()
  console.log(data)
}
