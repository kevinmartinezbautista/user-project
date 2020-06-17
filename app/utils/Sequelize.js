/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env');
/** @type {typeof import('sequelize')} */
const Sequelize = use('sequelize');
const config = {
  host: Env.get('DB_HOST', 'localhost'),
  port: Env.get('DB_PORT', 3306),
  dialect: 'mysql',
  pool: {
    min: 1,
    max: 150,
    acquire: 1000000,
    idle: 200,
    evict: 200,
  },
  logging: true,
  define: {
    timestamps: false,
  },
  dialectOptions: {
    socketPath: Env.get('DB_SOCKET', ''),
  },
};
const connection = {
  dbName: Env.get('DB_DATABASE', ''),
  userName: Env.get('DB_USER', ''),
  userPwd: Env.get('DB_PASSWORD', ''),
};

module.exports = new Sequelize(connection.dbName, connection.userName, connection.userPwd, config);
