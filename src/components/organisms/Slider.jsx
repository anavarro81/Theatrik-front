import SliderText from "../molecules/Slider/SliderText";
import Image from "../atoms/Image/Image";
import SliderPagination from "../molecules/Slider/SliderPagination";
import BookingBtn from "../atoms/Button/BookingBtn";


const Slider = ({data}) => {
    return (
        <>
            <div className="bg-blackDesign grid grid-cols-1 md:grid-cols-2">
                <div className="md:max-w-md md:col-start-2 md:mx-auto md:my-8">
                    {data?.map((item) => <Image key={item._id} url={item.cartel} alt={item.title} variant={"rounded"}/>)}
                </div>
                <div className="px-2 py-4 grid grid-cols-1 gap-4 md:row-start-1 md:m-auto">    
                    <div>
                        {data?.map((item) => <SliderText key={item._id} data={item}/>)}
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