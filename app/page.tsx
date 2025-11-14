import DentalSection from "@/Components/DentalSection";
import DiagnosticsSection from "@/Components/DiagnosticsSection";
import Footer from "@/Components/Footer";

import NavbarAmazonClone from "@/Components/Navbar";

import New1 from "@/Components/New1";
import New4 from "@/Components/New4";
import New5 from "@/Components/New5";
import New6 from "@/Components/New6";

import New8 from "@/Components/New8";

export default function Home() {
  const heroBackground = {
    backgroundImage: [
      // subtle horizontal sweep: left cream -> warm yellow center -> pink right
      "linear-gradient(90deg, #fff 0%, #fff7ec 8%, #fff2c9 35%, #ffe299 52%, #ffd7b8 66%, #ffeef4 86%, #fff 100%)",
      // warm radial glow near bottom-center to mimic the yellow pick glow in the screenshot
      "radial-gradient(circle at 50% 78%, rgba(255,196,71,0.22) 0%, rgba(255,196,71,0.14) 10%, rgba(255,196,71,0.06) 22%, transparent 40%)",
      // faint pink wash on the right edge for the soft pink vertical band
      "linear-gradient(90deg, transparent 70%, rgba(255,222,231,0.65) 100%)",
      // subtle vignette to tie edges together
      "radial-gradient(ellipse at 10% 50%, rgba(0,0,0,0.02) 0%, transparent 20%), radial-gradient(ellipse at 90% 50%, rgba(0,0,0,0.02) 0%, transparent 20%)",
    ].join(", "),
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  } as React.CSSProperties;
  return (
    <div className="w-full h-full  relative " style={heroBackground}>
      <NavbarAmazonClone />

      <New6 />

      <div className="bg-white overflow-hidden border-t-4 border-[#FDC89B] rounded-t-[70px] ">
        <New1 />

        {/* <New3/> */}

        <DentalSection />

        <div className=" hidden w-full lg:flex  justify-center items-center p-15 gap-6 overflow-hidden">
          <img
            className="w-full lg:w-[33%]  h-[40vh] rounded-2xl"
            src="./banner3.jpg"
            alt=""
          />
          <img
            className="w-full lg:w-[33%] h-[40vh] rounded-2xl"
            src="./banner2.jpg"
            alt=""
          />
          <img
            className="w-full lg:w-[33%] h-[40vh]  rounded-2xl"
            src="./banner1.jpg"
            alt=""
          />
        </div>
        <New8 />

        <DiagnosticsSection />
        {/* <ConsumablesSection />
        <MedicalequipmentsSection />
        <OphthalmologySection />
        <NephrologySection />
        <PhysiotherapySection /> */}
        {/* <RefurbishedSection/>
<ObgynivfSection/>
<PharmaceuticalSection/>
<VaccinesSection/> */}

        <New4 />
        <New5 />
      </div>
      <Footer />
    </div>
  );
}
