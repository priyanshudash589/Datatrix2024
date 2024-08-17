import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import img1 from '../assets/EventImages/1.png'
import img2 from '../assets/EventImages/2.png'
import img3 from '../assets/EventImages/3.png'
import img4 from '../assets/EventImages/4.png'
import img5 from '../assets/EventImages/5.png'
import img6 from '../assets/EventImages/6.png'
import img7 from '../assets/EventImages/7.png'
import { Link } from "react-router-dom";
const TechEvents = () => {
  const events = [
    {
      key:'event1',
      id: 1,
      title: "Datathon",
      description: "24-hour coding challenge",
      imageSrc:img1
    },
    {
      key:'event2',
      id: 2,
      title: "Data Science Quiz",
      description: "24-hour coding challenge",
      imageSrc:img2
    },
    {
      key:'event3',
      id: 3,
      title: "Data Science Quiz",
      description: "24-hour coding challenge",
      imageSrc:img3
    },
    {
      key:'event4',
      id: 4,
      title: "Speed Regex",
      description: "24-hour coding challenge",
      imageSrc:img4
    },
    {
      key:'event5',
      id: 5,
      title: "Idea Explorer",
      description: "24-hour coding challenge",
      imageSrc:img5
    },
    {
      key:'event6',
      id: 6,
      title: "Design Forge",
      description: "UI/UX Workshop & Competition",
      imageSrc:img6
    },
    {
      key:'event7',
      id: 7,
      title: "Data Visulalization Challenge",
      description: "24-hour coding challenge",
      imageSrc:img7
    },
  ];
  return (
    <>
    <div className="bg-black p-6 text-center scroll-smooth">

          <h1 className="font-orbitron text-white text-2xl sm:text-3xl lg:text-4xl p-[2rem] pt-[4rem]">Our Events</h1>

      <div className="flex flex-wrap justify-center p-[5rem] gap-6">
        
          <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={img1}
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Datathon
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-between">
            <Link to={`/event/datathon-hackathon`}>
              <Button halfWidth={true}>Register Here</Button>
            </Link>
            <div  className="border-[3px] border-green-500 text-center rounded-lg w-20 flex items-center justify-center"><span className="text-green-500">FREE</span></div>
            </CardFooter>
          </Card>

          <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={img2}
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                UI/UX Workshop
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-between">
            <Link to={`/event/uiux-workshop`}>
              <Button halfWidth={true}>Register Here</Button>
            </Link>
            <div  className="border-[3px] border-blue-500 text-center rounded-lg w-auto p-2 flex items-center justify-center"><span className="text-blue-500">300/- PER TEAM</span></div>
            </CardFooter>
          </Card>

          <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={img3}
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Data Quiz
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-between">
            <Link to={`/event/data-science-quiz`}>
              <Button halfWidth={true}>Register Here</Button>
            </Link>
            <div  className="border-[3px] border-green-500 text-center rounded-lg w-20 flex items-center justify-center"><span className="text-green-500">FREE</span></div>
            </CardFooter>
          </Card>

          <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={img4}
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Speed Regex
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-between">
            <Link to={`/event/speed-regex`}>
              <Button halfWidth={true}>Register Here</Button>
            </Link>
            <div  className="border-[3px] border-green-500 text-center rounded-lg w-20 flex items-center justify-center"><span className="text-green-500">FREE</span></div>
            </CardFooter>
          </Card>

          <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={img5}
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Idea Explorer
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-between">
            <Link to={`/event/idea-explorer`}>
              <Button halfWidth={true}>Register Here</Button>
            </Link>
            <div  className="border-[3px] border-blue-500 text-center rounded-lg w-auto p-2 flex items-center justify-center"><span className="text-blue-500">100/- PER PERSON</span></div>
            </CardFooter>
          </Card>

          <Card className="mt-6 w-96 ">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={img7}
              alt="Data Visualization Challenge"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Data Visualization Challenge
            </Typography>
            <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex justify-between">
            <Link to={`/event/data-visualization-challenge`}>
              <Button halfWidth={true}>Register Here</Button>
            </Link>
            <div  className="border-[3px] border-green-500 text-center rounded-lg w-20 flex items-center justify-center"><span className="text-green-500">FREE</span></div>
          </CardFooter>
        </Card>

        <Card className="mt-6 w-96 ">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={img6}
              alt="Design Forge"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Design Forge
            </Typography>
            <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex justify-between">
            <Link to={`/event/design-forge`}>
              <Button halfWidth={true}>Register Here</Button>
            </Link>
            <div  className="border-[3px] border-green-500 text-center rounded-lg w-20 flex items-center justify-center"><span className="text-green-500">FREE</span></div>
          </CardFooter>
        </Card>

       
      </div>
    </div>
    </>
  );
};

export default TechEvents;
