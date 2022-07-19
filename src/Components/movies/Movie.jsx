import { FaCheckCircle } from 'react-icons/fa'
import classes from './Movie.module.css'

const Movie = (props) => {
  const { movie } = props
  const watchListHandler = () => {
    if (props.addIcon) {
      props.addToWatchListHandler(movie)
    }
    if (props.removeIcon) {
      props.onRemove(movie.id)
    }
  }
  return (
    <div className={classes['movie-container']}>
      <div className={classes['image-container']}>
        <img src={movie.img} alt={movie.title} />
      </div>
      <div className={classes['movie-info']}>
        <div className={classes['top-info']}>
          <h2>{movie.title}</h2>
          <span>
            {movie.ratingIcon}
            <p>{movie.rate}</p>
          </span>
        </div>
        <div className={classes['mid-info']}>
          <p>{movie.runtime}</p>
          <p>{movie.genre}</p>
          {props.addIcon && (
            <button onClick={watchListHandler}>
              {props.isAdd ? <FaCheckCircle color="green" /> : movie.btnIcon}
              <span>{!movie.title ? null : 'WatchList'}</span>
            </button>
          )}
          {props.removeIcon && (
            <button onClick={watchListHandler}>
              {movie.btnIcon}
              <span>Remove</span>
            </button>
          )}
        </div>
        <div className={classes['bottom-info']}>
          <p>{movie.plot}</p>
        </div>
      </div>
    </div>
  )
}

export default Movie
