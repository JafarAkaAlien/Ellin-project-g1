import FootLogo from "../../../public/images/footer/foot-logo.svg"
import Sosial from "../../../public/images/footer/sosial.svg"
import "../Footer/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">

      <div className="ellin-foot">
        <div className="ellin">
          <img src={FootLogo} alt="" />
          <p>Dövlət Məşğulluq Agentliyi tərəfindən <br />
dəstəklənən peşə hazırlıq mərkəzi</p>
<img src={Sosial} alt="" />
        </div>

      <div className="kurs">
        <h4>Kurslar</h4>
        <p>Programlasdirma</p>
        <p>Qrafik Dizayn</p>
        <p>Biznes ve Idareetme</p>
        <p>Xarici Diller</p>
        <p>Texniki Ixtisaslar</p>
      </div>

      <div className="kecid">
        <h4>Kecidler</h4>
        <p>Ana sehife</p>
        <p>Kurslar</p>
        <p>Muellimler</p>
        <p>Ugur Hekayeleri</p>
        <p>Qeydiyyat</p>
      </div>

      <div className="elaqe">
        <h4>Elaqe</h4>
        <p><i class="fa-solid fa-location-dot"></i> Bakı, Nəsimi rayonu, 28 May küçəsi</p>
        <p><i class="fa-solid fa-phone"></i> +994 XX XXX XX XX</p>
        <p><i class="fa-regular fa-envelope"></i> info@ellin.az</p>
      </div>

      </div>

      <div className="cook">
        <p>© 2024 ELLIN MMC. Bütün hüquqlar qorunur.</p>
        <div className="sert">
          <p>Mexfilik Siyaseti</p>
          <p>Sertler</p>
          <p>Kuki Siyaseti</p>
        </div>
        

      </div>

      

    </footer>
  )
}

export default Footer