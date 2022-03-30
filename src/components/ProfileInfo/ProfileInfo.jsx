import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img alt="" src=""></img>
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  )
}

export default ProfileInfo
