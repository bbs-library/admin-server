import { Application } from 'egg';
import { BuildOptions, Model } from 'sequelize';
interface CommentTypes extends Model {
    readonly id: number;
    parentID: number;
    userID: number;
    createAt: Date;
    content: string;
    articleID: number;
}

type CommentModelStatic = typeof Model & {
    new(values?: Record<string, unknown>, options?: BuildOptions): CommentTypes;
};

const CommentModel: (app: Application) => CommentModelStatic = (app: Application) => {

    const { INTEGER, DATEONLY, TEXT } = app.Sequelize;

    return app.model.define('comment', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        parentID: { type: INTEGER },
        userID: { type: INTEGER },
        articleID: { type: INTEGER },
        content: { type: TEXT('long') },
        createAt: { type: DATEONLY },
    }, {
        freezeTableName: true,
        timestamps: false,
    });

};

export default CommentModel;
