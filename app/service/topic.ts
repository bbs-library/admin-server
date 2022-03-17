import { Service } from 'egg';
import { Op } from 'sequelize';
import { TopicTypes } from '../model/topics';

export default class TopicService extends Service {
    private topicModel = this.ctx.model.Topics;

    // 查询话题
    public async getAllTopic(page: number, limit: number, topicName?: string) {
        const query = topicName
            ? {
                where: {
                    topicName: {
                        [Op.like]: `%${topicName}%`,
                    },
                },
            }
            : {};

        const data = await this.topicModel.findAndCountAll({
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
            message: '查询失败，参数有误',
        };
    }

    // 话题详情
    public async getTopicDetail(id: number) {
        const data = await this.topicModel.findByPk(id);
        if (data) {
            return {
                status: 200,
                message: '查询成功',
                data,
            };
        }
        return {
            status: 400,
            message: '没有查询到此话题的相关信息',
        };
    }

    // 创建话题
    public async createTopic(content: Partial<TopicTypes>) {
        const result = await this.topicModel.findOne({
            where: {
                topicName: content.topicName,
            },
        });
        if (result) {
            return {
                status: 400,
                message: '此话题已存在，请修改话题标题',
            };
        }
        const data = await this.topicModel.create({ ...content });
        if (data.id) {
            return {
                status: 200,
                message: '创建成功',
                data,
            };
        }
        return {
            status: 400,
            message: '参数有误',
        };
    }

    // 删除话题
    public async deteleTopicById(id: number) {
        const data = await this.topicModel.destroy({
            where: {
                id,
            },
        });

        if (data > 0) {
            return {
                status: 200,
                message: '删除成功',
            };
        }

        return {
            status: 400,
            message: '删除失败，没有查询到此话题的相关信息',
        };
    }
}
