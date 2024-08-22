import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export function Footer() {
  return (
    <footer className="w-full bg-black p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-clack text-center md:justify-between">
        <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="logo-ct" className="w-10 invert" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 text-white focus:text-blue-500"
            >
              <Link to="/gallery">Gallery</Link>
              
            </Typography>
          </li>
          
          <li>
            <Typography
              as="a"
              href="https://linktr.ee/Datatrix_24"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 text-white focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal text-white">
        &copy; 2024 Copyright : SRM Institute Of Science And Technology , CSE-BD , Priyanshu Dash
      </Typography>
    </footer>
  );
}