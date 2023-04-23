import MEN from '../../assets/images/c1.png'
import './style/index.css'
import { FaAngleDoubleDown } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link';


function Cover() {
    return (
        <div className="cover_container">
            <div className='cover_content'>
                <div className='image_wrapper'>
                    <img src={MEN} alt="men" />

                </div>
                <h1 className='main_heading'>Ready to become <br /> The Next Lord?</h1>
            </div>
            <span className='arrow'>
                <HashLink smooth to="#home">
                    <FaAngleDoubleDown />
                </HashLink></span>

        </div>
    )
}

export default Cover;