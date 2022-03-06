import { MYSQL_DATABASE, MYSQL_PASSWORD, MYSQL_USERNAME } from './mysql.config';
import { REDIS_PWD } from './redis.config';

exports.redis = {
    client: {
        port: 6379, // Redis port
        host: 'localhost', // Redis host
        password: REDIS_PWD,
        db: 0,
    },
};

exports.sequelize = {
    dialect: 'mysql',
    database: MYSQL_DATABASE,
    host: 'localhost',
    port: 3306,
    username: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
};
