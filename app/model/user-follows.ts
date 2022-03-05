import { Application } from 'egg';
import { BuildOptions, Model } from 'sequelize';
interface UserFollowsTypes extends Model {
    readonly id: number;
    userID: number;
    createAt: Date;
    topicID: string;
}

type UserFollowsModelStatic = typeof Model & {
    new(values?: Record<string, unknown>, options?: BuildOptions): UserFollowsTypes;
};

const UserFollowsModel: (app: Application) => UserFollowsModelStatic = (app: Application) => {

    const { INTEGER, STRING, DATEONLY } = app.Sequelize;

    return app.model.define('userfollows', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        userID: { type: INTEGER, unique: 'userfollows', allowNull: false },
        topicID: { type: STRING(255), unique: 'userfollows', allowNull: false },
        createAt: { type: DATEONLY, unique: 'userfollows' },
    }, {
        freezeTableName: true,
        timestamps: false,
    });

};

module.exports = UserFollowsModel;
