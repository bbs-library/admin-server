import { Service } from 'egg';
import { Op } from 'sequelize';

export default class UserService extends Service {
    private userModel = this.ctx.model.Userinfo;

    // 查询用户
    public async getAllUser(page: number, limit: number, searchValue?: string) {
        const query = searchValue
            ? {
                where: {
                    [Op.or]: {
                        phone: {
                            [Op.like]: `%${searchValue}%`,
                        },
                        email: {
                            [Op.like]: `%${searchValue}%`,
                        },
                    },
                },
            }
            : {};
        const data = await this.userModel.findAndCountAll({
            ...query,
            limit,
            offset: (page - 1) * limit,
        });
        if (data) {
            return {
                status: 200,
                message: '查询成功',
                data,
            };
        }
        return {
            status: 400,
            message: '查询失败',
        };
    }

    // 用户详情
    public async getUserDetail(id: number) {
        const data = await this.userModel.findByPk(id);
        if (data) {
            return {
                status: 200,
                message: '查询成功',
                data,
            };
        }
        return {
            status: 404,
            message: '未找到该用户的相关信息',
        };
    }

    // 删除用户
    public async deleteUser(id: number) {
        const data = await this.userModel.destroy({
            where: {
                id,
            },
        });

        if (data > 0) {
            return {
                status: 200,
                message: '操作成功',
            };
        }
        return {
            status: 400,
            message: '操作失败',
        };
    }

    // 冻结/解冻用户
    public async frozenUser(id: number, state: number) {
        const data = await this.userModel.update({
            state,
        }, {
            where: {
                id,
            },
        });

        this.ctx.logger.info('data', data, data[0]);

        if (data && data[0] > 0) {
            return {
                status: 200,
                message: '操作成功',
            };
        }

        return {
            status: 400,
            message: '操作失败',
        };

    }
}
