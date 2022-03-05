import { Application } from 'egg';
import { BuildOptions, Model } from 'sequelize';
interface ExploreTypes extends Model {
    readonly id: number;
    title: string;
    time: string;
    city: string;
    cityCode: string;
    imgSrc: string;
    link: string;
    type: string;
}

type ExploreModelStatic = typeof Model & {
    new(values?: Record<string, unknown>, options?: BuildOptions): ExploreTypes;
};

const ExploreModel: (app: Application) => ExploreModelStatic = (app: Application) => {

    const { INTEGER, STRING } = app.Sequelize;

    return app.model.define('explore', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        title: { type: STRING(255), allowNull: false },
        time: { type: STRING(255), allowNull: false },
        city: { type: STRING(255), allowNull: false },
        cityCode: { type: STRING(255), allowNull: false },
        imgSrc: { type: STRING(255), allowNull: false },
        link: { type: STRING(255), allowNull: false },
        type: { type: STRING(255), allowNull: false },
    }, {
        freezeTableName: true,
        timestamps: false,
    });

};

export default ExploreModel;
