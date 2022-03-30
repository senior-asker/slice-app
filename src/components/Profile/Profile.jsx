import ProfileInfo from '../ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
import './Profile.module.css'

const Profile = () => {
  return (
    <div>
      <ProfileInfo></ProfileInfo>
      <MyPosts></MyPosts>
    </div>
  )
}

export default Profile
