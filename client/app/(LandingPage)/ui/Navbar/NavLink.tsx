import { Link } from "react-scroll";

export default function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={700}
      offset={-100}
      className='text-xs font-sf-pro font-semibold leading-8 cursor-pointer'
    >
      {children}
    </Link>
  );
}
