import express from 'express';
import cors from 'cors';
import { connection } from './config/sequelize.js';
import { errorHandler } from './error/erroHandler.js';
import { epiModel, funcionarioModel, usuarioModel } from './middlewares/association.js';

// Importação das rotas
import  usuarioRoutes  from './features/routes/usuarioRoutes.js';
import epiRoutes from './features/routes/epiRoutes.js'
import funcionarioRoutes from './features/routes/funcionarioRoutes.js'

const app = express();

connection.sync()

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));


app.use(express.json());

// Adicionar rotas
app.use('/api', usuarioRoutes)
app.use('/api', epiRoutes)
app.use('/api', funcionarioRoutes)

// 404 - rota não encontrada ou não existe
app.use((req, res) => {
    res.status(404).json({
        sucesse: false,
        statusCode: 404,
        message: 'rota não encontrada ou não existe'
    });
});

app.use(errorHandler);

export default app;