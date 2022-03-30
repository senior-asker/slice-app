import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

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

let posts = [
  { id: 1, message: "Hi, what's app man" },
  { id: 2, message: 'Today is good day bro:)' },
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
