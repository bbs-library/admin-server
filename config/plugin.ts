import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
    // static: true,
    redis: {
        enable: true,
        package: 'egg-redis',
    },
    sequelize: {
        enable: true,
        package: 'egg-sequelize',
    },
    // decoratorRouter: {
    //     enable: true,
    //     package: '@lima/egg-aop-decorator',
    // },
};

export default plugin;
