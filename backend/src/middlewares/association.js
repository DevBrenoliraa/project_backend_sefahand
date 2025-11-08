import { usuarioModel } from "../features/models/usuarioModel.js";
import { epiModel } from "../features/models/epiModel.js";
import { funcionarioModel } from "../features/models/funcionarioModel.js";

// 1:N
funcionarioModel.hasMany(epiModel, {
    foreignKey: 'funcionario_id',
    onDelete: 'CASCADE'
});
epiModel.belongsTo(funcionarioModel, {
    foreignKey: 'funcionario_id'
});

// N:1
usuarioModel.hasMany(epiModel, {
    foreignKey: 'usuario_id',
    onDelete: 'CASCADE'
});
epiModel.belongsTo(usuarioModel, {
    foreignKey: 'usuario_id'
});

export { usuarioModel, epiModel, funcionarioModel};