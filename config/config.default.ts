import { EggAppConfig } from "egg";

export default () => {

    const config: EggAppConfig = {} as EggAppConfig;
    
    config.keys = 'bbs-library';
    
    config.redis = {
        clients: {
            foo: {                 // instanceName. See below
                port: 6379,          // Redis port
                host: '127.0.0.1',   // Redis host
                password: 'auth',
                db: 0,
            },
            bar: {
                port: 6379,
                host: '127.0.0.1',
                password: 'auth',
                db: 1,
            },
        }
    }
    
    config.sequelize = {
        // dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        // database: 'bbs',
        // host: '47.94.252.72',
        // port: 3306,
        username: 'lokep',
        password: 'lou1996@',
        connectionUri: "mysql://47.94.252.72:3306/bbs"
        // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
        // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
        // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
        // more sequelize options
    }
  
    return config;
};

export const view = {
    defaultViewEngine: 'ejs',
    mapping: {
      '.html': 'ejs',
    },
};
