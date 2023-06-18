
import CategoryOne from "./CategoryOne";
import Meno from "./Meno";
import MySliders from "./MySliders";
import Products from "./Products";
import TimeLine from "./TimeLine";
const Layout = () => {
    return (
        <>
            <Meno />
            <div className="mx-auto my-1 w-9/12">
                <MySliders/>
                <TimeLine/>
                <CategoryOne/>
                <Products/>

            </div>
        </>


    )
}
export default Layout;