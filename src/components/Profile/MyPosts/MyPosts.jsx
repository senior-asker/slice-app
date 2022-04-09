/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => <Post name={p.message} />)

  return (
    <div className={s.mainContent}>
      <div>
        <div className={s.inputPost}>
          <span className={s.icon}>account_circle</span>
          <input
            className={s.input}
            type="text"
            placeholder="What is on your mind"
          ></input>
          <a href="#" className={s.icon}>
            add_circle
          </a>
        </div>
      </div>

      <div className={s.follow}>
        <h5>Follow People</h5>
        <a className={s.icon}>east</a>
      </div>

      <div className={s.contentFollow}>
        <div className={s.cardContent}>
          <div>
            <img
              className={s.image}
              src="https://www.klinika-hb.pl/wp-content/uploads/2019/07/selective-focus-portrait-photo-of-man-in-brown-leather-3139611-80x80.jpg"
              alt=""
            ></img>
            <div className={s.done}>
              <span className={s.icon}>done</span>
            </div>
          </div>
          <p className={s.text}>Osahan Bayer</p>
          <p className={s.profText}>Graphic Designer</p>
          <div>
            <button className={s.button}>+ Follow</button>
          </div>
        </div>

        <div className={s.cardContent}>
          <div>
            <img
              className={s.image}
              src="http://znakomstvo.su/users/9027/9026502/1_small.jpeg"
              alt=""
            ></img>
            <div className={s.done}>
              <span className={s.icon}>done</span>
            </div>
          </div>
          <p className={s.text}>Nick JVC</p>
          <p className={s.profText}>Promoted</p>
          <div>
            <button className={s.button}>+ Follow</button>
          </div>
        </div>

        <div className={s.cardContent}>
          <div>
            <img
              className={s.image}
              src="http://chpoking.ru/users/5369/5368757/1_small.jpeg"
              alt=""
            ></img>
            <div className={s.done}>
              <span className={s.icon}>done</span>
            </div>
          </div>
          <p className={s.text}>Jonh Fitcher</p>
          <p className={s.profText}>Artist/Author</p>
          <div>
            <button className={s.button}>+ Follow</button>
          </div>
        </div>

        <div className={s.cardContent}>
          <div>
            <img
              className={s.image}
              src="https://xily-thexappss.clan.su/img/forum/forum_4.png"
              alt=""
            ></img>
            <div className={s.done}>
              <span className={s.icon}>done</span>
            </div>
          </div>
          <p className={s.text}>Regina Viper</p>
          <p className={s.profText}>UI/UX Designer</p>
          <div>
            <button className={s.button}>+ Follow</button>
          </div>
        </div>

        <div className={s.cardContent}>
          <div>
            <img
              className={s.image}
              src="https://sun9-10.userapi.com/c144/u5085009/d_9891f3dd.jpg"
              alt=""
            ></img>
            <div className={s.done}>
              <span className={s.icon}>done</span>
            </div>
          </div>
          <p className={s.text}>Josh Holloway</p>
          <p className={s.profText}>Actor</p>
          <div>
            <button className={s.button}>+ Follow</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPosts
