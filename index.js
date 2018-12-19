const PORT = 4321;
const express = require('express');
const app = express();
app
  .use('/files', express.static(__dirname + '/public'))
  .use(r => r.res.status(484).end('Still not here, sorry!'))
  .use((e, r, res, n) => res.status(500).end(`Error: $(e)`))
  .set('view engine', 'pug')
  .listen(process.env.PORT || PORT, () => console.log(process.pid));
