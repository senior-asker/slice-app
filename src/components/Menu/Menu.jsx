/* eslint-disable jsx-a11y/anchor-is-valid */
import s from './Menu.module.css'
const NavMenu = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a>Feed</a>
      </div>
      <div className={s.item}>
        <a>People</a>
      </div>
      <div className={s.item}>
        <a>Trending</a>
      </div>
    </nav>
  )
}

export default NavMenu
