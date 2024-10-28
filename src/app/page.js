import Image from "next/image";
import Header from "./Components/Header/Header";
import MainContent from "./Components/MainContent/MainContent";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";


export default function Home() {
  return (
    <div className="grid items-center justify-items-center bg-orange-600 w-screen min-h-screen p-12">
      <Header />
      <main className="grid w-full grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-4">
        <MainContent userName={"Riko Ancho"} userImage={"Empty"}/>
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}
