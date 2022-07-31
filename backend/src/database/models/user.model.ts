import { Sequelize, DataTypes, Model } from 'sequelize';

declare global {
  interface User extends TimeStampModel {
    id: string;
    email: string;
    password: string;
    name: string;
  }
}

type UserCreateInterface = Pick<User, 'email'>;

export class UserModel
  extends Model<User, UserCreateInterface>
  implements User, TimeStampModel
{
  public id!: string;
  public email!: string;
  public password!: string;
  public name!: string;
  public createdAt: Date | undefined;
  public updatedAt: Date | undefined;
  public deletedAt: Date | null | undefined;
}

export const UserModelGenerator = (sequelize: Sequelize): typeof UserModel => {
  UserModel.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'User',
      timestamps: true,
      paranoid: true,
    },
  );

  return UserModel;
};
