const fs = require('fs');

function getTimeStamp() {
  let dateTime = new Date();
  let year = dateTime.getUTCFullYear();
  let month = dateTime.getUTCMonth() + 1;
  let day = dateTime.getUTCDate();
  let hours = dateTime.getUTCHours();
  let minutes = dateTime.getUTCMinutes();
  let seconds = dateTime.getUTCSeconds();
  let ms = dateTime.getUTCMilliseconds();

  if (month < 10) {
    month = `0${month}`;
  }

  if (day < 10) {
    day = `0${day}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (ms < 100 && ms >= 10) {
    ms = `0${ms}`;
  }

  if (ms < 10) {
    ms = `00${ms}`;
  }

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${ms}`;
}

function logToFile(path, msg) {
  let dateTime = getTimeStamp();
  let log = `${dateTime} UTC | ${msg}\n`;

  try {
    fs.appendFileSync(path, log, 'utf8');
  } catch (err) {
    console.error(
      `Problem occurred when attempting to create log entry. ERROR:\n${err}`
    );
    throw err;
  }
}

module.exports = logToFile;
