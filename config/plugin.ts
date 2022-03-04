import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
    // static: true,
    ejs: {
        enable: true,
        package: 'egg-view-ejs',
    },
    redis: {
        enable: true,
        package: 'egg-redis',
    },
    sequelize: {
        enable: true,
        package: 'egg-sequelize',
    },
    decoratorRouter: {
        enable: true,
        package: 'egg-decorator-router',
    }
};

export default plugin;
