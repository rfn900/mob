import Link from "next/link";
import Highlight from "../layouts/Highlight";
import HeroBlobSVG from "../svgs/HeroBlobSVG";
import HeroBlobSVGMobile from "../svgs/HeroBlobSVGMobile";
import HeroSvg from "../svgs/HeroSvg";
import { AppButton } from "./AppButton";
function Hero() {
  return (
    <div className="items-center justify-center clip-path-hero section-full">
      <HeroBlobSVGMobile />
      <HeroBlobSVG />
      <div className="relative flex flex-col items-start w-full max-w-6xl mt-12 xl:mt-24 lg:flex-row">
        <div className="relative flex flex-col p-6 opacity-0 md:p-12 xl:p-0 animate-load">
          <p className="mb-1 text-sm text-gray-600">Content Marketing Agency</p>
          <h1 className="mt-1 font-sans text-3xl font-extrabold sm:text-5xl 2xl:text-6xl">
            MARSian Online Group
          </h1>
          <h4 className="relative z-0 mt-4 text-lg font-bold sm:text-2xl md:mt-8 lg:mt-8">
            We take care of the content.
            <br className="" />
            <Highlight>You make the sale.</Highlight>
          </h4>
          <Link href="/become-a-partner">
            <a>
              <AppButton
                text="Become an Partner"
                btnType="btn-primary"
                className="py-3 mt-8 w-60 lg:mt-12 md:mt-8"
              />
            </a>
          </Link>
        </div>
        <HeroSvg />
      </div>
    </div>
  );
}

export default Hero;
