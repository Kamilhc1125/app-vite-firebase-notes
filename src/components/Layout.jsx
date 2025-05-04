import { Header, Footer } from "@/components"; 
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex justify-center p-10 w-full mt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
