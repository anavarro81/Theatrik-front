import React from "react";
import SliderText from "../molecules/Slider/SliderText";
import Image from "../atoms/Image/Image";
import SliderPagination from "../molecules/Slider/SliderPagination";

const Slider = () => {
    return (
        <>
            <div className="bg-blackDesign grid grid-cols-1 md:grid-cols-2">
                <div className="md:max-w-md md:col-start-2 md:mx-auto md:my-8">
                    <Image url={"https://www.blog.thelittleprince.com/wp-content/uploads/2015/05/affiche-def-du-film.jpg"} alt={"imagen_obra"} variant={"rounded"}/>
                </div>
                <div className="px-2 py-4 md:row-start-1 md:m-auto">
                    <SliderText/>
                    <div>
                        <SliderPagination/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Slider;