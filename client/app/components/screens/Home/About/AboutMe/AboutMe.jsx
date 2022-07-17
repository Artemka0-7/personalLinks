import styles from './AboutMe.module.scss'
import { useOutside } from '../../../../../hooks/useOutside'

const AboutMe = ({ description }) => {
  const { ref, isShow, setIsShow } = useOutside(false)

  return (
    <>
      <h1 className={styles.title} ref={ref} onClick={() => setIsShow(!isShow)}>Обо мне</h1>
      {isShow && (
        <div className={styles.desc}>
          {description.map(({ item }, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      )}
    </>
  )
}

export default AboutMe