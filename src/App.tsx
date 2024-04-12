import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/navbar'
import Home from './pages/home'
import PageNotFound from './pages/error-page'
import Footer from './components/footer'

function App() {

  return (
    <>
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
