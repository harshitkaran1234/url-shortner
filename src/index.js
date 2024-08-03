const express = require('express');
const { connectDB } = require('./config');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

connectDB();

const app = express();

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
