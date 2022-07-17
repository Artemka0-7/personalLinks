import styles from './Home.module.scss'
import About from './About/About'
import Videos from './Videos/Videos'
import Grid from './Grid/Grid'
import Circles from '../../ui/Circles/Circles'

const Home = ({ cms }) => {
  return (
    <>
      {cms.map(({ _id, me, VideoList, LinksList }) => (
        <section className={styles.home} key={_id}>
          <div className="container">
            <div className="wrapper">
              <About me={me} />
              <Videos videos={VideoList} />
              <Grid links={LinksList} />
            </div>
          </div>
          <Circles />
        </section>
      ))}}
    </>
  )
}

export default Home