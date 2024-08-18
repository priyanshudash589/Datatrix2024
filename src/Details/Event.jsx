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
  const [email, setEmail] = useState(null);


  const [registering, setRegistering] = useState(false);
  const [ParticipantCount, setParticipantCount] = useState(0);
  const [availableSlots, setAvailableSlots] = useState(0);

  const [teamname, setTeamname] = useState("");


  const [participant1email, setParticipant1email] = useState("");
  const [participant2email, setParticipant2email] = useState("");
  const [participant3email, setParticipant3email] = useState("");

  const [participant1name, setParticipant1name] = useState("");
  const [participant2name, setParticipant2name] = useState("");
  const [participant3name, setParticipant3name] = useState("");

  const [participant1phone, setParticipant1phone] = useState("");
  const [participant2phone, setParticipant2phone] = useState("");
  const [participant3phone, setParticipant3phone] = useState("");



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
    const fetchUser = async () => {
      try {
        const user2 = supabase.auth.getUser().then((user) => {
          setUser(user);
          console.log(user.data.user);
          setEmail(user.data.user.email);

        }
        );

      } catch (error) {
        setError(error.message);
      } finally {
        setAuthLoaded(true);
      }
    }
    fetchUser();

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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <img src={LoaderSlot} alt="Loading..." />
      </div>
    );
  }

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
            <p className="text-gray-200 mb-4 font-orbitron p-4 leading-loose border-[2px] border-gray-500 rounded-md">
              {event?.event_details}
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center flex-col">
            <span className="p-4">Signer In as : {
              user ? user.email : "Guest"
              }</span>
            <h2 className="text-xl font-bold mb-1 font-orbitron p-2">
              Faculty coordinator:
            </h2>
            <ul className="pl-5 text-gray-200 p-5 list-none">
              <li>{event?.event_staff_coordinate_1}</li>
              <li>{event?.event_staff_coordinate_2}</li>
              <li>{event?.event_staff_coordinate_3}</li>
            </ul>
            <h2 className="text-xl font-bold mb-1 font-orbitron p-2">
              Student coordinator:
            </h2>
            <ul className=" pl-5 text-gray-200 p-5 list-none ">
              <li>{event?.student_coordinate_1}</li>
              {event?.student_coordinate_2 && <li>{event?.student_coordinate_2}</li>}
              {event?.student_coordinate_3 && <li>{event?.student_coordinate_3}</li>}
            </ul>
            <div className="bg-dark rounded-md h-auto shadow-md p-4 mt-4">
              <h3 className="text-xl font-bold text-white-800 mb-2 font-orbitron">
                ₹{event?.price}
              </h3>

              <div className="flex flex-col space-y-4">
                logged in as {user ? email : "Guest"}
              </div>
              <button className="bg-dark-500 mt-[2.5rem] border-[1px] hover:bg-blue-300 hover:text-blue-800 text-white font-bold py-2 px-[3rem] rounded-full focus:outline-none font-orbitron focus:shadow-outline border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_10px_#08f]"
                onClick={() => {
                  setRegistering(!registering);
                }
                }

              >
                {registering ? "Cancel" : "Register"}
              </button>


              {
                registering && (
                  <>
                    {event?.max_count >= 1 && (
                      <>
                        <div className="flex flex-col space-y-4">
                          <label htmlFor="teamname" className="text-white">Team Name</label>
                          <input type="text" id="teamname" className="p-2 rounded-md" value={teamname} onChange={(e) => setTeamname(e.target.value)} />
                        </div>
                        <div className="flex flex-col space-y-4">
                          <label htmlFor="participant1name" className="text-white">Participant 1 Name</label>
                          <input type="text" id="participant1name" className="p-2 rounded-md" value={participant1name} onChange={(e) => setParticipant1name(e.target.value)} />
                        </div>
                        <div className="flex flex-col space-y-4">
                          <label htmlFor="participant1email" className="text-white">Participant 1 Email</label>
                          <input type="email" id="participant1email" className="p-2 rounded-md" value={participant1email} onChange={(e) => setParticipant1email(e.target.value)} />
                        </div>
                        <div className="flex flex-col space-y-4">
                          <label htmlFor="participant1phone" className="text-white">Participant 1 Phone</label>
                          <input type="text" id="participant1phone" className="p-2 rounded-md" value={participant1phone} onChange={(e) => setParticipant1phone(e.target.value)} />
                        </div>
                      </>
                    )}
                    {event?.max_count >= 2 && (
                      <>
                        <div className="flex flex-col space-y-4">
                          <label htmlFor="participant2name" className="text-white">Participant 2 Name</label>
                          <input type="text" id="participant2name" className="p-2 rounded-md" value={participant2name} onChange={(e) => setParticipant2name(e.target.value)} />
                        </div>
                        <div className="flex flex-col space-y-4">
                          <label htmlFor="participant2email" className="text-white">Participant 2 Email</label>
                          <input type="email" id="participant2email" className="p-2 rounded-md" value={participant2email} onChange={(e) => setParticipant2email(e.target.value)} />
                        </div>
                        <div className="flex flex-col space-y-4">
                          <label htmlFor="participant2phone" className="text-white">Participant 2 Phone</label>
                          <input type="text" id="participant2phone" className="p-2 rounded-md" value={participant2phone} onChange={(e) => setParticipant2phone(e.target.value)} />
                        </div>
                      </>
                    )}
                    {event?.max_count >= 3 && (
                      <>
                        <div className="flex flex-col space-y-4">
                          <label htmlFor="participant3name" className="text-white">Participant 3 Name</label>
                          <input type="text" id="participant3name" className="p-2 rounded-md" value={participant3name} onChange={(e) => setParticipant3name(e.target.value)} />
                        </div>
                        <div className="flex flex-col space-y-4">
                          <label htmlFor="participant3email" className="text-white">Participant 3 Email</label>
                          <input type="email" id="participant3email" className="p-2 rounded-md" value={participant3email} onChange={(e) => setParticipant3email(e.target.value)} />
                        </div>
                        <div className="flex flex-col space-y-4">
                          <label htmlFor="participant3phone" className="text-white">Participant 3 Phone</label>
                          <input type="text" id="participant3phone" className="p-2 rounded-md" value={participant3phone} onChange={(e) => setParticipant3phone(e.target.value)} />
                        </div>
                      </>
                    )}

                    <button className="bg-dark-500 mt-[2.5rem] border-[1px] hover:bg-blue-300 hover:text-blue-800 text-white font-bold py-2 px-[3rem] rounded-full focus:outline-none font-orbitron focus:shadow-outline border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_10px_#08f]"
                      onClick={() => {
                        register();
                      }}
                    >
                      Register
                    </button>
                  </>
                )
              }



            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
