import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import ConnectButton from "./ConnectButton"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState("black")
  const [textColor, setTextColor] = useState("#ffffff")

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#000205")
        setTextColor("#ffffff")
      } else {
        setColor("black")
        setTextColor("#ffffff")
      }
    }
    window.addEventListener("scroll", changeColor)

    return () => {
      window.removeEventListener("scroll", changeColor)
    }
  }, [])

  return (
    <div style={{ backgroundColor: `${color}` }} className="sticky left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <Image
            src={"/assets/cblogo.png"}
            alt="CBR Logo"
            width={55}
            height={50}
            className="hover:animate-pulse duration-200"
          />
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4 hover:text-blue-600 ease-in duration-100 hover:underline underline-offset-8 decoration-blue-600">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 hover:text-blue-600 ease-in duration-100 hover:underline underline-offset-8 decoration-blue-600">
            <Link href="/clients">Clients</Link>
          </li>
          <li className="p-4 hover:text-blue-600 ease-in duration-100 hover:underline underline-offset-8 decoration-blue-600">
            <Link href="/candidates">Candidates</Link>
          </li>
          <li className="p-4 hover:text-blue-600 ease-in duration-100 hover:underline underline-offset-8 decoration-blue-600 hidden md:flex">
            <Link href="/about">About</Link>
          </li>
          {/* <li className="p-4 hover:text-blue-600 ease-in duration-100 hover:underline underline-offset-8 decoration-blue-600">
            <Link href="/partners">Partners</Link>
          </li> */}
          {/* <li className="p-4 hover:text-blue-600 ease-in duration-100 hover:underline underline-offset-8 decoration-blue-600 hidden md:flex">
            <Link href="/wenjob?">Wen Job?</Link>
          </li> */}
          <li className="p-4 hover:text-blue-600 ease-in duration-100 hover:underline underline-offset-8 decoration-blue-600 hidden lg:flex">
            <Link href="/contact">Contact</Link>
          </li>
          <Image
            className="ml-5 m-auto hover:animate-bounce"
            src={"/assets/search-white.png"}
            alt="Search button"
            width={20}
            height={25}
          />
        </ul>

        {/* Mobile Button */}
        <div className="block sm:hidden z-10" onClick={handleNav} style={{ color: `${textColor}` }}>
          {nav ? (
            <AiOutlineClose size={25} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={25} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden absolute top-0 ${
            nav ? "left-0" : "left-full"
          } right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black border-gray-400 text-center ease-in duration-300`}
        >
          <ul>
            <Image className="mx-auto pb-16" src={"/assets/cblogo.png"} alt="CBR Logo" width={75} height={50} />
            <li className="p-4 text-2xl hover:text-blue-500">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-2xl hover:text-blue-500">
              <Link href="/clients">Clients</Link>
            </li>
            <li className="p-4 text-2xl hover:text-blue-500">
              <Link href="/candidates">Candidates</Link>
            </li>
            <li className="p-4 text-2xl hover:text-blue-500">
              <Link href="/partners">Partners</Link>
            </li>
            <li className="p-4 text-2xl hover:text-blue-500">
              <Link href="/about">About</Link>
            </li>
            <li className="p-4 text-2xl hover:text-blue-500">
              <Link href="/wenjob?">Wen Job?</Link>
            </li>
            <li className="p-4 text-2xl hover:text-blue-500">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="p-4 text-2xl mb-6 hover:text-blue-500">
              <Link href="/blog">Blog</Link>
            </li>
            <div className="flex mx-auto justify-center mt-20 space-x-5">
              <Link href="https://t.me/CBR_Jobs" target="_blank">
                <Image
                  className="hover:scale-110 ease-in-out duration-200"
                  src={"/assets/telegram-white.png"}
                  alt="Telegram logo"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="https://twitter.com/cb_recruitment_" target="_blank">
                <Image
                  className="hover:scale-110 ease-in-out duration-200"
                  src={"/assets/twitter-white.png"}
                  alt="Twitter logo"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="https://www.linkedin.com/company/80659134" target="_blank">
                <Image
                  className="hover:scale-110 ease-in-out duration-200"
                  src={"/assets/linkedin-white.png"}
                  alt="LinkedIn logo"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="mailto:info@cbrecruitment.com" target="_blank">
                <Image
                  className="hover:scale-110 ease-in-out duration-200"
                  src={"/assets/email-white.png"}
                  alt="Email logo"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
