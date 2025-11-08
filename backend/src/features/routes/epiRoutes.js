import { Router } from 'express';
import { verificarToken } from '../../middlewares/verificaToken.js';
import { listarEpis, criarEpi } from '../controllers/epiController.js';

const routes = Router();

routes.get('/epis', verificarToken, listarEpis)
routes.post('/epis/cadastro', verificarToken, criarEpi);

export default routes;
