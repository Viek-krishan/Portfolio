const Home = () => {
  return (
    <div className="home w-screen h-fit mt-32 flex flex-col justify-center items-center">
      <h1 className="text-6xl font-medium m-4 font-Cormorant">
        Building the Web,{" "}
      </h1>
      <h1 className="text-6xl font-medium mb-5 font-Cormorant">
        Building Your Success.
      </h1>
      <pre className="font-Rajdhani ">
        A web Developer with a advance knowledge of React and
      </pre>
      <pre className="font-Rajdhani ">
        great interest in developing more interective,
      </pre>
      <pre className="font-Rajdhani ">
        responsive and user friendly websites
      </pre>
      <div className="m-20">
        <box-icon name="down-arrow-alt"></box-icon>
      </div>
    </div>
  );
};

export default Home;
