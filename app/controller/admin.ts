import { Controller } from 'egg';
import { Prefix, Get, Query, Post, Body } from '@lima/egg-aop-decorator';

@Prefix('/api/admin')
export default class AdminController extends Controller {
    @Get('/getList')
    public async getList() {
        this.ctx.body = await this.service.admin.getAdminList();
    }

    @Get('/getDetailById')
    public async getDetailById(@Query('id') id: number) {
        this.ctx.body = await this.service.admin.getAdminById(id);
    }

    @Post('/createOne')
    public async createOne(@Body('power') power: number,
        @Body('admin') admin: string,
        @Body('password') password: string,
    ) {
        const data = await this.service.admin.createAdmin(admin, password, power);
        this.ctx.body = data;
    }
}
