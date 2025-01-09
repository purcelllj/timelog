const fs = require('fs');
const defaultPath = 'C:\\users\\liam.purcell\\documents\\timelog.log';

function deleteLogs() {
  fs.existsSync(defaultPath) && fs.rmSync(defaultPath);
}

deleteLogs();