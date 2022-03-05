import { Application } from 'egg';
import { BuildOptions, Model } from 'sequelize';
interface UserInfoTypes extends Model {
    readonly id: number;
    userID: string;
    userName: string;
    password: string;
    phone: string;
    email: string;
    state: number;
    createAt: Date;
}

type UserInfoModelStatic = typeof Model & {
    new(values?: Record<string, unknown>, options?: BuildOptions): UserInfoTypes;
};

const UserInfoModel: (app: Application) => UserInfoModelStatic = (app: Application) => {

    const { INTEGER, STRING, DATEONLY } = app.Sequelize;

    return app.model.define('userinfo', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        state: { type: INTEGER, unique: 'userinfo', allowNull: false },
        userID: { type: STRING(20), unique: 'userinfo', allowNull: false },
        userName: { type: STRING(255), unique: 'userinfo', allowNull: false },
        createAt: { type: DATEONLY, unique: 'userinfo', allowNull: false },
        password: { type: STRING(20), unique: 'userinfo', allowNull: false },
        phone: { type: STRING(11), unique: 'userinfo', allowNull: false },
        email: { type: STRING(255), unique: 'userinfo', allowNull: false },
    }, {
        freezeTableName: true,
        timestamps: false,
    });

};

export default UserInfoModel;
