
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SliderContent from "@/components/layout/SliderContent";
import Services from "@/components/layout/Services";
import Slider from "@/components/module/Slider";
import Followme from "@/components/layout/Followme";
export default function Home() {
  return (
    <main >
      <Header/>
      <SliderContent/>
      <Services/>
      <Slider/>
      <Followme/>
      <Footer />
    </main>
  );
}
