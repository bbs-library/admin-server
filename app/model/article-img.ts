import { Application } from 'egg';
import { BuildOptions, Model } from 'sequelize';
interface AdminTypes extends Model {
    readonly id: number;
    aid: string;
    createAt: Date;
    path: string;
    name: string;
}

type AdminModelStatic = typeof Model & {
    new(values?: Record<string, unknown>, options?: BuildOptions): AdminTypes;
};

const AdminModel: (app: Application) => AdminModelStatic = (app: Application) => {

    const { INTEGER, STRING, DATEONLY } = app.Sequelize;

    return app.model.define('articleimg', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        aid: { type: STRING(255), allowNull: false },
        path: { type: STRING(255) },
        name: { type: STRING(255) },
        createAt: { type: DATEONLY },
    }, {
        freezeTableName: true,
        timestamps: false,
    });

};

export default AdminModel;
