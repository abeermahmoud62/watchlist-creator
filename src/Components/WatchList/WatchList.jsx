import React from 'react'
import Layout from '../Layout/Layout'
import classes from './WatchList.module.css'
import WatchListItems from './WatchListItems'
import { Link } from 'react-router-dom'
const WatchList = () => {
  return (
    <Layout>
      <div className={classes['watch-container']}>
        <div className={classes['top-container']}>
          <h1 className={classes.h1}>My WatchList</h1>
          <Link to="/" className={classes.a}>
            search for movies
          </Link>
        </div>
        <div className={classes['bottom-container']}>
          <WatchListItems />
        </div>
      </div>
    </Layout>
  )
}

export default WatchList
