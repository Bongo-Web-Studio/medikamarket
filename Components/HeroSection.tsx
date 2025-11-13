import { Upload, CheckCircle, Package, Clipboard } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white rounded-[5px] p-6 sm:p-8 lg:p-10 min-h-screen overflow-hidden">
      {/* Big Title */}
      <h1
        style={{ fontFamily: "DynaPuff" }}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-[150px] xl:text-[200px] font-extrabold text-[#193200] flex justify-center items-center text-center leading-tight"
      >
        DR. PATHO LABS
      </h1>

      {/* Main Content */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center px-2 sm:px-6 md:px-10">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          {/* Startup-friendly description */}
          <div className="space-y-4">
            <h1 className="bg-white px-4 py-2 rounded-full max-w-full sm:max-w-[9.5cm] text-center font-bold text-sm sm:text-base md:text-lg text-[#193200]">
              Lab Tests At The Comfort Of Your Home
            </h1>
            <h1 className="ml-0 sm:ml-2 max-w-full sm:max-w-[10cm] text-sm sm:text-base md:text-lg text-[#193200]">
              Dr. patho labs & diagnostic offers home blood tests, full-body
              health checkups, and NABL accredited lab services.
            </h1>
          </div>

          {/* Steps with Icons */}
          <div className="flex flex-col space-y-4 pt-10 sm:pt-14 lg:pt-20">
            <div className="flex items-start sm:items-center space-x-3">
              <Package className="w-6 h-6 text-[#193200] shrink-0" />
              <span className="text-sm sm:text-base font-semibold text-[#193200]">
                1. Book Your Appointment Online Easily
              </span>
            </div>
            <div className="flex items-start sm:items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-[#193200] shrink-0" />
              <span className="text-sm sm:text-base font-semibold text-[#193200]">
                2. Sample Collection From Your Home by Our Expert Technicians
              </span>
            </div>
            <div className="flex items-start sm:items-center space-x-3">
              <Clipboard className="w-6 h-6 text-[#193200] shrink-0" />
              <span className="text-sm sm:text-base font-semibold text-[#193200]">
                3. Get Your Reports Through Email & Phone Within 30 Minutes
              </span>
            </div>
          </div>
        </div>

        {/* Right Section with Upload Card */}
        <div className="flex flex-col items-center justify-center mt-10 lg:mt-0 w-full lg:w-auto">
          <h1
            style={{ fontFamily: "DynaPuff" }}
            className="w-full sm:w-[7cm] p-4 sm:p-5 bg-white mb-6 sm:mb-10 text-lg sm:text-2xl md:text-3xl uppercase text-[#193200] rounded-3xl sm:rounded-3xl text-center"
          >
            30 min at your door step
          </h1>
          <div className="bg-white rounded-3xl border-2 border-dashed border-gray-300 p-4 sm:p-6 shadow-lg w-full max-w-xs sm:max-w-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-semibold text-[#193200]">
                Upload Lab Request
              </h3>
              <Clipboard className="w-6 sm:w-8 h-6 sm:h-8 text-[#193200]" />
            </div>

            {/* Button */}
            <button className="mt-4 w-full bg-[#193200] text-white font-semibold px-3 sm:px-4 py-2 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-800 transition text-sm sm:text-base">
              <Upload className="w-4 sm:w-5 h-4 sm:h-5" />
              <span>Book Test Online</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lab Technician Image */}
      <div className="absolute bottom-[-3rem] sm:bottom-[-4rem] lg:bottom-[-5rem] left-1/2 transform -translate-x-1/2 lg:left-[430px] lg:translate-x-0 flex justify-center items-center overflow-hidden">
        <img
          src="./images/takingblood.png"
          alt="Lab Technician"
          className="w-[280px] sm:w-[400px] md:w-[600px] lg:w-[900px] object-contain"
        />
      </div>
    </section>
  );
}
