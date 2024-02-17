import Slider from "./Slider";
import { Dot } from "./utils";

const About = () => {
  return (
    <div className="about w-screen h-screen z-0">
      <div className="AboutMe flex justify-evenly items-center mb-20 ">
        <div>
          <h1 className="text-4xl text-center font-Cormorant ">
            Hi There, I am Vivek Krishan.
          </h1>
          <h3>
            I develope a full-fledged full stack interective and responsive
            websites
          </h3>
        </div>
        <pre className="text-base text-center font-Rajdhani">
          Highly motivated and professional with high-level knowledge of React.
          <br /> Proficient in managing calendars, organizing meetings and
          events,
          <br /> handling confidential documents, and communicating with
          internal and external clints.
          <br /> Possess exceptional communication and interpersonal skills with
          a proven ability <br /> to work independently and as part of a team.
        </pre>
      </div>
      {/* <div className="Experience ">
        <h1 className="text-4xl text-center font-Cormorant">Experience</h1>
        <div>
          <nav>
            <li>I have worked on many solo as well as team projects.</li>
            <li>
              I have worked on multiple tech stacks like react.js, express.js,
              node.js and many more.
            </li>
            <li>I have Experience of woking on production leavel code.</li>
          </nav>
        </div>
      </div> */}
      <div className="skills mb-20 ">
        <h1 className="text-4xl text-center font-Cormorant">My Skills</h1>
        <div className="absolute right-32 scale-150">
          <box-icon name="right-arrow-alt"></box-icon>
        </div>
        <div>
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default About;
