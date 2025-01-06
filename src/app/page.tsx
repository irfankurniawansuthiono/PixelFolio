import Home from "./home";
import MusicModal from "./home/modal";
import SocialMediaButton from "./home/SocialMediaButton";

export default function App() {
  return (
    <div className="flex flex-col justify-between">
      <MusicModal/>
      {/* Card Container */}
      <div className="w-full flex h-fit flex-col gap-5 md:flex-row lg:justify-between justify-around">
        <div className="flex flex-col justify-between items-center">
          <Home/>
        </div>
      </div>
    </div>
  );
}
