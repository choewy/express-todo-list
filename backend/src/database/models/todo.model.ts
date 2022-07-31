import { Sequelize, DataTypes, Model } from 'sequelize';

declare global {
  interface Todo extends TimeStampModel {
    id: string;
    content: string;
    order: number;
    done: boolean;
    userId?: string;
    groupId?: string;
  }
}

type TodoCreateInterface = Pick<Todo, 'content'>;

export class TodoModel
  extends Model<Todo, TodoCreateInterface>
  implements Todo
{
  public id!: string;
  public content!: string;
  public order!: number;
  public done!: boolean;
  public createdAt: Date | undefined;
  public updatedAt: Date | undefined;
  public deletedAt: Date | null | undefined;
}

export const TodoModelGenerator = (sequelize: Sequelize): typeof TodoModel => {
  TodoModel.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      content: {
        type: DataTypes.TEXT,
      },
      order: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'Todo',
      tableName: 'Todo',
      timestamps: true,
      paranoid: true,
    },
  );

  return TodoModel;
};
