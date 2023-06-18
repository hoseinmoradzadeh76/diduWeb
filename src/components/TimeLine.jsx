import { Chrono } from "react-chrono";
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { timeLines } from ".";
const TimeLine = () => {

    const items = [{title: "زمستان ماه 1401" },{title: "تابستان ماه 1401",},{  title: "بهار ماه 1402",},{ title: "تابستان ماه 1402 "}]
   
    return (
        <>
            <div className="grid grid-cols-2 mt-20">
                <h2 className="titles">تاریخچه انتشار فصلنامه ها</h2>
                <div className="flex justify-end "><p className="view-history ">مشاهده بیشتر</p>
                    <a className="arrows" href="#"><AiOutlineArrowLeft className="w-3" /></a>
                </div>
            </div>

            <Chrono items={items}  borderLessCards cardPositionHorizontal="TOP" showAllCardsHorizontal
                itemWidth={265} cardHeight={250}  flipLayout hideControls  enableBreakPoint verticalBreakPoint={400}
                theme={{
                    primary: '#15803d',
                    secondary: '#fcd34d',
                    titleColor: '#777',
                    titleColorActive: '#777',
                }}

            >
                {
                    timeLines.map((timeLine, index) => (
                        
                        <div key={index} >
                            <img src={timeLine.img} className="h-56" />
                            <h2 className="text-center text-success font-bold my-2 text-md">{timeLine.text}</h2>
                            <p className="text-center view-history">{timeLine.Tnumber}</p>
                        </div>
                    ))
                }



            </Chrono>

        </>
    )
}
export default TimeLine;