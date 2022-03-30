/* eslint-disable no-unused-vars */
import s from './MyPosts.module.css'
import Post from './Post/Post'
// import { useState } from 'react'

// const PutLike = () => {
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>Like</button>
//     </div>
//   )
// }

const MyPosts = () => {
  
  let posts = [
    { id: 1, message: "Hi, what's app man" },
    { id: 2, message: 'Today is good day bro:)' },
  ]

  let postsElement = posts.map((p) => <Post name={p.message} />)

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElement}
        {/* <PutLike button="Like"></PutLike> */}
      </div>
    </div>
  )
}

export default MyPosts
