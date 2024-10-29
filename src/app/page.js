import Image from "next/image";
import Header from "./Components/Header/Header";
import MainContent from "./Components/MainContent/MainContent";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";


const content = [
  {
    userImage: "https://rickyanchores.netlify.app/static/media/RikoAI.42d1aba710ba4d61e093.jpeg"
  },
  {
    userImage: "https://rickyanchores.netlify.app/static/media/RikoAI.42d1aba710ba4d61e093.jpeg"
  }
]

export default function Home() {
  return (
    <div className="grid items-center justify-items-center w-screen min-h-screen">
      <Header />
      <main className="grid w-full grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-2 font-mono">
        <MainContent userName={"Riko Ancho"} userImage={content[0].userImage}/>
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}
