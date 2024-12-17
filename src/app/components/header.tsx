import Link from "next/link"
 import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IoCallOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";

function Header() {
  return (

    <header className="max-w-screen-2xl mx-auto font-sans ">

      {/* top section header */}
      <div className='hidden lg:flex justify-around items-center  text-white bg-[#252B42] py-4 '>

        {/* child 01 */}
        <div className="flex items-center gap-10 ">


          <div className="flex items-center gap-2 font-semibold">
            <IoCallOutline size={20} />
            <p>(225) 555-0118</p>
          </div>

          <div className="flex items-center gap-2 font-semibold">
            <TfiEmail size={20} />
            <p>michelle.rivera@example.com</p>
          </div>

        </div>

        {/* child02 */}
        <div className="font-bold">
          <p>Follow Us  and get a chance to win 80% off </p>
        </div>


        {/* child03 */}

        <div className="flex font-bold items-center gap-2">
          <p>Follow Us :</p>
          <FaInstagram size={20}/>
          <CiYoutube size={20}/>
          <CiFacebook size={20}/>
          < CiTwitter size={20}/>

        </div>

      </div>

{/* section 2 navbar */}
      <div className='max-w-screen-2xl gap-3 flex items-center lg:justify-between lg:px-10 px-3 mt-5 mx-auto '>

        <div>
          <p className='text-3xl font-bold'>Bandage</p>
        </div>

        <div>
          <ul className=' hidden sm:flex items-center  gap-5 text-[#737373] font-bold'>
            <Link href={"/"}><li>Home</li></Link>
            <Link href={"/shop"} className="flex items-end"><li className="font-sans font-normal ">Shop </li>
              <FaAngleDown className="" /></Link>
            <Link href={"/about"}><li>About</li></Link>
            <Link href={"#"}><li>Blog</li></Link>
            <Link href={"/contact"}><li>Contact</li></Link>
            <Link href={"#"}><li>Pages</li></Link>
          </ul>
        </div>

        <div>


          <div className='flex items-center gap-5'>

            <div className='sm:hidden hidden lg:flex items-center gap-5 font-bold text-[#23A6F0]'>
              <IoMdContact size={20} />
              <div>
                <p>Login / Register</p>
              </div>

            </div>

            <div className="flex items-center lg:gap-5 gap-2">

            <CiSearch size={30} fill="#23A6F0" className="lg:block sm:hidden hidden"/>

            <CiSearch size={30}  className="lg:hidden sm:block block"/>

            <CiHeart size={30} fill="#23A6F0" className="lg:block sm:hidden hidden" />

            <span className="text-[#23A6F0] lg:block sm:hidden hidden">1</span>

            <IoCartOutline size={30} color="#23A6F0" className="lg:block sm:hidden hidden" />

            <IoCartOutline size={30} className="lg:hidden sm:block block" />

            <span  
            className="text-[#23A6F0] lg:block sm:hidden hidden">1</span>

            </div>
            
          </div>
        </div>

        <Sheet >
        <SheetTrigger className="sm:hidden block">
          <BiMenuAltRight size={30} className="block sm:hidden" />
        </SheetTrigger>
        <SheetContent className="bg-white">
          <SheetHeader>
          <ul className=" text-[#737373] font-bold text-[14px]">
            <Link href={"/"}><li>Home</li></Link>
            <br />
            <Link href={"/shop"}><li>Product</li></Link>
            <br />
            <Link href={"/about"}><li>About</li></Link>
            <br />
            <Link href={"/"}><li>Contact</li></Link>
          </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      </div>

     
    </header>
  )
}

export default Header