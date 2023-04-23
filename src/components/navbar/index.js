import './style/index.css'
import LOGO from '../../assets/images/logo.png'
import { BsDiscord } from 'react-icons/bs'
import { FaTwitterSquare, FaAlignRight, FaInstagram, FaAlignJustify } from 'react-icons/fa'
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';


function Navbar() {

    const [toggle, setToggle] = useState(false)
    const handleClick = (value) => {
        setToggle(!value)
    }

    return (
        <>
            <div className="navbar_container">
                <div className="logo_container">
                    <img src={LOGO} alt='logo' />
                </div>
                <div>
                    <ul className="menu_section">
                        <li ><HashLink smooth to="#home">Home</HashLink></li>
                        <li ><HashLink smooth to="#about">About Us</HashLink></li>
                        <li ><HashLink smooth to="#road_map">Roadmap</HashLink></li>
                        <li ><HashLink smooth to="#artist">Our Artist</HashLink></li>
                        <li ><HashLink smooth to="#faq">FAQ</HashLink></li>
                    </ul>
                </div>
                <div className="icons_container">
                    <span onClick={()=>{window.location.href = 'https://www.instagram.com/lordsocietynft/'}}><FaInstagram /></span>
                    <span onClick={()=>{window.location.href = 'https://twitter.com/lordsociety_nft'}}><FaTwitterSquare /></span>
                    <span onClick={()=>{window.location.href = 'https://discord.com/invite/lordsociety'}}><BsDiscord /></span>
                </div>
            </div>
            {/* Mobile View */}
            <div className="navbar_container_mobile">
                <div className='header_wrapper'>
                    <div className="logo_container_mobile">
                        <img src={LOGO} alt='logo' />
                    </div>

                    <div className="icons_container_mobile">
                    <span onClick={()=>{window.location.href = 'https://www.instagram.com/lordsocietynft/'}}><FaInstagram /></span>
                    <span onClick={()=>{window.location.href = 'https://twitter.com/lordsociety_nft'}}><FaTwitterSquare /></span>
                    <span onClick={()=>{window.location.href = 'https://discord.com/invite/lordsociety'}}><BsDiscord /></span>
                    </div>
                    <div className='toggle_button'>
                        <button onClick={() => handleClick(toggle)} className='navbar_btn_mobile'>
                            {toggle ? <FaAlignRight /> : <FaAlignJustify />}</button>
                    </div>
                </div>

                {toggle ?
                    <ul className="menu_section_mobile">
                        <li ><HashLink smooth to="#home">Home</HashLink></li>
                        <li ><HashLink smooth to="#about">About Us</HashLink></li>
                        <li ><HashLink smooth to="#road_map">Roadmap</HashLink></li>
                        <li ><HashLink smooth to="#artist">Our Artist</HashLink></li>
                        <li ><HashLink smooth to="#faq">FAQ</HashLink></li>
                    </ul>
                    : null
                }
            </div>
        </>
    )
}
export default Navbar;