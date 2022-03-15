import RouteShell from '@package/egg-router-decorator';
import { Application, IBoot } from 'egg';

export default class FooBoot implements IBoot {
    private readonly app: Application;

    constructor(app: Application) {
        this.app = app;
    }

    configWillLoad() {
        require('module-alias/register');
    }

    async didLoad() {
        RouteShell(this.app);
        await this.app.model.sync();
    }
}
