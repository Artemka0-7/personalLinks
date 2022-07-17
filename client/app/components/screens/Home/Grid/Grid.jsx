import styles from './Grid.module.scss'
import GridItem from './GridItem/GridItem'

const Grid = ({ links }) => {
  return (
    <section className={styles.grid}>
      {links.map(({ _id, icon, gradient, link, title, isImportant }) => (
        <GridItem key={_id} _id={_id} icon={icon} gradient={gradient} link={link} isImportant={isImportant} title={title} />
      ))}
    </section>
  )
}

export default Grid