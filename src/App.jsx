import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "./supabase";

import Home from "./components/Home";
import Datathon from "./Details/Datathon";
import Event from "./Details/Event";
import TechEvents from "./components/TechEvents";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  } else {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<TechEvents />} />
          <Route path="/event/datathon-hackathon" element={<Datathon />} />
          <Route path="/event/:id" element={<Event />} />
         
        </Routes>
      </Router>
    );
  }
}

export default App;
