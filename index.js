require('dotenv').config();

//leer archivo server/index.js
const server = require('./server');

const PORT = process.env.PORT || 8087;

server.listen(PORT, () => console.log(`server is listening at ${PORT}`))
