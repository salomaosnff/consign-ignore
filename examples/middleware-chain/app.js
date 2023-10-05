/*!
 * Consign Ignore.
 * Autoload your scripts.
 *
 * @author Engajei LLC <oi@engajei.com.br>
 * @license MIT
 */

// Module dependencies.
var chain = require('middleware-chain')
  , consign = require('../../')
  , app = { name: 'my-app' }
;

// Load middleware using consign.
consign().include('middleware').into(app);

// Chain all three functions.
chain([
  app.middleware.one.run,
  app.middleware.two.run,
  app.middleware.three.run
]);
