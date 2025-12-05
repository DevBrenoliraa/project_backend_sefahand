import { Router } from 'express';
import { verificarToken } from '../../middlewares/verificaToken.js';
import { listarFuncionarios, criarfuncionario } from '../controllers/funcionarioController.js';

const routes = Router();

routes.get('/funcionarios', listarFuncionarios)
routes.post('/funcionario/cadastros', criarfuncionario);

export default routes;