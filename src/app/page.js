//import Nav from "./components/Nav"
import Hero from "./components/Hero"
import RecentsProducts from "./components/RecentsProducts"
import About from "./components/About"
//import Footer from "./components/Footer"

import { Suspense } from "react"

export default function Home() {
  return (
    <div>
      <header>
          {/* <Nav/> */}
          <Hero/>
      </header>
      <main>
          <Suspense fallback={<p>Carregando produtos...</p>}>
            <RecentsProducts/>
          </Suspense>
          <About/>
      </main>
      {/* <footer>
          <Footer/>
      </footer> */}
    </div>
  )
}
