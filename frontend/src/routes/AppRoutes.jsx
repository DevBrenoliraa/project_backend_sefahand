import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageCadastro from '../pages/cadastro'
import PageLogin from '../pages/login'
import Avisos from '../pages/avisos'
import Dashboard from '../pages/dashboard'
import ConfigUser from '../pages/configUser'
import DeliveriesPage from '../pages/entregas'

// import { Link } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/usuario/cadastro' element={<PageCadastro/>} />
        <Route path='/usuario/login' element={<PageLogin/>} />
        <Route path='/usuario/avisos' element={<Avisos/>} />
        <Route path='/usuario/configUser' element={<ConfigUser/>} />
        <Route path='/usuario/entregas' element={<DeliveriesPage/>} />
        <Route path='/' element={<Dashboard/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes