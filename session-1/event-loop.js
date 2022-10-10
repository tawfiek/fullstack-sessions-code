const fs = require('fs');

function getSecretMessage (callback) {
  fs.readFile('secret-message.txt', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

getSecretMessage((err, data) => {
  const startCallback = Date.now();

  while (Date.now() - startCallback < 10) {
    // do nothing
  }

  console.log(data.toString() + '\n \n ');
});