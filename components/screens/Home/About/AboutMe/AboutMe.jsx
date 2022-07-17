import styles from './AboutMe.module.scss'
import { useOutside } from '../../../../../hooks/useOutside'

const AboutMe = () => {
  const { ref, isShow, setIsShow } = useOutside(false)

  return (
    <>
      <h1 className={styles.title} ref={ref} onClick={() => setIsShow(!isShow)}>Обо мне</h1>
      {isShow && (
        <div className={styles.desc}>
          <p>Меня зовут Максим, я уже 9 лет занимаюсь веб-разработкой. На данный момент являюсь основателем двух крутых проектов htmllessons.ru и еще одного глобального проекта. Первый, был моей дипломной работой в колледже.</p>
          <p>Как и все, начинал с изучения верстки html, css, js. Затем появилась потребность в изучении Laravel для разработки образовательного проекта.</p>
          <p>Через время я ушел от PHP и перешел на Javascript, так как появилась задача по разработке крупного проекта.</p>
          <p>Основная миссия – создавать крутые продукты, которые будут помогать людям и менять мир. Буду рад, если Вы меня поддержите и подпишитесь на мой канал. Спасибо 😊</p>
        </div>
      )}
    </>
  )
}

export default AboutMe