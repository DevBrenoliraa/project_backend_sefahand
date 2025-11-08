import { Router } from 'express';
import { verificarToken } from '../../middlewares/verificaToken.js';
import { listarUsuario, criarUsuario, login } from '../controllers/usuarioController.js';

const routes = Router();

routes.get('/usuarios', verificarToken, listarUsuario)
routes.post('/usuarios/cadastro', criarUsuario);
routes.post('/usuarios/login', login);

export default routes;
