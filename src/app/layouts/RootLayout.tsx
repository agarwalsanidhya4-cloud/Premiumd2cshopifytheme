import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { StickyBuyButton } from "../components/StickyBuyButton";

export function RootLayout() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyBuyButton />
    </div>
  );
}
