import { Link } from 'react-router-dom';
import '../scss/AboutPage.scss';

function AboutPage() {
  return (
    <div className='about-page-text'>
    <h2 className='about-page-title'>
        ABOUT</h2>
        <p className='about-page-subtitle'>
  I’m a <i>passionate</i> and <b>enthusiastic</b> developer with a passion for immersive and captivating experiences.💫 <br />
  Recently graduated from a Full Stack certificate (Bac+2) and currently undergoing certification on 3D animations with <a href='https://bruno-simon.com/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>Bruno Simon</a> (WebGL, Three.js, GLSL, Perlin Noise, Blender). <br> 
  </br>I am looking for a professionalization contract for work-study training in DevOps application developer (Bac+3).<br />
  See my internship periods, or contact me <Link className='animatedUnderline' to='/contact'>here:)</Link>
</p>


        </div>
  )
}
// , 
// 
export default AboutPage