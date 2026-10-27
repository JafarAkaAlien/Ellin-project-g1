import Logo from '../../../public/images/header/logo.svg'
import Moon from '../../../public/images/header/moon.svg'
import "../Header/Header.css"

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="" className='logo'/>

      
        <ul className="nav-links">
          <li>Ana sehife</li>
          <li>Kurslar</li>
          <li>Muellimler</li>
          <li>Telebeler</li>
          <li>Ugur Hekayeleri</li>
          <li>Elaqe</li>
        </ul>

        <div className="head-end">
            <button className='moon'><img src={Moon} alt="" /></button>
            <button className='daxil'>Daxil ol</button>
            <button className='qeyd'>Qeydiyyat</button>
        </div>
    
    </header>
  )
}

export default Header