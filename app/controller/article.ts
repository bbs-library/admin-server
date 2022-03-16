import { Controller } from 'egg';
import { Delete, Get, Nullable, Param, Prefix, Query } from '@package/egg-router-decorator';

@Prefix('/api/article')
export default class ArticleController extends Controller {

    // 查询文章
    @Get('/')
    public async list(@Query('page') page: number = 1,
        @Query('pageSize') pageSize: number = 10,
        @Query('searchValue') @Nullable searchValue?: string,
    ) {
        this.ctx.body = await this.service.article.getAllArticles(page, pageSize, searchValue);
    }

    @Get('/:id')
    public async detail(@Param('id') id: number) {
        this.ctx.body = await this.service.article.getArticleById(id);
    }

    @Delete('/:id')
    public async delete(@Param('id') id: number) {
        this.ctx.body = await this.service.article.delArticleById(id);
    }
}
