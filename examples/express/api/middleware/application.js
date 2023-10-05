/*!
 * Consign Ignore.
 * Autoload your scripts.
 *
 * @author Engajei LLC <oi@engajei.com.br>
 * @license MIT
 */

module.exports = function(app) {
  app.get('/', function(req, res, next) {
    res.send('hello');
  });

  return this;
};
