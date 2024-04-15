import React from "react";
import Text from "../../atoms/Text/Text";
import Title from "../../atoms/Title/Title";
import { formatDate } from '../../../../utils/formatDate';

const SliderText = ({data}) => {

    const formatedDate = formatDate(data.date);

    return (
        <>
            <Title type={"H1"} variant={"slider-title-white"} text={data.title}/>
            <Title type={"H2"} variant={"slider-title-orange"} text={data.company_name}/>
            <Text type={"noLink"} variant={"white"} text={`${formatedDate} · ${data.time}h`}/>
            <Text type={"noLink"} variant={"white"} text={data.place}/>    
        </>
    )
};

export default SliderText;