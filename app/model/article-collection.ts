import { Application } from 'egg';
import { BuildOptions, Model } from 'sequelize';
interface ArticleCollectionTypes extends Model {
    readonly id: number;
    createAt: Date;
    articleID: string;
    userID: string;
}

type ArticleCollectionModelStatic = typeof Model & {
    new(values?: Record<string, unknown>, options?: BuildOptions): ArticleCollectionTypes;
};

const ArticleCollectionModel: (app: Application) => ArticleCollectionModelStatic = (app: Application) => {

    const { INTEGER, STRING, DATEONLY } = app.Sequelize;

    return app.model.define('articlecollection', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        articleID: { type: STRING(255) },
        createAt: { type: DATEONLY },
        userID: { type: STRING(255) },
    }, {
        freezeTableName: true,
        timestamps: false,
    });

};

export default ArticleCollectionModel;
