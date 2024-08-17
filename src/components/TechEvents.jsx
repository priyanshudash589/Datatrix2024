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
      imageSrc:img5
    },
    {
      key:'event3',
      id: 3,
      title: "UI/UX Workshop ",
      description: "Design workshop",
      imageSrc:img3
    },
    {
      key:'event4',
      id: 4,
      title: "Speed Regex",
      description: "Regex challenge",
      imageSrc:img4
    },
    {
      key:'event5',
      id: 5,
      title: "Idea Explorer",
      description: "Project presentation",
      imageSrc:img2
    },
    {
      key:'event6',
      id: 6,
      title: "Design Forge",
      description: "UI/UX Competition",
      imageSrc:img6
    },
    {
      key:'event7',
      id: 7,
      title: "Data visualization",
      description: "Data visualization competition",
      imageSrc:img7
    },
  ];
  return (
    <>
    <div className="bg-black p-6 text-center scroll-smooth">

          <h1 className="font-orbitron text-white text-2xl sm:text-3xl lg:text-4xl p-[2rem] pt-[2rem]">Our Events</h1>

      <div className="flex flex-wrap justify-center p-[3rem] gap-6">
        
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
              A 24-hour coding marathon to tackle real-world challenges, enhance your skills, and collaborate with fellow data enthusiasts. Code solo or in teams, and leave with new insights, stronger abilities, and lasting connections!
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
                Idea Explorer
              </Typography>
              <Typography>
              Join the Idea Explorer Forum to showcase ideas, get expert feedback, and connect with like-minded creators. Gain insights, refine your concepts, and expand your network in this dynamic event!
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-between">
            <Link to={`/event/idea-explorer`} className="w-full flex justify-between">
              <Button halfWidth={true}>Register Here</Button>
              <Button halfWidth={true} variant="outlined" color="blue">300/- PER TEAM</Button>
            </Link>
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
                UI/UX Workshop
              </Typography>
              <Typography>
              Join the Design Forge UI/UX workshop to showcase your skills, learn from experts, and compete in creating innovative user experiences. Grow and sharpen your design talent!
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-between">
            <Link to={`/event/uiux-workshop`} className="w-full flex justify-between">
              <Button halfWidth={true}>Register Here</Button>
              <Button halfWidth={true} variant="outlined" color="blue">100/- PER PERSON</Button>
            </Link>
            </CardFooter>
          </Card>

          <Card className="mt-6 w-96 ">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={img4}
              alt="Design Forge"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Design Forge
            </Typography>
            <Typography>
            Join the Design Forge UI/UX competition to showcase your skills, create innovative designs, and learn from industry experts. Compete, grow, and demonstrate your talent!
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex justify-between">
            <Link to={`/event/design-forge`}>
              <Button halfWidth={true}>Register Here</Button>
            </Link>
            <div  className="border-[3px] border-green-500 text-center rounded-lg w-20 flex items-center justify-center"><span className="text-green-500">FREE</span></div>
          </CardFooter>
        </Card>

        
        <Card className="mt-6 w-96 ">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={img5}
              alt="Data Visualization Challenge"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Data Visualization Challenge
            </Typography>
            <Typography>
            Join the Data Visualization Challenge to create interactive dashboards using tools like Tableau or Power BI. You'll be judged on creativity, insights, and presentation. Are you ready to impress?
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex justify-between">
            <Link to={`/event/data-visualization-challenge`}>
              <Button halfWidth={true}>Register Here</Button>
            </Link>
            <div  className="border-[3px] border-green-500 text-center rounded-lg w-20 flex items-center justify-center"><span className="text-green-500">FREE</span></div>
          </CardFooter>
        </Card>


          <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={img6}
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Data Quiz
              </Typography>
              <Typography>
              The Data Quiz Challenge is two-round competition testing data science skills. Round one covers foundational knowledge, and round two is a rapid-fire session. Perfect for all skill levels!
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
                src={img7}
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Speed Regex
              </Typography>
              <Typography>
              Join the Speed Regex Challenge to test your speed and accuracy in building regular expressions. Tackle tasks like string matching and date validation in this fun, fast-paced event for Regex enthusiasts!
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-between">
            <Link to={`/event/speed-regex`}>
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
