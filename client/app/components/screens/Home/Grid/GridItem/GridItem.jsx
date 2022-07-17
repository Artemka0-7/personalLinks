import styles from'./GridItem.module.scss'
import Image from 'next/image';
import AnimateBlock from '../../../../ui/AnimateBlock/AnimateBlock';

const GridItem = ({ _id, icon, gradient, link, title, isImportant }) => {
  return (
    <div className={_id === 'link_12' || _id === 'link_5' || _id === 'link_10' || _id === 'link_13' ? `${styles.gridItem} ${styles.large}` : styles.gridItem } >
      <div className={styles['link-wrapper']} style={{ backgroundImage: `linear-gradient(to right, ${gradient.from} 0%, ${gradient.to} 51%, ${gradient.from} 100%)` }}>
      {isImportant && <AnimateBlock />}
        <a href={link} rel="noreferrer">
          <Image src={icon.path} width={icon.width} height={icon.height ? icon.height : 120}/>
        </a>
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default GridItem;