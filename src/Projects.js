import { useState } from "react";
import Images from "./Images";
import Crousal from "./crousal";

const Projects = () => {
  const [activePage, setActivePage] = useState("");

  function OpenPage(page) {
    setActivePage(page);
  }

  function Hide() {
    setActivePage("");
  }

  return (
    <div className="projects w-screen h-fit mb-20 cursor-default">
      <div className="title">
        <h1 className="text-center text-4xl font-Cormorant">
          Featured Projects
        </h1>
        <h5 className="text-center font-mono font-light ">
          Here are some of my good projects...
        </h5>
      </div>
      <div className="Project-list flex flex-col items-center ">

        {/*------------------------ Project 1 -------------------------- */}
        {activePage === "project1" ? (
          <div className="project-1 w-3/5 h-fit mt-12  flex flex-col justify-around items-center ">
            <div className="m-5">
              <h1 className="text-2xl font-Philosopher">
                Food Ordering Web App
              </h1>
              <div className="flex">
                <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                  JavaScript
                </span>
                <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                  React
                </span>
                <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                  Redux
                </span>
                <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                  Tailwind CSS
                </span>
              </div>
            </div>
            <div className="Details w-full h-96 flex justify-around ">
              <section className="imgSection w-2/5 ">
                <div className="img w-full h-full bg-gray-500">
                  <Crousal data={Images.Swiggy} />
                </div>
              </section>
              <section className="Descriptions w-3/6 overflow-auto ">
                <p className="break-after-all">
                  <span className="font-bold">Project Highlights:</span>
                  <br />
                  ° Designed and developed the complete frontend of a food
                  delivery web app using React.js.
                  <br />
                  ° Integrated data for multiple restaurants, including menus,
                  images, and pricing. <br />
                  ° Built a user-friendly interface for browsing, selecting, and
                  adding items to a shopping cart. <br />
                  ° Emphasized responsiveness and accessibility across various
                  devices and screen sizes.
                  <br />
                  <br />
                  <span className="font-bold">Demonstrated Skills:</span> <br />
                  °{" "}
                  <span className="italic font-medium">
                    Expert Frontend Development:
                  </span>{" "}
                  Proficient in React.js for building dynamic and interactive UI
                  experiences.
                  <br />°{" "}
                  <span className="italic font-medium">
                    State Management Mastery:
                  </span>{" "}
                  Utilized Redux to effectively manage complex application state
                  within the food delivery app.
                  <br />°{" "}
                  <span className="italic font-medium">UI/UX Focus:</span>{" "}
                  Leveraged Tailwind CSS for rapid, responsive, and consistent
                  design implementation.
                  <br />°{" "}
                  <span className="italic font-medium">
                    Data Visualization:
                  </span>{" "}
                  Incorporated clear and engaging presentation of restaurant
                  data, including images and prices.
                  <br />°{" "}
                  <span className="italic font-medium">
                    Ecommerce Functionality:
                  </span>{" "}
                  Implemented a seamless cart system for user convenience.
                </p>
              </section>
            </div>
            <div className="btn w-full mb-12 flex justify-center rounded-b-2xl relative bg-gray-950 text-white ">
              <button
                className="z-20 w-full "
                onClick={() => {
                  Hide();
                }}
              >
                Hide!
              </button>
            </div>
          </div>
        ) : (
          <div className="project-1 w-3/5 h-36 m-12 flex items-center flex-col hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out ">
            <div className=" flex justify-evenly mx-12 mt-12 w-full h-24 shadow-lg  cursor-pointer rounded-t-2xl">
              <div>
                <h1 className="text-2xl font-Philosopher">
                  Food Ordering Web App
                </h1>
                <div className="flex">
                  <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                    React
                  </span>
                  <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                    Redux
                  </span>
                  <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                    Tailwind CSS
                  </span>
                </div>
              </div>
              <pre className="text-sm font-Rajdhani">
                Created a Food Delivery Web App using many core concepts of{" "}
                <br /> React and Redux. Worked with states, context, store,
                slices,
                <br /> etc and stylied with tailwind CSS.
              </pre>
            </div>
            <div className="btn w-full mb-12 flex justify-center rounded-b-2xl relative bg-gray-950 text-white ">
              <button
                className="z-20 w-full  "
                onClick={() => {
                  OpenPage("project1");
                }}
              >
                Read More...
              </button>
            </div>
          </div>
        )}

        {/*------------------------ Project 2 -------------------------- */}
        {activePage === "project2" ? (
          <div className="project-2 w-3/5 h-fit mt-12  flex flex-col justify-around items-center ">
            <div className="m-5">
              <h1 className="text-2xl font-Philosopher">YouTube Clone</h1>
              <div className="flex">
                <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                  React
                </span>
                <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                  RapidAPI
                </span>
                <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                  Redux
                </span>
                <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                  Tailwind CSS
                </span>
              </div>
            </div>
            <div className="Details w-full h-96 flex justify-around ">
              <section className="imgSection w-2/5 ">
                <div className="img w-full h-full bg-gray-500"></div>
              </section>
              <section className="Descriptions w-3/6 overflow-auto ">
                <p className="break-after-all">
                  My passion for front-end development extends beyond static
                  design. I crafted a fully functional YouTube clone using
                  React.js and RapidAPI, showcasing my ability to integrate
                  external APIs and build dynamic experiences. This project
                  encompassed search functionality, personalized
                  recommendations, and dedicated channel pages, all built with
                  efficiency and user-friendliness in mind. It serves as a
                  testament to my expertise in creating engaging and interactive
                  web applications that leverage the power of modern
                  technologies.
                  <br />
                  <span className="font-bold"> Demonstrated Skills:</span>
                  <br />
                  <span className="italic font-medium">° API Integration:</span>
                  Successfully utilized RapidAPI to retrieve and leverage
                  YouTube data.
                  <br />
                  <span className="italic font-medium">
                    ° Dynamic Website Development:
                  </span>{" "}
                  Built a fully functional and dynamic website replicating core
                  YouTube features.
                  <br />
                  <span className="italic font-medium">
                    ° Search Functionality:
                  </span>
                  Implemented a user-friendly search mechanism for video
                  discovery.
                  <br />
                  <span className="italic font-medium">
                    ° Recommendation System:
                  </span>
                  Incorporated content recommendations for personalized user
                  experience.
                  <br />
                  <span className="italic font-medium">
                    ° Channel Page Development:
                  </span>
                  Designed and developed dedicated pages for channels with
                  relevant information.
                  <br />
                  <span className="font-bold">Project Highlights:</span>
                  <br />
                  ° Created a YouTube clone website, showcasing understanding of
                  API integration and its application in web development.
                  <br />
                  ° Implemented search functionality allowing users to easily
                  find desired videos.
                  <br />° Designed a recommendation system suggesting relevant
                  content based on user interactions.
                  <br />° Developed interactive channel pages displaying channel
                  details and associated videos.
                </p>
              </section>
            </div>
            <div className="btn w-full mb-12 flex justify-center rounded-b-2xl relative bg-gray-950 text-white ">
              <button
                className="z-20 w-full "
                onClick={() => {
                  Hide();
                }}
              >
                Hide!
              </button>
            </div>
          </div>
        ) : (
          <div className="project-2 w-3/5 h-36 m-12 flex items-center flex-col hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out ">
            <div className=" flex justify-evenly mx-12 mt-12 w-full h-24 shadow-lg  cursor-pointer rounded-t-2xl">
              <div>
                <h1 className="text-2xl font-Philosopher">YouTube Clone</h1>
                <div className="flex">
                  <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                    React
                  </span>
                  <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                    Redux
                  </span>
                  <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                    Tailwind CSS
                  </span>
                  <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                    RapidAPI
                  </span>
                </div>
              </div>
              <pre className="text-sm font-Rajdhani">
                Created YouTube Clone using concepts of <br /> React and Redux.
                Worked with states, context, store, slices,
                <br /> etc and stylied with tailwind CSS.
              </pre>
            </div>
            <div className="btn w-full mb-12 flex justify-center rounded-b-2xl relative bg-gray-950 text-white ">
              <button
                onClick={() => {
                  OpenPage("project2");
                }}
              >
                Read More...
              </button>
            </div>
          </div>
        )}

        {/*------------------------ Project 3 -------------------------- */}
        {activePage === "project3" ? (
          <div className="project-3 w-3/5 h-fit mt-12  flex flex-col justify-around items-center ">
            <div className="m-5">
              <h1 className="text-2xl font-Philosopher">YouTube Backend</h1>
              <div className="flex">
                <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                  Node.js
                </span>
                <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                  Express
                </span>
                <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                  MongoDB
                </span>
                <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                  Cloudinary
                </span>
                <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                  Bcrypt
                </span>
              </div>
            </div>
            <div className="Details w-full h-96 flex justify-around ">
              <section className="imgSection w-2/5 ">
                <div className="img w-full h-full bg-gray-500"></div>
              </section>
              <section className="Descriptions w-3/6 overflow-auto ">
                <p className="break-after-all">
                  <span className="font-bold">Current Project:</span>
                  I'm actively pushing my boundaries by diving into the backend
                  development of a YouTube-like website, expanding my skillset
                  beyond the frontend.
                  <br /> <span className="font-bold">This project has me:</span>
                  <br />{" "}
                  <span className="italic font-medium">
                    Building Secure Foundations:
                  </span>
                  Crafting robust APIs with Node.js and Express.js, ensuring
                  efficient routing and communication.
                  <br />
                  <span className="italic font-medium"> Data Mastery:</span>
                  Leveraging MongoDB as my database, implementing optimal
                  queries and data structures for video storage and retrieval.
                  <br />
                  <span className="italic font-medium">
                    Cloud Storage Savvy:
                  </span>{" "}
                  Utilizing Cloudinary for efficient and scalable video asset
                  management.
                  <br />{" "}
                  <span className="italic font-medium">
                    Authentication Architect:
                  </span>
                  Designing and implementing secure user authorization and
                  authentication from scratch, prioritizing user privacy and
                  security.
                  <br />{" "}
                  <span className="italic font-medium">
                    Production-Ready Focus:
                  </span>
                  Adhering to production-level coding standards for optimal
                  performance, maintainability, and scalability.
                  <br /> <span className="font-bold">Technologies:</span>
                  <br />
                  <span className="italic font-medium"> Node.js,</span>
                  <br />
                  <span className="italic font-medium">
                    {" "}
                    Express.js (Backend),
                  </span>
                  <br />
                  <span className="italic font-medium">
                    {" "}
                    MongoDB (Database),
                  </span>
                  <br />
                  <span className="italic font-medium">
                    {" "}
                    Cloudinary (Media Storage)
                  </span>
                  <br /> This ongoing project highlights my ability to tackle
                  complex backend challenges, ensuring both functionality and
                  security while adhering to high-quality development standards.
                </p>
              </section>
            </div>
            <div className="btn w-full mb-12 flex justify-center rounded-b-2xl relative bg-gray-950 text-white ">
              <button
                className="z-20 w-full "
                onClick={() => {
                  Hide();
                }}
              >
                Hide!
              </button>
            </div>
          </div>
        ) : (
          <div className="project-3 w-3/5 h-36 m-12 flex items-center flex-col hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out ">
            <div className=" flex justify-evenly mx-12 mt-12 w-full h-24 shadow-lg  cursor-pointer rounded-t-2xl">
              <div>
                <h1 className="text-2xl font-Philosopher">YouTube Backend</h1>
                <div className="flex">
                  <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                    Node
                  </span>
                  <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                    Express
                  </span>
                  <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                    MongoDB
                  </span>
                  <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                    Cloudinary
                  </span>
                  <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                    Bcrypt
                  </span>
                </div>
              </div>
              <pre className="text-sm font-Rajdhani">
                Working on YouTube backend with all the functionality
                <br /> required for an user.
                <br />
              </pre>
            </div>
            <div className="btn w-full mb-12 flex justify-center rounded-b-2xl relative bg-gray-950 text-white ">
              <button
                onClick={() => {
                  OpenPage("project3");
                }}
              >
                Read More...
              </button>
            </div>
          </div>
        )}

        {/*------------------------ Project 4 -------------------------- */}
        {activePage === "project4" ? (
          <div className="project-3 w-3/5 h-fit mt-12  flex flex-col justify-around items-center ">
            <div className="m-5">
              <h1 className="text-2xl font-Philosopher">My Portfolio</h1>
              <div className="flex">
                <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                  JavaScript
                </span>
                <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                  React
                </span>
                <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                  Tailwind CSS
                </span>
              </div>
            </div>
            <div className="Details w-full h-96 flex justify-around ">
              <section className="imgSection w-2/5 ">
                <div className="img w-full h-full bg-gray-500"></div>
              </section>
              <section className="Descriptions w-3/6 overflow-auto ">
                <p className="break-after-all">
                  Welcome to my portfolio! I'm a skilled web developer
                  proficient in React.js, Redux, and Tailwind, dedicated to
                  crafting clean and elegant user interfaces. My portfolio
                  showcases the culmination of my expertise, presenting a
                  meticulously designed website that reflects my commitment to
                  creating visually appealing and user-friendly experiences.
                  Leveraging the power of React.js and the state management
                  capabilities of Redux, I've seamlessly integrated dynamic and
                  responsive components. The use of Tailwind ensures a modern
                  and sleek aesthetic, enhancing the overall user experience.
                  Explore my portfolio to witness firsthand my proficiency in
                  front-end development, with a keen eye for detail and a
                  passion for delivering exceptional results.
                  <br /> <span className="font-bold">Skills highlighted:</span>
                  <br />
                  <span className="italic font-medium"> React.js:</span>{" "}
                  Expertise in building robust and dynamic user interfaces.
                  <br />
                  <span className="italic font-medium">Redux:</span> Proficient
                  in state management for scalable and maintainable
                  applications.
                  <br />
                  <span className="italic font-medium"> Tailwind:</span> Mastery
                  in crafting modern and responsive designs.
                  <br />
                </p>
              </section>
            </div>
            <div className="btn w-full mb-12 flex justify-center rounded-b-2xl relative bg-gray-950 text-white ">
              <button
                className="z-20 w-full "
                onClick={() => {
                  Hide();
                }}
              >
                Hide!
              </button>
            </div>
          </div>
        ) : (
          <div className="project-4 w-3/5 h-36 m-12 flex items-center flex-col hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out ">
            <div className=" flex justify-evenly mx-12 mt-12 w-full h-24 shadow-lg  cursor-pointer rounded-t-2xl">
              <div>
                <h1 className="text-2xl font-Philosopher">Portfolio Website</h1>
                <div className="flex">
                  <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                    React
                  </span>
                  <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                    Redux
                  </span>
                  <span className="m-1 py-1 px-2 bg-gray-200 rounded-lg font-Rajdhani">
                    Tailwind CSS
                  </span>
                </div>
              </div>
              <pre className="text-sm font-Rajdhani">
                Created Minimal and Elegent Portfolio Website using <br />{" "}
                React. Worked Tailwind CSS for styling the Portfolio.
                <br />
              </pre>
            </div>
            <div className="btn w-full mb-12 flex justify-center rounded-b-2xl relative bg-gray-950 text-white ">
              <button
                onClick={() => {
                  OpenPage("project4");
                }}
              >
                Read More...
              </button>
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Projects;
