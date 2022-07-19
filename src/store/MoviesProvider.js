import { useEffect, useState, useCallback } from 'react'
import MoviesContext from './movies-context'
import { fetchMoviesHandler } from '../data/addToWatchList'
import { removeItem } from '../data/addToWatchList'
const MoviesProvider = (props) => {
  const [listItems, setListItems] = useState([])
  // fetch all movies from firebase

  const watchHandler = useCallback(async () => {
    const data = await fetchMoviesHandler()
    console.log(data)
    setListItems(data)
  }, [])

  useEffect(() => {
    watchHandler()
  }, [watchHandler])
  const removeFromWatchListHandler = (id) => {
    removeItem(id)
    setListItems((prev) => {
      return prev.filter((item) => item.id !== id)
    })
  }

  const moviesContext = {
    movies: listItems,
    removeItem: removeFromWatchListHandler,
  }
  return (
    <MoviesContext.Provider value={moviesContext}>
      {props.children}
    </MoviesContext.Provider>
  )
}

export default MoviesProvider
