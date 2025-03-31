import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
      <header className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between">
        <Link href="/">
          <Image 
            src="/images/logo.png"
            alt="Logo Onlyfans Directory"
            width={250}
            height={100} 
            className="h-10"
            />
          </Link>
          <nav>
            <Link
              href="/" 
              className="text-gray-300 hover:text-white mx-2"
              >BACK TO HOME</Link>
          </nav>
        </div>
      </header>
    );
  }