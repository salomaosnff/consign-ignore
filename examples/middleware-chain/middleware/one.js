/*!
 * Consign Ignore.
 * Autoload your scripts.
 *
 * @author Engajei LLC <oi@engajei.com.br>
 * @license MIT
 */

module.exports = function(app) {

  this.run = function(context, next) {
    setTimeout(function() {
      context.one = 'Hello';
      console.log('Hello from one', context);
      return next();
    }, 1000);
  }

  // Return this module.
  return this;

};
