import { useState, useEffect } from "react";
import axios from "axios";
import React from 'react'

const getAllCompanies = () => {
    const [name, setName] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5004/play/getAllPlays`).then((res) => {
            console.log(res.data.name)
        setName(res.data.name);
    });
},[])

return (
    <div>{name}</div>
    )
};

export default getAllCompanies;