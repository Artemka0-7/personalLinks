import { APP_URL, VideoList } from '../../../../constants/constants'
import styles from './Videos.module.scss'
import Image from 'next/image';

const Videos = () => {
  return (
    <section className={styles.videos}>
      <h3 className={styles.title}>Новые видео 👉</h3>
      <div className={styles.content}>
        {VideoList.map(({ path, title }, id) => (
          <div className={styles.item}>
            <Image src={path} className={styles.itemImg} width={70} height={52} />
            <h4 className={styles['item-title']}>{title}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Videos