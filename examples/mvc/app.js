/*!
 * Consign Ignore.
 * Autoload your scripts.
 *
 * @author Engajei LLC <oi@engajei.com.br>
 * @license MIT
 */

var consign = require('../../')
  , app = {}
;

consign()
  .include('models')
  .then('controllers')
  .then('routers')
  .into(app)
;

console.log(app);
