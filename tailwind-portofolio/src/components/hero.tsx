export default function Hero() {
  return (
    <div className="hero min-h-screen relative" style={{
      backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
    }} id='home'>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-7xl font-bold dark:text-white">Hello there</h1>
          <p className="mb-5 text-xl dark:text-white">
            Welcome to Hanif Ahmad portofolio, hope you enjoy!!!
          </p>
          <a className="btn btn-primary dark:btn-primary dark:text-white" href='#about'>Get Started</a>
        </div>
      </div>
    </div>
  )
}