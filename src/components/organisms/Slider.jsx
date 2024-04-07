import React from "react";
import SliderText from "../molecules/Slider/SliderText";
import Image from "../atoms/Image/Image";
import SliderPagination from "../molecules/Slider/SliderPagination";
import BookingBtn from "../atoms/Button/BookingBtn";
import Icon from "../atoms/Icon/Icon"

const Slider = () => {
    return (
        <>
            <div className="bg-blackDesign grid grid-cols-1 md:grid-cols-2">
                <div className="md:max-w-md md:col-start-2 md:mx-auto md:my-8">
                    <Image url={"https://www.blog.thelittleprince.com/wp-content/uploads/2015/05/affiche-def-du-film.jpg"} alt={"imagen_obra"} variant={"rounded"}/>
                </div>
                <div className="px-2 py-4 grid grid-cols-1 gap-4 md:row-start-1 md:m-auto">    
                    <div>
                        <SliderText/>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-1">
                        <div>
                            <BookingBtn text={"Reservar"} variant={"gray"} url={"/"}/>
                        </div>
                        <div className="flex justify-end lg:mt-12">
                            <SliderPagination/>        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Slider;