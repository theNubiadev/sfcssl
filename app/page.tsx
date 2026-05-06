import Image from "next/image";
import { useState , useRef} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Home() {
 const navBarRef = useRef<HTMLUListElement | null>(null);
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  const showNav  = () => setOpen(true)
  const removeNav = () => setOpen(false);

  return (
   <>
    <nav className="fixed z-10  w-full flex p-5 lg:px-16 lg:py-10  lg:items-center lg:justify-between">
    {/* Logo */}

    <div>
    <Link href='/'>
      <h2>SFCSSL </h2>
    </Link>
    </div>


    {/* NavLinks */}

    </nav>
   </>
  );
}
