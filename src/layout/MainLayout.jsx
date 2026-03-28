import Navbar from "../Components/Navbar/NavbarSection";
import Footer from "../Components/Footer/FooterSection";
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