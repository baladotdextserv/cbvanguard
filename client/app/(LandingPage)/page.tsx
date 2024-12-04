"use client";

import About from "./ui/About";
import Contact from "./ui/Contact";
import Hero from "./ui/Hero";
import Navbar from "./ui/Navbar";

// import { useSelector } from "@/store/hooks";

export default function Page() {
  // const { isAuthenticated } = useSelector(state => state.auth);
  // if (isAuthenticated) {
  //   return null;
  // }
  return (
    <>
      <Navbar />
      <Hero />
      <h1 className='text-9xl font-bold'>Example</h1>
      <h1 className='text-9xl font-bold'>Example</h1>
      <h1 className='text-9xl font-bold'>Example</h1>
      <h1 className='text-9xl font-bold'>Example</h1>
      <h1 className='text-9xl font-bold'>Example</h1>
      <About />
      <h1 className='text-9xl font-bold'>Example</h1>
      <h1 className='text-9xl font-bold'>Example</h1>
      <h1 className='text-9xl font-bold'>Example</h1>
      <Contact />
      <h1 className='text-9xl font-bold'>Example</h1>
      <h1 className='text-9xl font-bold'>Example</h1>
      <h1 className='text-9xl font-bold'>Example</h1>
      <h1 className='text-9xl font-bold'>Example</h1>
    </>
  );
}
