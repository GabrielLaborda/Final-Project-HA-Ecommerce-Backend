require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const APP_PORT = process.env.APP_PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.options('*', cors()); // include before other routes
app.use(cors());

app.use(express.json());
routes(app);

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});

process.on('SIGINT', function () {
  const { mongoose } = require('./db');
  mongoose.connection.close();
  process.exit(0);
});
