import Services from "../components/services";
import Herobanner from "../components/Herobanner";
import Header from "@/components/Header";
import ReachSection from '../components/ReachSection';

export default function Home() {
  return (
    <main>
      <Header />
      <Herobanner />
    <Services />
   <ReachSection />
      
    </main>
  );
}
