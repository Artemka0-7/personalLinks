import styles from './Home.module.scss'
import About from './About/About'
import Videos from './Videos/Videos'
import Grid from './Grid/Grid'
import Circles from '../../ui/Circles/Circles'

const Home = ({ cms }) => {
  return (
    <section className={styles.home}>
      <div className="container">
        <div className="wrapper">
          <About me={cms.me} />
          <Videos videos={cms.VideoList} />
          <Grid links={cms.LinksList} />
        </div>
      </div>
      <Circles />
    </section>
  )
}

export default Home