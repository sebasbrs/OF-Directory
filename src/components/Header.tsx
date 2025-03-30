import Link from "next/link";
export default function Header() {
    return (
      <header className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-xl font-bold">OnlyFans Directory</h1>
          <nav>
            <Link
              href="/" 
              className="text-gray-300 hover:text-white mx-2"
              >Home</Link>
                          <Link
              href="/" 
              className="text-gray-300 hover:text-white mx-2"
              >Sponsors</Link>
          </nav>
        </div>
      </header>
    );
  }