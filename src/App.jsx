import facebook24 from "../images/facebook-24.png";
import instagram24 from "../images/instagram-24.png";
import twitter24 from "../images/twitter-24.png";
import illustration from "../images/illustration-mockups.svg";
import logo from "../images/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="w-full h-full  bg-violet-800/95 bg-[url(../images/bg-mobile.svg)] sm:bg-[url(../images/bg-desktop.svg)] bg-cover bg-no-repeat grid justify-center">
      <div className="grid grid-cols-1 sm:gap-x-10 lg:grid-cols-2 self-center p-4 sm:p-14">
        <div className="space-y-24">
          <img src={logo} className="h-12 w-48 self-center" />
          <img src={illustration} />
        </div>

        <div className="text-center grid justify-items-center items-center space-y-3">
          <h5 className="text-2xl text-white lg:text-4xl lg:text-left font-semibold lg:w-[450px] lg:justify-self-start">
            Build The Community Your Fans Will Love
          </h5>
          <p className="text-lg sm:text-left text-white lg:text-3xl sm:w-[650px] w-60">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="bg-white w-60 h-12 rounded-3xl text-violet-500/90">
            Register
          </button>
          <div className="flex flex-row space-x-3 sm:justify-self-end">
            <div className="border-[1px] rounded-full w-10 h-10 grid items-center justify-center">
              <img src={facebook24} className="h-5 w-5 " />
            </div>
            <div className="border-[1px] rounded-full w-10 h-10 grid items-center justify-center">
              <img src={instagram24} className="h-5 w-5 " />
            </div>
            <div className="border-[1px] rounded-full w-10 h-10 grid items-center justify-center">
              <img src={twitter24} className="h-5 w-5 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
