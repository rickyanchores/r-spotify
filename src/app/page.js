import Image from "next/image";
import Header from "./Components/Header/Header";
import MainContent from "./Components/MainContent/MainContent";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <Header />
      <MainContent />
      <Sidebar />
      <Footer />
    </div>
  );
}
