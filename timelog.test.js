const chai = require('chai');
const assert = chai.assert;
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const logToFile = require('./timelog');
const testPath = 'C:\\users\\liam.purcell\\Documents\\testTimeLog.log';

describe('File logging tests', () => {
  afterEach(() => {
    fs.existsSync(testPath) && fs.rmSync(testPath);
  }); 

  it('should write new log message happy path', () => {
    let logString = `Test log message: ${uuidv4()}`;
    logToFile(testPath, logString);
    assert.include(`${fs.readFileSync(testPath)}`, logString);
  });
});