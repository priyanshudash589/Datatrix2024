import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
  Collapse,
  Navbar,
} from "@material-tailwind/react";
import imglogo from "../assets/main-logo-datatrix2.png";
import img2 from "../assets/datatrix-text.svg";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

//assets/gallery_images/ng1_l.png
import img1 from "../assets/gallery_images/ng1_l.png";
import img2 from "../assets/gallery_images/ng2_l.png";
import img3 from "../assets/gallery_images/ng3_p.png";
import img4 from "../assets/gallery_images/gall12_l.jpg";
import img5 from "../assets/gallery_images/gall21_p.png";
import img6 from "../assets/gallery_images/gall22_p.png";
import img7 from "../assets/gallery_images/gall24_p.jpg";
import img8 from "../assets/gallery_images/gall26_p.png";
import img9 from "../assets/gallery_images/gall27_s.png";
import img10 from "../assets/gallery_images/gall30_l.png";
import img11 from "../assets/gallery_images/gall31_p.png";


const Gallery = () => {
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
              <img src={imglogo} alt="" className="h-[3rem] overflow-hidden" />
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


      <div className="text-5xl bg-black text-white pt-[10rem] text-center font-orbitron">
        
        {"  "}
        Gallery
      </div>


      <div className="grid grid-cols-2 gap-4 bg-black md:grid-cols-4 cont">
        <div className="grid gap-4">
          <div className="mx-auto my-auto">
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={img1}
              alt="gallery-photo"
            />
          </div>

          <div className="mx-auto my-auto">
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src={img3}
              alt="gallery-photo"
            />
          </div>

          <div className="mx-auto my-auto">
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={img2}
              alt="gallery-photo"
            />
          </div>
        </div>

        {/* //************************************************************************************************ */}

        <div className="grid gap-4">
          <div className="mx-auto my-auto">
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={img11}
              alt="gallery-photo"
            />
          </div>

          <div className="mx-auto my-auto">
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={img10}
              alt="gallery-photo"
            />
          </div>

          <div className="mx-auto my-auto">
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src={img9}
              alt="gallery-photo"
            />
          </div>
        </div>

        {/* */}

        <div className="grid gap-4">
          <div className="mx-auto my-auto">
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={img4}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src={img7}
              alt="gallery-photo"
            />
          </div>
          <div className="mx-auto my-auto">
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={img8}
              alt="gallery-photo"
            />
          </div>
        </div>

        {/*  */}

        <div className="grid gap-4">
          <div className="mx-auto my-auto flex justify-center items-center">
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={img5}
              alt="gallery-photo"
            />
          </div>
          <div className="mx-auto my-auto">
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={img6}
              alt="gallery-photo"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Gallery;
