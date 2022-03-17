import { Controller } from 'egg';
import { Prefix, Get, Query, Nullable, Param, Delete, Body, Put } from '@package/egg-router-decorator';

@Prefix('/api/user')
export default class UserController extends Controller {

    // 查询用户
    @Get('/')
    public async list(@Query('page') page: number = 1,
        @Query('pageSize') pageSize: number = 10,
        @Query('searchValue') @Nullable searchValue?: string,
    ) {
        this.ctx.body = await this.service.user.getAllUser(page, pageSize, searchValue);
    }

    // 用户详情
    @Get('/:id')
    public async detail(@Param('id') id: number) {
        this.ctx.body = await this.service.user.getUserDetail(id);
    }

    // 删除用户
    @Delete('/:id')
    public async delete(@Param('id') id: number) {
        this.ctx.body = await this.service.user.deleteUser(id);
    }

    // 冻结/解冻用户
    @Put('/frozen')
    public async frozen(@Body('id') id: number,
        @Body('state') state: number,
    ) {
        this.ctx.body = await this.service.user.frozenUser(id, state);
    }
}
