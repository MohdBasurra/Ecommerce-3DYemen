import Image from 'next/image'
import { Inter } from 'next/font/google';
import Header from '../components/Navbar';
import MyCarousel from '../components/MyCarousel';
import Introduction from '../components/Introduction';
import React, { useState } from "react";
import ImageCarousel from '../components/slider';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  

  return (
  <>
  <div className=' w-screen justify-center items-center'>
  <Header/>
  <div className=' justify-center items-center'>
  <div className='pt-8 justify-center items-center'><MyCarousel/></div>
  <div><Introduction/>  </div>
  <div className=' w-full justify-center items-center'>
 <div className='pt-8 justify-center items-center'> <ImageCarousel/></div> 
 <div className='pt-8'> <ImageCarousel/></div> 
 <div className='pt-8'> <ImageCarousel/></div> 
 <div className='pt-8'> <ImageCarousel/></div> 
   </div></div></div></>
  )
}