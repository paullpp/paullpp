import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 p-5 w-full font-semibold text-white text-xl bg-black">
      <nav className="flex justify-center gap-20">
        <Link href="/" className="transition ease-in-out hover:scale-110"> Home </Link>
        <Link href="/ungovernable" className="transition ease-in-out hover:scale-110"> Ungovernable Stack </Link>
        <Link href="/hempdb" className="transition ease-in-out hover:scale-110"> HempDB </Link>
        <Link href="/tripaccountant" className="transition ease-in-out hover:scale-110"> Trip Accountant </Link>
        <Link href="/portfolios" className="transition ease-in-out hover:scale-110"> Portfolios </Link>
      </nav>
    </div>
  );
}