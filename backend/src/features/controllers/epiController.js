import { epiModel } from '../models/epiModel.js';

export const listarEpis = async (req, res, next) => {
    try {
        const epis = await funcionarioModel.findAll({
            attributes: ['id', 'nome_epi', 'descricao', 'data_entrega', 'validade', 'quantidade'],
            order: [['id', 'ASC']]
        });

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'EPIs listados com sucesso',
            epis: epis
        });

    } catch (error) {
        next(error)
    }
};

export const criarEpi = async (req, res, next) => {
    const { nome_epi, descricao, data_entrega, validade, quantidade } = req.body;

    try {
        if (!nome_epi || !descricao || !data_entrega || !validade || !quantidade) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: 'Todos os campos devem ser preenchidos'
            });
        };

        const existe = await usuarioModel.findOne({ where: { nome_epi } });

        if (existe) {
            return res.status(422).json({
                success: false,
                statusCode: 422,
                message: 'O nome do EPI já está cadastrado. Tente outro.'
            });
        };

        const novoEpi = await usuarioModel.create({
            nome_epi,
            descricao,
            data_entrega,
            validade,
            quantidade
        });

        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'EPI cadastrado com sucesso',
            epi: novoEpi
        });

    } catch (error) {
        next(error)
    };
};