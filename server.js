const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.blog = require('./api/models/blogModel');
const routes = require('./api/routes/blogRoutes');
const { config } = require('./api/config/db.config')

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(config.connection, { useNewUrlParser: true });

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('dist'))

routes(app);

app.get('*', (req, res) => {
  res.sendFile('dist/index.html')
})
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server Listening on port ${port}`);