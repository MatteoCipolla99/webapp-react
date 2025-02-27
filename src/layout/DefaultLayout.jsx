import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="py-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
