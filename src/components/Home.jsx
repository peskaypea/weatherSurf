import NavBar from "./NavBar";

import surfImage from "../assets/car1.jpeg";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col  md:flex-row ">
        <div className="w-full pt-12 pl-5 pr-5">
          <img className="rounded-xl hover:blur-sm" src={surfImage}></img>
        </div>
        <div className="w-full flex justify-center items-center">
          <h2 className=" pt-5 text-5xl tracking-wide font-sans font-bold bg-gradient-to-r from-slate-700 to-slate-200 text-transparent bg-clip-text">
            Built for Surfers, <br />
            Made by Surfers <br />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
