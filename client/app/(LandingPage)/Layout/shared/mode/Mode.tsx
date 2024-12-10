import DarkMode from "@/public/images/dark-mode.svg";
import LightMode from "@/public/images/light-mode.svg";
import { setMode } from "@/store/customizer/customizerSlice";
import { useDispatch, useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import { Button } from "@mui/material";
import Image from "next/image";

const Mode = () => {
  const dispatch = useDispatch();
  const customizer = useSelector((state: AppState) => state.customizer);

  return customizer.activeMode === "dark" ? (
    <Button
      variant='outlined'
      onClick={() => {
        dispatch(setMode("light"));
      }}
    >
      <Image src={LightMode} width={18} alt='light mode' />
    </Button>
  ) : (
    <Button
      variant='outlined'
      onClick={() => {
        dispatch(setMode("dark"));
      }}
    >
      <Image src={DarkMode} width={18} alt='dark mode' />
    </Button>
  );
};

export default Mode;
