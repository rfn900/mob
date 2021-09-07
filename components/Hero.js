import HeroSvg from "./HeroSvg";
function Hero() {
  return (
    <div className="relative flex items-center justify-center clip-path-hero bg-indigo-50 max-h-full xl:h-screen py-24">
      <div className="relative flex flex-col w-full max-w-6xl mt-12 xl:flex-row">
        <div className="relative flex flex-col p-6 opacity-0 md:p-12 xl:p-0 animate-load">
          <p className="mb-1 text-sm text-gray-600">Content Marketing Agency</p>
          <h1 className="mt-1 font-sans text-3xl font-bold sm:text-5xl 2xl:text-6xl">
            MARSian Online Group
          </h1>
          <h4 className="relative z-0 mt-4 text-lg font-bold sm:text-2xl md:mt-8 lg:mt-8">
            We take care of the content.
            <br className="" />
            <div className="relative inline">
              <span className="relative z-10">You make the sale.</span>
              <span className="absolute bottom-0 z-0 w-11/12 bg-yellow-300 h-3/5 top-3 md:top-4 left-5"></span>
            </div>
          </h4>
          <button className="w-40 mt-8 lg:mt-12 md:mt-8 btn-indigo">
            Read More
          </button>
        </div>
        <HeroSvg />
      </div>
    </div>
  );
}

export default Hero;
