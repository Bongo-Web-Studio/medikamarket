import ConsumablesSection from "@/Components/ConsumablesSection";
import DentalSection from "@/Components/DentalSection";
import DiagnosticsSection from "@/Components/DiagnosticsSection";
import Footer from "@/Components/Footer";
import Hero1 from "@/Components/Hero1";
import MedicalequipmentsSection from "@/Components/MedicalequipmentsSection";
import NavbarAmazonClone from "@/Components/Navbar";
import NephrologySection from "@/Components/NephrologySection";
import New1 from "@/Components/New1";
import New4 from "@/Components/New4";
import New5 from "@/Components/New5";
import ObgynivfSection from "@/Components/ObgynivfSection";
import OphthalmologySection from "@/Components/OphthalmologySection";
import PharmaceuticalSection from "@/Components/PharmaceuticalSection";
import PhysiotherapySection from "@/Components/PhysiotherapySection";
import RefurbishedSection from "@/Components/RefurbishedSection";
import VaccinesSection from "@/Components/VaccinesSection";



export default function Home() {
  return (
<div className="w-full h-full  relative bg-[#F5F5F7]">

     <NavbarAmazonClone />
  
<div className="mt-5">
       <Hero1 />
</div>
<New1/>



{/* <New3/> */}





<DentalSection/>
<DiagnosticsSection/>
<ConsumablesSection/>
<MedicalequipmentsSection/>
<OphthalmologySection/>
<NephrologySection/>
<PhysiotherapySection/>
{/* <RefurbishedSection/>
<ObgynivfSection/>
<PharmaceuticalSection/>
<VaccinesSection/> */}

<New4/>
<New5/>
<Footer/>

</div>
  );
}
