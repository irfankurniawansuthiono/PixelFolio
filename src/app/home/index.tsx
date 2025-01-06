import SocialMediaButton from "./SocialMediaButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      {/* Header */}
      <div className="w-full flex flex-col justify-center items-center gap-4 text-center">
        <h1 className="nes-text is-primary text-3xl md:text-5xl font-bold animate-pulse">
          Welcome to My Quest!
        </h1>
        <h2 className="nes-text is-warning text-xs md:text-lg">
          Choose Your Path to Begin the Adventure
        </h2>
      </div>

      {/* Menu Buttons */}
      <div className="mt-8">
        <ul className="flex flex-col items-center gap-6">
          <li>
            <button className="nes-btn is-warning is-large px-6 py-3">
              <span className="nes-text text-sm">Hero&apos;s Backstory</span>
            </button>
          </li>
          <li>
            <button className="nes-btn is-success is-large px-6 py-3">
              <span className="nes-text text-sm">Achievements</span>
            </button>
          </li>
          <li>
            <button className="nes-btn is-error is-large px-6 py-3">
              <span className="nes-text text-sm">Power-Ups</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Social Media Buttons on larger screens */}
      <div className="hidden md:flex w-full h-full justify-center mt-8">
        <SocialMediaButton />
      </div>
    </div>
  );
}
