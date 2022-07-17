import styles from './AboutMe.module.scss'
import { useOutside } from '../../../../../hooks/useOutside'
import { me } from '../../../../../constants/constants'

const AboutMe = () => {
  const { ref, isShow, setIsShow } = useOutside(false)

  return (
    <>
      <h1 className={styles.title} ref={ref} onClick={() => setIsShow(!isShow)}>Обо мне</h1>
      {isShow && (
        <div className={styles.desc}>
          <p>{me.description}</p>
        </div>
      )}
    </>
  )
}

export default AboutMe