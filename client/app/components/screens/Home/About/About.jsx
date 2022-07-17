import styles from './About.module.scss'
import Image from 'next/image';
import { APP_URL } from '../../../../constants/constants'
import AboutMe from './AboutMe/AboutMe';

const About = ({ me }) => {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <div className={styles['image-wrapper']}>
          <Image className={styles.image} width={190} height={190} src={me.avatarPath} />
        </div>
        <h1 className={styles.title}>
          {me.name}
          <Image
            src={`${APP_URL}/icons/verified.svg`}
            alt=""
            height={16}
            width={16}
          />
        </h1> 
        <div className={styles.email}>
          <a
            href="mailto:info@pavlovskiy.07@inbox.ru"
            target="_blank"
            rel="noreferrer"
            title="pavlovskiy.07@inbox.ru"
          >
            <span>
              <Image
                src={`${APP_URL}/icons/email.svg`}
                alt=""
                height={18}
                width={18}
              />
            </span>
            <span>Email</span>
          </a>
        </div>
      </div>  
      <div className={styles.aboutme}>
        <AboutMe description={me.description} />
      </div>
    </section>
  )
}

export default About