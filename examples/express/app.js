/*!
 * Consign Ignore.
 * Autoload your scripts.
 *
 * @author Engajei LLC <oi@engajei.com.br>
 * @license MIT
 */

var express = require('express')
  , consign = require('../../')
  , app = express()
;

consign({cwd: 'api'})
  .include('models')
  .then('middleware')
  .then('routers')
  .into(app)
;

app.listen(3000, function() {
  console.log('App listening on 3000');
});
