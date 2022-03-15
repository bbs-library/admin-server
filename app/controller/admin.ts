import { Controller } from 'egg';
import { Prefix, Get, Query, Post, Body, Param, Nullable } from '@package/egg-router-decorator';

@Prefix('/api/admin')
export default class AdminController extends Controller {

    // 登陆
    @Post('/login')
    public async adminLogin(@Body('admin') admin: string, @Body('password') password: string) {
        this.ctx.body = await this.service.admin.login({ admin, password });
    }

    // 新增管理员
    @Post('/')
    public async create(@Body('power') power: number = 1,
        @Body('admin') admin: string,
        @Body('password') password: string,
    ) {
        this.ctx.body = await this.service.admin.createAdmin(admin, password, power);
    }

    // 查询所有管理员
    @Get('/')
    public async list(@Query('page') page: number = 1,
        @Query('pageSize') pageSize: number = 10,
        @Query('name') @Nullable name?: string,
    ) {
        this.ctx.body = await this.service.admin.getAdminList(page, pageSize, name);
    }

    // 通过id查询详情
    @Get('/:id')
    public async getDetailById(@Param('id') id: number) {
        this.ctx.body = await this.service.admin.getAdminById(id);
    }

}
