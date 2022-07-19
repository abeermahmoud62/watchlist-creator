import { TbMovie } from 'react-icons/tb'
import classes from './Home.module.css'
const BeforeSearch = () => {
  return (
    <div className={classes.start}>
      <span>
        <TbMovie color="#2E2E2F" size="6rem" />
      </span>
      <p>Start exploring</p>
    </div>
  )
}

export default BeforeSearch
