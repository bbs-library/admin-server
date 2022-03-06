import { EggAppConfig } from 'egg';

export default () => {

    const config: EggAppConfig = {} as EggAppConfig;

    config.keys = 'bbs-library';

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
