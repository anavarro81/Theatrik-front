import React from "react";
import BookingBtn from "../../atoms/Button/BookingBtn";

const SliderPagination = () => {

    return (
        <>

        <div className="hidden md:contents">
            <BookingBtn text={"1"} variant={"paginationBtn"} url={"/"}/>
            <BookingBtn text={"2"} variant={"paginationBtn"} url={"/"}/>
            <BookingBtn text={"3"} variant={"paginationBtn"} url={"/"}/>
            <BookingBtn text={"4"} variant={"paginationBtn"} url={"/"}/>
            <BookingBtn text={"5"} variant={"paginationBtn"} url={"/"}/>
        </div>
        </>
    )
};

export default SliderPagination;