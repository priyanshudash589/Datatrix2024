import React, { useState, useEffect } from "react";
import LoaderSlot from "../assets/loaderslot.gif";
import supabase from "../supabase";

function Event() {
  const id = window.location.pathname.split("/")[2];

  // Fetch event details
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Registration links mapped to specific event IDs
  const registrationLinks = {
    1: "",
    2: "",
    3: "https://forms.gle/f3GbZVjs2job1Po89",
    4: "https://docs.google.com/forms/d/e/1FAIpQLScrG2BBu6Pt1VH66Qy8HGTFDjrPXlOJxpcPifrEjJROqoSXxQ/viewform?usp=sf_link",
    5: "",
    6: "",
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
