import React from "react";
import Text from "../../atoms/Text/Text";
import Title from "../../atoms/Title/Title";
import BookingBtn from "../../atoms/Button/BookingBtn";

const SliderText = () => {
    return (
        <>
            <Title type={"H1"} variant={"white"} text={"Pérdida"}/>
            <Title type={"H2"} variant={"orange"} text={"TKOMÚN"}/>
            <Text type={"noLink"} variant={"white"} text={"Viernes 3 de noviembre · 20h"}/>
            <Text type={"noLink"} variant={"white"} text={"Auditorio Paco de Lucía, Centro de Arte Alcobendas"}/>
            <BookingBtn text={"Reservar"} variant={"gray"} url={"/"}/>
        </>
    )
};

export default SliderText;