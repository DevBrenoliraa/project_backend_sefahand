import './styles.css'
import iconepi from '../../assets/svg/iconEPIs.svg'
import iconuser from '../../assets/svg/iconUsuarios.svg'
import iconentrega from '../../assets/svg/iconEntregas.svg'
import { Link } from 'react-router-dom'

const ComponentFooter = () => {
  return (
    <footer className="container_footer">
        <div className="footer_icons">
            <Link to=''>
                <img src={iconentrega} alt="" />
            </Link>
            <Link to=''>
                <img src={iconepi} alt="" />
            </Link>
            <Link to=''>
                <img src={iconuser} alt="" />
            </Link>
        </div>
    </footer>
  )
}

export default ComponentFooter
