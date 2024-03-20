const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const { Sequelize } = require('sequelize');

const { port } = require('./config');
const PORT = process.env.PORT || port;

const AuthorizationRoutes = require('./authorization/routes');
const UserRoutes = require('./users/routes');
const ProductRoutes = require('./products/routes');

const UserModel = require('./common/models/User');
const ProductModel = require('./common/models/Product');

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/storage/data.db',
});

UserModel.initialise(sequelize);
ProductModel.initialise(sequelize);

sequelize
  .sync()
  .then(() => {
    console.log('Starting Sequelize');

    app.use('/', AuthorizationRoutes);
    app.use('/user', UserRoutes);
    app.use('/product', ProductRoutes);

    app.listen(PORT, () => {
      console.log('Server Listening on PORT:', port);
    });
  })
  .catch((error) => {
    console.error(error);
  });