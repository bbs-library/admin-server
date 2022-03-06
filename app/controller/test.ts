import { Controller } from 'egg';
import { Get, Prefix, Query } from '@lima/egg-aop-decorator';

@Prefix('/api/test')
export default class TestController extends Controller {

    @Get('/redis/get')
    public async getRedis(@Query('name') name: string) {

        // name = 'id' 有数据
        this.ctx.logger.info('redis', this.ctx.redis);
        const data = await this.app.redis.get(name);
        this.ctx.body = data;
    }

    @Get('/redis/set')
    public async setRedis(@Query('name') name: string,
        @Query('value') value: string,
    ) {

        const data = await this.app.redis.set(name, value);
        this.ctx.body = data;
    }
}
