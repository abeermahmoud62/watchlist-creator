import { useContext, Fragment } from 'react'
import MoviesContext from '../../store/movies-context'
import { FaPlusCircle } from 'react-icons/fa'
import Movie from '../movies/Movie'
import classes from '../Home/Home.module.css'
const WatchListItems = () => {
  const CTX = useContext(MoviesContext)
  console.log(CTX.movies)
  const emptyList = (
    <div className={classes.start}>
      <h3>Your WatchList is looking a little empty...</h3>
      <div style={{ color: '#fff' }}>
        <span className={classes.icon}>
          <FaPlusCircle color="#fff" />
        </span>
        Let’s add some movies!
      </div>
    </div>
  )

  const watchListItems = CTX.movies.map((item) => {
    return (
      <Fragment>
        <Movie
          key={item.id}
          movie={item}
          onRemove={CTX.removeItem}
          removeIcon={true}
        />
        <hr />
      </Fragment>
    )
  })
  let content = watchListItems
  if (CTX.movies.length === 0) {
    content = emptyList
  }
  return <div>{content}</div>
}

export default WatchListItems
