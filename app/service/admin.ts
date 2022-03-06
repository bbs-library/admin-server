import { Service } from 'egg';

export default class AdminService extends Service {
    private adminModel = this.ctx.model.Admin;

    // 获取admin管理员列表
    public getAdminList() {
        return this.adminModel.findAll();
    }

    // 通过id查询管理员
    public getAdminById(id: number) {
        return this.ctx.model.Admin.findOne({ where: { id } });
    }

    // 创建一个管理员
    public createAdmin(admin: string, password: string, power: number) {
        return this.ctx.model.Admin.create({ admin, password, power, createAt: new Date() });
    }

}
