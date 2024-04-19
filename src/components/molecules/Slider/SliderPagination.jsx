import BookingBtn from "../../atoms/Button/BookingBtn";

const SliderPagination = ({data}) => {

    return (
        <>

        <div className="hidden lg:contents">
        {data?.map((item, i) => 
            <BookingBtn key={item._id} text={i + 1} variant={"paginationBtn"}/>)}
        </div>
        <div>
            <BookingBtn icon={"Arrow"} variant={"paginationBtn"}/>
        </div>
        </>
    )
};

export default SliderPagination;