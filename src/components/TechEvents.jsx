import React, { useEffect, useState } from "react";
import supabase from "../supabase";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
const TechEvents = () => {
  //start   
  
  //end
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // event_date: "2024-09-14T08:30:00+00:00";
  // event_description: "It is a good event .";
  // event_name: "Data Quiz";
  // event_staff_coordinate_1: "Dr. Minu";
  // event_staff_coordinate_2: "Dr. Manju";
  // id: 1;
  // image_url: "https://i.ytimg.com/vi/yh2pLdDb87c/maxresdefault.jpg";
  // location: "SRM LAB 2";
  // price: 100;
  // student_coordinate_1: "Priyanshu";
  // student_coordinate_2: "Sandeep";
  // total_slots: 50;

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

  return (
    <>
      
      <div className="bg-black p-6 text-center scroll-smooth">
     
        <h1 className="font-orbitron text-white text-2xl sm:text-3xl lg:text-4xl p-[2rem] pt-[2rem]">
          Our Events
        </h1>

        <div className="flex flex-wrap justify-center p-[3rem] gap-6">
          {events.map((event) =>
            event.event_name === "Datathon" ? (
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
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button fullWidth={true}>Register Here</Button>
                  </a>
                  <div className="border-[3px] border-green-500 text-center rounded-lg px-3 flex items-center justify-center">
                    {event.price === 0 ? (
                      <span className="text-green-500">{event.free_price}</span>
                    ) : (
                      <span className="text-green-500">
                        ₹{event.price} {event.free_price}
                      </span>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ) : (
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
                      <span className="text-green-500">{event.free_price}</span>
                    ) : (
                      <span className="text-green-500">
                        ₹{event.price} {event.free_price}
                      </span>
                    )}
                  </div>
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TechEvents;
