
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { sliders } from ".";
const MySliders = () => {
    var settings = {

        dots: true,

        infinite: true,

        speed: 500,

        slidesToShow: 1,

        slidesToScroll: 1

    };
    return (
        <>
            <h3 className="text-success font-bold text-xs my-5">اولین فصلنامه تخصصی رشد گیاه</h3>

            <Slider {...settings} >
                {
                    sliders.map((slider,index) => (
                        <div key={index}>
                            <img className="w-full h-96 rounded-b-3xl border-transparent " src={slider.img} />
                            <div className=" relative" dir="rtl">
                                <div className="w-96 h-16 right-0 bottom-12 opacity-80 rounded-l-full bg-success absolute flex items-center">
                                    <div className="w-1/2 text-center text-white"><h1 className="text-xl font-bold">خاک،کود،گیاه </h1>
                                        <p className="text-xs">{slider.text}</p>
                                    </div>
                                    <div className="w-1/2 flex justify-center "><p className="text-xs text-white ">مشاهده مجله</p>
                                        <a className="bg-Amber text-white rounded-sm mx-3 h-4 w-4  flex items-center justify-center hover:text-success transition delay-120" href="#"><AiOutlineArrowLeft className="w-3"/></a>
                                    </div>
                                </div>


                            </div>
                        </div>
                    ))
                }

            </Slider>

        </>
    )
}
export default MySliders;