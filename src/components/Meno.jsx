import { Outlet, Link } from "react-router-dom";
import { Logo } from "../img";
import DrawerToggle from "./DrawerToggle";
const Meno = () => {


    return (
        <>

            <header className="flex justify-between w-full shadow h-14 bg-white sticky top-0 z-50 ">
                <DrawerToggle />
                <menu className="2xl:flex xl:flex lg:flex md:flex sm:hidden items-center justify-between w-9/12 mx-auto mobile " >
                    <ul className="flex">
                        <li><Link to="/" className="text-success hover:text-Amber transition delay-120">صحفه اصلی</Link></li>
                        <li><Link to="#" className="text-success hover:text-Amber transition delay-120 mx-4">مقالات</Link></li>
                        <li><Link to="#" className="text-success hover:text-Amber transition delay-120 mx-4">ویدیو</Link></li>
                        <li><Link to="#" className="text-success hover:text-Amber transition delay-120 mx-4">مجله</Link></li>
                        <li><Link to="#" className="text-success hover:text-Amber transition delay-120 mx-4">هوش مصنوعی</Link></li>
                    </ul>
                    <div className="logo "><img src={Logo} /></div>
                </menu>

            </header>

            <Outlet />
        </>
    );
}
export default Meno;