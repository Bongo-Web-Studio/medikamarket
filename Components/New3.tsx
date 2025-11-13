
import { physiotherapyData, dentalData } from "../app/data";
import CategoryCarousel from "./New2";


export default function New3() {
  return (
    <div>
      <CategoryCarousel
        title="Popular Physiotherapy"
        highlight="• Equipment"
        categories={physiotherapyData}
      />

      <CategoryCarousel
        title="Popular Dental"
        highlight="• Tests"
        categories={dentalData}
      />
    </div>
  );
}
