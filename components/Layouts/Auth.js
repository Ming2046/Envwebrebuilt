import React from "react";

// components

//import Navbar from "components/Navbars/AuthNavbar.js";
import MainNavigation from "./Navbar.js"
//import FooterSmall from "components/Layouts/FooterSmall.js";
import Footer from "./Footer.js";

export default function Auth({ children }) {
  return (
    <>
      <MainNavigation transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('/images/register_bg_2.png')",
            }}
          ></div>
          {children}
          <Footer absolute />
        </section>
      </main>
    </>
  );
}
