import Hero from "./components/Hero"
import Loadr from "./components/Loadr"
import { useState, useEffect } from "react"
import Speakers from "./components/Speakers";
import TechEvents from "./components/TechEvents";
import NonTechEvents from "./components/NonTechEvents";
import { Footer } from "./components/Footer";
import Sponsors from "./components/Sponsors";
import {PreviousEvents} from '../src/components/PreviousEvents'
import MainBg from "./components/MainBg";

function App() {
  const[loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <>
      {/* {loading?<Loadr/> :<><Hero/><Speakers/><Sponsors/><TechEvents/><NonTechEvents/><PreviousEvents/> <Footer/></>} */}
      <MainBg/><Speakers/><Sponsors/><TechEvents/><NonTechEvents/><PreviousEvents/><Footer/>
    </>
  )
}

export default App
