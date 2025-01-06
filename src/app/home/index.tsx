import SocialMediaButton from "./SocialMediaButton";

export default function Home() {
    return (
        <div className="flex justify-between h-full flex-col ">
            <div className=" nes-container is-rounded is-centered flex flex-col items-center gap-10 bg-gray-500/30 border-4 border-green-500 p-5">
                <div className="flex flex-col items-center gap-2">
                    <h1 className="nes-text is-primary text-xl md:text-3xl font-bold">
                        Welcome to My Quest!
                    </h1>
                    <h2 className="nes-text is-warning text-sm md:text-md">
                        Choose Your Path to Begin the Adventure
                    </h2>
                </div>
                <div>
                    <ul className="flex flex-col gap-5">
                        <li>
                            <button className="nes-btn is-warning">
                                <span className="nes-text">
                                    Hero&apos;s Backstory
                                </span>
                            </button>
                        </li>
                        <li>
                            <button className="nes-btn is-success">
                            Achievements
                            </button>
                        </li>
                        <li>
                            <button className="nes-btn is-error">
                                Power-Ups 
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
          <div className="hidden md:flex">
            <SocialMediaButton/>
          </div>
        </div>
    );
}