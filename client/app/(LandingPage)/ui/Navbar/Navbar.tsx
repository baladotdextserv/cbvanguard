import Logo from "../../Layout/shared/logo";
import Mode from "../../Layout/shared/mode";
import CustomizerPanel from "../shared/customizer/CustomizerPanel";
import NavLink from "./NavLink";
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
    <>
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
            <Button variant='contained' size='small' color='primary'>
              Login
            </Button>
          </a>
          <Mode />
          <Tooltip title='Settings'>
            <Fab
              aria-label='settings'
              // sx={{ position: "fixed", right: "25px", bottom: "15px" }}
              size='small'
              onClick={() => setShowDrawer(true)}
            >
              <IconSettings stroke={1.5} />
            </Fab>
          </Tooltip>
        </Stack>
      </nav>
      <CustomizerPanel showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </>
  );
};

export default Navbar;
