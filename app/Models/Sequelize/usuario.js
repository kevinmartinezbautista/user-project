/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    id_usuario: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    correo_electronico: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    primer_apellido: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    segundo_apellido: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    estatus: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    usuario_de_creacion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    usuario_de_modificacion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fecha_de_creacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    fecha_de_modificacion: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'usuario'
  });
};
