import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageCadastro from '../pages/cadastro'
import PageLogin from '../pages/login'
import Avisos from '../pages/avisos'
// import { Link } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageLogin />} />
        <Route path='/usuario/cadastro' element={<PageCadastro />} />
        <Route path='/usuario/avisos' element={<Avisos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes