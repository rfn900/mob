import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AppButton } from '../components/homepage/AppButton'
import Layout from '../components/layouts/Layout'
import {
  HiPresentationChartLine,
  HiOutlinePencilAlt,
  HiOutlineSearch,
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
} from 'react-icons/hi'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
  FaQuoteLeft,
  FaQuoteRight,
} from 'react-icons/fa'
import Highlight from '../components/layouts/Highlight'
import SquiglySection from '../components/layouts/SquiglySection'
import BgImages from '../components/svgs/BgImages'

const collaborations = ['polarnopyret', 'icaniwill', 'bubbleroom', 'babyland']
const whatWeDoContent = [
  {
    icon: <HiOutlinePencilAlt className="w-full h-full" />,
    title: 'Content Marketing',
    body:
      'Experts in guiding customers from discovery to purchase from organic and paid channels',
  },
  {
    icon: <HiOutlineSearch className="w-full h-full" />,
    title: 'SEO',
    body:
      'We ammount 6 years of experience with industry leading results in getting found on Google',
  },
  {
    icon: <HiPresentationChartLine className="w-full h-full" />,
    title: 'Traffic Growth',
    body:
      'We have helped businesses increase their online traffic and revenue by creating engaging content',
  },
]
const testimonials = [
  {
    body:
      'Since we are selling high quality supplements and are a premium-brand on the market, it is critical that an influencer that works with our brand fully understands our products and from that takes the content to another level. This is something that Sofia at Marsian online group AB does with excellence. We appreciate her creativity and drive to always over perform and create value for us. We highly recommend to work with Marsian Online Group.',
    author: 'Daniel Berglund',
    company: 'Greatlife',
    position: 'Co-Founder & Partner',
  },
  {
    body:
      'Sofia, from Marsian Online Group, is an incredibly inspiring woman who has been an ICANIWILL ambassador for 5 years. She is truly part of the ICIW family. The fact that she is good at highlighting our products is evident in the way that she creates her content. She is creative and always delivers good results that exceed our expectations.',
    author: 'Tess Widerberg',
    company: 'ICANIWILL',
    position: 'Influencer Marketing Coordinator',
  },
  {
    body:
      "Marsian Online Group is a valued partner with Adtraction. The company has been a part of our network for many years and it's so interesting to see her development and drive with their projects. Sofia contribiutes with her own ideas and suggestions - which gives great results in sales. In addition, we can always trust that she creates high quality and well-crafted content for our advertisers. I can highly recommend working with Sofia and her sites.",
    author: 'Frida Wiman',
    company: 'Adtraction',
    position: 'Influencer Manager',
  },
]

