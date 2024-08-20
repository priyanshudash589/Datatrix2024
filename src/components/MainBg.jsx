import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import imglogo from "../assets/main-logo-datatrix2.png";
import img from "../assets/datatrix.png";
import img2 from "../assets/datatrix-text.svg";
import { Link } from "react-router-dom";
import calendaroutline from "../assets/calendar-outline.svg";

export default function MainBg({
  scrollToAbout,
  scrollToSponsors,
  scrollToPreviousEvents,
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
        <button
          
          onClick={scrollToAbout}
          className="flex items-center text-white"
        >
          About Us
        </button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <button
          onClick={scrollToSponsors}
          className="flex items-center text-white"
        >
          Sponsors
        </button>
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
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <button
          onClick={scrollToPreviousEvents}
          className="flex items-center text-white"
        >
          Previous Events
        </button>
      </Typography>
    </ul>
  );

  return (
    <>
      <div className=" bg-patdata bg-cover w-screen min-h-screen">
        <div className="min-h-screen w-screen backdrop-brightness-[.35] backdrop-saturate-150 overflow-x-hidden">
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

          <div className="bg-transparent flex w-screen h-screen flex-col sm:flex-col justify-center items-center">
            <img
              src={img}
              alt=""
              className="h-[4rem] md:lg-[7rem] lg:h-[10rem]"
            />

            <div className="h-auto w-auto flex items-center gap-6 border-white border-[0.8px] p-3 rounded">
              <img src={calendaroutline} alt="" className="h-[2rem] invert" />
              <p className="text-white font-orbitron flex gap-1 tracking-wider">
                13.09.24 <span></span>
                {"  "} <span></span>&{"  "} <span></span> 14.09.24
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ({
//   scrollToSponsors,
//   scrollToPreviousEvents,
// }) {
//   const [openNav, setOpenNav] = React.useState(false);

//   React.useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpenNav(false)
//     );
//   }, []);

//   const navList = (
//     <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <Link to="/" className="flex items-center text-white">
//           Home
//         </Link>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <button onClick={scrollToSponsors} className="flex items-center text-white">Sponsors</button>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <Link to="/gallery" className="flex items-center text-white">
//           Gallery
//         </Link>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <Link to="/events" className="flex items-center text-white">
//           Our Events
//         </Link>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <button
//           onClick={scrollToPreviousEvents}
//           className="flex items-center text-white"
//         >
//           Previous Events
//         </button>
//       </Typography>
//     </ul>
//   );
