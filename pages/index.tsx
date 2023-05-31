import Image from 'next/image'
import { Inter } from 'next/font/google';
import Header from '../components/Navbar';
import MyCarousel from '../components/MyCarousel';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
  <Header/>
  <div><MyCarousel/></div>
  </>
  )
}
