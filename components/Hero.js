import HeroSvg from "./HeroSvg";
function Hero() {
  return (
    <div className="relative h-phone bg-indigo-50 overflow-hidden max-w-10xl lg:h-screen">
      <div className="absolute flex flex-col max-w-2xl pl-4 top-40 md:top-60 lg:px-28 lg:top-52 xl:left-8 2xl:px-4 2xl:left-40">
        <p className="mb-1 text-sm text-gray-600">Content Marketing Agency</p>
        <h1 className="mt-1 font-sans text-3xl font-bold md:text-5xl 2xl:text-6xl">
          MARSian Online Group
        </h1>
        <h4 className="mt-4 text-lg font-bold md:text-2xl md:mt-8 lg:mt-8">
          We take care of the content.
          <br className="" />
          <div className="relative inline">
            You make the sale.
            <span className="absolute bottom-0 left-0 w-full bg-yellow-300 bg-opacity-50 h-1/3 -z-10"></span>
          </div>
        </h4>
        <button className="w-40 mt-8 lg:mt-12 md:mt-8 btn-indigo">
          Read More
        </button>
      </div>
      <HeroSvg />
    </div>
  );
}

export default Hero;
