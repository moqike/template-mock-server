const assert = require('assert');
const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const sinon = require('sinon');
const inquirer = require('inquirer');
const generate = require('../lib/generate');
const testFolderPath = path.resolve(__dirname, '../_test');

const sandbox = sinon.createSandbox();

describe('Generate Test', function() {
  describe('generate()', function() {
    before(function(done) {
      // clean up _test folder
      rimraf(testFolderPath, function (err) {
        fs.mkdirSync(testFolderPath);
        done();
      });
    });
    afterEach(function () {
      sandbox.restore();
    });
    it('should generate mock server', async function() {
      await generate(testFolderPath);
      const mockServerPath = path.resolve(testFolderPath, 'mock-server')
      assert.ok(
        fs.existsSync(mockServerPath)
        && fs.existsSync(path.resolve(mockServerPath, 'mock-home'))
        && fs.existsSync(path.resolve(mockServerPath, 'server.ts'))
      );
    });
  });
});