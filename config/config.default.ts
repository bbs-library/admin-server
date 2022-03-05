import { EggAppConfig } from 'egg';
// import { MYSQL_DATABASE, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_USERNAME } from './mysql.config';

export default () => {

    const config: EggAppConfig = {} as EggAppConfig;

    config.keys = 'bbs-library';

    // config.sequelize = {
    //     dialect: 'mysql',
    //     database: MYSQL_DATABASE,
    //     host: MYSQL_HOST || 'localhost',
    //     port: 3306,
    //     username: MYSQL_USERNAME,
    //     password: MYSQL_PASSWORD,
    // };

    // 解决post请求csrf token丢失的问题
    // 或者前后端设置预防攻击的请求头
    config.security = {
        csrf: {
            enable: false,
            // headerName: 'x-csrf-token',
        },
    } as EggAppConfig['security'];

    return config;
};
