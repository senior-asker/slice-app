import ProfileInfo from '../ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
import './Profile.module.css'

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo></ProfileInfo>
      <MyPosts posts={props.posts}></MyPosts>
    </div>
  )
}

export default Profile
