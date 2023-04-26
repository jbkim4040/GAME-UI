import PIC1 from '../../assets/images/c2.png'
import PIC2 from '../../assets/images/c3.png'
import PIC3 from '../../assets/images/c4.png'
import PIC4 from '../../assets/images/c1.png'

import './style/index.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

import SwiperCore, { Pagination, Autoplay } from 'swiper';
SwiperCore.use([Autoplay,Pagination]);

function Welcome() {
    return (
        <div id='home' className="welcome_container">
            <div className='content_container'>
                <h1 className='theme-heading'>  Welcome To <br /> The Lord Society</h1>
                <p><span>The Lord Society </span> is a collection of<span> 7777 Lords NFTs </span> living in the Ethereum blockchain.
                    <br />
                    <br />
                    Each piece is <span> a unique 3D artwork </span> with a collection of more than <span> 150+ traits. </span> The objective is to build the strongest community and project around NFTs.
                </p>
                <button onClick={()=>window.location.href = 'https://discord.com/invite/lordsociety'} className='theme-btn'>JOIN US</button>
            </div>
            <div className='carousal_contaier'>
                <Swiper
                    pagination={{ "clickable": true }}
                    loop={true}
                    autoplay={{
                        "delay": 5000,
                        "disableOnInteraction": false
                    }} className="mySwiper">
                    <SwiperSlide><img src={PIC1}/></SwiperSlide>
                    <SwiperSlide><img src={PIC2}/></SwiperSlide>
                    <SwiperSlide><img src={PIC3}/></SwiperSlide>
                    <SwiperSlide><img src={PIC4}/></SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}

export default Welcome;