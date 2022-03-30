import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id

  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = () => {
  
  let dialogs = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Sveta' },
    { id: 3, name: 'Andrey' },
    { id: 4, name: 'Viktor' },
    { id: 5, name: 'Veronika' },
  ]

  let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is it going?' },
    { id: 3, message: 'Oh, sheet man' },
  ]

  let dialogsElement = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ))
  let messagesElement = messages.map((m) => <Message message={m.message} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>{dialogsElement}</div>
      </div>
      <div className={s.messages}>{messagesElement}</div>
    </div>
  )
}

export default Dialogs
