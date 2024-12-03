import NavLink from "./NavLink";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <nav className='flex justify-between   sticky top-0 items-center py-4 px-6 bg-white shadow'>
      <div className='flex gap-6 items-center'>
        <div>
          <h1 className='font-sans text-2xl'>CB Vanguard</h1>
        </div>
        <ul className='flex space-x-4'>
          <li>
            <NavLink href='/'>Home</NavLink>
          </li>
          <li>
            <NavLink href='/about'>About</NavLink>
          </li>
          <li>
            <NavLink href='/contact'>Contact</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Button variant='contained'>Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;
