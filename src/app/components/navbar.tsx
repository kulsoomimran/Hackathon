import Link from "next/link"
import Image from "next/image"
import Jumpman from "../public/Jumpman.png"
import Nike from "../public/Nike.png"
import { CiSearch } from "react-icons/ci"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Navbar = () => {
    return (
  <div>
          <header className="bg-[#F5F5F5] border-b font-[Helvetica Neue] flex justify-between items-center px-10 py-2">
            {/* Logo Section */}
            <Image src={Jumpman} alt="Logo" className="w-[50px]" />
      
            {/* Links Section */}
            <nav>
              <ul className="flex items-center space-x-3 text-black text-[11px] font-medium">
                <li>
                  <Link href="#">Find a Store</Link>
                </li>
                <span className="h-[14px] w-px bg-gray-400" />
                <li>
                  <Link href="#">Help</Link>
                </li>
                <span className="h-[14px] w-px bg-gray-400" />
                <li>
                  <Link href="../JoinUs">Join Us</Link>
                </li>
                <span className="h-[14px] w-px bg-gray-400" />
                <li>
                  <Link href="../SignIn">Sign In</Link>
                </li>
              </ul>
            </nav>
        </header>
        {/* Main navbar */}
      
      <header className="bg-white border-b shadow-sm">
        {/* Main Navbar */}
        <div className="flex justify-between items-center px-4 md:px-8 py-2">
          {/* Logo */}
          <Image src={Nike} alt="Logo" className="w-[60px]" />
  
          {/* Navigation Links (hidden on mobile) */}
          <nav className="hidden md:flex space-x-6 items-center font-medium">
            <a href="#" className="text-black hover:underline">
              New & Featured
            </a>
            <a href="#" className="text-black hover:underline">
              Men
            </a>
            <a href="#" className="text-black hover:underline">
              Women
            </a>
            <a href="#" className="text-black hover:underline">
              Kids
            </a>
            <a href="#" className="text-black hover:underline">
              SNKRS
            </a>
          </nav>
  
          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar (hidden on small screens) */}
            <div className="hidden lg:flex items-center bg-slate-100 rounded-full px-3 py-1">
              <CiSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-sm flex-grow pl-2"
              />
            </div>
  
            {/* Icons */}
            <AiOutlineHeart className="text-black text-lg" />
            <a href="../Cart"><HiOutlineShoppingBag className="text-black text-lg"/></a>
             
          </div>
  
          {/* Mobile Menu (visible only on small screens) */}
          <button className="md:hidden text-black text-lg">
         Menu   <GiHamburgerMenu />
        
          </button>
        </div>
  
        {/* Mobile Navigation*/}
        <div className="md:hidden bg-white w-full px-4 py-3 hidden" id="mobile-menu">
          <a href="#" className="block text-black py-1 hover:underline">
            New & Featured
          </a>
          <a href="#" className="block text-black py-1 hover:underline">
            Men
          </a>
          <a href="#" className="block text-black py-1 hover:underline">
            Women
          </a>
          <a href="#" className="block text-black py-1 hover:underline">
            Kids
          </a>
          <a href="#" className="block text-black py-1 hover:underline">
            SNKRS
          </a>
        </div>
      </header>
      </div>
    )
  };
  
export default Navbar;