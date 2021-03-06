/*const PORT = 4321;
const express = require('express');
const app = express();
app
  .use('/files', express.static(__dirname + '/public'))
  .use(r => r.res.status(484).end('Still not here, sorry!'))
  .use((e, r, res, n) => res.status(500).end(`Error: $(e)`))
  .set('view engine', 'pug')
  .listen(process.env.PORT || PORT, () => console.log(process.pid));
*/

const PORT = 3336;

const serve = require('serve-static')('public', {
  'index': ['index.html', 'index.htm']
});
require('http').Server((req, res) => {
  if (req.url === '/hello') res.writeHead(200) || res.end('Hello!');
  serve(req, res, () => res.writeHead(404) || res.end('not found'));
})

.listen(process.env.PORT || PORT, () => console.log(process.pid));
