import { Link } from "react-router-dom";
import { HiMenuAlt3 } from 'react-icons/hi';

const DrawerToggle = () => {
   
   return (
      <>
         <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:flex " >
            <HiMenuAlt3 className="my-auto" />

         </div>
      </>
   )

}
export default DrawerToggle;
