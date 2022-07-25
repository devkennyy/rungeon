/* eslint-env node */

const express = require('express');
const rungeon = express();
const port = 3000;

rungeon.use(express.static(__dirname + '/public'));

rungeon.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
