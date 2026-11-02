import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './assets/sections/About'
import Skills from './assets/sections/Skills'
import Experience from './assets/sections/Experience'
import Projects from './assets/sections/Projects'
import Contacts from './assets/sections/Contacts'
import Footer from './assets/sections/Footer'
import Certificates from './assets/sections/Certificates'

const App = () => {

  return (
    <div>
      <Navbar/>

      
   <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        
        <section id="projects">
          <Projects />
        </section>

        <section id="certificates">
          <Certificates/>

        </section>



        <section id="experience">
          <Experience />
        </section>

        <section id="contact">
          <Contacts/>
        </section>




      </main>

      <Footer/>
 


      
     
    </div>
  )
}

export default App
