import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed z-30 w-full flex items-center px-16 lg:px-0 top-0 py-2">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* ----- Logo ----- */}
          <div className="text-2xl font-bold mb-2 md:mb-0">
            <Link href="/">
              AH <span className="text-primary">SOHAG</span>
            </Link>
          </div>

          {/* ----- Social Links ----- */}
          <div className="flex justify-center items-center gap-2 text-xs">
            <Link
              href={"/"}
              className="border rounded-full p-1"
            >
              <FaFacebookF />
            </Link>
            <Link
              href={"/"}
              className="border rounded-full p-1 text-black hover:text-primary border-black hover:border-primary duration-300"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href={"/"}
              className="border rounded-full p-1 text-black hover:text-primary border-black hover:border-primary duration-300"
            >
              <FaInstagram />
            </Link>
            <Link
              href={"/"}
              className="border rounded-full p-1 text-black hover:text-primary border-black hover:border-primary duration-300"
            >
              <FaGithub />
            </Link>
            <Link
              href={"/"}
              className="border rounded-full p-1 text-black hover:text-primary border-black hover:border-primary duration-300"
            >
              <FaTwitter />
            </Link>
            <Link
              href={"/"}
              className="border rounded-full p-1 text-black hover:text-primary border-black hover:border-primary duration-300"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href={"/"}
              className="border rounded-full p-1 text-black hover:text-primary border-black hover:border-primary duration-300"
            >
              <FaEnvelope />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
