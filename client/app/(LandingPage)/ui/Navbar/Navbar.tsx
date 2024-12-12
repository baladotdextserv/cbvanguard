import Logo from "../../Layout/shared/logo";
import Mode from "../../Layout/shared/mode";
import CustomizerPanel from "../shared/customizer/CustomizerPanel";
import NavLink from "./NavLink";
import LinkButton from "@/components/custom/LinkButton";
import { useDispatch, useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import { Button, Fab, Stack, Tooltip } from "@mui/material";
import { IconSettings } from "@tabler/icons-react";
import { useState } from "react";

const Navbar = () => {
  const dispatch = useDispatch();

  const [showDrawer, setShowDrawer] = useState(false);
  const customizer = useSelector((state: AppState) => state.customizer);

  return (
    <header className='p-2 sticky top-0 items-center bg-white border-b-gray-300 border-b'>
      <nav className='flex justify-between items-center'>
        <Stack direction='row' alignItems='center' spacing={6}>
          <div>
            <Logo />
          </div>
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
        <Stack direction='row' alignItems={"center"} spacing={2}>
          <LinkButton text='Sign In' />
          <a href='/auth/login'>
            <Button variant='contained' size='small' color='primary'>
              New User?
            </Button>
          </a>
          {/* <Mode />
          <Tooltip title='Settings'>
            <Fab
              aria-label='settings'
              // sx={{ position: "fixed", right: "25px", bottom: "15px" }}
              size='small'
              onClick={() => setShowDrawer(true)}
            >
              <IconSettings stroke={1.5} />
            </Fab>
          </Tooltip> */}
        </Stack>
      </nav>
      {/* <CustomizerPanel showDrawer={showDrawer} setShowDrawer={setShowDrawer} /> */}
    </header>
  );
};

export default Navbar;
