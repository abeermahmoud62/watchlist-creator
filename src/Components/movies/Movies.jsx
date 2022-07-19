import { useState, useContext } from 'react'
import MoviesContext from '../../store/movies-context'
import classes from './Movies.module.css'

import Movie from './Movie'
import { addToWatchList } from '../../data/addToWatchList'
const Movies = (props) => {
  const CTX = useContext(MoviesContext)
  console.log(CTX)
  const [isAdd, setIsAdd] = useState(false)
  const arr = CTX.movies
  const postToWatchList = async (movie) => {
    if (!arr.some((item) => item.id === movie.id)) {
      const response = await addToWatchList(movie)
      if (response.ok) {
        setIsAdd(true)
      }
    }
  }

  return (
    <div className={classes['movies-container']}>
      <Movie
        key={props.movies.id}
        movie={props.movies}
        addToWatchListHandler={postToWatchList}
        addIcon={true}
        isAdd={isAdd}
      />
    </div>
  )
}

export default Movies
