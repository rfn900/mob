import ClipPathSVGBot from "./ClipPathSVGBot";
import ClipPathSVGTop from "./ClipPathSVGTop";

export default function Brands() {
  return (
    <div className="relative z-0 flex flex-col w-full py-12 bg-indigo-50 lg:mt-12 lg:bg-transparent gap-12">
      <ClipPathSVGTop
        fill={"#EEF2FF"}
        className="absolute bottom-full lg:bottom-3/4"
      />
      <h2 className="relative z-10 w-full m-auto font-sans text-4xl font-bold text-center lg:w-96">
        <span className="relative z-10">Colaborations</span>
        <span className="absolute w-64 bg-yellow-300 right-1/4 h-1/2 top-6"></span>
      </h2>
      <div className="relative z-10 flex items-center justify-around max-w-6xl px-4 m-auto mt-4 space-x-2 lg:space-x-8 sm:px-8 lg:px-24">
        <div className="flex-1">
          <img className="object-conatin" src="babyland.png" alt="" />
        </div>
        <div className="flex-1">
          <img className="object-conatin" src="bubbleroom.png" alt="" />
        </div>
        <div className="flex-1">
          <img className="object-conatin" src="icaniwill.png" alt="" />
        </div>
        <div className="flex-1">
          <img className="object-conatin " src="greatlife.png" alt="" />
        </div>
        <div className="flex-1">
          <img className="object-conatin" src="bose.png" alt="" />
        </div>
      </div>
      <ClipPathSVGBot
        fill={"#EEF2FF"}
        className="absolute z-0 top-3/4 lg:top-1/4"
      />
    </div>
  );
}
