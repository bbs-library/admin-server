import { Controller } from 'egg';
import { Prefix, Get, Query, Post, Body } from '@lima/egg-aop-decorator';

@Prefix('/api/admin')
export default class AdminController extends Controller {
    @Get('/getList')
    public async getList() {
        const data = await this.ctx.model.Admin.findAll();
        this.ctx.body = data;
    }

    @Get('/getDetailById')
    public async getDetailById(@Query('id') id: number) {
        const data = await this.ctx.model.Admin.findOne({ where: { id } });
        this.ctx.body = data;
    }

    @Post('/createOne')
    public async createOne(@Body('power') power: number,
        @Body('admin') admin: string,
        @Body('password') password: string,
    ) {
        const data = await this.ctx.model.Admin.create({ admin, password, power, createAt: new Date() });
        this.ctx.body = data;
    }
}
