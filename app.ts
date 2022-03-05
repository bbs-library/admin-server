import RouteShell from '@lima/egg-aop-decorator';
import { Application, IBoot } from 'egg';

export default class FooBoot implements IBoot {
    private readonly app: Application;

    constructor(app: Application) {
        this.app = app;
    }

    async didLoad() {
        RouteShell(this.app);
        await this.app.model.sync();
    }
}
