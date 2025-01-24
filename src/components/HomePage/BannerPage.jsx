import Image from "next/image";
import Link from "next/link";
import { ImPower } from "react-icons/im";
export default function BannerPage() {
  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/bannerBg.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex justify-center items-center h-full text-center text-white px-4 ">
        <div className="space-y-6 mt-40 mb-4">
          <h1 className="text-2xl sm:text-5xl md:text-5xl font-bold leading-tight">
            Unlock Your Creativity
          </h1>
          <h2 className="text-2xl sm:text-5xl md:text-5xl font-bold leading-tight">
            with AI-Powered Assistance
          </h2>
          <p className="text-lg sm:text-[15px] md:text-[15px] max-w-lg mx-auto">
            Transform your writing with our AI assistant, designed to create
            engaging copy and improve your workflow
          </p>
          <div className="gap-4 flex justify-center items-center">
            <button className="bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 text-white px-6 py-3 rounded-lg text-lg transition duration-300 hover:bg-gradient-to-br hover:from-blue-400 hover:to-purple-700">
              Get Started
            </button>
            <Link
              href="#_"
              className="relative inline-flex items-center justify-center  px-6 py-[15px] overflow-hidden font-bold text-white rounded-md shadow-2xl group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>

              <span className="relative text-[14px] sm:text-base md:text-md">
                Lern more..
              </span>
            </Link>
          </div>
          <div className="flex gap-2 w-[80%] mx-auto ">
            <div className="bg-[#070708] text-start p-5 rounded-xl space-y-2">
              <button className="border-solid border rounded-lg p-3 ">
                <ImPower />
              </button>
              <h1 className="text-xl font-bold">Boost Efficiency</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </div>
            <div className="bg-[#070708] text-start p-5 rounded-xl space-y-3">
              <button className="border-solid border rounded-lg p-3 ">
                <ImPower />
              </button>
              <h1 className="text-xl font-bold">Smart Optimization</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </div>
            <div className="bg-[#070708] text-start p-5 rounded-xl space-y-3">
              <button className="border-solid border rounded-lg p-3 ">
                <ImPower />
              </button>
              <h1 className="text-xl font-bold">Enhance Creativity</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
