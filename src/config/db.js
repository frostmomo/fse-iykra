const { Sequelize } = require('sequelize');
require('dotenv').config();

const isDocker = process.env.IS_DOCKER === 'true';
const dbHost = isDocker ? 'db' : 'localhost';
const portLocal = isDocker ? process.env.DB_DOCKER_PORT : process.env.DB_LOCAL_PORT;

const connectWithRetry = () => {
    const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        logging: false,
        username: process.env.DB_USER,
        host: dbHost,
        port: portLocal,
    });

    sequelize.authenticate()
        .then(() => console.log('Database connected successfully'))
        .catch((err) => {
            console.error('Database connection failed, retrying...', err);
            setTimeout(connectWithRetry, 5000);
        });

    return sequelize;
};

const sequelize = connectWithRetry();
module.exports = sequelize;