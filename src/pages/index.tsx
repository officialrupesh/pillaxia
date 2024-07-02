
import CardSection from "@/components/CardSection";
import Footer from "@/components/Footer";
import GlobalStyled from "../../globalStyled";
import Attributes from "@/components/Attributes";
// import ReviewSection from "@/components/ReviewSection";
import ContactSection from "@/components/ContactSection";
import AiDrivenSection from "@/components/AiDrivenSection";
import HeroSection from "@/components/HeroSection";
import ChoosePillaxia from "@/components/ChoosePillaxia";

export default function Home() {
  return (
    <>
    <HeroSection />
    <Attributes />
    <AiDrivenSection />
    <ChoosePillaxia />
    {/* <ReviewSection /> */}
    <ContactSection />
      <Footer />
    </>
  );
}
