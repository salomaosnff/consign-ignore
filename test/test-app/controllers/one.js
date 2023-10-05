/*!
 * Consign Ignore.
 * Autoload your scripts.
 *
 * @author Engajei LLC <oi@engajei.com.br>
 * @license MIT
 */

module.exports = function(app, modify) {
  if (modify) this.run = true;
  this.hello = "hi";
  return this;
};
