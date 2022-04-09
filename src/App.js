/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Navbar from './components/NavBar/Navbar'
import Profile from './components/Profile/Profile'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar></Navbar>
        <News></News>
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile state={props.state.profilePage} />}></Route>
            <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage}/>}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App
