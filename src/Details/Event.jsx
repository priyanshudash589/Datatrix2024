import React, { useState, useEffect } from "react";
import LoaderSlot from "../assets/loaderslot.gif";
import supabase from "../supabase";

function Event() {
  const id = window.location.pathname.split("/")[2];

  // Fetch event details
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

<<<<<<< HEAD
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
          "env": "prod",
          "event": event.event_name,
          "amount": event.price,
          "email": email,
          "phone": participant1phone,
          "name": participant1name,
          "ticket_id": id + "-" + email
        })
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
      // async the function
      onResponse: async (response) => {
        console.log(response);

        // post data to the server
        const data = await fetch("https://datatrixregistrationsapi.syn4ck.workers.dev/api/frontendvalidation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "response": response,
            "ticket_id": id + "-" + email
          })
        });

        // if (response.status === "success") {
        //   alert("Payment Successful");
        //   setTimeout(() => {
        //     window.location.href = "/success";
        //   }, 1000);

        // }
        // else {
        //   alert("Payment Failed");
        //   setTimeout(() => {
        //     window.location.href = "/failed";
        //   }, 1000);
        // }
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

      // ticket_id, uuid, timestamp, status, note, eventid,
      //   participant1_email, participant1_name, participant2_email, participant2_name,
      //   participant3_email, participant3_name, participant1_phone, participant2_phone,
      //   participant3_phone, count_pati, team_name, college_name

      const response = await axios.post('https://datatrixregistrationsapi.syn4ck.workers.dev/api/register', {
        eventid: id,
        ticket_id: id + "-" + email,
        uuid: email,
        timestamp: new Date().toISOString(),
        status: "pending",
        note: "pending",
        participant1_email: email,
        participant1_name: participant1name,
        participant2_email: participant2email,
        participant2_name: participant2name,
        participant3_email: participant3email,
        participant3_name: participant3name,
        participant1_phone: participant1phone,
        participant2_phone: participant2phone,
        participant3_phone: participant3phone,
        count_pati: countparti(),
        team_name: teamname,
        college_name: collegeName
      });

      const resp = await response.data;
      if (resp.message === "success") {
        if (event.price > 0) {
          alert("Registration Initiated");
          handlePayment();
        }

        else {
          alert("Registration Successful");
          setTimeout(() => {
            window.location.href = "/success";
          }, 1000);
        }
      }
      else {
        if (resp.message.includes("duplicate")) {
          alert("Duplicate Entry");
        }
        else {

          alert("Registration Failed");

          setTimeout(() => {
            window.location.href = "/failure";
          }, 1000);
        }
      }

      setRegistering(false);

      // try {
      //   await axios.post(`https://datatrixregistrationsapi.syn4ck.workers.dev/api/update-event/${event.id}`, {
      //     occupied_slots: event.occupied_slots + countparti()
      //   });
      // } catch (error) {
      //   alert(error.response?.data?.message || error.message);
      // }
    } catch (error) {
      if (error.response?.data?.message?.includes("duplicate key value violates unique constraint")) {
        alert("Registration Already Exists");
      } else {
        alert(error.response?.data?.message || error.message);
      }
    }

    return countparti();
=======
  // Registration links mapped to specific event IDs
  const registrationLinks = {
    1: "",
    2: "",
    3: "https://forms.gle/f3GbZVjs2job1Po89",
    4: "https://docs.google.com/forms/d/e/1FAIpQLScrG2BBu6Pt1VH66Qy8HGTFDjrPXlOJxpcPifrEjJROqoSXxQ/viewform?usp=sf_link",
    5: "",
    6: "",
>>>>>>> 8a56d2161de1f2290228912d4667455ba4869bfa
  };

  useEffect(() => {
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

  if (error) {
    return <p className="text-red-500">{error}</p>;
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
              <button
                className="bg-dark-500 ml-4 mt-[2.5rem] border-[1px] hover:bg-blue-300 hover:text-blue-800 text-white font-bold py-2 px-[3rem] rounded-full focus:outline-none font-orbitron focus:shadow-outline border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_10px_#08f]"
                onClick={() => {
                  window.location.href = registrationLinks[id] || window.alert("Registration Are Closed");
                }}
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
