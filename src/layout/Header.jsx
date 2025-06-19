import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from 'react-router-dom';


function Header() {
    return(
        <>
          <div className='flex items-center justify-between py-2 px-20 lg:flex-row'>
            <div className="pr-16">
                <p className='font-bold text-2xl'>Bandage</p>
            </div>
            <div className='flex space-x-4'>
                <a href='/'>Home</a>
                <a href='/shop'>Shop</a>
                <a href='#'>About</a>
                <a href='#'>Blog</a>
                <a href='#'>Contact</a>
                <a href='#'>Pages</a>
            </div>
            <div>
                <ul className='flex items-center space-x-4 z-20 relative'>
                    <li ><a href="#" className="px-6 py-3 text-customBlue">
                    <button className="flex items-center space-x-4 p-4 " ><img src='./src/assets/person.png'/>Login/Register</button></a></li>
                    <li ><a href="#">
                    <button ><img src='./src/assets/buyutec.png'/></button></a></li>
                    <li ><a href="#">
                    <button ><img src='./src/assets/sepet.png'/></button></a></li>
                    <li ><a href="#">
                    <button ><img src='./src/assets/kalp.png'/></button></a></li>
                </ul>
            </div>
          </div>
          {/* <Swiper spaceBetween={20} slidesPerView={1} loop={true} className="mt-6">
             <SwiperSlide>
               <img src="src/assets/red.jpeg" className="w-full h-auto" alt="Resim 1" />
               <div className="absolute inset-0 bottom-20 flex flex-col items-center justify-center text-white text-center py-3 pointer-events-none">
                <p className="text-5xl font-bold mb-2">GROCERIES DELIVERY</p>
                <p className="font-monteserrat text-lg max-w-md mb-4">
                    We know how large objects will act, but things on a<br/> small scale just do not act that way.
                </p>
                <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Start Now</button>
                </div>
             </SwiperSlide>
          </Swiper> */}

        </>
    )
}

export default Header;