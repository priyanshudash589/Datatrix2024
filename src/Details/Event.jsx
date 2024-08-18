import React, { useState, useEffect } from "react";
import axios from "axios";
import img from "../assets/EventImages/2.png";
import LoaderSlot from "../assets/loaderslot.gif";
import supabase from "../supabase";
function Event() {
  // const event = {
  //   title: "UI/UX Workshop",
  //   about:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae! Atque, praesentium necessitatibus voluptatem nesciunt dolorum consequatur deserunt? Quisquam voluptates ratione quibusdam itaque nisi, nihil repellendus delectus aperiam autem quidem?",
  //   facultycoordinator: {
  //     faculty1: "Dr. A. MANJU, AP/CSE - 8903976381",
  //     faculty2: " Ms. SRINARAYANI K, AP/CSE - 9791138865",
  //   },
  //   studentcoordinator: {
  //     student1: "JASMINE FATHIMA K - 8270821999",
  //     student2: "VIBHUVAN B - 9003200177",
  //   },
  //   date: "",
  //   venue: "",
  //   price: 300,
  // };

  // const [availableSlots, setAvailableSlots] = useState(50);
  // const [registrationStatus, setRegistrationStatus] = useState("");
  // const [error, setError] = useState(null);
  //get id from url
  const id = window.location.pathname.split("/")[2];

  //fetch event details
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  //register for event
  const register = async () => {
    try {
      const { data, error } = await supabase.from("registration").insert([
        {
          eventid: id,
          userid: user.id,
        },
      ]);
      if (error) {
        throw error;
      }
      setRegistrationStatus("Registration Successful");
      setAvailableSlots(availableSlots - 1);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const { data: user } = supabase.auth.getUser();
    setUser(user);

    const fetchEvent = async () => {
      try {
        let { data: event, error } = await supabase
          .from("event_details")
          .select("*")
          .eq("id", id);
        if (error) {
          throw error;
        }
        setEvent(event[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

  return (
    <div className="bg-patt-grid h-full w-screen text-white">
      <div className="container mx-auto p-4 pt-8">
        <h1 className="text-6xl font-bold mb-4 text-center font-orbitron p-6">
          {event?.event_name}
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
          <div className="md:w-1/2 md:mr-8">
            <img
              src={event?.image_url}
              alt="Event"
              className="rounded-md mb-4"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-200 mb-4 font-orbitron p-7 leading-loose">
              {event?.event_description}
            </p>
            <span>Signer In as : {
              user ? user.email : "Guest"
              }</span>
            <h2 className="text-xl font-bold mb-2 font-orbitron">
              Faculty coordinator:
            </h2>
            <ul className="list-disc pl-5 text-gray-200 p-5">
              <li>{event?.event_staff_coordinate_1}</li>
              <li>{event?.event_staff_coordinate_2}</li>
            </ul>
            <h2 className="text-xl font-bold mb-2 font-orbitron">
              Student coordinator:
            </h2>
            <ul className="list-disc pl-5 text-gray-200 p-5">
              <li>{event?.student_coordinate_1}</li>
              <li>{event?.student_coordinate_2}</li>
            </ul>
            <div className="bg-dark rounded-md h-auto shadow-md p-4 mt-4">
              <h3 className="text-xl font-bold text-white-800 mb-2 font-orbitron">
                ₹{event?.price}
              </h3>
              <button className="bg-dark-500 mt-[2.5rem] border-[1px] hover:bg-blue-300 hover:text-blue-800 text-white font-bold py-2 px-[3rem] rounded-full focus:outline-none font-orbitron focus:shadow-outline border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_10px_#08f]">
                register
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
