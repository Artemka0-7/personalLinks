import styles from './Home.module.scss'
import About from './About/About'
import Videos from './Videos/Videos'
import Grid from './Grid/Grid'
import Circles from '../../ui/Circles/Circles'

const Home = () => {
  return (
    <section className={styles.home}>
      <div className="container">
        <div className="wrapper">
          <About />
          <Videos />
          <Grid />
        </div>
      </div>
      <Circles />
    </section>
  )
}

export default Home