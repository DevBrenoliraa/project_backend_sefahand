import { funcionarioModel } from '../models/funcionarioModel.js';

export const listarFuncionarios = async (req, res, next) => {
    try {
        const funcionarios = await funcionarioModel.findAll({
            attributes: ['id', 'nome_completo', 'cpf', 'cargo', 'setor'],
            order: [['id', 'ASC']]
        });

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Funcionários listados com sucesso',
            funcionarios: funcionarios
        });

    } catch (error) {
        next(error)
    }
};

export const criarfuncionario = async (req, res, next) => {
    const { nome_completo, cpf, cargo, setor } = req.body;

    try {
        if (!nome_completo || !cpf || !cargo || !setor) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: 'Todos os campos devem ser preenchidos'
            });
        };

        const existe = await usuarioModel.findOne({ where: { cpf } });

        if (existe) {
            return res.status(422).json({
                success: false,
                statusCode: 422,
                message: 'O CPF já está cadastrado. Tente outro.'
            });
        };

        const novofuncionario = await usuarioModel.create({
            nome_completo,
            cpf,
            cargo,
            setor
        });

        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'Funcionário cadastrado com sucesso',
            funcionario: novofuncionario
        });

    } catch (error) {
        next(error)
    };
};