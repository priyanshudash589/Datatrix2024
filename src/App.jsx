import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Event from "./Details/Event";
import TechEvents from "./components/TechEvents";
import { Admin } from "./components/admin";
import Gallery from "./components/Gallery";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<TechEvents />} />
        <Route path="/events/:id" element={<Event />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/success" element={
          <div className="flex justify-center items-center w-full h-screen mx-auto bg-black text-[#00ff00] text-7xl flex-col">
            Success
            <span className="text-2xl text-center"> You have successfully Registered. Please check your email for more details</span>
          </div>
        } />
        <Route path="/failure" element={
          <div className="flex justify-center items-center w-full h-screen mx-auto bg-black text-[#ff0000] text-7xl flex-col">
            Failure
            <span className="text-2xl text-center"> The transaction was not successful. Please try again</span>
            <span className="text-xs text-center"> If the problem persists, please contact core@datatrix.in</span>
          </div>
        } />
        <Route path="/*" element={
          <div className="flex justify-center items-center w-full h-screen mx-auto bg-black text-white text-7xl">
            404 <span className="text-2xl"> - Page Not Found</span>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
