import './styles.css'
import iconepi from '../../assets/svg/iconEPIs.svg'
import iconuser from '../../assets/svg/iconUsuarios.svg'
import iconentrega from '../../assets/svg/iconEntregas.svg'
import { Link } from 'react-router-dom'

const ComponentFooter = () => {
  return (
    <footer className="container_footer">
        <div className="footer_icons">
            <Link to='/usuario/entregas'>
                <img src={iconentrega} alt="Ir para Entregas" />
            </Link>
            <Link to='/usuario/avisos'>
                <img src={iconepi} alt="Ir para Avisos" />
            </Link>
            <Link to='/usuario/configUser'>
                <img src={iconuser} alt="Ir para Configurações" />
            </Link>
        </div>
    </footer>
  )
}

export default ComponentFooter
