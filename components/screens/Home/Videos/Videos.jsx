import { APP_URL } from '../../../../constants'
import styles from './Videos.module.scss'
import Image from 'next/image';

const Videos = () => {
  return (
    <section className={styles.videos}>
      <h3 className={styles.title}>Новые видео 👉</h3>
      <div className={styles.content}>
        <div className={styles.item}>
          <Image src={`${APP_URL}/icons/video1.jpg`} className={styles.itemImg} width={70} height={52} />
          <h4 className={styles['item-title']}>Топ 3 самых популярных flex паттерна Топ 3 самых популярных flex паттерна asdasdasdasd</h4>
        </div>
        <div className={styles.item}>
          <Image src={`${APP_URL}/icons/video1.jpg`} className={styles.itemImg} width={'70px'} height={52} />
          <h4 className={styles['item-title']}>Топ 3 самых популярных flex паттерна Топ 3 самых популярных flex паттерна asdasdasdasdasd</h4>
        </div>
      </div>
    </section>
  )
}

export default Videos