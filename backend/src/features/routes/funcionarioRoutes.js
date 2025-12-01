import { Router } from 'express';
import { verificarToken } from '../../middlewares/verificaToken.js';
import { listarFuncionarios, criarfuncionario } from '../controllers/funcionarioController.js';

const routes = Router();

routes.get('/funcionarios', verificarToken, listarFuncionarios)
routes.post('/funcionario/cadastros', verificarToken, criarfuncionario);

export default routes;