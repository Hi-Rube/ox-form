const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.get('/example/*', (req, res) => {
  const ext = path.extname(req.path);
  const p = __dirname + req.path + (ext ? '' : '/index.html');

  if (fs.existsSync(p)) {
    res.sendFile(p);
  }
});

app.listen(3120);
