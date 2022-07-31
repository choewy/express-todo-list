import { PORT } from './common/constants';
import app from './app';
import db from './database/db';

const bootstrap = () => {
  const logging = () => console.log(`running on port ${PORT}`);
  app.listen(PORT, logging);
};

db.sequelize
  .sync({ force: false })
  .then(() => bootstrap())
  .catch((error) => console.log(error));
