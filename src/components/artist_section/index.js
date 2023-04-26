import './style/index.css'
import PIC from '../../assets/images/1.jpeg'
function Artist() {
    return (
        <div id='artist' className="artist_container">
            <div>
                <h1 className='theme-heading'>The Artist</h1>
                <p>Meet Our Artist, Taking his 3D Art From The Screen Of Blockbusters including Frozen (2013) and
                    Spiderman (No Way Home 2021), Into The word of Lords. The Lord Society is brought to you by our
                    digital artists. As they became the most wanted for the highly influential media giants in the world.</p>
            </div>
            <div className='second_section'>
                <div className='image_wrapper'>

                    <div className='design_container'>
                        <div className='left'></div>
                
                        <div className='right'></div>
                    </div>

                    <img src={PIC} loading='lazy' alt='picture' />
                </div>
                <div className='content_wrapper'>
                    <h1> I'm Josh Isaac D.</h1>
                    <p>A Computer Animator/3d Artist with 16 years of experience in producing 3d art for the film, gaming,
                        advertising, and print production industries in a professional environment including Frozen (2013)
                        and Spiderman (No Way Home 2021).
                        <br />
                        <br />
                        Along with being passionate about Manga, 3d modeling, rigging, texturing, and digital sculpting. Josh
                        loves to create art and make things move on screen when it can move people and impact their lives, then
                        even better
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Artist;