import React from "react";
import Header from "../components/Header";
import { Outlet, useNavigation } from "react-router";
import NewsMarque from "../components/NewsMarque";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homeLayout/LeftAside";
import RightAside from "../components/homeLayout/RightAside";
import Loading from "../pages/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <div className="mt-12">
      <header className="">
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <NewsMarque></NewsMarque>
        </section>
      </header>
      <nav className="w-11/12 mx-auto mb-9 sticky top-0 z-50 bg-white/60 backdrop-blur-md h-fit py-2">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto my-3 grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* On mobile: full width. On desktop: 3 columns */}
        <aside className="left_nav col-span-1 md:col-span-3 md:sticky top-20 h-fit">
          <LeftAside></LeftAside>
        </aside>

        {/* On mobile: full width. On desktop: 6 columns */}
        <section className="main col-span-1 md:col-span-6">
          {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
        </section>

        {/* On mobile: full width. On desktop: 3 columns */}
        <aside className="right_nav col-span-1 md:col-span-3 md:sticky top-20 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
