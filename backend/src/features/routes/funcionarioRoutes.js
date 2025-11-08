import { Router } from 'express';
import { verificarToken } from '../../middlewares/verificaToken.js';
import { listarFuncionarios, criarfuncionario } from '../controllers/funcionarioController.js';

const routes = Router();

routes.get('/epis', verificarToken, listarFuncionarios)
routes.post('/epis/cadastro', verificarToken, criarfuncionario);

export default routes;
