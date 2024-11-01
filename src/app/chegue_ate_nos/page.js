"use client"

import { Alerts } from "../components/Alerts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Frame from "../components/JokerFrame";
import { Whatsicon } from "../components/Whatsapp";

export default function (){
  return(
    <>
      <Whatsicon/>
      <Header/>
      <Alerts/>
      <Frame/>
      <Footer/>
    </>
  );
}