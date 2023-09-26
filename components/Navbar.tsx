"use client"
import { useState , useEffect} from "react"
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/favicon.ico";

import {CustomButton} from "@/components";

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);


  return(
  <header className={`w-full fixed t-0 z-10 ${scrolling  ? "bg-white" : "bg-transparent"}`}>
    <nav className={`max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4`}>
      <Link href='/' className='flex justify-center items-center'>
        <div className="flex gap-x-2 items-center">
            <Image src={Logo} alt='logo' width={50} height={18} className='object-contain' />
            <span className="font-extrabold text-2xl">CarZone</span>
        </div>
      </Link>

      <CustomButton
        title='Sign in'
        btnType = "button"
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
      />
    </nav>
  </header>
)};

export default NavBar;