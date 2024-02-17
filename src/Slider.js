import Mycard from "./myCard";

const Slider = () => {
  return (
    <>
      <div className="slider relative overflow-hidden p-5">
        <div className="card_container w-screen py-3 flex overflow-y-hidden overflow-x-scroll scroll-smooth no-scrollbar">
          <Mycard
            title="Full Stack web developer"
            details="A web developer with wide knowledge of Frontend Tech stack like HTML, CSS, REACT, REDUX and Tailwind as well as Backend Technologies like node.js, express.js and mongoDB"
          />
          <Mycard
            title="JavaScript"
            details="In depth knowledge of js and it's core functionlity. "
          />
          <Mycard
            title="Python"
            details="Intermediate level Python programmer. Worked on some web Scrapping and AI assistant projects."
          />
          <Mycard
            title="DSA"
            details="Good command on DSA with C++ and have won Coding Hackathon at my collage."
          />
          <Mycard
            title="Communication Skill"
            details="I have good communicational skill both in English as well as Hindi. I understand the importance of effective and clear cummunication."
          />
          <Mycard
            title="Time-management"
            details="I am very good at Time management along with punctual habit."
          />
        </div>
      </div>
    </>
  );
};

export default Slider;
