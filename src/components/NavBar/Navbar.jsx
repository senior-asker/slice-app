/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <img
        className={s.image}
        alt=""
        src="https://w7.pngwing.com/pngs/352/708/png-transparent-logo-s-miscellaneous-blue-angle.png"
      />

      <div className={s.item}>
        <NavLink to="/profile">
          <span className={s.icon}>account_circle</span>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs">
          <span className={s.icon}>message</span>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings">
          <span className={s.icon}>settings</span>
          Settings
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
