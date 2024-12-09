import NavLink from "./NavLink";
import Logo from "@/public/logo.svg";
import { setMode, setTheme } from "@/store/customizer/customizerSlice";
import { useDispatch, useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import { Box, Button } from "@mui/material";
import Image from "next/image";

const Navbar = () => {
  const dispathch = useDispatch();
  const activeTheme = useSelector((state: AppState) => state.customizer.activeTheme);
  return (
    <Box>
      <nav className='flex justify-around sticky top-0 items-center py-4 px-6 shadow'>
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
        <Button
          variant='contained'
          onClick={() => {
            dispathch(setMode("dark"));
          }}
        >
          Change Dark
        </Button>

        <Button
          variant='contained'
          onClick={() => {
            dispathch(setMode("light"));
          }}
        >
          Change Light
        </Button>

        <Button
          variant='contained'
          onClick={() => {
            dispathch(setTheme("GREEN_THEME"));
            console.log(activeTheme);
          }}
        >
          Change Theme
        </Button>
      </nav>
    </Box>
  );
};

export default Navbar;
