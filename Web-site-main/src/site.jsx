import React from 'react'
import './styles/Sass/main.scss'
import Nav from "./Components/Banner/nav" 
import Banner from './Components/Banner/Banner'
import Technology from './Components/technology/technology'
import Card from './Components/Card/card'
import Coments from './Components/Coments/Coments'
import Carousel from "./Components/Carousel/carousel"
import Projetos from "./Components/Projetos/projetos"
import Footer from "./Components/footer/footer"
import About from "./Components/about/about"

export default function App(){
    return<>
    <Nav/>
    <Banner/>
    <Projetos/>
    <Carousel/>
    <Technology/>
    <Card/>
    <Coments/>
    <About/>
    <Footer/>
    </>
}