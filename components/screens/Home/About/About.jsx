import styles from './About.module.scss'
import Image from 'next/image';
import { APP_URL } from '../../../../constants'
import AboutMe from './AboutMe/AboutMe';

const About = ({ about }) => {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <div className={styles['image-wrapper']}>
          <Image className={styles.image} width={190} height={190} src={`${APP_URL}/avatar.jpeg`} />
        </div>
        <h1 className={styles.title}>
          RED Group
          <Image
            src="https://cdn-icons.flaticon.com/png/512/2143/premium/2143150.png?token=exp=1656945314~hmac=0a5e42fb5602d8642127c7464cf2fd2b"
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
                src="https://cdn-icons-png.flaticon.com/512/893/893257.png"
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
        <AboutMe about={about}/>
      </div>
    </section>
  )
}

export default About