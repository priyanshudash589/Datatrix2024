import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import imglogo from '../assets/datatrix.png'
import { Link } from "react-router-dom";


export default function MainBg({ 
  scrollToSpeakers, 
  scrollToTechEvents, 
  scrollToPreviousEvents 
}) {
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
        <button onClick={scrollToSpeakers} className="flex items-center text-white">
          Speakers
        </button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <button className="flex items-center text-white">
          Sponsors
        </button>
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
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <button onClick={scrollToPreviousEvents} className="flex items-center text-white">
          Previous Events
        </button>
      </Typography>
    </ul>
  );

  return (
    <div className="min-h-screen w-screen bg-patter-data overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 z-50 p-6">
        <Navbar className="mx-auto max-w-full bg-black backdrop-blur-sm rounded-xl px-4 py-2 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
              as={Link}
              to="/"
              className="mr-4 cursor-pointer py-1.5 font-medium text-white"
            >
              <img src={imglogo} alt="" className="h-[2rem]"/>
            </Typography>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <div className="flex items-center gap-x-1">
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Contact Us</span>
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
                <span>Contact Us</span>
              </Button>
            </div>
          </Collapse>
        </Navbar>
      </div>

        <div
          className="bg-transparent flex flex-col sm:flex-row justify-center items-center gap-4 p-0 w-full xl:translate-y-[50rem] xl:-translate-x-[25rem] lg:translate-y-[46rem] lg:-translate-x-[8rem] md:translate-y-[37rem] translate-y-[37.5rem]"
        >
          <button
            variant="outlined"
            className="w-[15rem] focus:outline-none h-12 flex justify-center items-center bg-black text-sky-200 border-2 rounded-lg font-orbitron border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] text-white"
          >
            Know More . . . 
          </button>
        </div>
      </div>
    
  );
}