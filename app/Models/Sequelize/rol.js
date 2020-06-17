/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rol', {
    id_rol: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
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
    tableName: 'rol'
  });
};
