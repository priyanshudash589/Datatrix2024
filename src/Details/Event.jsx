import React, { useState, useEffect } from "react";
import LoaderSlot from "../assets/loaderslot.gif";
import axios from "axios";
import supabase from "../supabase";
function Event() {
  const id = window.location.pathname.split("/")[2];

  //fetch event details
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [btntxt, setBtntxt] = useState("Register");

  const [registering, setRegistering] = useState(false);
  // const [ParticipantCount, setParticipantCount] = useState(0);
  // const [availableSlots, setAvailableSlots] = useState(0);

  const [teamname, setTeamname] = useState("");

  //collect college name
  const [collegeName, setCollegeName] = useState("");

  const [participant1email, setParticipant1email] = useState("");
  const [participant2email, setParticipant2email] = useState("");
  const [participant3email, setParticipant3email] = useState("");

  const [participant1name, setParticipant1name] = useState("");
  const [participant2name, setParticipant2name] = useState("");
  const [participant3name, setParticipant3name] = useState("");

  const [participant1phone, setParticipant1phone] = useState("");
  const [participant2phone, setParticipant2phone] = useState("");
  const [participant3phone, setParticipant3phone] = useState("");

  const [accessKey, setAccessKey] = useState("");

  const [paymentResponse, setPaymentResponse] = useState(null);

  const buttonRef = React.useRef(null);
  const getAccessKey = async () => {
    try {
      // post fetch
      const data = await fetch("https://shy-moon-9f81.syn4ck.workers.dev/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          env: "prod",
          event: event.event_name,
          amount: event.price,
          email: email,
          phone: participant1phone,
          name: participant1name,
          ticket_id: id + "-" + email,
        }),
      });
      const response = await data.json();

      setAccessKey(response.data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const handlePayment = async () => {
    const key = "DTDZKG0DFU ";
    const easebuzzCheckout = new EasebuzzCheckout(key, "prod");

    const options = {
      access_key: await getAccessKey(),
      onResponse: (response) => {
        console.log(response);

        if (response.status === "success") {
          const { data, error } = supabase.from("registrationpaid").insert([
            {
              ticket_id: id + "-" + email,
              status: response.status,
              note: response.note,
            },
          ]);
          if (error) {
            if (
              error.message.includes(
                "duplicate key value violates unique constraint"
              )
            ) {
              alert("Payment Already Exists");
            } else {
              alert(error.message);
            }
          }
          window.location.href = "/success";
        } else {
          const { data, error } = supabase.from("registrationpaid").insert([
            {
              ticket_id: id + "-" + email,
              status: response.status,
              note: response.note,
            },
          ]);
          if (error) {
            if (
              error.message.includes(
                "duplicate key value violates unique constraint"
              )
            ) {
              alert("Payment Already Exists");
            } else {
              alert(error.message);
            }
          }
          window.location.href = "/failure";
        }
      },
      theme: "#123456", // color hex
    };

    easebuzzCheckout.initiatePayment(options);
  };

  const register = async () => {
    const countparti = () => {
      let count = 0;
      if (email) count++;
      if (participant2email) count++;
      if (participant3email) count++;
      return count;
    };
  
    if (teamname === "") {
      alert("Please enter Team Name");
      return;
    } else if (collegeName === "") {
      alert("Please enter College Name");
      return;
    }
    if (participant1name === "") {
      alert("Please enter Participant 1 Name");
      return;
    }
    if (participant1phone === "") { 
      alert("Please enter Participant 1 Phone Number");
      return;
    }
    if (participant2email !== "" && participant2name === "") {
      alert("Please enter Participant 2 Name");
      return;
    }
    if (participant2email !== "" && participant2phone === "") {
      alert("Please enter Participant 2 Phone Number");
      return;
    }
    if (participant3email !== "" && participant3name === "") {
      alert("Please enter Participant 3 Name");
      return;
    }
    if (participant3email !== "" && participant3phone === "") {
      alert("Please enter Participant 3 Phone Number");
      return;
    }
  
    try {
      const response = await axios.post('https://datatrixregistrationsapi.syn4ck.workers.dev/api/register', {
        eventid: id,
        ticket_id: id + "-" + email,
        participant1_email: email,
        participant1_name: participant1name,
        participant1_phone: participant1phone,
        participant2_email: participant2email,
        participant2_name: participant2name,
        participant2_phone: participant2phone,
        participant3_email: participant3email,
        participant3_name: participant3name,
        participant3_phone: participant3phone,
        college_name: collegeName,
        count_pati: countparti(),
        team_name: teamname,
        status: "Initiated"
      });
  
      alert("Registration Successful");
      // window.location.href = "/success";
      handlePayment();
      setRegistering(false);
  
      try {
        await axios.put(`https://datatrixregistrationsapi.syn4ck.workers.dev/api/update-event/${event.id}`, {
          occupied_slots: event.occupied_slots + countparti()
        });
      } catch (error) {
        alert(error.response?.data?.message || error.message);
      }
    } catch (error) {
      if (error.response?.data?.message?.includes("duplicate key value violates unique constraint")) {
        alert("Registration Already Exists");
      } else {
        alert(error.response?.data?.message || error.message);
      }
    }
  
    return countparti();
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user2 = supabase.auth.getUser().then((user) => {
          setUser(user);
          console.log(user.data.user);
          setEmail(user.data.user.email);
        });
      } catch (error) {
        setError(error.message);
      }
    };

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
      <div className="flex items-center justify-center bg-black h-screen">
        <img src={LoaderSlot} alt="Loading..." />
      </div>
    );
  }

  return (
    <div className="bg-patt-grid min-h-screen bg-fixed w-full text-white">
      <div className="container mx-auto p-4 pt-8">
        <h1 className="text-6xl font-bold mb-4 text-center font-orbitron p-6">
          {event?.event_name}
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
          <div className="md:w-1/2 md:mr-8">
            <img
              src={event?.inside_img_logo}
              alt="Event"
              className="rounded-md mb-4"
            />
            <p className="text-gray-200 mb-4 font-orbitron p-4 leading-loose border-[2px] border-gray-500 rounded-md">
              {event?.event_details}
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center flex-col">
            <h2 className="text-xl font-bold mb-1 font-orbitron p-2">
              Faculty coordinator:
            </h2>
            <ul className="pl-5 text-gray-200 p-2 list-none">
              <li>{event?.event_staff_coordinate_1}</li>
              <li>{event?.event_staff_coordinate_2}</li>
              <li>{event?.event_staff_coordinate_3}</li>
            </ul>
            <h2 className="text-xl font-bold mb-1 font-orbitron p-2">
              Student coordinator:
            </h2>
            <ul className=" pl-5 text-gray-200 p-2 list-none ">
              <li>{event?.student_coordinate_1}</li>
              <li>{event?.student_coordinate_2}</li>
              <li>{event?.student_coordinator_3}</li>
            </ul>
            <div className="bg-dark rounded-md h-auto shadow-md p-4 mt-4">
              <h3 className="text-xl font-bold text-white-800 mb-2 font-orbitron">
                ₹{event?.price} /-
              </h3>

              <div className="flex flex-col space-y-4">
                <img
                  src={user ? user.data.user.user_metadata.avatar_url : ""}
                  alt="avatar"
                  className="rounded-full h-10 w-10"
                />
                <p className="text-white">
                  Logged in as {user ? email : "Guest"}
                </p>
              </div>
              {/* <div>
                <p>
                  Available slots: {event.occupied_slots} / {event.total_slots}
                </p>
              </div> */}
              {registering && (
                <>
                  {event?.max_count >= 1 && (
                    <>
                      <div className="flex flex-col space-y-4">
                        <label htmlFor="teamname" className="text-white">
                          Team Name
                        </label>
                        <input
                          type="text"
                          id="teamname"
                          className="p-2 text-black rounded-md"
                          placeholder="Team Name"
                          value={teamname}
                          onChange={(e) => setTeamname(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col space-y-4">
                        <label htmlFor="teamname" className="text-white">
                          College Name
                        </label>
                        <input
                          type="text"
                          id="clgname"
                          placeholder="College Name"
                          className="p-2 text-black rounded-md"
                          value={collegeName}
                          onChange={(e) => setCollegeName(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col space-y-4">
                        <label
                          htmlFor="participant1name"
                          className="text-white"
                          placeholder="Participant 1 Name"
                        >
                          Participant 1 Name
                        </label>
                        <input
                          type="text"
                          id="participant1name"
                          placeholder="Participant 1 Name"
                          className="text-black p-2 rounded-md"
                          value={participant1name}
                          onChange={(e) => setParticipant1name(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col space-y-4">
                        <label
                          htmlFor="participant1phone"
                          className="text-white"
                        >
                          Participant 1 Phone
                        </label>
                        <input
                          type="text"
                          id="participant1phone"
                          placeholder="Participant 1 Phone Number"
                          className="text-black p-2 rounded-md"
                          value={participant1phone}
                          onChange={(e) => setParticipant1phone(e.target.value)}
                        />
                      </div>
                    </>
                  )}
                  {event?.max_count >= 2 && (
                    <>
                      <div className="flex flex-col space-y-4">
                        <label
                          htmlFor="participant2name"
                          className="text-white"
                        >
                          Participant 2 Name
                        </label>
                        <input
                          type="text"
                          id="participant2name"
                          className="text-black p-2 rounded-md"
                          placeholder="Participant 2 Name"
                          value={participant2name}
                          onChange={(e) => setParticipant2name(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col space-y-4">
                        <label
                          htmlFor="participant2email"
                          className="text-white"
                        >
                          Participant 2 Email
                        </label>
                        <input
                          type="email"
                          id="participant2email"
                          placeholder="Participant 2 Email"
                          className="text-black p-2 rounded-md"
                          value={participant2email}
                          onChange={(e) => setParticipant2email(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col space-y-4">
                        <label
                          htmlFor="participant2phone"
                          className="text-white"
                        >
                          Participant 2 Phone
                        </label>
                        <input
                          type="text"
                          id="participant2phone"
                          placeholder="Participant 2 Phone Number"
                          className="text-black p-2 rounded-md"
                          value={participant2phone}
                          onChange={(e) => setParticipant2phone(e.target.value)}
                        />
                      </div>
                    </>
                  )}
                  {event?.max_count >= 3 && (
                    <>
                      <div className="flex flex-col space-y-4">
                        <label
                          htmlFor="participant3name"
                          className="text-white"
                        >
                          Participant 3 Name
                        </label>
                        <input
                          type="text"
                          id="participant3name"
                          placeholder="Participant 3 Name"
                          className="text-black p-2 rounded-md"
                          value={participant3name}
                          onChange={(e) => setParticipant3name(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col space-y-4">
                        <label
                          htmlFor="participant3email"
                          className="text-white"
                        >
                          Participant 3 Email
                        </label>
                        <input
                          type="email"
                          id="participant3email"
                          placeholder="Participant 3 Email"
                          className="text-black p-2 rounded-md"
                          value={participant3email}
                          onChange={(e) => setParticipant3email(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col space-y-4">
                        <label
                          htmlFor="participant3phone"
                          className="text-white"
                        >
                          Participant 3 Phone
                        </label>
                        <input
                          type="text"
                          id="participant3phone"
                          placeholder="Participant 3 Phone Number"
                          className="text-black p-2 rounded-md"
                          value={participant3phone}
                          onChange={(e) => setParticipant3phone(e.target.value)}
                        />
                      </div>
                    </>
                  )}

                  <button
                    className="bg-dark-500 mt-[2.5rem] border-[1px] hover:bg-blue-300 hover:text-blue-800 text-white font-bold py-2 px-[3rem] rounded-full focus:outline-none font-orbitron focus:shadow-outline border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_10px_#08f]"
                    id="ebz-checkout-btn"
                    ref={buttonRef}
                    onClick={register}
                  >
                    Register
                  </button>
                </>
              )}
              <button
                className="bg-dark-500 ml-4 mt-[2.5rem] border-[1px] hover:bg-blue-300 hover:text-blue-800 text-white font-bold py-2 px-[3rem] rounded-full focus:outline-none font-orbitron focus:shadow-outline border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_10px_#08f]"
                onClick={() => {
                  setRegistering(!registering);
                }}
              >
                {registering ? "Cancel" : "Open Form"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
