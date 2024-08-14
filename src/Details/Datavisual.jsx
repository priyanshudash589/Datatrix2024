import React, { useState, useEffect } from "react";
import axios from "axios";
import image from "../assets/EventImages/7.png";

const Datavisual = () => {
  const event = {
    name: "Speed Regex",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae! Atque, praesentium necessitatibus voluptatem nesciunt dolorum consequatur deserunt? Quisquam voluptates ratione quibusdam itaque nisi, nihil repellendus delectus aperiam autem quidem?",
    facultycoordinator: {
      faculty1: "Mr.A.Thiruneelakandan, AP/CSE",
      faculty2: "",
    },
    studentcoordinator: {
      student1: "VARSHA ANBUMANI - 8838193588",
      student2: "G.MAHIMA - 9514870306",
    },
    date: "",
    venue: "",
    amount: "Free",
  };

  const [pname, setName] = useState("");
  const [email, setMail] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [cname, setCname] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [availableSlots, setAvailableSlots] = useState(null);
  const [totalSlots, setTotalSlots] = useState(null);

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const { data } = await axios.get("https://datatrix2024-backend.onrender.com/data-visualization-slots");
        setAvailableSlots(data.availableSlots);
        setTotalSlots(data.totalSlots);
      } catch (error) {
        console.error("Error fetching slot details:", error);
        setRegistrationStatus("Error loading slot details.");
      }
    };

    fetchSlots();
  }, []);

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (availableSlots <= 0) {
      setRegistrationStatus("No available slots.");
      return;
    }

    if (!pname.trim()) {
      setRegistrationStatus("Name is required.");
      return;
    }
    if (!cname.trim()) {
      setRegistrationStatus("College Name is required.");
      return;
    }
    if (!pnumber.trim()) {
      setRegistrationStatus("Phone Number is required.");
      return;
    }
    if (!email.trim()) {
      setRegistrationStatus("Email is required.");
      return;
    }

    try {
      const payload = {
        name: pname.trim(),
        email: email.trim(),
        college: cname.trim(),
        phoneNumber: pnumber.trim(),
      };
      const { data } = await axios.post("https://datatrix2024-backend.onrender.comdata-visualization-register", payload);

      setRegistrationStatus(data.message);
      setIsRegistered(true);
      setAvailableSlots(data.availableSlots);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setRegistrationStatus(error.response.data.message);
      } else {
        setRegistrationStatus("Registration failed. Please try again.");
      }
      console.error("Error during registration:", error);
    }
  };

  if (availableSlots === null) return <p>Loading slot details...</p>;

  return (
    <>
      <div className="bg-patt-grid w-screen h-full md:h-screen lg:h-screen xl:h-screen text-white">
        <div className="container mx-auto p-4 pt-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center font-orbitron p-6">
            {event.name}
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
            <div className="md:w-1/2 md:mr-8">
              <img
                src={image}
                alt="Event"
                className="w-full h-auto rounded-md mb-4"
              />
              <p className="text-gray-200 mb-4 font-orbitron p-7 leading-loose">
                {event.about}
              </p>
            </div>
            <div className="md:w-1/2 p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-bold mb-2 font-orbitron">
                Faculty coordinator:
              </h2>
              <ul className="list-disc pl-5 text-gray-200 mb-4">
                <li>{event.facultycoordinator.faculty1}</li>
              </ul>
              <h2 className="text-lg md:text-xl font-bold mb-2 font-orbitron">
                Student coordinator
              </h2>
              <ul className="list-disc pl-5 text-gray-200 mb-4">
                <li>{event.studentcoordinator.student1}</li>
              </ul>
              <div className="bg-dark rounded-md shadow-md p-4 mt-4">
                <h3 className="text-lg md:text-xl font-bold text-white-800 mb-2 font-orbitron">
                  ₹ {event.amount} For All
                </h3>
                <p className="text-lg md:text-xl font-bold text-white-800 mb-4 font-orbitron">
                  Available Slots: {availableSlots} / {totalSlots}
                </p>
                <form className="flex flex-col gap-4" onSubmit={handleRegistration}>
                  <input
                    type="text"
                    name="college"
                    className="p-2 text-center rounded-xl text-black"
                    placeholder="College"
                    disabled={isRegistered} 
                    value={cname}
                    onChange={(e) => {setCname(e.target.value)}}
                  />
                  <input
                    type="text"
                    name="name"
                    className="p-2 text-center rounded-xl text-black"
                    placeholder="Name"
                    disabled={isRegistered} 
                    value={pname}
                    onChange={(e) => {setName(e.target.value)}}
                  />
                  <input
                    type="email"
                    name="email"
                    className="p-2 text-center rounded-xl text-black"
                    placeholder="Email"
                    disabled={isRegistered} 
                    value={email}
                    onChange={(e) => {setMail(e.target.value)}}
                  />
                  <input
                    type="text"
                    name="phone"
                    className="p-2 text-center rounded-xl text-black"
                    placeholder="Phone"
                    disabled={isRegistered} 
                    value={pnumber}
                    onChange={(e) => {setPnumber(e.target.value)}}
                  />
                  <input
                    type="submit" 
                    value={isRegistered ? "Registered" : "Register Now"} 
                    disabled={isRegistered}
                    className="bg-dark-500 mt-4 border-[1px] hover:bg-blue-300 hover:text-blue-800 text-white font-bold py-2 px-4 rounded-full focus:outline-none font-orbitron focus:shadow-outline border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
                  />
                </form>
                <p>{registrationStatus}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Datavisual;