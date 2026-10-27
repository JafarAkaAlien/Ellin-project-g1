
import "./Hero.css"
import LOGO from '../../assets/Component 1.png'
import ARROW from '../../assets/arrow.png';
const Hero = () => {
  return (
    //    Hero hissesi
    <div className='HERO'>

      <h4 style={{ fontSize: "14px" }}>  < img style={{ color: "#5B21B633" }} src={LOGO} alt="" />Dövlət Məşğulluq Agentliyi tərəfdən dəstəklənir</h4>
      <h1>Peşəkar Gələcəyinizə<br />
        İnvestisiya Edin</h1>
      <p style={{ color: "#64748B" }}>ELLIN MMC - Azərbaycanda müasir peşə hazırlıq və kurs proqramları ilə<br />
        karrieranızı inkişaf etdirin</p><br />
      <div className="btn">     <button className='left-btn'>
        Kurslara baxın <img src={ARROW} alt="" /></button>
        <button className='right-btn'>Daxil ol</button></div>


    </div>
  )
}

export default Hero
