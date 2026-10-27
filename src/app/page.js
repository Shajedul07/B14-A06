import AllCards from "@/Components/AllCards";
import Banner from "@/Components/Banner";
import { CardDetailsPage } from "./cards/[id]/page";

export default function Home() {
  return (
    <div>
      <Banner/>
      <AllCards/>
    </div>
  );
}
