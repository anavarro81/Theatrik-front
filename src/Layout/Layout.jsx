import Header from '../components/organisms/Header';
import { Outlet } from "react-router-dom";
import Footer from '../components/organisms/Footer';
import { usePlays } from '../Providers/PlaysProvider';
import { useEffect } from 'react';

import { useLoaderData } from 'react-router-dom';

const Layout = () => {

    // const [plays, getPlays, filteredPlays, searchPlay, multipleSearch] = usePlays(); 

    const plays =  useLoaderData();

    

    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layout;