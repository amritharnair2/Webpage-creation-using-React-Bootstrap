import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Achievements from "./components/Achievements"
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Header/>
      <div id='home'>
          <Home/>
      </div>
      <div id='about' className="my-5">
          <About/>
      </div>
      <div id='achievements' className="my-5">
          <Achievements/>
      </div>
      <div id='gallery' className="my-5">
          <Gallery/>
      </div>
      <div id='contact' className="mt-5">
          <Contact/>
      </div>
      <div>
          <Footer/>
      </div>
    </>
  )
}

export default App
