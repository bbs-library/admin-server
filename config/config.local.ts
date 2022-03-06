import { REDIS_HOST, REDIS_PWD } from './redis.config';

exports.redis = {
    client: {
        port: 6379, // Redis port
        host: REDIS_HOST, // Redis host
        password: REDIS_PWD,
        db: 0,
    },
};

exports.sequelize = {
    dialect: 'mysql',
    database: 'bbs',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'lixin19940802',
};
