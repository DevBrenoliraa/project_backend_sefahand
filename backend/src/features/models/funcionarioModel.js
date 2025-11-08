import { DataTypes } from "sequelize";
import { connection } from "../../config/sequelize.js";

export const funcionarioModel = connection.define(
    'funcionarios',
    {
        nome_completo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        cpf:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        cargo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        setor:{
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: true
    }
);