import { AiOutlineArrowLeft } from 'react-icons/ai';
import { categorys } from '.';
const CategoryOne = () => {
    return (
        <>
            <div className="grid grid-cols-2 mt-12">
                <h2 className="titles">مقالات در خصوص دسته بندی یک</h2>
                <div className="flex justify-end "><p className="view-history ">مشاهده بیشتر</p>
                    <a className="arrows" href="#"><AiOutlineArrowLeft className="w-3" /></a>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-x-11 mt-10">
               {
                categorys.map((category,index)=>(
                    <div key={index}>
                    <img src={category.img} className='rounded-2xl h-40 w-full' />
                    <h2 className='mt-3 mr-3 text-success font-bold'>{category.text}</h2>
                    <div className='flex justify-between mt-3 mr-3'>
                    <p className="view-history ">{category.history}</p>
                    <div className="flex justify-end ml-1">
                        <p className="view-history ">مشاهده </p>
                        <a className="arrows" href="#"><AiOutlineArrowLeft className="w-3" /></a>
                    </div>
                    </div>
                </div>
                ))
               }
                

            </div>
        </>
    )
}
export default CategoryOne;