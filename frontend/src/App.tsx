
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'


import Landing from './pages/Landing'
import Navbar from './components/Navbar'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'



function App() {


  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
         <Route path='/about' element={<AboutPage />} />
           <Route path='/contact' element={<ContactPage/>}/>
       
          <Route path='/blogs' element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
