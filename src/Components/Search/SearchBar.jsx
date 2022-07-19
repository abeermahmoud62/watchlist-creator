import classes from './SearchBar.module.css'
import { FaSearch } from 'react-icons/fa'
import { useRef } from 'react'
const SearchBar = (props) => {
  const searchRef = useRef('')
  const submitHandler = (e) => {
    e.preventDefault()
    props.onSearchQuery(searchRef.current.value)
  }
  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes['input-container']}>
          <span>
            <FaSearch size="1em" color="#9CA3AF" />
          </span>
          <input type="text" placeholder="Search for a movie" ref={searchRef} />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchBar
