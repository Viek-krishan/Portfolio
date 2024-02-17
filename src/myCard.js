
const Mycard = (props) => {
  return (
    <div>
      <div className="MyCard min-w-[28rem] h-52  text-black m-10 rounded-2xl bg-zinc-100 flex flex-col justify-center items-center shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out z-5 ">
        <h1 className="text-xl mb-5 m-2 font-Philosopher">{props.title}</h1>
        <p className="mx-5 font-Rajdhani">{props.details}</p>
      </div>
    </div>
  );
};

export default Mycard;
