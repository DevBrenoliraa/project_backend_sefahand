import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageCadastro from '../pages/cadastro'
import PageLogin from '../pages/login'

// import { Link } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/usuario/cadastro' element={<PageCadastro/>} />
        <Route path='/usuario/login' element={<PageLogin/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes