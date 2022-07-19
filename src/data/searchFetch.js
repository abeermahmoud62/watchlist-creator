import { FaStar } from 'react-icons/fa'
import { FaPlusCircle } from 'react-icons/fa'
export const searchDataHandler = async (query) => {
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?t=${query}&apikey=6763d222`
    )
    const data = await res.json()
    const btnIcon = !data.id ? undefined : <FaPlusCircle color="#fff" />
    const ratingIcon = !data.id ? undefined : <FaStar color="#FEC654" />

    const loadedMovies = {
      id: data.imdbID,
      title: data.Title,
      rate: data.imdbRating,
      runtime: data.Runtime,
      genre: data.Genre,
      plot: data.Plot,
      img: data.Poster,
      ratingIcon: ratingIcon,
      btnIcon: btnIcon,
    }
    console.log(loadedMovies)
    return loadedMovies
  } catch (err) {
    console.log(err)
  }
}
