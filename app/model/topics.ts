import { Application } from 'egg';
import { BuildOptions, Model } from 'sequelize';
interface TopicTypes extends Model {
    readonly id: number;
    topicID: string;
    topicName: string;
    topicSum: string;
    topicImg: string;
    topicTitle: string;
    createAt: Date;
}

type TopicModelStatic = typeof Model & {
    new(values?: Record<string, unknown>, options?: BuildOptions): TopicTypes;
};

const TopicModel: (app: Application) => TopicModelStatic = (app: Application) => {

    const { INTEGER, STRING, DATEONLY } = app.Sequelize;

    return app.model.define('topics', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        topicID: { type: STRING, allowNull: false },
        topicName: { type: STRING, allowNull: false },
        topicSum: { type: STRING, allowNull: false },
        topicImg: { type: STRING, allowNull: false },
        topicTitle: { type: STRING, allowNull: false },
        createAt: { type: DATEONLY },
    }, {
        freezeTableName: true,
        timestamps: false,
    });

};

export default TopicModel;
