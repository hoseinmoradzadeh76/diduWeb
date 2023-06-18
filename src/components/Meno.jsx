import { Outlet, Link } from "react-router-dom";
import { Logo } from "../img";
import DrawerToggle from "./DrawerToggle";
const Meno = () => {


    return (
        <>
        <div className="w-full shadow h-14 flex bg-white sticky top-0 z-50">
            <header className="flex justify-between mx-auto items-center w-9/12 ">
                <DrawerToggle/>
                <ul className="2xl:flex xl:flex lg:flex md:flex sm:hidden" >
                    <li className="text-success hover:text-Amber transition delay-120"><Link to="/" >صحفه اصلی</Link></li>
                    <li className="text-success hover:text-Amber transition delay-120 mx-4"><Link to="#" >مقالات</Link></li>
                    <li className="text-success hover:text-Amber transition delay-120 mx-4"><Link to="#" >ویدیو</Link></li>
                    <li className="text-success hover:text-Amber transition delay-120 mx-4"><Link to="#" >مجله</Link></li>
                    <li className="text-success hover:text-Amber transition delay-120 mx-4"><Link to="#" >هوش مصنوعی</Link></li>

                </ul>
                <div className="logo"><img  src={Logo}/></div>
            </header>
            </div>
            <Outlet />
        </>
    );
}
export default Meno;