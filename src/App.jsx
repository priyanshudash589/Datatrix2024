import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Loadr from "./components/Loadr";
import Home from "./components/Home";
import Event from './components/Event';

function App() {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 4000)
  // }, [])

  // if (loading) {
  //   return <Loadr />;
  // }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<Event />} />
      </Routes>
    </Router>
  );
}

export default App;