export default function ProfileCard() {
    return(
        <div className="nes-container is-rounded is-centered bg-gray-500/50 flex h-fit items-center flex-col shadow-lg p-6">
          {/* Title */}
          <p className="text-xs  md:flex lg:text-2xl text-white mb-4">Name Card</p>
          {/* Profile Image */}
          <div style={{
            backgroundImage: "url('/image/pp.jpg')",
            backgroundSize: "cover",
          }} className="mb-2 rounded-lg w-32 h-32 lg:w-80 lg:h-80">
          </div>

          {/* Name */}
          <h1 className="text-sm lg:text-3xl nes-text font-bold text-white mb-2">IrfanKS</h1>

          <a href="#" className="nes-badge  is-splited">
            <span className="is-dark w-fit text-xs md:text-md">FS</span>
            <span className="is-success text-xs md:text-md">Dev</span>
          </a>

        </div>
    )
}