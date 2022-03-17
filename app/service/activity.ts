import { Service } from 'egg';
import { Op } from 'sequelize';

export default class ActivityService extends Service {
    private activityModel = this.ctx.model.Explore;

    // 查询活动
    public async getActivityList(page: number, limit: number, title?: string) {
        const data = await this.activityModel.findAndCountAll({
            where: {
                title: {
                    [Op.like]: `%${title}%`,
                },
            },
            limit,
            offset: (page - 1) * limit,
        });

        return {
            status: 200,
            message: data.count > 0 ? '查询成功' : '暂无数据',
            data,
        };
    }

    // 查询活动详情
    public async getActivityDetail(id: number) {
        const data = await this.activityModel.findByPk(id);
        if (data) {
            return {
                status: 200,
                message: '查询成功',
                data,
            };
        }

        return {
            status: 404,
            message: '未查询到此活动相关内容',
        };
    }

    // 新增活动
    public async createActivity(
        title: string,
        time: string,
        city: string,
        cityCode: string,
        imgSrc: string,
        type: string,
        link: string,
    ) {
        const data = await this.activityModel.create({
            title,
            time,
            city,
            cityCode,
            imgSrc,
            type,
            link,
        });
        if (data.id) {
            return {
                status: 200,
                message: '创建成功',
                data,
            };
        }
        return {
            status: 400,
            message: '参数错误',
        };
    }

    // 删除活动
    public async deleteActivity(id: number) {
        const data = await this.activityModel.destroy({
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
            message: '操作失败，没有查询到相关活动',
        };
    }
}
