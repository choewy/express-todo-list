import { Sequelize, DataTypes, Model } from 'sequelize';

declare global {
  interface Group extends TimeStampModel {
    id: string;
    title: string;
    summary: string;
    userId?: string;
    todos?: Todo[];
  }
}

type GroupCreateInterface = Pick<Group, 'title'>;

export class GroupModel
  extends Model<Group, GroupCreateInterface>
  implements Group
{
  public id!: string;
  public title!: string;
  public summary!: string;
  public createdAt: Date | undefined;
  public updatedAt: Date | undefined;
  public deletedAt: Date | null | undefined;
  public todos?: Todo[];
}

export const GroupModelGenerator = (
  sequelize: Sequelize,
): typeof GroupModel => {
  GroupModel.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      summary: {
        type: DataTypes.STRING,
        defaultValue: '',
      },
    },
    {
      sequelize,
      modelName: 'Group',
      tableName: 'Group',
      timestamps: true,
      paranoid: true,
    },
  );

  return GroupModel;
};
