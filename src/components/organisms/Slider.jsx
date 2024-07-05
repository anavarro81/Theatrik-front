import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import SliderText from "../molecules/Slider/SliderText";
import Image from "../atoms/Image/Image";
import BookingBtn from "../atoms/Button/BookingBtn";
import { Link } from "react-router-dom";
import '../../css/main.css'


const HomeSlider = ({data}) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">●</span>';
        },
        bulletClass: "custom-pagination-bullet",
      };
    

    return (
        <>  
            <Swiper
                autoplay={{
                    delay: 5000,
                }} 
                speed={2000}
                loop={true} 
                modules={[Autoplay, Pagination]}
                pagination={pagination}
                className="bg-blackDesign"
            >
            <div className="swiper-wrapper ">
            {data?.map((item) => 
                <SwiperSlide className="grid grid-cols-1 mb-6 md:grid-cols-2 " key={item._id} >
                    <div id='swiperSlide' className="md:max-w-md md:col-start-2 md:mx-auto md:my-6 "  >
                    <Image url={item.cartel} alt={item.title} variant={"rounded"}/>
                    </div>
                    <div className="px-4 py-4 grid grid-cols-1 gap-4 md:gap-8 md:row-start-1 md:ml-32 md:my-auto ">
                        <div>   
                            <SliderText data={item}/>
                        </div>
                        <Link to={`/booking/${item._id}`}>
                            <BookingBtn text={"Reservar"} variant={"gray"}/>
                        </Link> 
                    </div>
                </SwiperSlide>)}
            </div>
            </Swiper> 
        </>
    )
};

export default HomeSlider;