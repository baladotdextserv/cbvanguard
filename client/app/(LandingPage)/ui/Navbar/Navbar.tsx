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
