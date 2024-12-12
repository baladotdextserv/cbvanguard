import { sfProMedium, sfProRegular } from "@/utils/fonts";
import { Link } from "react-scroll";

export default function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={700}
      offset={-100}
      className={`text-sm leading-8 cursor-pointer tracking-wide ${sfProMedium.className}`}
    >
      {children}
    </Link>
  );
}
