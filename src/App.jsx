import React from 'react'
import Home from './pages/Home/Home'
import Icon from './components/atoms/Icon/Icon'
import Image from './components/atoms/Image/Image'
import Title from './components/atoms/Title/Title'
import BookingBtn from './components/atoms/Button/BookingBtn'
import SearchBar from './components/molecules/SearchBar'
import Header from './components/organisms/Header'
import PlayCard from './components/molecules/PlayCard'
import ContainerSlider from './components/organisms/FilterBar'
import FilterBar from './components/organisms/FilterBar'

const App = () => {
  return (
    <>
    {/* <Icon type={"Burger"} />
    <Icon type={"Map"} />
    <Icon type={"Mail"} />

    <Image url={"https://www.blog.thelittleprince.com/wp-content/uploads/2015/05/affiche-def-du-film.jpg"} alt={"imagen_obra"}></Image>

    <Title type={"H1"} variant={"gray"} text={"TKOMÜN"}/> 

    <BookingBtn text={"Reservar"} variant={"orange"} url={"https://www.google.es/"}/> */}

    <Header placeholder={"Buscar por obra o por asociacion"}/>

    <PlayCard/>

    <FilterBar/>


</>
  
)}

export default App