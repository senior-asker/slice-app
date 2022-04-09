/* eslint-disable jsx-a11y/anchor-is-valid */
import s from './News.module.css'

const News = () => {
  return (
    <div>
      <div className={s.newsBlock}>
        {/* <span className={s.materialIcons}>search</span> */}
        <input className={s.search} placeholder="Search in Slice"></input>
      </div>
      <div className={s.container}>
        <p className={s.text}>What's happening</p>
        <hr></hr>

        <div className={s.col1}>
          <div className={s.smallText}>
            <small>Celebrity</small>
            <span className={s.materialIcons}>circle</span>
            <small>Live </small>
            <p className={s.texts}>Happy days, Osahan 🎂</p>
            <small className={s.smallText}>Trending with</small>
            <br />
            <a className={s.tags} href="#">
              #HappyDaysJohnSmith
            </a>
          </div>
          <img
            className={s.image}
            src=" https://www.klinika-hb.pl/wp-content/uploads/2019/07/selective-focus-portrait-photo-of-man-in-brown-leather-3139611-80x80.jpg"
            alt=""
          ></img>
        </div>
        <hr></hr>

        <div className={s.col}>
          <p className={s.texts}>#SelectricsM12</p>
          <div>
            <small className={s.smallText}>Buy now with exclusive offers</small>
          </div>
          <p className={s.smalls}>
            <span className={s.materialIcons}>open_in_new</span>
            Promoted by Selectrics World
          </p>
        </div>
        <hr></hr>

        <div className={s.col}>
          <small className={s.smallText}>Trending in India</small>
          <p className={s.texts}>#ME11Lite</p>
          <small className={s.smallText}>Buy now with exclusive offers</small>
          <br />
          <small className={s.smallText}>52.8k Tweets</small>
        </div>
        <hr></hr>

        <div className={s.col}>
          <small className={s.smallText}>Trending in India</small>
          <p className={s.texts}>News</p>
          <small className={s.smallText}>52.8k Tweets</small>
        </div>
        <hr></hr>

        <div className={s.col}>
          <div>
            <small className={s.smallText}>News</small>
            <span className={s.materialIcons}>circle</span>
            <small className={s.smallText}>Live</small>
          </div>
          <div className={s.tagNews}>
            <p className={s.txt}>
              à l'ordre du jour:
              <br /> la plus grande récolte depuis cinq ans a eu
              <br />
              lieu aujourd'hui
            </p>
            <img
              className={s.image}
              src="http://www.uvala.ru/image/resize/80x80/upload/images/fc124426-6959-4407-892a-015e39f4309b.jpg"
              alt=""
            ></img>
          </div>
          <hr></hr>
          <div className={s.link}>
            <a href="#">Show more</a>
          </div>
        </div>
      </div>

      <div className={s.container}>
        <p className={s.text}>Who to follow</p>
        <hr></hr>
        <div className={s.col1}>
          <img
            className={s.images}
            src="http://znakomstvo.su/users/9027/9026502/1_small.jpeg"
            alt=""
          ></img>
          <div className={s.smalls}>
            <p className={s.smallTxt}>
              Nick JVC
              <span className={s.materialIcons}>done</span>
            </p>
            <div className={s.follow}>
              <p className={s.smallText}>@nickjvc</p>
              <span className={s.smalls}>
                <span className={s.materialIcons}>open_in_new</span>
                Promoted
              </span>
            </div>
          </div>
          <div>
            <button className={s.btn}>+ Follow</button>
          </div>
        </div>
        <hr />
        <div className={s.col1}>
          <img
            className={s.images}
            src=" https://www.klinika-hb.pl/wp-content/uploads/2019/07/selective-focus-portrait-photo-of-man-in-brown-leather-3139611-80x80.jpg"
            alt=""
          ></img>
          <div className={s.smalls}>
            <p className={s.smallTxt}>
              Osahan Bayer
              <span className={s.materialIcons}>done</span>
            </p>
            <div className={s.follow}>
              <p className={s.smallText}>@osabayer</p>
              <p className={s.smallText}>Designer</p>
            </div>
          </div>
          <div>
            <button className={s.btn}>+ Follow</button>
          </div>
        </div>
        <hr />
        <div className={s.col1}>
          <img
            className={s.images}
            src="http://chpoking.ru/users/5369/5368757/1_small.jpeg"
            alt=""
          ></img>
          <div className={s.smalls}>
            <p className={s.smallTxt}>
              Jonh Fitcher
              <span className={s.materialIcons}>done</span>
            </p>
            <div className={s.follow}>
              <p className={s.smallText}>@jhfith</p>
              <p className={s.smallText}>Artist/Author</p>
            </div>
          </div>
          <div>
            <button className={s.btn}>+ Follow</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
