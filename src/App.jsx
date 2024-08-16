import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loadr from "./components/Loadr";
import Home from "./components/Home";
import Datathon from "./Details/Datathon";
import  Datascquiz from './Details/Datascquiz'
import Datavisual from './Details/Datavisual'
import Ideaexp from './Details/Ideaexp'
import Designforge from './Details/Designforge'
import Sppedregex from './Details/Sppedregex'
import Uiux from './Details/Uiux'
import TechEvents from "./components/TechEvents";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  if (loading) {
    return <Loadr />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<TechEvents/>}/>
        <Route path="/event/datathon-hackathon" element={<Datathon/>} />
        <Route path="/event/uiux-workshop" element={<Uiux/>} />
        <Route path="/event/data-science-quiz" element={<Datascquiz/>} />
        <Route path="/event/speed-regex" element={<Sppedregex/>} />
        <Route path="/event/idea-explorer" element={<Ideaexp/>} />
        <Route path="/event/design-forge" element={<Designforge/>} />
        <Route path="/event/data-visualization-challenge" element={<Datavisual />} />
      </Routes>
    </Router>
  );
}

export default App;