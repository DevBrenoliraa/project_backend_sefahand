import { DataTypes } from "sequelize";
import { connection } from "../../config/sequelize.js";

export const usuarioModel = connection.define(
    'usuarios',
    {
        nome_completo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        nickname:{
            type: DataTypes.STRING,
            allowNull: false
        },
        senha:{
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: true
    }
);