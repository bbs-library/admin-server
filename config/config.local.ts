import { REDIS_HOST, REDIS_PWD } from './redis.config';
import { MYSQL_DATABASE, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_USERNAME } from './mysql.config';

exports.redis = {
    client: {
        port: 6379, // Redis port
        host: REDIS_HOST, // Redis host
        password: REDIS_PWD,
        db: 0,
    },
};

// exports.sequelize = {
//     dialect: 'mysql',
//     database: 'bbs',
//     host: 'localhost',
//     port: 3306,
//     username: 'root',
//     password: 'lixin19940802',
//     define: {
//         underscored: false,
//     },
// };

exports.sequelize = {
    dialect: 'mysql',
    database: MYSQL_DATABASE,
    host: MYSQL_HOST,
    port: 3306,
    username: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    define: {
        underscored: false,
    },
};
