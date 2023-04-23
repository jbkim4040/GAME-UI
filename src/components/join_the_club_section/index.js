import MEN1 from '../../assets/images/3.png'
import MEN2 from '../../assets/images/2.jpeg'
import MEN3 from '../../assets/images/1.jpeg'
import MEN4 from '../../assets/images/4.png'

import './style/index.css'

function JoinTheClub() {
    return (
        <div id='about' className="join_container">
            <div className='images_contaier'>
                <div>
                    <img loading='lazy' src={MEN1} alt='pic' />
                </div>
                <div>
                    <img loading='lazy' src={MEN2} alt='pic' />
                </div>
                <div>
                    <img  loading='lazy'src={MEN3} alt='pic' />
                </div>
                <div>
                    <img loading='lazy' src={MEN4} alt='pic' />
                </div>
            </div>
            <div className='j_content_container'>
                <h1 className='theme-heading' >Join the club </h1>
                <p>When you buy a Lord, you don’t buy only an avatar or a piece of art.
                    <br /><br />
                    <span>You are gaining membership access to a club</span> whose benefits and offerings will increase over time.
                    Your Lord can serve as your digital identity, VIP pass for our casino,
                    breed a Junior lord, receive daily tokens and much more !
                </p>
            </div>


        </div>
    )
}

export default JoinTheClub;