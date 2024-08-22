import React, { useEffect, useState } from "react";
import supabase from "../supabase";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,  
  IconButton,
  Collapse,
  Navbar
} from "@material-tailwind/react";
import imglogo from "../assets/main-logo-datatrix2.png";
import img2 from "../assets/datatrix-text.svg";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

const TechEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  const fetchEvents = async () => {
    try {
      let { data: events, error } = await supabase
        .from("event_details")
        .select("*")
        .order("showorder", { ascending: true });
      if (error) {
        throw error;
      }
      setEvents(events);
      console.log(events);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/" className="flex items-center text-white">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/gallery" className="flex items-center text-white">
          Gallery
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/events" className="flex items-center text-white">
          Our Events
        </Link>
      </Typography>
      
    </ul>
  );

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 p-6">
            <Navbar className="mx-auto max-w-full bg-black backdrop-blur-sm rounded-xl px-4 py-2 lg:px-8 lg:py-4">
              <div className="flex items-center justify-between flex-row text-blue-gray-900">
                <div className="flex items-center gap-2">
                  <img
                    src={imglogo}
                    alt=""
                    className="h-[3rem] overflow-hidden"
                  />
                  <img src={img2} alt="" className="h-[25px] overflow-hidden" />
                </div>

                <div className="flex items-center gap-4">
                  <div className="mr-4 hidden lg:block">{navList}</div>
                  <div className="flex items-center gap-x-1">
                    <Button
                      variant="gradient"
                      size="sm"
                      className="hidden lg:inline-block"
                    >
                      <span>Log in</span>
                    </Button>
                  </div>
                  <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                  >
                    {openNav ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </IconButton>
                </div>
              </div>
              <Collapse open={openNav}>
                {navList}
                <div className="flex items-center gap-x-1">
                  <Button fullWidth variant="gradient" size="sm" className="">
                    <span>Log in</span>
                  </Button>
                </div>
              </Collapse>
            </Navbar>
          </div>
      <div className="bg-black p-6 text-center scroll-smooth">
        <h1 className="font-orbitron text-white text-2xl sm:text-3xl lg:text-4xl p-[2rem] pt-[10rem]">
          Our Events
        </h1>

        <div className="flex flex-wrap justify-center p-[3rem] gap-6">
          {events.map((event) => {
            if (event.event_name === "Datathon") {
              return (
                <Card className="mt-6 w-96" key={event.id}>
                  <CardHeader color="blue-gray" className="relative h-56">
                    <img
                      src={event.image_url}
                      alt={event.event_name}
                      className="w-full h-full object-cover"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {event.event_name}
                    </Typography>
                    <Typography>{event.event_description}</Typography>
                  </CardBody>
                  <CardFooter className="pt-0 flex justify-between">
                    <a
                      href="https://datathon2024.vercel.app/"
                    >
                      <Button fullWidth={true}>Register Here</Button>
                    </a>

                    <div className="border-[3px] border-green-500 text-center rounded-lg px-3 flex items-center justify-center">
                      {event.price === 0 ? (
                        <span className="text-green-500">Free</span>
                      ) : (
                        <span className="text-green-500">
                          ₹{event.price} 
                        </span>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              );
            }  else {
              return (
                <Card className="mt-6 w-96" key={event.id}>
                  <CardHeader color="blue-gray" className="relative h-56">
                    <img
                      src={event.image_url}
                      alt={event.event_name}
                      className="w-full h-full object-cover"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {event.event_name}
                    </Typography>
                    <Typography>{event.event_description}</Typography>
                  </CardBody>
                  <CardFooter className="pt-0 flex justify-between">
                    <Link to={`/events/${event.id}`}>
                      <Button className="w-[10rem]">Register Here</Button>
                    </Link>
                    <div className="border-[3px] border-green-500 text-center rounded-lg px-3 flex items-center justify-center">
                      {event.price === 0 ? (
                        <span className="text-green-500">Free</span>
                      ) : (
                        <span className="text-green-500">
                          ₹{event.price} {event.free_price}
                        </span>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              );
            }
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TechEvents;
