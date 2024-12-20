import { Typography } from "@mui/material";
import { Link } from "react-scroll";

export default function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Typography component='p' color='primary'>
      <Link
        to={to}
        smooth={true}
        duration={700}
        offset={-100}
        className={`text-[15px] cursor-pointer font-medium tracking-wide font-sangavyRegular`}
        href='www.example.com'
      >
        {children}
      </Link>
    </Typography>
  );
}
