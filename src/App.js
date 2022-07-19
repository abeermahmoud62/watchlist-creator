import './App.css'
import Home from './Components/Home/Home'
import WatchList from './Components/WatchList/WatchList'
import { Routes, Route } from 'react-router-dom'
import MoviesProvider from './store/MoviesProvider'
function App() {
  return (
    <MoviesProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </MoviesProvider>
  )
}

export default App
