import { Service } from 'egg';

export default class AdminService extends Service {
    private adminModel = this.ctx.model.Admin;

    // 登陆
    public async login({ admin, password }) {
        const data = await this.adminModel.findOne({ where: { admin, password } });
        if (data?.id) {
            delete data.password;
            return {
                data,
                status: 200,
                message: '登陆成功',
            };
        }
        return {
            status: 404,
            message: '没有查询到该用户的相关信息',
        };
    }

    // 新增管理员
    public async createAdmin(admin: string, password: string, power: number) {
        const result = await this.adminModel.findOne({ where: { admin } });
        this.ctx.logger.info('result', result);
        if (result) {
            return {
                status: 400,
                message: '该用户已注册',
            };
        }
        await this.adminModel.findOrCreate({
            where: { admin },
            defaults: { admin, password, power, createAt: new Date() },
        });

        return {
            status: 200,
            message: '操作成功',
        };
    }

    // 获取admin管理员列表
    public async getAdminList(page: number, pageSize: number, admin?: string) {
        const query = {
            limit: pageSize,
            offset: pageSize * (page - 1),
        };
        const data = await this.adminModel.findAndCountAll(admin
            ? {
                where: { admin },
                ...query,
            }
            : query,
        );

        return {
            status: 200,
            message: '查询成功',
            data,
        };
    }

    // 通过id查询管理员
    public async getAdminById(id: number) {
        const data = await this.adminModel.findByPk(id);
        if (data) {
            return {
                status: 200,
                message: '查询成功',
                data,
            };
        }
        return {
            status: 404,
            message: '没有查询到此账户的相关信息',
        };
    }

}
