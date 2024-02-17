// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

export default Header = () => {
  const handleSetActive = (to) => {
    console.log(to);
  };

  /*
    colors
  light blue - #C1E8FF  30%
  dark gray - #6E7F8D   10%
  off white - #f2f4f3   60%

    details
 Home page - visually appealing intro with name and title and breaf summery at home page

 about page - Expand summery, Highlight experience, education, and add philosophy and passion
  :) add more skills to skills scroller 

 Project page - add description, visuals, and Links to github

      Designs
  * add design elements
  * add call to action

  */

  return (
    <div className="flex justify-center   ">
      <ul className="menuUL bg-[#f2f4f3] fixed top-0  p-5  flex justify-center items-center rounded-2xl shadow-lg  transition duration-100 ease-in-out z-20">
        
        <Link
          className="menuItems mx-4 font-extralight hover:scale-110 transition duration-300 ease-in-out hover:font-medium cursor-default"
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={50}
          duration={900}
          onSetActive={handleSetActive}
        >
          <li className="font-Rajdhani" key={2}>
            Home
          </li>
        </Link>
        <Link
          className="menuItems mx-4 font-extralight hover:scale-110 transition duration-300 ease-in-out hover:font-medium cursor-default"
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={900}
          onSetActive={handleSetActive}
        >
          <li className="font-Rajdhani" key={3}>
            About
          </li>
        </Link>
        <Link
          className="menuItems mx-4 font-extralight hover:scale-110 transition duration-300 ease-in-out hover:font-medium cursor-default"
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          onSetActive={handleSetActive}
        >
          <li className="font-Rajdhani" key={4}>
            Projects
          </li>
        </Link>
        <Link
          className="menuItems mx-4 font-extralight hover:scale-110 transition duration-300 ease-in-out hover:font-medium cursor-default"
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={100}
          duration={1000}
          onSetActive={handleSetActive}
        >
          <li className="font-Rajdhani" key={5}>
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
};
