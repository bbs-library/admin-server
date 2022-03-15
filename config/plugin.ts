import { EggPlugin } from 'egg';
require('module-alias/register');

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
};

export default plugin;
