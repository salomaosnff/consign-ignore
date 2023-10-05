/*!
 * Consign Ignore.
 * Autoload your scripts.
 *
 * @author Engajei LLC <oi@engajei.com.br>
 * @license MIT
 */


// Module dependencies.
var path = require('path');

module.exports = function(consign, assert) {

    // Test setup.
    var cwd = 'test/test-app'
        , verbose = false
        ;

    it('Should include a single file', function() {
        var instance = consign({verbose: verbose}).include('test/test-app/controllers/one.js')
            , file = path.resolve('test/test-app/controllers/one.js')
            ;
        assert.deepEqual([file], instance._files);
    });

    it('Should include all test files in the test app', function() {
        var instance = consign({verbose: verbose, ignore: [/ignored-file.js/]}).include('test/test-app')
            , files = [
                'test/test-app/config/dev-config.json',
                'test/test-app/controllers/four.js',
                'test/test-app/controllers/one.js',
                'test/test-app/controllers/three.js',
                'test/test-app/controllers/two.js',
                'test/test-app/models/four.js',
                'test/test-app/models/one.js',
                'test/test-app/models/three.js',
                'test/test-app/models/two.js'
            ].map(function(file) {
                return path.resolve(file);
            })
            ;
        assert.deepEqual(files, instance._files);
    });

    it('Using CWD test/test-app, should load all test files', function() {
        var instance = consign({cwd: cwd, verbose: verbose}).include('models').then('controllers')
            , files = [
                'models/four.js',
                'models/one.js',
                'models/three.js',
                'models/two.js',
                'controllers/four.js',
                'controllers/one.js',
                'controllers/three.js',
                'controllers/two.js'
            ].map(function(file) {
                return path.resolve(path.join(cwd, file));
            })
            ;
        assert.deepEqual(files, instance._files);
    });

    it('Should include all test files in the test app, loading models first', function() {
        var instance = consign({verbose: verbose}).include('test/test-app/models').then('test/test-app')
            , files = [
                'test/test-app/models/four.js',
                'test/test-app/models/one.js',
                'test/test-app/models/three.js',
                'test/test-app/models/two.js',
                'test/test-app/config/dev-config.json',
                'test/test-app/controllers/four.js',
                'test/test-app/controllers/one.js',
                'test/test-app/controllers/three.js',
                'test/test-app/controllers/two.js'
            ].map(function(file) {
                return path.resolve(file);
            })
            ;
        assert.deepEqual(files, instance._files);
    });

    it('Should include test files loaded in via comma separated string', function() {
        var instance = consign({cwd: cwd, verbose: verbose}).include('models, controllers')
            , files = [
                'models/four.js',
                'models/one.js',
                'models/three.js',
                'models/two.js',
                'controllers/four.js',
                'controllers/one.js',
                'controllers/three.js',
                'controllers/two.js'
            ].map(function(file) {
                return path.resolve(path.join(cwd, file));
            })
            ;
        assert.deepEqual(files, instance._files);
    });

    it('Should include controller files in specific file order loaded in via comma separated string', function() {
        var instance = consign({cwd: cwd, verbose: verbose}).include('controllers/one.js, controllers/two.js, controllers/three.js, controllers/four.js')
            , files = [
                'controllers/one.js',
                'controllers/two.js',
                'controllers/three.js',
                'controllers/four.js'

            ].map(function(file) {
                return path.resolve(path.join(cwd, file));
            })
            ;
        assert.deepEqual(files, instance._files);
    });

    it('Should include model files in specific file order loaded in via comma separated string', function() {
        var instance = consign({cwd: cwd, verbose: verbose}).include('models/one.js, models/two.js, models')
            , files = [
                'models/one.js',
                'models/two.js',
                'models/four.js',
                'models/three.js'
            ].map(function(file) {
                return path.resolve(path.join(cwd, file));
            })
            ;
        assert.deepEqual(files, instance._files);
    });

};

