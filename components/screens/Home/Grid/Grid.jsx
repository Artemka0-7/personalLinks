import styles from './Grid.module.scss'
import GridItem from './GridItem/GridItem'
import { LinkList } from './LinkList'

const Grid = () => {
  return (
    <section className={styles.grid}>
      {LinkList.map(({ _id, icon, gradient, link, title }) => (
        <GridItem key={_id} _id={_id} icon={icon} gradient={gradient} link={link} title={title} />
      ))}
    </section>
  )
}

export default Grid