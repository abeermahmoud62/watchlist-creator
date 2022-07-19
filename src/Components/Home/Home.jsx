import Layout from '../Layout/Layout'
import SearchBar from '../Search/SearchBar'
import Movies from '../movies/Movies'
import BeforeSearch from './BeforeSearch'
import classes from './Home.module.css'
import { useState } from 'react'
import { searchDataHandler } from '../../data/searchFetch'
import { Link } from 'react-router-dom'
const Home = () => {
  const [MovieData, setMovieData] = useState({})
  const [isData, setIsData] = useState(false)
  const [error, setError] = useState(false)
  const addSearchQuery = async (query) => {
    if (!query) {
      setError(true)
      return
    }
    const data = await searchDataHandler(query)
    setMovieData(data)
    if (data.id === undefined) {
      setError(true)
      return
    }
    setIsData(true)
    setError(false)
  }

  let content = <BeforeSearch />
  if (isData) {
    content = <Movies movies={MovieData} />
  }
  if (error) {
    content = (
      <div className={classes.error}>
        <p>
          Unable to find what you’re looking for. Please try another search.
        </p>
      </div>
    )
  }
  return (
    <Layout>
      <div className={classes['home-container']}>
        <div className={classes['top-container']}>
          <h1 className={classes.h1}>Find Your Film</h1>
          <Link className={classes.a} to="/watchList">
            My WatchList
          </Link>
        </div>
        <SearchBar onSearchQuery={addSearchQuery} />
      </div>
      {content}
    </Layout>
  )
}

export default Home
