/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import NavMenu from './components/Menu/Menu'
import Navbar from './components/NavBar/Navbar'
import Profile from './components/Profile/Profile'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import Podcasts from './components/Podcasts/Podcasts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header></Header>
        <NavMenu></NavMenu>
        <Navbar></Navbar>
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile posts={props.posts} />}></Route>
            <Route path="/dialogs/*" element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}></Route>
            <Route path="/news" element={<News />}></Route>
            <Route path="/podcasts" element={<Podcasts />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App
