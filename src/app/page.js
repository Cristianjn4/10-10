"use client"

import { Alerts } from "./components/Alerts";
import { Carousel } from "./components/Carousel";
import { CarouselMob } from "./components/CarouselMob";
import { Categorias } from "./components/Categorias";
import { Depoimentos } from "./components/Depoimentos";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { VideoFull } from "./components/Video";
import { Whatsicon } from "./components/Whatsapp";
import { Destaque } from "./components/Destaque";
import { Lojas } from "./components/Lojas";
import {Duvidas} from "./components/Duvidas";
import Promotion from "./components/Promotion";
import Promotion2 from "./components/Promotion2";
import { Promotion3 } from "./components/Promotion3";

export default function Home() {

  return(
    <>
      <Whatsicon/>
      <Alerts/>
      <Header/>  
      <Carousel/>
      <CarouselMob/>
      <Categorias/>
      <Promotion/> 
      <Lojas/>
      <Destaque/>
      <Promotion3/>
      <Depoimentos/>
      <Promotion2/>
      <VideoFull/>
      <Duvidas/>
      <Footer/>
    </>
  );
}
