const { Sequelize } = require('sequelize');

import config from "../config/index"


const sequelize = new Sequelize(config.database, config.user, config.password, {

    port: Number(config.port),
    host: config.hostname,
    dialect: 'postgres'
});


export default sequelize