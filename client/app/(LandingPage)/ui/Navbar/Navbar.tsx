import NavLink from "./NavLink";
import Logo from "@/public/logo.svg";
import { Button } from "@mui/material";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className='flex justify-around sticky top-0 items-center py-4 px-6 bg-white shadow'>
      <div className='flex gap-6 items-center'>
        <div>
          <h1 className='text-2xl'>
            <Image src={Logo} alt='Logo' />
          </h1>
        </div>
        <ul className='flex space-x-4'>
          <li>
            <NavLink to='hero'>Home</NavLink>
          </li>
          <li>
            <NavLink to='about'>About</NavLink>
          </li>
          <li>
            <NavLink to='contact'>Contact</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Search Tariff</NavLink>
          </li>
        </ul>
      </div>
      <a href='/auth/login'>
        <Button variant='contained'>Login</Button>
      </a>
    </nav>
  );
};

export default Navbar;
