import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amateur-made_Na%27vi.jpg"
        alt=""
      ></img>
      {props.message}
      {props.button}
    </div>
  )
}

export default Post
