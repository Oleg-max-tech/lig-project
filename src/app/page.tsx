import Image from "next/image";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import { AboutSection } from "@/components/About";

export default function Home() {
  return (
    <>
      {/* <Header />
      <Footer /> ; */}
      <AboutSection />
    </>
  );
}
