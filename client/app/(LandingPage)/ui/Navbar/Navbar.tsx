import Logo from "../../Layout/shared/logo";
import Mode from "../../Layout/shared/mode";
import NavLink from "./NavLink";
import { Button, Stack } from "@mui/material";

const Navbar = () => {
  return (
    <nav className='flex justify-around sticky top-0 items-center py-4 px-6 shadow'>
      <Stack direction='row' alignItems='center' spacing={6}>
        <div>
          <Logo />
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
            <a href='/search-tariff'>Search Tariff</a>
          </li>
        </ul>
      </Stack>
      <Stack direction='row' spacing={2}>
        <a href='/auth/login'>
          <Button variant='contained' size='small'>
            Login
          </Button>
        </a>
        <Mode />
      </Stack>
    </nav>
  );
};

export default Navbar;
