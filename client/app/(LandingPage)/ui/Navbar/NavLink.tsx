export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className='text-sm font-sans leading-8 text-gray-900'>
      {children}
    </a>
  );
}
