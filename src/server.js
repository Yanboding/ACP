/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const session = require('express-session');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');
const config = require('./webpack.config.js');
const backendRouting = require('./server/routing');
var logger = require('morgan');

const multiparty = require('connect-multiparty');
multiPartyware = multiparty();
const isDeveloping = process.env.PORT !== 'https://acpcanada.herokuapp.com/';
const port = isDeveloping ? 8849 : process.env.PORT;
const app = express();
app.use(logger('dev'));
// Back-end setup.
app.set('port',process.env.PORT || 8849);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(multiPartyware);
var router = express.Router();
backendRouting.setup(router);
app.use('/api', router);



// Front-end setup.
if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

// Establish connection.
app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('[server]: Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

process.on('SIGINT', () => {
    console.log('[server]: got SIGINT, bye bye!');
    process.exit();
});