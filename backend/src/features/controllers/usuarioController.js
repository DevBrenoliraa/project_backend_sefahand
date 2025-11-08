import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { usuarioModel } from '../models/usuarioModel.js';

const key_secret = 'senha_secreta_super_forte';

export const listarUsuario = async (req, res, next) => {
    try {
        const usuarios = await usuarioModel.findAll({
            attributes: ['id', 'nome_completo', 'email', 'nickname', 'senha'],
            order: [['id', 'ASC']]
        });

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Usuários listados com sucesso',
            usuarios: usuarios
        });
    } catch (error) {
        next(error);
    }
};

export const criarUsuario = async (req, res, next) => {
    const { nome_completo, email, nickname, senha, verifica_senha } = req.body;

    try {
        if (!nome_completo || !email || !nickname || !senha || !verifica_senha) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: 'Todos os campos devem ser preenchidos'
            });
        }

        if (senha !== verifica_senha) {
            return res.status(422).json({
                success: false,
                statusCode: 422,
                message: 'O campo senha e o campo verifica_senha devem ser iguais'
            });
        }

        const existe = await usuarioModel.findOne({ where: { email } });

        if (existe) {
            return res.status(422).json({
                success: false,
                statusCode: 422,
                message: 'O e-mail já está cadastrado. Tente outro.'
            });
        }


        const hash = await bcrypt.hash(senha, 10);

        const novoUsuario = await usuarioModel.create({
            nome_completo,
            email,
            nickname,
            senha: hash
        });

        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'Usuário cadastrado com sucesso',
            usuario: novoUsuario
        });

    } catch (error) {
        next(error);
    }
};


export const login = async (req, res, next) => {
    try {
        const { nickname, senha } = req.body;

        const usuario = await usuarioModel.findOne({ where: { nickname } });
        if (!usuario) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: "Usuário não encontrado"
            });
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if (!senhaValida) {
            return res.status(401).json({
                success: false,
                statusCode: 401,
                message: "Senha incorreta"
            });
        }

        const token = jwt.sign(
            { id: usuario.id, nome: usuario.nome },
            key_secret,
            { expiresIn: '12h' }
        );

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Usuário logado com sucesso',
            token: token
        });

    } catch (error) {
        next(error);
    }
};
