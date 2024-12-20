import Logo from "../../Layout/shared/logo";
import NavLink from "./NavLink";
import LinkButton from "@/components/custom/LinkButton";
import { Button, Stack } from "@mui/material";

const Navbar = () => {
  return (
    <header className='p-4  bg-white border-b-gray-300 border-b z-[1]'>
      <nav className='flex justify-between items-center flex-wrap'>
        <Stack direction='row' alignItems='center' spacing={2}>
          <Logo />
          <ul className='flex space-x-4 gap-2'>
            <li>
              <NavLink to='hero'>Products</NavLink>
            </li>
            <li>
              <NavLink to='about'>Enterprise</NavLink>
            </li>
            <li>
              <NavLink to='contact'>Customers</NavLink>
            </li>
            <li>
              <NavLink to='contact'>Company</NavLink>
            </li>
          </ul>
        </Stack>
        <Stack direction='row' alignItems={"center"} spacing={2} className='mr-10'>
          <LinkButton text='Sign In' className='font-sangavyRegular' />
          <Button
            variant='contained'
            size='small'
            href='/auth/login'
            color='primary'
            sx={{ borderRadius: "0", paddingX: "10px" }}
          >
            New User?
          </Button>
        </Stack>
      </nav>
    </header>
  );
};

export default Navbar;
