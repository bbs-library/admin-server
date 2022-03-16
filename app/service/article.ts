import { Op } from 'sequelize';
import { Service } from 'egg';

export default class ArticleService extends Service {
    private articleModel = this.ctx.model.Article;

    // 查询文章
    public async getAllArticles(page: number, limit: number, searchValue?: string) {
        const query = searchValue
            ? {
                where: {
                    title: {
                        [Op.like]: `%${searchValue}%`,
                    },
                },
            }
            : {};
        const data = await this.articleModel.findAndCountAll({
            ...query,
            limit,
            offset: (page - 1) * limit,
        });
        return {
            status: 200,
            message: '查询成功',
            data,
        };
    }

    // 文章详情
    public async getArticleById(id: number) {
        const data = await this.articleModel.findByPk(id);
        if (data) {
            return {
                status: 200,
                message: '查询成功',
                data,
            };
        }
        return {
            status: 404,
            message: '没有查询相关文章',
        };
    }

    // 删除文章
    public async delArticleById(id: number) {
        const data = await this.articleModel.destroy({
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
            message: '没有找到这篇文章',
        };
    }

}
