"use client"

import { Duvidas } from "../components/Duvidas";
import { Alerts } from "../components/Alerts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Whatsicon } from "../components/Whatsapp";
import { HighcomfortItem } from "../components/HighcomfortItem";

export default function (){
  return(
    <>
      <Whatsicon/>
      <Header/>
      <Alerts/>
      <HighcomfortItem/>
      <Duvidas/>
      <Footer/>
    </>
  );
}