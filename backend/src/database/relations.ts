export const relations = (db: DB) => {
  // User:Group = 1:N
  db.User.hasMany(db.Group, { foreignKey: 'userId', as: 'groups' });
  db.Group.belongsTo(db.User, { foreignKey: 'userId', as: 'user' });

  // User:Todo = 1:N
  db.User.hasMany(db.Todo, { foreignKey: 'userId', as: 'todos' });
  db.Todo.belongsTo(db.User, { foreignKey: 'userId', as: 'user' });

  // Group:Todo = 1:N
  db.Group.hasMany(db.Todo, { foreignKey: 'groupId', as: 'todos' });
  db.Todo.belongsTo(db.Group, { foreignKey: 'groupId', as: 'group' });
};
