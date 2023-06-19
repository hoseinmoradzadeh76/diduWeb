import { Link } from "react-router-dom";
import { FaAlignRight,FaTimes } from 'react-icons/fa';

import { stack as Menu } from 'react-burger-menu'
import { Logo } from "../img";

const DrawerToggle = () => {

   return (
      <>
         <div className="2xl:hidden xl:hidden lg:hidden md:hidden  " >

            <Menu right  className="bg-white text-success hover:text-Amber transition delay-120 w-2/3" customBurgerIcon={<FaAlignRight />} customCrossIcon={<FaTimes />} >

               <Link to="/" className="text-success hover:text-Amber transition delay-120 text-center mt-20">صحفه اصلی</Link>
               <Link to="#" className="text-success hover:text-Amber transition delay-120 mt-10 text-center">مقالات</Link>
               <Link to="#" className="text-success hover:text-Amber transition delay-120 mt-10 text-center" >ویدیو</Link>
               <Link to="#" className="text-success hover:text-Amber transition delay-120 mt-10 text-center">مجله</Link>
               <Link to="#" className="text-success hover:text-Amber transition delay-120 mt-10 text-center">هوش مصنوعی</Link>
            </Menu>
            <div className="logo left-16 fixed"><img src={Logo} /></div>
         </div>
      </>
   )

}
export default DrawerToggle;
