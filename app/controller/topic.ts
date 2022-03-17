import { Controller } from 'egg';
import { Body, Delete, Get, Nullable, Param, Post, Prefix, Query } from '@package/egg-router-decorator';

@Prefix('/api/topic')
export default class TopicController extends Controller {

    // 查询话题
    @Get('/')
    public async list(@Query('page') page: number = 1,
        @Query('pageSize') pageSize: number = 10,
        @Query('name') @Nullable name?: string,
    ) {
        this.ctx.body = await this.service.topic.getAllTopic(page, pageSize, name);
    }

    // 话题详情
    @Get('/:id')
    public async detail(@Query('id') id: number) {
        this.ctx.body = await this.service.topic.getTopicDetail(id);
    }

    // 创建话题
    @Post('/')
    public async create(@Body('topicName') topicName: string,
        @Body('topicImg') topicImg: string,
        @Body('topicTitle') topicTitle: string,
        @Body('topicSum') topicSum: string,
    ) {
        this.ctx.body = await this.service.topic.createTopic({
            topicName,
            topicImg,
            topicTitle,
            topicSum,
            topicID: Date.now() + '',
            createAt: new Date(),
        });
    }

    // 删除话题
    @Delete('/:id')
    public async delete(@Param('id') id: number) {
        this.ctx.body = await this.service.topic.deteleTopicById(id);
    }
}
