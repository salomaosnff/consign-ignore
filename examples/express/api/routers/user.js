/*!
 * Consign Ignore.
 * Autoload your scripts.
 *
 * @author Engajei LLC <oi@engajei.com.br>
 * @license MIT
 */

module.exports = function(app) {

  var user = app.middleware.user;

  app.get('/', user.index);
  app.get('/users', user.getAll);
  app.get('/users/:name', user.getByName);

  return this;

};
