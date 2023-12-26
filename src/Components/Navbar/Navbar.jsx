import Link from "next/link";
import { HiChatBubbleBottomCenterText, HiEnvelope, HiHome, HiRectangleGroup, HiUser, HiViewColumns } from "react-icons/hi2";
import { MdDesignServices } from "react-icons/md";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      path: "/#home",
      icon: <HiHome />,
    },
    {
      name: "About",
      path: "/#about",
      icon: <HiUser />,
    },
    {
      name: "Skills",
      path: "/#skills",
      icon: <MdDesignServices />,
    },
    {
      name: "Services",
      path: "/#services",
      icon: <HiViewColumns />,
    },
    {
      name: "Projects",
      path: "/#projects",
      icon: <HiRectangleGroup />,
    },
    {
      name: "Testimonials",
      path: "/#testimonials",
      icon: <HiChatBubbleBottomCenterText />,
    },
    {
      name: "Contact",
      path: "/#contact",
      icon: <HiEnvelope />,
    },
  ];

  return (
    <nav className="m-5">
      <div className="flex gap-5 px-5 py-2 bg-slate-300 rounded-full">
        {navLinks.map(({ name, icon, path }, idx) => {
          return (
            <div key={idx} className="text-5xl hover:bg-red-400 rounded-full p-2 duration-500">
              <Link href={path}>{icon}</Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
