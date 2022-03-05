import { Application } from 'egg';
import { BuildOptions, Model } from 'sequelize';
interface ArticleTypes extends Model {
    readonly id: number;
    articleID: string;
    author: string;
    authorID: string;
    title: string;
    content: string;
    createAt: Date;
    tagName: string;
    tagCode: string;
    agrees: string;
    disagrees: string;
    comments: string;
    collects: string;
    noInterests: string;
    accusation: string;
}

type ArticleModelStatic = typeof Model & {
    new(values?: Record<string, unknown>, options?: BuildOptions): ArticleTypes;
};

const ArticleModel: (app: Application) => ArticleModelStatic = (app: Application) => {

    const { INTEGER, STRING, DATEONLY, TEXT } = app.Sequelize;

    return app.model.define('article', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        articleID: { type: STRING(255), allowNull: false },
        author: { type: STRING(255), allowNull: false },
        authorID: { type: STRING(255), allowNull: false },
        title: { type: STRING(255), allowNull: false },
        content: { type: TEXT('long'), allowNull: false },
        createAt: { type: DATEONLY, allowNull: false },
        tagName: { type: STRING(255), allowNull: false },
        tagCode: { type: STRING(255), allowNull: false },
        agrees: { type: STRING(255), defaultValue: null },
        disagrees: { type: STRING(255), defaultValue: null },
        comments: { type: STRING(255), defaultValue: null },
        collects: { type: STRING(255), defaultValue: null },
        noInterests: { type: STRING(255), defaultValue: null },
        accusation: { type: STRING(255), defaultValue: null },
    }, {
        freezeTableName: true,
        timestamps: false,
    });

};

export default ArticleModel;
