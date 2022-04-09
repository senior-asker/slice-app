/* eslint-disable jsx-a11y/anchor-is-valid */
import s from './LogIn.module.css'

const LogIn = () => {
  return (
    <div className={s.loginBox}>
      <h2>Login</h2>
      <form>
        <div className={s.userBox}>
          <input type="text" name="" required="" />
          <label>Username</label>
        </div>
        <div className={s.userBox}>
          <input type="password" name="" required="" />
          <label>Password</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Log IN
        </a>
      </form>
    </div>
  )
}

export default LogIn
