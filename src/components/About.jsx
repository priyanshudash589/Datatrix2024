import React from "react";
import gh from "../assets/aboutus_imgs/website.png";
import sh from "../assets/aboutus_imgs/gallery.png";
import hh from "../assets/aboutus_imgs/hod.png";

import fg from "../assets/aboutus_imgs/srm.png"
import sg from "../assets/aboutus_imgs/bms.png"
import gg from "../assets/aboutus_imgs/dean.png"


const About = () => {
  return (
    <>
      <div className="w-screen bg-black">
        <div>
          <h1 className="text-4xl text-center text-white font-orbitron p-[2rem] bg-transparent">
            About Us
          </h1>

          <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-black dark:bg-dark">
            <div className="container mx-auto">
              <div className="flex flex-wrap items-center justify-between -mx-4">
                <div className="w-full px-4 lg:w-6/12">
                  <div className="flex items-center -mx-3 sm:-mx-4">
                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                      <div className="py-3 sm:py-4">
                        <img
                          src={gh}
                          alt=""
                          className="w-full rounded-2xl"
                        />
                      </div>
                      <div className="py-3 sm:py-4">
                        <img
                          src={sh}
                          alt=""
                          className="w-full rounded-2xl"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                      <div className="relative z-10 my-4">
                        <img
                          src={hh}
                          alt=""
                          className="w-full rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                  <div className="mt-10 lg:mt-0">
                    <h2 className="mb-5 text-3xl font-bold text-white sm:text-[40px]/[48px]">
                      DATATRIX 2024
                    </h2>
                    <p className=" text-white mb-8 text-justify text-xl ">
                      The Datatrix '24 symposium, presented by the Department of
                      Computer Science and Engineering with a specialization in
                      Big Data Analytics at SRM Institute of Science and
                      Technology, Ramapuram, is set to be a landmark event for
                      tech enthusiasts and aspiring data scientists. Scheduled
                      for the 13th and 14th of September 2024, from 8:00 AM to
                      4:00 PM, this two-day event promises a dynamic blend of
                      competitions, workshops, and interactive sessions designed
                      to ignite innovation and deepen participants'
                      understanding of the rapidly evolving field of data
                      science. This symposium is an exceptional opportunity for
                      students, professionals, and technology enthusiasts to
                      engage with the latest trends, network with like-minded
                      individuals, and showcase their talents in the
                      ever-expanding world of big data analytics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="overflow-hidden pt-20 pb-6 lg:pt-[120px] lg:pb-[90px] bg-black dark:bg-dark">
            <div className="container mx-auto">
              <div className="flex flex-wrap flex-row-reverse items-center justify-between -mx-4">
                <div className="w-full px-4 lg:w-6/12">
                  <div className="flex items-center -mx-3 sm:-mx-4">
                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                      <div className="py-3 sm:py-4">
                        <img
                          src={fg}
                          alt=""
                          className="w-full rounded-2xl"
                        />
                      </div>
                      <div className="py-3 sm:py-4">
                        <img
                          src={sg}
                          alt=""
                          className="w-full rounded-2xl"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                      <div className="relative z-10 my-4">
                        <img
                          src={gg}
                          alt=""
                          className="w-full rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                  <div className="mt-10 lg:mt-0">
                    <h2 className="mb-5 text-3xl font-bold text-white sm:text-[40px]/[48px]">
                      SRMIST
                    </h2>
                    <p className=" text-white mb-8 text-justify text-xl ">
                      SRM Institute of Science and Technology, Ramapuram campus,
                      is a premier educational institution located in Chennai,
                      Tamil Nadu. Known for its robust academic programs, the
                      campus offers a diverse range of undergraduate,
                      postgraduate, and doctoral courses in engineering,
                      management, science, and humanities. The Ramapuram campus
                      is equipped with state-of-the-art infrastructure, modern
                      laboratories, and a well-stocked library, providing
                      students with an enriching learning environment. The
                      institution emphasizes a blend of academic excellence and
                      holistic development, with a strong focus on research,
                      innovation, and extracurricular activities. With its
                      commitment to nurturing future leaders and professionals,
                      SRM Ramapuram stands as a beacon of quality
                      education in India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="overflow-hidden pt-20 pb-6 lg:pt-[120px] lg:pb-[90px] bg-black dark:bg-dark">
            <div className="container mx-auto">
              <div className="flex flex-wrap items-center justify-between -mx-4">
                <div className="w-full px-4 lg:w-6/12">
                  <div className="flex items-center -mx-3 sm:-mx-4">
                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                      <div className="py-3 sm:py-4">
                        <img
                          src="../assets/aboutus_imgs/bda.png"
                          alt=""
                          className="w-full rounded-2xl"
                        />
                      </div>
                      <div className="py-3 sm:py-4">
                        <img
                          src="../assets/aboutus_imgs/ideaexplore.png"
                          alt=""
                          className="w-full rounded-2xl"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                      <div className="relative z-10 my-4">
                        <img
                          src="../assets/aboutus_imgs/deptHod.png"
                          alt=""
                          className="w-full rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                  <div className="mt-10 lg:mt-0">
                    <h2 className="mb-5 text-3xl font-bold text-white sm:text-[40px]/[48px]">
                      DEPARTMENT OF BIG DATA ANALYTICS
                    </h2>
                    <p className=" text-white mb-8 text-justify text-xl ">
                      The Computer Science Engineering (CSE) program with a
                      specialization in Big Data Analytics at SRM Institute of
                      Science and Technology, Ramapuram, is designed to equip
                      students with cutting-edge skills in data science and
                      analytics. This specialization focuses on the principles
                      and technologies needed to handle, analyze, and draw
                      insights from large and complex data sets. The curriculum
                      combines a solid foundation in computer science with
                      advanced courses in big data technologies, machine
                      learning, data mining, and cloud computing.Students
                      benefit from hands-on experience through industry
                      collaborations, projects, and state-of-the-art
                      laboratories that mirror real-world scenarios. The program
                      also emphasizes research and innovation, encouraging
                      students to explore emerging trends in data science. With
                      a strong focus on practical applications, graduates are
                      well-prepared for careers in data analytics, business
                      intelligence, and other high-demand fields in technology,
                      making SRM Ramapuram a preferred choice for aspiring data
                      scientists and engineers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
