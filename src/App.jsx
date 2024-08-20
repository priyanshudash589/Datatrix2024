import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "./supabase";
import Home from "./components/Home";
import Event from "./Details/Event";
import TechEvents from "./components/TechEvents";
import Gallery from "./components/Gallery";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    })
      .catch(console.error);


    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);


  const customTheme = {
    default: {
      colors: {
        brand: 'hsl(153 60.0% 53.0%)',
        brandAccent: 'hsl(154 54.8% 45.1%)',
        brandButtonText: 'white',
        // ..
      },
    },
    dark: {
      colors: {
        brandButtonText: 'white',
        defaultButtonBackground: '#2e2e2e',
        defaultButtonBackgroundHover: '#3e3e3e',
        //..
      },
    },
    // You can also add more theme variations with different names.
    evenDarker: {
      colors: {
        brandButtonText: 'white',
        defaultButtonBackground: '#1e1e1e',
        defaultButtonBackgroundHover: '#2e2e2e',
        //..
      },
    },
  }


  const LoginPage = () => {
    return (
      <>
        <div className="flex justify-center items-center  w-full h-screen mx-auto bg-black ">
          <div className="w-full max-w-md p-4 rounded-lg  sm:p-8 text-gray-100 bg-gray-800 shadow-green-900	shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-500">
            <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
            <div className="my-6 space-y-4">
              <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
                onClick={() => supabase.auth.signInWithOAuth({ provider: 'google' })}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p>Login with Google</p>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!session) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<TechEvents />} />
          <Route path="/events/*" element={<LoginPage />} />
        </Routes>
      </Router>
    );

  } else {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<TechEvents />} />
          {/* <Route path="/events/datathon-hackathon" element={<Datathon />} /> */}
          <Route path="/events/:id" element={<Event />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
