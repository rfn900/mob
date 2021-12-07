import Image from 'next/image'
import Link from 'next/link'
import { AppButton } from '../components/homepage/AppButton'
import Layout from '../components/layouts/Layout'
import {
  HiPresentationChartLine,
  HiOutlinePencilAlt,
  HiOutlineSearch,
} from 'react-icons/hi'
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import Highlight from '../components/layouts/Highlight'
import ClipPathSVGBot from '../components/svgs/ClipPathSVGBot'
import ClipPathSVGTop from '../components/svgs/ClipPathSVGBot'
import SquiglySection from '../components/layouts/SquiglySection'

const collabotations = ['polarnopyret', 'icaniwill', 'bubbleroom', 'babyland']
const whatWeDoContent = [
  {
    icon: <HiOutlinePencilAlt className="w-full h-full" />,
    title: 'Content Marketing',
    body:
      "Our Business Plan is written document describing a company's core business activities.",
  },
  {
    icon: <HiOutlineSearch className="w-full h-full" />,
    title: 'SEO',
    body:
      'A market analysis is quantitative and qualitative assessment of a market. ',
  },
  {
    icon: <HiPresentationChartLine className="w-full h-full" />,
    title: 'Traffic Growth',
    body:
      'Our Expert team sensible decision about ther money to ensure thet archive their life goals. ',
  },
]

export default function Home() {
  return (
    <Layout>
      <div className="relative z-10 flex-col items-center justify-center text-gray-700 bg-white section-full gap-8 clip-path-about">
        <div className="absolute w-1/3 bg-indigo-200 rounded-full left-1/2 -translate-y-5 -translate-x-20 h-96 transform opacity-90 filter blur-3xl mix-blend-multiply"></div>
        <div className="absolute w-1/3 bg-yellow-300 rounded-full opacity-50 right-1/2 translate-y-5 translate-x-20 h-96 transform filter blur-3xl mix-blend-multiply"></div>
        <div className="mt-12 text-center">
          <h1 className="font-sans text-5xl font-black tracking-wider uppercase lg:text-6xl ">
            Content is
            <span className="relative ml-4">
              King
              <i className="top-1/2 transform mt-0.5 -translate-y-1/2 absolute w-fuller h-2 bg-yellow-500 shadow-lg rounded-full left-1/2 -translate-x-1/2"></i>
            </span>
            <span className="ml-8 font-outline">Queen</span>
          </h1>
        </div>
        <p className="relative w-full px-6 text-center font-semi md:w-1/2 lg:text-lg">
          Some text here to highlight all the things we do and all the services
          we offer. Talk about yourself and stuff.
        </p>
        <AppButton
          btnType="btn-primary"
          text="Become a Partner"
          className="relative px-12 py-4 lg:text-xl"
        />
      </div>
      <div className="relative px-6 pt-12 pb-24 -mt-48 bg-indigo-50">
        <div className="relative z-20 flex items-center justify-between w-full h-24 max-w-6xl px-4 mx-auto mt-24 md:mt-12 shadow-lg md:px-12 rod-glass gap-2 lg:gap-8 lg:w-4/5 md:h-36 rounded-xl">
          {collabotations.map((companyName) => {
            return (
              <div className="flex items-center justify-center flex-1">
                <Image
                  priority={true}
                  src={`/${companyName}-light.png `}
                  alt="collabotations"
                  width={200}
                  height={100}
                  objectFit="contain"
                />
              </div>
            )
          })}
        </div>
        <div className="flex flex-col mt-16 md:mt-24 text-center text-gray-700 gap-4">
          <h2 className="w-1/2 mx-auto font-sans text-4xl font-bold tracking-wider w-full capitalize lg:text-4xl ">
            We Create
          </h2>
          <p className="flex items-center justify-center text-3xl font-thin gap-2 ">
            Your Sales <Highlight classes="mt-0.5">Increase</Highlight>
          </p>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row justify-center items-center mt-12 md:mt-48 gap-8">
          {whatWeDoContent.map((item, index) => {
            const background = index === 1 ? 'bg-indigo-900' : 'bg-white'
            const backgroundIcon = index === 1 ? 'bg-indigo-800' : 'bg-gray-100'
            const textColor = index === 1 ? 'text-indigo-200' : 'text-gray-400'
            const titleColor = index === 1 ? 'text-indigo-50' : 'text-gray-700'
            return (
              <div
                className={`md:-mt-${
                  index * 12 + 12
                } flex flex-col px-6 py-8 w-72 h-80 ${background} transition rounded-xl transform ease-in shadow-md hover:scale-105 hover:shadow-xl`}
              >
                <div
                  className={`${textColor} ${backgroundIcon} rounded-lg p-2 w-10 h-10 `}
                >
                  {item.icon}
                </div>
                <h2 className={`mt-6 text-xl ${titleColor}`}>{item.title}</h2>
                <p className={` mt-4 ${textColor} `}>{item.body}</p>
              </div>
            )
          })}
        </div>
      </div>
      <SquiglySection bgColorBottom="#302E80" bgColorTop="#302E80">
        <div className="relative z-10 flex justify-center flex-col md:flex-row md:gap-16">
          <div className="bg-red-300 mx-auto md:mx-0 rounded-full overflow-hidden w-40 h-40 md:w-60 md:h-60">
            <Image
              height={300}
              width={300}
              src="/sofia-ceo.jpeg"
              objectFit="contain"
            />
          </div>
          <div className="flex items-center justify-center w-80 flex-col">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl text-indigo-50">Sofia Marklund</h2>
              <p className="text-indigo-300">
                Founder, CEO, Creator and SEO specialist
              </p>
              <div className="flex gap-4">
                <div className="bg-indigo-800 shadow-md hover:shadow-xl rounded-full text-indigo-300 p-2">
                  <Link href="">
                    <FaFacebookF />
                  </Link>
                </div>
                <div className="bg-indigo-800 shadow-md hover:shadow-xl rounded-full text-indigo-300 p-2">
                  <FaLinkedinIn />
                </div>
                <div className="bg-indigo-800 shadow-md hover:shadow-xl rounded-full p-2 text-indigo-300">
                  <FaEnvelope />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SquiglySection>
      <div className="section-full"></div>
    </Layout>
  )
}
