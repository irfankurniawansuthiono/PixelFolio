import Home from "./home";
import MusicModal from "./home/modal";
import SocialMediaButton from "./home/SocialMediaButton";

export default function App() {
  return (
    <div className=" h-screen px-6 md:px-10 flex  items-center justify-center ">
      <MusicModal/>
      {/* Card Container */}
      <div className="w-full flex h-fit flex-col gap-5 md:flex-row lg:justify-between justify-around">
        <div className="nes-container is-rounded is-centered bg-gray-500/50 flex h-fit items-center flex-col shadow-lg p-6">
          {/* Title */}
          <p className="title text-xl lg:text-2xl text-white mb-4">Name Card</p>
          {/* Profile Image */}
          <div style={{
            backgroundImage: "url('/image/pp.jpg')",
            backgroundSize: "cover",
          }} className="overflow-hidden mb-2 rounded-lg w-32 h-32 lg:w-80 lg:h-80">
          </div>

          {/* Name */}
          <h1 className="text-lg lg:text-3xl nes-text font-bold text-white mb-2">IrfanKS</h1>

          <a href="#" className="nes-badge is-splited">
            <span className="is-dark w-fit">FS</span>
            <span className="is-success">Dev</span>
          </a>

        </div>
        <div className="flex md:hidden">
          <SocialMediaButton/>
        </div>
        <div className="flex flex-col justify-between items-center">
          <Home/>
        </div>
      </div>
    </div>
  );
}
