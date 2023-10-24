import { Sequelize } from 'sequelize';

import config from "../config/index"


const sequelize = new Sequelize(config.database, config.user, config.password, {

    port: Number(config.port),
    host: config.hostname,
    dialect: 'postgres',
    pool:{
        max:10,
        min:0,
        acquire:20000,
        idle:5000
    }
});


export default sequelize