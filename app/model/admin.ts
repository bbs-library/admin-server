import { Application } from 'egg';
import { BuildOptions, Model } from 'sequelize';
interface AdminTypes extends Model {
    readonly id: number;
    power: number;
    createAt: Date;
    admin: string;
    password: string;
}

type AdminModelStatic = typeof Model & {
    new(values?: Record<string, unknown>, options?: BuildOptions): AdminTypes;
};

const AdminModel: (app: Application) => AdminModelStatic = (app: Application) => {

    const { INTEGER, STRING, DATEONLY } = app.Sequelize;

    return app.model.define('admin', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        power: { type: INTEGER, unique: 'admin' },
        admin: { type: STRING, unique: 'admin' },
        createAt: { type: DATEONLY, unique: 'admin' },
        password: { type: STRING, unique: 'admin' },
    }, {
        freezeTableName: true,
        timestamps: false,
    });

};

module.exports = AdminModel;
