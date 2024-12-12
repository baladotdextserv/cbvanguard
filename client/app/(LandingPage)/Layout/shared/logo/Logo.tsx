import DarkLogo from "@/public/images/Logo/Sangavy_LOGO_FINAL.png";
import LightLogo from "@/public/images/Logo/Sangavy_LOGO_FINAL.png";
import { useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  const customizer = useSelector((state: AppState) => state.customizer);
  if (customizer.activeMode === "light") {
    return (
      <Link href='/'>
        <Image src={LightLogo} width={200} alt='Logo' />
      </Link>
    );
  }
  return (
    <Link href='/'>
      <Image src={DarkLogo} width={200} alt='Logo' />
    </Link>
  );
};

export default Logo;