export default function Home() {
  const [testimonialCardNumber, setTestimonialCardNumber] = useState(0)

  const handleClickToLeft = () => {
    const length = testimonials.length
    const nextCardNumber = (testimonialCardNumber + (length - 1)) % length
    setTestimonialCardNumber(nextCardNumber)
  }

  const handleClickToRight = () => {
    const length = testimonials.length
    const nextCardNumber = (testimonialCardNumber + 1) % length
    setTestimonialCardNumber(nextCardNumber)
  }
  return (
    <Layout>
      <div className="relative z-10 justify-center py-28 lg:pb-0 flex-col items-center text-gray-700 bg-white section-full gap-8 clip-path-about">
        <div className="absolute z-0 flex items-center justify-center w-4/5 opacity-100 -top-2/3 md:-top-0 md:opacity-80 ">
          <BgImages fillColor="#EEF2FF" />
        </div>
        <div className="absolute w-1/3 bg-indigo-200 rounded-full left-1/2 -translate-y-5 -translate-x-20 h-96 transform opacity-90 filter blur-3xl mix-blend-multiply"></div>
        <div className="absolute w-1/3 bg-yellow-300 rounded-full opacity-50 right-1/2 translate-y-5 translate-x-20 h-96 transform filter blur-3xl mix-blend-multiply"></div>
        <div className="relative w-4/5 text-center ">
          <h1 className="font-sans text-3xl font-black tracking-wider uppercase md:text-5xl lg:text-6xl ">
            Content is
            <span className="relative ml-4">
              King
              <i className="top-1/2 transform mt-0.5 -translate-y-1/2 absolute w-fuller h-2 bg-yellow-500 shadow-lg rounded-full left-1/2 -translate-x-1/2"></i>
            </span>
            <span className="relative z-0 ml-4 md:ml-8 font-outline">
              Queen
            </span>
          </h1>
        </div>
        <p className="relative w-full px-6 text-center font-semi md:w-1/2 lg:text-lg">
          Some text here to highlight all the things we do and all the services
          we offer. Talk about yourself and stuff.
        </p>
        <Link href="/become-a-partner">
          <a>
            <AppButton
              btnType="btn-primary"
              text="Become a Partner"
              className="relative px-12 py-4 lg:text-xl"
            />
          </a>
        </Link>
      </div>
      <div className="relative px-6 pt-12 pb-24 -mt-48 bg-indigo-50">
        <div className="relative z-20 flex items-center justify-between w-full h-24 max-w-6xl px-4 mx-auto mt-24 shadow-lg md:mt-12 md:px-12 rod-glass gap-2 lg:gap-8 lg:w-4/5 md:h-36 rounded-xl">
          {collaborations.map((companyName) => {
            return (
              <div className="flex items-center justify-center flex-1">
                <Image
                  priority={true}
                  src={`/${companyName}-light.png `}
                  alt="collaborations"
                  width={200}
                  height={100}
                  objectFit="contain"
                />
              </div>
            )
          })}
        </div>
        <div className="flex flex-col mt-16 text-center text-gray-700 md:mt-24 gap-4">
          <h2 className="w-1/2 w-full mx-auto font-sans text-4xl font-bold tracking-wider capitalize lg:text-4xl ">
            We Create
          </h2>
          <p className="flex items-center justify-center text-3xl font-thin gap-2 ">
            Your Sales <Highlight classes="mt-0.5">Increase</Highlight>
          </p>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center mt-12 md:flex-row md:mt-48 gap-8">
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
        <div className="relative z-10 flex flex-col justify-center md:flex-row md:gap-16">
          <div className="w-40 h-40 mx-auto overflow-hidden bg-red-300 rounded-full md:mx-0 md:w-60 md:h-60">
            <Image
              height={300}
              width={300}
              src="/sofia-ceo.jpeg"
              objectFit="contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full w-80 lg:w-auto">
            <div className="flex flex-col items-center mt-8 text-center gap-4 lg:text-left lg:items-start lg:mt-0">
              <h2 className="text-3xl text-indigo-50">Sofia Marklund</h2>
              <p className="text-indigo-300">
                Founder, CEO, Creator and SEO specialist
              </p>
              <div className="flex gap-4">
                <div className="p-2 text-indigo-300 bg-indigo-800 rounded-full shadow-md hover:shadow-xl">
                  <Link href="">
                    <FaFacebookF />
                  </Link>
                </div>
                <div className="p-2 text-indigo-300 bg-indigo-800 rounded-full shadow-md hover:shadow-xl">
                  <FaLinkedinIn />
                </div>
                <div className="p-2 text-indigo-300 bg-indigo-800 rounded-full shadow-md hover:shadow-xl">
                  <FaEnvelope />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SquiglySection>
      <div className="flex flex-col items-center px-6 md:px-0 py-24">
        <p className="text-lg text-indigo-800">Testimonials</p>
        <h2 className="mt-2 text-4xl text-center font-bold tracking-wider capitalize">
          What people say about us
        </h2>
        {testimonials && (
          <div className="relative p-12 px-8 mt-8 md:mt-16 shadow-lg bg-gray-50 rounded-xl w-full md:w-104">
            <blockquote className="relative italic text-gray-600 ">
              <span className="absolute w-12 h-12 -top-8 -left-8">
                <FaQuoteLeft className="text-4xl text-indigo-100 transform rotate-37" />
              </span>
              <span className="absolute w-12 h-12 -bottom-8 -right-8">
                <FaQuoteRight className="text-4xl text-indigo-100 transform rotate-37 " />
              </span>
              {testimonials[testimonialCardNumber].body}
            </blockquote>
            <h3 className="mt-12 text-xl font-bold">
              {testimonials[testimonialCardNumber].author}
            </h3>
            <p className="mt-2 text-indigo-800 font-semibold">
              {testimonials[testimonialCardNumber].company}
            </p>
            <p className="mt-2 text-gray-400">
              {testimonials[testimonialCardNumber].position}
            </p>
            <div className="flex mt-8 items-center justify-end gap-2 transition opacity-100 text-4xl text-gray-600">
              <HiArrowNarrowLeft
                className="cursor-pointer"
                onClick={handleClickToLeft}
              />
              <HiArrowNarrowRight
                className="cursor-pointer"
                onClick={handleClickToRight}
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
