import { DataTypes } from "sequelize";
import { connection } from "../../config/sequelize.js";

export const epiModel = connection.define(
    'epis',
    {
        nome_epi:{
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        data_entrega:{
            type: DataTypes.DATE,
            allowNull: false
        },
        validade:{
            type: DataTypes.DATE,
            allowNull: false
        },
        quantidade:{
            type: DataTypes.INTEGER,
            adefaultValue: 1
        },
    },
    {
        timestamps: true
    }
);