import React from 'react'

const MoviesContext = React.createContext({
  movies: [],
  addItem: (item) => {},
  removeItem: (id) => {},
})
export default MoviesContext
