import { Controller } from 'egg';
import { Body, Delete, Get, Nullable, Param, Post, Prefix, Query } from '@package/egg-router-decorator';

@Prefix('/api/activity')
export default class ActivityController extends Controller {

    // 查询活动
    @Get('/')
    public async list(@Query('page') page: number = 1,
        @Query('pageSize') pageSize: number = 10,
        @Query('title') @Nullable title?: string,
    ) {
        this.ctx.body = await this.ctx.service.getActivityList(page, pageSize, title);
    }

    // 查询活动详情
    @Get('/:id')
    public async detail(@Param('id') id: number) {
        this.ctx.body = await this.ctx.service.getActivityDetail(id);
    }

    // 创建活动
    @Post('/')
    public async create(@Body('title') title: string,
        @Body('time') time: string,
        @Body('city') city: string,
        @Body('cityCode') cityCode: string,
        @Body('imgSrc') imgSrc: string,
        @Body('type') type: string,
        @Body('link') link: string,
    ) {
        this.ctx.body = await this.ctx.service.activity.createActivity(title, time, city, cityCode, imgSrc, type, link);
    }

    // 删除活动
    @Delete('/:id')
    public async delete(@Param('id') id: number) {
        this.ctx.body = await this.ctx.service.activity.deleteActivity(id);
    }
}
