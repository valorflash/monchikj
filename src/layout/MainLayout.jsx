import Navbar from "../Components/temp/NavbarSection";
import Footer from "../Components/footer/FooterSection";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet /> {/* This is where pages render */}
      </main>

      <Footer />
      
    </>
  );
}